'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import api from '@/lib/api'
import { Trophy, Star, Flame, Target, Award } from 'lucide-react'

interface GamificationProps {
}

export function Gamification() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const res = await api.get('/gamification')
      setData(res.data)
    } catch (error) {
      console.error('Error loading gamification data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!data) {
    return <div>Nenhum dado de gamificação disponível</div>
  }

  const badgeIcons: Record<string, any> = {
    '30_meals': Trophy,
    '5_day_streak': Flame,
    'perfect_meal': Star,
    'week_perfect': Award,
    'protein_lover': Target
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Seu Progresso
          </CardTitle>
          <CardDescription>Suba de nível rastreando suas refeições</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold">Nível {data.current_level}</div>
            <div className="text-sm text-muted-foreground">
              {data.total_xp} XP Total
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progresso para Nível {data.current_level + 1}</span>
              <span>{data.xp_for_current_level || 0} / 100 XP</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all"
                style={{ width: `${data.progress_to_next_level || 0}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              {data.xp_needed_for_next || 0} XP necessários para o próximo nível
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Refeições Registradas</span>
              </div>
              <div className="text-2xl font-semibold">{data.total_meals_registered || 0}</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Sequência Atual</span>
              </div>
              <div className="text-2xl font-semibold">{data.current_streak || 0} dias</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Conquistas Obtidas
          </CardTitle>
          <CardDescription>Suas conquistas</CardDescription>
        </CardHeader>
        <CardContent>
          {data.badges && data.badges.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.badge_details?.map((badge: any, idx: number) => {
                const Icon = badgeIcons[badge.name] || Trophy
                return (
                  <div key={idx} className="p-4 border rounded-lg text-center space-y-2">
                    <Icon className="h-8 w-8 mx-auto text-primary" />
                    <div className="font-medium">{badge.name}</div>
                    <div className="text-xs text-muted-foreground">{badge.description}</div>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Nenhuma conquista ainda. Continue rastreando refeições para ganhar sua primeira conquista!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

