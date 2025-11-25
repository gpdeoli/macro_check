'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NutritionalPlanForm } from '@/components/NutritionalPlanForm'
import { MealRegistration } from '@/components/MealRegistration'
import { DailyScore } from '@/components/DailyScore'
import { DiaryTimeline } from '@/components/DiaryTimeline'
import { Gamification } from '@/components/Gamification'
import { Challenges } from '@/components/Challenges'
import { PlanAdherence } from '@/components/PlanAdherence'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import api from '@/lib/api'
import { LogOut, User } from 'lucide-react'

export default function Home() {
  const { user, isAuthenticated, loading, logout } = useAuth()
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<any>(null)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login')
      return
    }

    if (isAuthenticated && user) {
      // Load user's active plan
      api.get('/nutritional-plans/active')
        .then(res => {
          if (res.data) {
            setSelectedPlan(res.data)
          }
        })
        .catch(() => {
          // If no active plan, try to get first plan
          api.get('/nutritional-plans')
            .then(res => {
              if (res.data.length > 0) {
                setSelectedPlan(res.data[0])
              }
            })
            .catch(console.error)
        })
    }
  }, [isAuthenticated, loading, user, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">MacroCheck</h1>
            <p className="text-gray-600">Transforme sua dieta em um jogo com rastreamento de refeições por IA</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="h-4 w-4" />
              <span>{user.name || user.email}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        <Tabs defaultValue="register" className="space-y-4">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="register">Registrar Refeição</TabsTrigger>
            <TabsTrigger value="plan">Plano Nutricional</TabsTrigger>
            <TabsTrigger value="adherence">Aderência</TabsTrigger>
            <TabsTrigger value="score">Score Diário</TabsTrigger>
            <TabsTrigger value="diary">Diário</TabsTrigger>
            <TabsTrigger value="gamification">Gamificação</TabsTrigger>
            <TabsTrigger value="challenges">Desafios</TabsTrigger>
          </TabsList>

          <TabsContent value="register" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Registrar Refeição com Foto</CardTitle>
                <CardDescription>Tire uma foto da sua refeição e deixe a IA analisar</CardDescription>
              </CardHeader>
              <CardContent>
                <MealRegistration />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plan" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Plano Nutricional</CardTitle>
                <CardDescription>Crie e gerencie seu plano nutricional</CardDescription>
              </CardHeader>
              <CardContent>
                <NutritionalPlanForm onPlanCreated={setSelectedPlan} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="adherence" className="space-y-4">
            <PlanAdherence planId={selectedPlan?.id || null} />
          </TabsContent>

          <TabsContent value="score" className="space-y-4">
            <DailyScore />
          </TabsContent>

          <TabsContent value="diary" className="space-y-4">
            <DiaryTimeline />
          </TabsContent>

          <TabsContent value="gamification" className="space-y-4">
            <Gamification />
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <Challenges />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

