'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'
import api from '@/lib/api'
import { toast } from '@/components/ui/toaster'
import { Trophy, Users, Plus, Copy } from 'lucide-react'

interface ChallengesProps {
}

export function Challenges() {
  const [challenges, setChallenges] = useState<any[]>([])
  const [myChallenges, setMyChallenges] = useState<any[]>([])
  const [createOpen, setCreateOpen] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)
  const [inviteCode, setInviteCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration_days: 30,
    min_score: 70
  })

  useEffect(() => {
    loadMyChallenges()
  }, [])

  const loadMyChallenges = async () => {
    try {
      const res = await api.get('/challenges/created')
      setMyChallenges(res.data)
    } catch (error) {
      console.error('Error loading challenges:', error)
    }
  }

  const handleCreateChallenge = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await api.post('/challenges', formData)
      toast({
        title: 'Sucesso',
        description: 'Desafio criado com sucesso!',
      })
      setCreateOpen(false)
      setFormData({ name: '', description: '', duration_days: 30, min_score: 70 })
      loadMyChallenges()
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || error.message || 'Erro ao criar desafio',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleJoinChallenge = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await api.post('/challenges/join', {
        invite_code: inviteCode.toUpperCase()
      })
      toast({
        title: 'Sucesso',
        description: 'Entrou no desafio com sucesso!',
      })
      setJoinOpen(false)
      setInviteCode('')
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.response?.data?.error || error.message || 'Erro ao entrar no desafio',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const loadChallengeDetails = async (challengeId: number) => {
    try {
      const res = await api.get(`/challenges/${challengeId}`)
      return res.data
    } catch (error) {
      console.error('Error loading challenge details:', error)
      return null
    }
  }

  const copyInviteCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: 'Sucesso',
      description: 'Código de convite copiado!',
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Desafios</h2>
          <p className="text-muted-foreground">Crie ou participe de desafios nutricionais</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Criar Desafio
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Novo Desafio</DialogTitle>
                <DialogDescription>
                  Configure um desafio para sua comunidade
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateChallenge} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Desafio</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duração (dias)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={formData.duration_days}
                      onChange={(e) => setFormData({ ...formData, duration_days: Number(e.target.value) })}
                      min="1"
                      max="365"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="min_score">Score Mínimo</Label>
                    <Input
                      id="min_score"
                      type="number"
                      value={formData.min_score}
                      onChange={(e) => setFormData({ ...formData, min_score: Number(e.target.value) })}
                      min="0"
                      max="100"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? 'Criando...' : 'Criar Desafio'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={joinOpen} onOpenChange={setJoinOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Entrar em Desafio
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Entrar em Desafio</DialogTitle>
                <DialogDescription>
                  Digite o código de convite para entrar em um desafio
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleJoinChallenge} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="invite_code">Código de Convite</Label>
                  <Input
                    id="invite_code"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                    placeholder="Digite o código de convite"
                    required
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? 'Entrando...' : 'Entrar no Desafio'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {myChallenges.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Meus Desafios</h3>
          <div className="grid gap-4">
            {myChallenges.map((challenge) => (
              <Card key={challenge.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{challenge.name}</CardTitle>
                      <CardDescription>{challenge.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {challenge.participant_count || 0} participantes
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duração</p>
                      <p className="font-semibold">{challenge.duration_days} dias</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Score Mínimo</p>
                      <p className="font-semibold">{challenge.min_score}/100</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Código de Convite</p>
                      <div className="flex items-center gap-2">
                        <code className="font-mono font-semibold">{challenge.invite_code}</code>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => copyInviteCode(challenge.invite_code)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={async () => {
                      const details = await loadChallengeDetails(challenge.id)
                      if (details) {
                        // Show challenge details with ranking
                        alert(`Desafio: ${details.name}\nParticipantes: ${details.participants?.length || 0}`)
                      }
                    }}
                  >
                    Ver Ranking
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {myChallenges.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              Nenhum desafio ainda. Crie seu primeiro desafio para começar!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

