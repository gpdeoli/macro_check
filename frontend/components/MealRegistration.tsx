'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import api from '@/lib/api'
import { toast } from '@/components/ui/toaster'
import { Camera, Upload, Loader2 } from 'lucide-react'
// Using regular img tag for local development with backend images

export function MealRegistration() {
  const [mealName, setMealName] = useState('Café da Manhã')
  const [photo, setPhoto] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setPhoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!photo) {
      toast({
        title: 'Erro',
        description: 'Por favor, selecione uma foto',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    setResult(null)

    try {
            const formData = new FormData()
            formData.append('photo', photo)
            formData.append('meal_name', mealName)
            // plan_id não é mais necessário - o backend usa o plano ativo automaticamente

      const res = await api.post('/meals/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      setResult(res.data)
      toast({
        title: 'Sucesso',
        description: 'Refeição analisada com sucesso!',
      })

      // Reset form
      setPhoto(null)
      setPreview(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || error.message || 'Erro ao analisar refeição',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="meal">Tipo de Refeição</Label>
          <Select value={mealName} onValueChange={setMealName}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Café da Manhã">Café da Manhã</SelectItem>
              <SelectItem value="Almoço">Almoço</SelectItem>
              <SelectItem value="Jantar">Jantar</SelectItem>
              <SelectItem value="Lanche">Lanche</SelectItem>
              <SelectItem value="Pré-treino">Pré-treino</SelectItem>
              <SelectItem value="Pós-treino">Pós-treino</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Foto da Refeição</Label>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            {preview ? (
              <div className="space-y-2">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Clique para trocar a foto</p>
              </div>
            ) : (
              <div className="space-y-2">
                <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Arraste e solte ou clique para enviar
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF até 10MB
                </p>
              </div>
            )}
          </div>
        </div>

        <Button type="submit" disabled={loading || !photo} className="w-full">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Analisando...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              Analisar Refeição
            </>
          )}
        </Button>
      </form>

      {result && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Resultados da Análise</h3>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${result.meal_score >= 80 ? 'bg-green-100 text-green-800' :
                result.meal_score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                Score: {result.meal_score}/100
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Calorias</p>
                <p className="text-lg font-semibold">{Math.round(result.estimated_calories)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Proteína</p>
                <p className="text-lg font-semibold">{Math.round(result.estimated_protein)}g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carboidratos</p>
                <p className="text-lg font-semibold">{Math.round(result.estimated_carbs)}g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gorduras</p>
                <p className="text-lg font-semibold">{Math.round(result.estimated_fats)}g</p>
              </div>
            </div>

            {result.ai_message && (() => {
              const aiData = {
                detected_foods: result.detected_foods || [],
                estimated_calories: result.estimated_calories || 0,
                estimated_protein: result.estimated_protein || 0,
                estimated_carbs: result.estimated_carbs || 0,
                estimated_fats: result.estimated_fats || 0,
                meal_score: result.meal_score || 0,
                adherence_tags: result.adherence_tags || [],
                message: result.ai_message || ""
              };
              console.log(aiData)
              return (
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <p className="text-sm font-semibold mb-3 text-gray-900 flex items-center gap-2">
                    <span>🤖</span>
                    Análise Completa da IA
                  </p>

                  <div className="space-y-3">
                    {/* Detected Foods */}
                    {aiData.detected_foods && aiData.detected_foods.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-gray-700 mb-1.5">🍽️ Alimentos Detectados:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {aiData.detected_foods.map((food: string, idx: number) => (
                            <span key={idx} className="px-2 py-0.5 bg-white rounded-md text-xs text-gray-800 border border-gray-200">
                              {food}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Nutritional Info */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-200">
                      <div className="bg-white/60 rounded p-2">
                        <p className="text-xs text-gray-600">Calorias</p>
                        <p className="text-sm font-semibold text-gray-900">{aiData.estimated_calories || 0} kcal</p>
                      </div>
                      <div className="bg-white/60 rounded p-2">
                        <p className="text-xs text-gray-600">Proteínas</p>
                        <p className="text-sm font-semibold text-gray-900">{aiData.estimated_protein || 0}g</p>
                      </div>
                      <div className="bg-white/60 rounded p-2">
                        <p className="text-xs text-gray-600">Carboidratos</p>
                        <p className="text-sm font-semibold text-gray-900">{aiData.estimated_carbs || 0}g</p>
                      </div>
                      <div className="bg-white/60 rounded p-2">
                        <p className="text-xs text-gray-600">Gorduras</p>
                        <p className="text-sm font-semibold text-gray-900">{aiData.estimated_fats || 0}g</p>
                      </div>
                    </div>

                    {/* Meal Score */}
                    {aiData.meal_score !== undefined && (
                      <div className="pt-2 border-t border-blue-200">
                        <p className="text-xs font-medium text-gray-700 mb-1">⭐ Nota da Refeição:</p>
                        <div className="flex items-center gap-2">
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${aiData.meal_score >= 80 ? 'bg-green-100 text-green-800' :
                            aiData.meal_score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                            {aiData.meal_score}/100
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {aiData.adherence_tags && aiData.adherence_tags.length > 0 && (
                      <div className="pt-2 border-t border-blue-200">
                        <p className="text-xs font-medium text-gray-700 mb-1.5">🏷️ Tags:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {aiData.adherence_tags.map((tag: string, idx: number) => (
                            <span key={idx} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Message - Only show the message text */}
                    {aiData.message && typeof aiData.message === 'string' && (
                      <div className="pt-2 border-t border-blue-200">
                        <p className="text-xs font-medium text-gray-700 mb-1.5">💬 Mensagem:</p>
                        <p className="text-sm text-gray-800 leading-relaxed bg-white/60 rounded p-2">
                          {aiData.message}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

