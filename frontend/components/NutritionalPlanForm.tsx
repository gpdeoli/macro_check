'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import api from '@/lib/api'
import { toast } from '@/components/ui/toaster'
import { Plus, Trash2, Edit2, X, Eye, Clock, Target, UtensilsCrossed, FileText, CheckCircle2, Circle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Meal {
  meal_name: string
  suggested_time?: string
  target_calories?: number
  allowed_foods?: string
  notes?: string
}

interface NutritionalPlanFormProps {
  onPlanCreated?: (plan: any) => void
}

export function NutritionalPlanForm({ onPlanCreated }: NutritionalPlanFormProps) {
  const [name, setName] = useState('')
  const [dailyCalories, setDailyCalories] = useState(2000)
  const [meals, setMeals] = useState<Meal[]>([
    { meal_name: 'Café da Manhã', suggested_time: '08:00' },
    { meal_name: 'Almoço', suggested_time: '13:00' },
    { meal_name: 'Jantar', suggested_time: '19:00' }
  ])
  const [existingPlans, setExistingPlans] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [editingPlan, setEditingPlan] = useState<any | null>(null)
  const [deletingPlanId, setDeletingPlanId] = useState<number | null>(null)
  const [viewingPlan, setViewingPlan] = useState<any | null>(null)

  useEffect(() => {
    loadPlans()
  }, [])

  const loadPlans = async () => {
    try {
      const res = await api.get('/nutritional-plans')
      setExistingPlans(res.data)
    } catch (error) {
      console.error('Error loading plans:', error)
    }
  }

  const addMeal = () => {
    setMeals([...meals, { meal_name: '', suggested_time: '' }])
  }

  const removeMeal = (index: number) => {
    setMeals(meals.filter((_, i) => i !== index))
  }

  const updateMeal = (index: number, field: keyof Meal, value: any) => {
    const updated = [...meals]
    updated[index] = { ...updated[index], [field]: value }
    setMeals(updated)
  }

  const handleActivatePlan = async (planId: number) => {
    try {
      await api.patch(`/nutritional-plans/${planId}/activate`)
      toast({
        title: 'Sucesso',
        description: 'Plano ativado com sucesso!',
      })
      loadPlans()
      if (onPlanCreated) {
        const res = await api.get(`/nutritional-plans/${planId}`)
        onPlanCreated(res.data)
      }
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || 'Erro ao ativar plano',
        variant: 'destructive',
      })
    }
  }

  const handleDeactivatePlan = async (planId: number) => {
    try {
      await api.patch(`/nutritional-plans/${planId}/deactivate`)
      toast({
        title: 'Sucesso',
        description: 'Plano desativado com sucesso!',
      })
      loadPlans()
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || 'Erro ao desativar plano',
        variant: 'destructive',
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const planData = {
        name,
        daily_calories: dailyCalories,
        meals: meals.filter(m => m.meal_name.trim() !== ''),
        set_as_active: !editingPlan // Ativar automaticamente se for um novo plano
      }

      let plan
      if (editingPlan) {
        // Update existing plan
        const res = await api.put(`/nutritional-plans/${editingPlan.id}`, planData)
        plan = res.data
        toast({
          title: 'Sucesso',
          description: 'Plano nutricional atualizado com sucesso!',
        })
      } else {
        // Create new plan
        const res = await api.post('/nutritional-plans', planData)
        plan = res.data
        toast({
          title: 'Sucesso',
          description: 'Plano nutricional criado e ativado com sucesso!',
        })
      }

      // Reset form
      setName('')
      setDailyCalories(2000)
      setMeals([
        { meal_name: 'Café da Manhã', suggested_time: '08:00' },
        { meal_name: 'Almoço', suggested_time: '13:00' },
        { meal_name: 'Jantar', suggested_time: '19:00' }
      ])
      setEditingPlan(null)
      loadPlans()
      if (onPlanCreated) onPlanCreated(plan)
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || error.message || `Erro ao ${editingPlan ? 'atualizar' : 'criar'} plano`,
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (plan: any) => {
    setEditingPlan(plan)
    setName(plan.name)
    setDailyCalories(plan.daily_calories)
    setMeals(
      plan.meals && plan.meals.length > 0
        ? plan.meals.map((m: any) => ({
            meal_name: m.meal_name,
            suggested_time: m.suggested_time || '',
            target_calories: m.target_calories || undefined,
            allowed_foods: m.allowed_foods || '',
            notes: m.notes || ''
          }))
        : [
            { meal_name: 'Café da Manhã', suggested_time: '08:00' },
            { meal_name: 'Almoço', suggested_time: '13:00' },
            { meal_name: 'Jantar', suggested_time: '19:00' }
          ]
    )
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    setEditingPlan(null)
    setName('')
    setDailyCalories(2000)
    setMeals([
      { meal_name: 'Café da Manhã', suggested_time: '08:00' },
      { meal_name: 'Almoço', suggested_time: '13:00' },
      { meal_name: 'Jantar', suggested_time: '19:00' }
    ])
  }

  const handleDelete = async (planId: number) => {
    if (!confirm('Tem certeza que deseja excluir este plano nutricional?')) {
      return
    }

    setDeletingPlanId(planId)
    try {
      await api.delete(`/nutritional-plans/${planId}`)
      toast({
        title: 'Sucesso',
        description: 'Plano nutricional excluído com sucesso!',
      })
      loadPlans()
      // Close view dialog if deleting the viewed plan
      if (viewingPlan?.id === planId) {
        setViewingPlan(null)
      }
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || error.message || 'Erro ao excluir plano',
        variant: 'destructive',
      })
    } finally {
      setDeletingPlanId(null)
    }
  }

  const handleViewPlan = async (plan: any) => {
    try {
      // Load full plan details to ensure we have all data
      const res = await api.get(`/nutritional-plans/${plan.id}`)
      setViewingPlan(res.data)
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || error.message || 'Erro ao carregar detalhes do plano',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="space-y-6">
      {editingPlan && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
          <p className="text-sm text-blue-800">
            <strong>Editando:</strong> {editingPlan.name}
          </p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleCancelEdit}
          >
            <X className="h-4 w-4 mr-2" />
            Cancelar Edição
          </Button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome do Plano</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ex: Plano de Corte, Plano de Volume"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="calories">Meta de Calorias Diárias</Label>
          <Input
            id="calories"
            type="number"
            value={dailyCalories}
            onChange={(e) => setDailyCalories(Number(e.target.value))}
            required
            min="1000"
            max="5000"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Refeições</Label>
            <Button type="button" onClick={addMeal} size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Refeição
            </Button>
          </div>

          {meals.map((meal, index) => (
            <Card key={index}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nome da Refeição</Label>
                      <Input
                        value={meal.meal_name}
                        onChange={(e) => updateMeal(index, 'meal_name', e.target.value)}
                        placeholder="ex: Café da Manhã, Almoço"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Horário Sugerido</Label>
                      <Input
                        type="time"
                        value={meal.suggested_time || ''}
                        onChange={(e) => updateMeal(index, 'suggested_time', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Calorias Alvo</Label>
                      <Input
                        type="number"
                        value={meal.target_calories || ''}
                        onChange={(e) => updateMeal(index, 'target_calories', e.target.value ? Number(e.target.value) : undefined)}
                        placeholder="Opcional"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Alimentos Permitidos</Label>
                      <Input
                        value={meal.allowed_foods || ''}
                        onChange={(e) => updateMeal(index, 'allowed_foods', e.target.value)}
                        placeholder="Lista separada por vírgulas"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Observações</Label>
                      <Textarea
                        value={meal.notes || ''}
                        onChange={(e) => updateMeal(index, 'notes', e.target.value)}
                        placeholder="Notas ou instruções do coach"
                      />
                    </div>
                  </div>
                  {meals.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeMeal(index)}
                      variant="ghost"
                      size="icon"
                      className="ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex gap-2">
          {editingPlan && (
            <Button
              type="button"
              variant="outline"
              onClick={handleCancelEdit}
              className="flex-1"
              disabled={loading}
            >
              Cancelar
            </Button>
          )}
          <Button type="submit" disabled={loading} className={editingPlan ? 'flex-1' : 'w-full'}>
            {loading
              ? editingPlan
                ? 'Atualizando...'
                : 'Criando...'
              : editingPlan
                ? 'Atualizar Plano'
                : 'Criar Plano Nutricional'}
          </Button>
        </div>
      </form>

      {existingPlans.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Seus Planos</h3>
          <div className="space-y-2">
            {existingPlans.map((plan) => (
              <Card key={plan.id} className={plan.is_active ? 'border-green-500 border-2' : ''}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                        {plan.is_active && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Ativo
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {plan.daily_calories} calorias/dia • {plan.meals?.length || 0} refeições
                      </p>
                      {plan.meals && plan.meals.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {plan.meals.slice(0, 3).map((meal: any, idx: number) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-secondary rounded-md text-xs"
                            >
                              {meal.meal_name}
                            </span>
                          ))}
                          {plan.meals.length > 3 && (
                            <span className="px-2 py-1 bg-secondary rounded-md text-xs">
                              +{plan.meals.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {plan.is_active ? (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeactivatePlan(plan.id)}
                          title="Desativar plano"
                        >
                          <Circle className="h-4 w-4 mr-2" />
                          Desativar
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="default"
                          size="sm"
                          onClick={() => handleActivatePlan(plan.id)}
                          title="Ativar plano"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Ativar
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewPlan(plan)}
                        title="Ver detalhes"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(plan)}
                        disabled={deletingPlanId === plan.id}
                        title="Editar"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(plan.id)}
                        disabled={deletingPlanId === plan.id || deletingPlanId !== null}
                        title="Excluir"
                      >
                        {deletingPlanId === plan.id ? (
                          <div className="h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4 text-red-600" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Dialog para visualizar detalhes do plano */}
      <Dialog open={!!viewingPlan} onOpenChange={(open) => !open && setViewingPlan(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{viewingPlan?.name}</DialogTitle>
            <DialogDescription>
              Plano nutricional completo com todas as refeições e configurações
            </DialogDescription>
          </DialogHeader>

          {viewingPlan && (
            <div className="space-y-6 mt-4">
              {/* Informações gerais */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Meta de Calorias Diárias</p>
                  <p className="text-2xl font-bold">{viewingPlan.daily_calories} kcal</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total de Refeições</p>
                  <p className="text-2xl font-bold">{viewingPlan.meals?.length || 0}</p>
                </div>
              </div>

              {/* Lista de refeições */}
              {viewingPlan.meals && viewingPlan.meals.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Refeições do Plano</h3>
                  {viewingPlan.meals.map((meal: any, index: number) => (
                    <Card key={meal.id || index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <UtensilsCrossed className="h-5 w-5" />
                          {meal.meal_name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {meal.suggested_time && (
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs text-muted-foreground">Horário Sugerido</p>
                                <p className="text-sm font-medium">{meal.suggested_time}</p>
                              </div>
                            </div>
                          )}
                          {meal.target_calories && (
                            <div className="flex items-center gap-2">
                              <Target className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs text-muted-foreground">Calorias Alvo</p>
                                <p className="text-sm font-medium">{meal.target_calories} kcal</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {meal.allowed_foods && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Alimentos Permitidos</p>
                            <p className="text-sm">{meal.allowed_foods}</p>
                          </div>
                        )}

                        {meal.notes && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                              <FileText className="h-3 w-3" />
                              Observações
                            </p>
                            <p className="text-sm bg-muted p-2 rounded-md">{meal.notes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Nenhuma refeição configurada neste plano</p>
                </div>
              )}

              {/* Informações de criação */}
              <div className="pt-4 border-t text-xs text-muted-foreground">
                <p>
                  Criado em: {new Date(viewingPlan.created_at).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
                {viewingPlan.updated_at && viewingPlan.updated_at !== viewingPlan.created_at && (
                  <p>
                    Atualizado em: {new Date(viewingPlan.updated_at).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

