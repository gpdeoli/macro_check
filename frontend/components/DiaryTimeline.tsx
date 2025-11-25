'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import api from '@/lib/api'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
// Using regular img tag for local development with backend images
import { Calendar, TrendingUp } from 'lucide-react'

interface DiaryTimelineProps {
}

export function DiaryTimeline() {
  const [timeline, setTimeline] = useState<any[]>([])
  const [insights, setInsights] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTimeline()
    loadInsights()
  }, [])

  const loadTimeline = async () => {
    try {
      const res = await api.get('/diary/timeline')
      setTimeline(res.data)
    } catch (error) {
      console.error('Error loading timeline:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadInsights = async () => {
    try {
      const res = await api.get('/diary/insights?days=30')
      setInsights(res.data)
    } catch (error) {
      console.error('Error loading insights:', error)
    }
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="space-y-6">
      {insights && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Insights
            </CardTitle>
            <CardDescription>Análise por IA dos seus padrões alimentares</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Score Médio</p>
                <p className="text-2xl font-semibold">{insights.average_score}/100</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Refeições</p>
                <p className="text-2xl font-semibold">{insights.total_meals}</p>
              </div>
            </div>

            {insights.strengths && insights.strengths.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-2">Pontos Fortes</p>
                <div className="flex flex-wrap gap-2">
                  {insights.strengths.map((strength: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {insights.weaknesses && insights.weaknesses.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-2">Áreas para Melhorar</p>
                <div className="flex flex-wrap gap-2">
                  {insights.weaknesses.map((weakness: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {weakness}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {insights.patterns && insights.patterns.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-2">Padrões</p>
                {insights.patterns.map((pattern: any, idx: number) => (
                  <div key={idx} className="p-3 bg-muted rounded-lg">
                    <p className="text-sm">{pattern.description}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Linha do Tempo de Refeições
          </CardTitle>
          <CardDescription>Seu histórico de refeições</CardDescription>
        </CardHeader>
        <CardContent>
          {timeline.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Nenhuma refeição registrada ainda. Comece registrando sua primeira refeição!
            </p>
          ) : (
            <div className="space-y-6">
              {timeline.map((day) => (
                <div key={day.date} className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h3 className="font-semibold">{format(new Date(day.date), "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{day.meal_count} refeições</span>
                      <span className="font-semibold">Média: {Math.round(day.avg_score || 0)}/100</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {day.meals?.map((meal: any) => (
                      <Card key={meal.id}>
                        <CardContent className="p-4 space-y-3">
                          <div className="relative w-full h-32 rounded-lg overflow-hidden">
                            <img
                              src={`http://localhost:3001${meal.photo_url}`}
                              alt={meal.meal_name}
                              className="w-full h-32 object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{meal.meal_name}</span>
                              <span className={`text-sm font-semibold ${
                                meal.meal_score >= 80 ? 'text-green-600' :
                                meal.meal_score >= 60 ? 'text-yellow-600' :
                                'text-red-600'
                              }`}>
                                {meal.meal_score}/100
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {format(new Date(meal.registered_at), 'HH:mm', { locale: ptBR })}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {Math.round(meal.estimated_calories)} cal
                            </p>
                            {meal.adherence_tags && meal.adherence_tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {meal.adherence_tags.slice(0, 3).map((tag: string, idx: number) => (
                                  <span key={idx} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

