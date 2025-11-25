import OpenAI from 'openai';
import type { PlanMeal } from '@prisma/client';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { MealAnalysis } from './types/types.js';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY is not defined');
}

const openai = new OpenAI({
  apiKey
});

export const analyzeMealPhoto = async (imagePath: string, mealName?: string): Promise<MealAnalysis> => {
  try {
    // Read image file and convert to base64
    // imagePath is already an absolute path from multer
    const fullPath = path.isAbsolute(imagePath) ? imagePath : path.resolve(process.cwd(), imagePath);
    const imageBuffer = fs.readFileSync(fullPath);
    const base64Image = imageBuffer.toString('base64');

    // Determine MIME type from file extension
    const ext = path.extname(fullPath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp'
    };
    const mimeType = mimeTypes[ext] || 'image/jpeg';

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analise esta foto de refeição${mealName ? ` que foi registrada como "${mealName}"` : ''} e forneça os dados em PORTUGUÊS (exceto as chaves do JSON que devem permanecer em inglês):

${mealName ? `CONTEXTO DA REFEIÇÃO: Esta é uma refeição do tipo "${mealName}". Considere isso ao avaliar:
- Para CAFÉ DA MANHÃ: avalie se contém alimentos adequados para iniciar o dia (proteínas, carboidratos complexos, frutas, fibras). Desconte pontos se for muito pesado ou processado.
- Para ALMOÇO: avalie se é uma refeição completa e balanceada (proteínas, carboidratos, vegetais, fibras). Desconte pontos se faltar grupos alimentares importantes.
- Para JANTAR: avalie se é adequado para o final do dia (mais leve, com proteínas e vegetais, menos carboidratos pesados). Desconte pontos se for muito pesado ou calórico.
- Para LANCHE: avalie se é um lanche nutritivo e adequado entre refeições. Desconte pontos se for muito calórico ou processado.
- Para PRÉ-TREINO: avalie se contém carboidratos de fácil digestão e energia rápida. Desconte pontos se for muito pesado ou gorduroso.
- Para PÓS-TREINO: avalie se contém proteínas e carboidratos para recuperação. Desconte pontos se faltar proteína.

` : ''}1. Lista dos principais alimentos detectados (em português)
2. Tamanho estimado da porção para cada alimento
3. Total estimado de calorias
4. Macros estimados: proteína (g), carboidratos (g), gorduras (g)
5. Nota de qualidade da refeição (0-100) baseada no valor nutricional E na adequação para o tipo de refeição informado${mealName ? ` (${mealName})` : ''}. Seja rigoroso: refeições inadequadas para o horário/tipo devem receber notas menores.
6. Tags de aderência em português (ex: "alto-proteína", "baixo-carboidrato", "equilibrado", "processado", "alimentos-integrais", "rico-em-fibras", "rico-em-vitaminas", "adequado-para-café-da-manhã", "adequado-para-almoço", "adequado-para-jantar", "inadequado-para-o-horário")
7. Uma mensagem breve e encorajadora sobre a refeição em português, mencionando a adequação para o tipo de refeição${mealName ? ` (${mealName})` : ''}

Retorne a resposta como JSON com estas chaves (mantenha as chaves em inglês, mas os valores em português):
- detected_foods: array de nomes de alimentos em português
- estimated_calories: número
- estimated_protein: número
- estimated_carbs: número
- estimated_fats: número
- meal_score: número (0-100) - considere a adequação para ${mealName || 'o tipo de refeição'}
- adherence_tags: array de strings em português
- message: string em português com uma mensagem encorajadora sobre a refeição, mencionando sua adequação para ${mealName || 'o tipo de refeição'}`
            },
            {
              type: "image_url",
              image_url: {
                url: `data:${mimeType};base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_tokens: 800
    });

    const rawContent = response.choices?.[0]?.message?.content ?? '';

    let content = rawContent;

    // Remove ```json ... ``` ou ``` ... ``` se existirem
    content = content.replace(/^```(?:json)?\s*/, '').replace(/```$/, '').trim();
    // Try to parse JSON from the response
    let analysis: MealAnalysis;
    try {
      analysis = JSON.parse(content) as MealAnalysis;
    } catch {
      // If not JSON, create a structured response from text
      analysis = {
        detected_foods: ["Alimento detectado"],
        estimated_calories: 0,
        estimated_protein: 0,
        estimated_carbs: 0,
        estimated_fats: 0,
        meal_score: 0,
        adherence_tags: ["equilibrado"],
        message: content || "Análise concluída com sucesso!"
      };
    }

    return analysis;
  } catch (error) {
    console.error('Error analyzing meal photo:', error);
    // Return default values if AI fails
    return {
      detected_foods: ["Não foi possível detectar"],
      estimated_calories: 0,
      estimated_protein: 0,
      estimated_carbs: 0,
      estimated_fats: 0,
      meal_score: 0,
      adherence_tags: ["desconhecido"],
      message: "Não foi possível analisar a refeição. Por favor, tente novamente."
    };
  }
};

/**
 * Format AI analysis into a structured message
 */
export const formatAIMessage = (mealAnalysis: MealAnalysis, adherenceScore: number, adherenceTags: string[]): string => {
  const foods = mealAnalysis.detected_foods || [];
  const calories = Math.round(mealAnalysis.estimated_calories || 0);
  const protein = Math.round(mealAnalysis.estimated_protein || 0);
  const carbs = Math.round(mealAnalysis.estimated_carbs || 0);
  const fats = Math.round(mealAnalysis.estimated_fats || 0);
  const score = adherenceScore;
  const tags = adherenceTags || [];
  const message = mealAnalysis.message || "Análise concluída com sucesso!";

  const formattedMessage = {
    detected_foods: foods,
    estimated_calories: calories,
    estimated_protein: protein,
    estimated_carbs: carbs,
    estimated_fats: fats,
    meal_score: score,
    adherence_tags: tags,
    message: message
  };

  return JSON.stringify(formattedMessage);
};

export const compareWithPlan = (mealAnalysis: MealAnalysis, planMeal: PlanMeal | null) => {
  let adherenceScore = mealAnalysis.meal_score || 50;
  const tags = [...(mealAnalysis.adherence_tags || [])];

  if (planMeal) {
    // Check if calories are within range (target ± 20%)
    if (planMeal.target_calories) {
      const calorieDiff = Math.abs(mealAnalysis.estimated_calories - planMeal.target_calories);
      const tolerance = planMeal.target_calories * 0.2;
      if (calorieDiff <= tolerance) {
        adherenceScore += 10;
        tags.push("calorie-target-met");
      } else {
        adherenceScore -= 10;
        tags.push("calorie-off-target");
      }
    }

    // Check allowed foods
    if (planMeal.allowed_foods) {
      const allowed = planMeal.allowed_foods.toLowerCase().split(',').map(f => f.trim());
      const detected = mealAnalysis.detected_foods.map(f => f.toLowerCase());
      const matches = detected.some(food =>
        allowed.some(allowed => food.includes(allowed) || allowed.includes(food))
      );
      if (matches) {
        adherenceScore += 5;
        tags.push("plan-aligned");
      }
    }
  }

  adherenceScore = Math.max(0, Math.min(100, adherenceScore));

  return {
    adherence_score: Math.round(adherenceScore),
    adherence_tags: tags
    // ai_message não vai mais ser gerada aqui
  };
};
