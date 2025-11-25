'use client'

import { useState, useEffect } from 'react'

interface ToastData {
  id: string;
  title?: string;
  description?: string;
  message?: string;
  variant?: 'default' | 'destructive';
  type?: 'success' | 'error';
}

export function Toaster() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  useEffect(() => {
    const handleToast = (e: CustomEvent) => {
      const toast: ToastData = {
        id: Date.now().toString(),
        ...e.detail
      }
      setToasts(prev => [...prev, toast])
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id))
      }, 3000)
    }

    window.addEventListener('toast' as any, handleToast as EventListener)
    return () => window.removeEventListener('toast' as any, handleToast as EventListener)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map(toast => {
        const isError = toast.variant === 'destructive' || toast.type === 'error'
        const message = toast.description || toast.message || ''
        const title = toast.title

        return (
          <div
            key={toast.id}
            className={`rounded-md p-4 shadow-lg min-w-[300px] ${
              isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            {title && <div className="font-semibold mb-1">{title}</div>}
            {message && <div className={title ? 'text-sm' : ''}>{message}</div>}
          </div>
        )
      })}
    </div>
  )
}

export function toast(data: { title?: string; description?: string; variant?: 'default' | 'destructive' } | string, type?: 'success' | 'error') {
  if (typeof data === 'string') {
    // Compatibilidade com API antiga
    window.dispatchEvent(new CustomEvent('toast', { detail: { message: data, type: type || 'success' } }))
  } else {
    window.dispatchEvent(new CustomEvent('toast', { detail: data }))
  }
}

