'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import api from '@/lib/api'
import { toast } from '@/components/ui/toaster'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Flame, Target, TrendingUp, RefreshCw, Award, Calendar } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

export function DailyScore() {
  const [score, setScore] = useState<any>(null)
  const [weeklyScores, setWeeklyScores] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [recalculating, setRecalculating] = useState(false)

  useEffect(() => {
    loadDailyScore()
    loadWeeklyScores()
  }, [])

  const loadDailyScore = async () => {
    try {
      const today = format(new Date(), 'yyyy-MM-dd')
      const res = await api.get(`/scores/daily/${today}`)
      setScore(res.data)
    } catch (error) {
      console.error('Error loading daily score:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadWeeklyScores = async () => {
    try {
      const res = await api.get('/scores/weekly')
      setWeeklyScores(res.data)
    } catch (error) {
      console.error('Error loading weekly scores:', error)
    }
  }

  const handleRecalculate = async () => {
    setRecalculating(true)
    try {
      const res = await api.post('/scores/recalculate')
      setScore(res.data)
      toast({
        title: 'Sucesso',
        description: 'Score recalculado com sucesso!',
      })
      loadWeeklyScores()
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || 'Erro ao recalcular score',
        variant: 'destructive',
      })
    } finally {
      setRecalculating(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">Carregando score diário...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green': return 'bg-green-500'
      case 'yellow': return 'bg-yellow-500'
      default: return 'bg-red-500'
    }
  }

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'green': return 'text-green-600'
      case 'yellow': return 'text-yellow-600'
      default: return 'text-red-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'green': return 'No Caminho'
      case 'yellow': return 'Quase Lá'
      default: return 'Precisa Melhorar'
    }
  }

  // Prepare chart data
  const chartData = weeklyScores
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((day) => ({
      date: format(new Date(day.date), 'dd/MM', { locale: ptBR }),
      score: day.daily_score || 0,
      calories: Math.round(day.total_calories || 0),
      target: day.target_calories || 2000
    }))

  const calorieProgress = score?.target_calories 
    ? Math.min(100, ((score?.total_calories || 0) / score.target_calories) * 100)
    : 0

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Score de Hoje</CardTitle>
              <CardDescription>
                {format(new Date(), "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })} • 
                <span className="text-green-600 ml-1">Cálculo automático</span>
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRecalculate}
              disabled={recalculating}
              title="Recalcular score manualmente (opcional)"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${recalculating ? 'animate-spin' : ''}`} />
              {recalculating ? 'Recalculando...' : 'Recalcular'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Score Circle */}
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-muted"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${(score?.daily_score || 0) * 5.52} 552`}
                  className={`${getStatusColor(score?.status || 'red')} transition-all duration-500`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getStatusTextColor(score?.status || 'red')}`}>
                    {score?.daily_score || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">/ 100</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2 p-4 rounded-lg border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                Calorias
              </div>
              <div className="text-2xl font-semibold">
                {Math.round(score?.total_calories || 0)}
              </div>
              <div className="text-xs text-muted-foreground">
                de {score?.target_calories || 2000} kcal
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${getStatusColor(score?.status || 'red')}`}
                  style={{ width: `${Math.min(100, calorieProgress)}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 p-4 rounded-lg border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4" />
                Score Médio
              </div>
              <div className="text-2xl font-semibold">
                {score?.average_meal_score || 0}
              </div>
              <div className="text-xs text-muted-foreground">
                Média das refeições
              </div>
            </div>

            <div className="space-y-2 p-4 rounded-lg border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Flame className="h-4 w-4" />
                Sequência
              </div>
              <div className="text-2xl font-semibold">{score?.streak_days || 0}</div>
              <div className="text-xs text-muted-foreground">Dias seguidos</div>
            </div>

            <div className="space-y-2 p-4 rounded-lg border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                Status
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${
                score?.status === 'green' ? 'bg-green-100 text-green-800' :
                score?.status === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {getStatusText(score?.status || 'red')}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Chart */}
      {chartData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Evolução Semanal
            </CardTitle>
            <CardDescription>Score diário dos últimos 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Weekly List */}
      {weeklyScores.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Detalhes Semanais</CardTitle>
            <CardDescription>Últimos 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {weeklyScores
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((day) => (
                  <div key={day.date} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(day.status)}`} />
                      <div>
                        <span className="text-sm font-medium">
                          {format(new Date(day.date), 'EEEE, d \'de\' MMMM', { locale: ptBR })}
                        </span>
                        {day.streak_days > 0 && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                            <Flame className="h-3 w-3" />
                            {day.streak_days} dias de sequência
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Calorias</div>
                        <div className="text-sm font-semibold">
                          {Math.round(day.total_calories || 0)} / {day.target_calories || 2000}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Score</div>
                        <div className={`text-sm font-semibold ${getStatusTextColor(day.status || 'red')}`}>
                          {day.daily_score || 0}/100
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {weeklyScores.length === 0 && !loading && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Ainda não há dados de score para exibir. Registre refeições para começar a acompanhar seu progresso!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

