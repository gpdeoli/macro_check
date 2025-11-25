'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import api from '@/lib/api'
import { TrendingUp, TrendingDown, Target, CheckCircle2, XCircle, Clock, UtensilsCrossed } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface PlanAdherenceProps {
  planId?: number | null
}

interface NutritionalPlan {
  id: number
  name: string
  daily_calories: number
  created_at: string
}

export function PlanAdherence({ planId: initialPlanId }: PlanAdherenceProps) {
  const [adherence, setAdherence] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [loadingPlans, setLoadingPlans] = useState(true)
  const [days, setDays] = useState(7)
  const [plans, setPlans] = useState<NutritionalPlan[]>([])
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(initialPlanId || null)

  // Load plans on mount
  useEffect(() => {
    loadPlans()
  }, [])

  // Auto-select first plan if none selected
  useEffect(() => {
    if (plans.length > 0 && !selectedPlanId) {
      setSelectedPlanId(plans[0].id)
    }
  }, [plans, selectedPlanId])

  // Load adherence when plan or days change
  useEffect(() => {
    if (selectedPlanId) {
      loadAdherence()
    } else {
      setAdherence(null)
    }
  }, [selectedPlanId, days])

  const loadPlans = async () => {
    setLoadingPlans(true)
    try {
      const res = await api.get('/nutritional-plans')
      setPlans(res.data)
      // If no initial planId and we have plans, select the first one
      if (!initialPlanId && res.data.length > 0) {
        setSelectedPlanId(res.data[0].id)
      }
    } catch (error) {
      console.error('Error loading plans:', error)
    } finally {
      setLoadingPlans(false)
    }
  }

  const loadAdherence = async () => {
    if (!selectedPlanId) return
    
    setLoading(true)
    try {
      const res = await api.get(`/nutritional-plans/${selectedPlanId}/adherence?days=${days}`)
      setAdherence(res.data)
    } catch (error) {
      console.error('Error loading adherence:', error)
      setAdherence(null)
    } finally {
      setLoading(false)
    }
  }

  if (loadingPlans) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">Carregando planos...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (plans.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Você ainda não possui planos nutricionais. Crie um plano na aba "Plano Nutricional" para visualizar a aderência.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (!selectedPlanId) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Selecione um plano nutricional para ver a aderência
          </p>
        </CardContent>
      </Card>
    )
  }

  // Show loading state for adherence data while keeping selectors visible
  const showLoadingState = loading && !adherence

  const getAdherenceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getAdherenceBgColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-100'
    if (percentage >= 60) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  const selectedPlan = plans.find(p => p.id === selectedPlanId)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Aderência ao Plano</h2>
          <p className="text-sm text-muted-foreground">
            {selectedPlan?.name || 'Selecione um plano'} • Últimos {days} dias
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="space-y-2">
            <Label htmlFor="plan-select">Plano Nutricional</Label>
            <Select 
              value={selectedPlanId ? String(selectedPlanId) : ''} 
              onValueChange={(value) => setSelectedPlanId(Number(value))}
              disabled={loading}
            >
              <SelectTrigger id="plan-select" className="w-full sm:w-64">
                <SelectValue placeholder="Selecione um plano" />
              </SelectTrigger>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan.id} value={String(plan.id)}>
                    {plan.name} ({plan.daily_calories} kcal/dia)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="days-select">Período</Label>
            <Select 
              value={String(days)} 
              onValueChange={(value) => setDays(Number(value))}
              disabled={loading}
            >
              <SelectTrigger id="days-select" className="w-full sm:w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 dias</SelectItem>
                <SelectItem value="14">14 dias</SelectItem>
                <SelectItem value="30">30 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {showLoadingState && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-sm text-muted-foreground">Carregando dados de aderência...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!showLoadingState && !adherence && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Não há dados de aderência para este plano no período selecionado.
            </p>
          </CardContent>
        </Card>
      )}

      {!showLoadingState && adherence && (() => {
        const adherencePercentage = adherence.overall?.adherence_percentage || 0
        const calorieAdherence = adherence.calories?.adherence_percentage || 0
        
        // Prepare data for charts
        const mealAdherenceData = adherence.meal_adherence?.map((meal: any) => ({
          name: meal.meal_name,
          registros: meal.registered_count,
          score: meal.avg_score,
          dentro_meta: meal.within_target
        })) || []

        return (
          <>
            {/* Overall Adherence */}
            <Card>
              <CardHeader>
                <CardTitle>Aderência Geral</CardTitle>
                <CardDescription>Percentual de aderência ao plano nutricional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className={`relative w-48 h-48 rounded-full ${getAdherenceBgColor(adherencePercentage)} flex items-center justify-center`}>
                    <div className="absolute inset-0 rounded-full border-8 border-white"></div>
                    <div className="text-center z-10">
                      <p className={`text-5xl font-bold ${getAdherenceColor(adherencePercentage)}`}>
                        {adherencePercentage}%
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">de aderência</p>
                    </div>
                  </div>
                </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{adherence.overall?.total_meals_registered || 0}</p>
              <p className="text-xs text-muted-foreground">Refeições Registradas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{adherence.overall?.expected_meals || 0}</p>
              <p className="text-xs text-muted-foreground">Refeições Esperadas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{adherence.overall?.avg_meal_score || 0}</p>
              <p className="text-xs text-muted-foreground">Score Médio</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calories Adherence */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Aderência de Calorias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Consumido</span>
                  <span className="font-semibold">{adherence.calories?.total || 0} kcal</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Meta</span>
                  <span className="font-semibold">{adherence.calories?.target || 0} kcal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Diferença</span>
                  <span className={`font-semibold ${(adherence.calories?.difference || 0) >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {adherence.calories?.difference >= 0 ? '+' : ''}{adherence.calories?.difference || 0} kcal
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Aderência</span>
                  <span className={`font-semibold ${getAdherenceColor(calorieAdherence)}`}>
                    {Math.round(calorieAdherence)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${getAdherenceBgColor(calorieAdherence)}`}
                    style={{ width: `${Math.min(100, Math.max(0, calorieAdherence))}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Macros Consumidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Proteínas</span>
                  <span className="font-semibold">{adherence.macros?.protein || 0}g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Carboidratos</span>
                  <span className="font-semibold">{adherence.macros?.carbs || 0}g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Gorduras</span>
                  <span className="font-semibold">{adherence.macros?.fats || 0}g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meal Type Adherence */}
      {adherence.meal_adherence && adherence.meal_adherence.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Aderência por Tipo de Refeição</CardTitle>
            <CardDescription>Comparação entre refeições registradas e metas do plano</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adherence.meal_adherence.map((meal: any, index: number) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="h-4 w-4" />
                      <span className="font-semibold">{meal.meal_name}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getAdherenceBgColor(meal.avg_score)} ${getAdherenceColor(meal.avg_score)}`}>
                      Score: {meal.avg_score}/100
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Registros</p>
                      <p className="font-semibold">{meal.registered_count}</p>
                    </div>
                    {meal.plan_meal.target_calories && (
                      <div>
                        <p className="text-muted-foreground">Calorias Média</p>
                        <p className="font-semibold">{meal.avg_calories} kcal</p>
                        <p className="text-xs text-muted-foreground">
                          Meta: {meal.plan_meal.target_calories} kcal
                        </p>
                      </div>
                    )}
                    {meal.plan_meal.suggested_time && (
                      <div>
                        <p className="text-muted-foreground">Horário Sugerido</p>
                        <p className="font-semibold">{meal.plan_meal.suggested_time}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-muted-foreground">Dentro da Meta</p>
                      <p className="font-semibold flex items-center gap-1">
                        {meal.within_target > 0 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        {meal.within_target}/{meal.registered_count}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

            {/* Chart */}
            {mealAdherenceData.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Gráfico de Aderência por Refeição</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mealAdherenceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="score" fill="#3b82f6" name="Score Médio" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </>
        )
      })()}
    </div>
  )
}

