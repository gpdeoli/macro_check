'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '@/lib/api';

interface User {
  id: string;
  email: string;
  name: string | null;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar dados do localStorage ao montar
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (storedToken && storedUser) {
        // Mostrar dados do cache imediatamente (stale-while-revalidate)
        setToken(storedToken);
        try {
          setUser(JSON.parse(storedUser));
          // Desativar loading imediatamente para mostrar a UI
          setLoading(false);
        } catch (e) {
          // Se o JSON estiver corrompido, limpar e continuar
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setLoading(false);
          return;
        }
        
        // Verificar token em background sem bloquear a UI
        // Usar AbortController para timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout
        
        api.get('/auth/me', { signal: controller.signal })
          .then((response) => {
            const userData = response.data.user || response.data;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
          })
          .catch((error) => {
            // Se não for erro de abort (timeout), limpar storage
            if (error.name !== 'AbortError' && error.name !== 'CanceledError') {
              // Token inválido, limpar storage
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              setToken(null);
              setUser(null);
            }
            // Se for timeout, manter os dados do cache
          })
          .finally(() => {
            clearTimeout(timeoutId);
          });
      } else {
        // Sem dados no cache, loading é rápido
        setLoading(false);
      }
    } else {
      // SSR - não há localStorage
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { user, token } = response.data;

      setUser(user);
      setToken(token);

      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Erro ao fazer login');
    }
  };

  const register = async (email: string, password: string, name?: string) => {
    try {
      const response = await api.post('/auth/register', { email, password, name });
      const { user, token } = response.data;

      setUser(user);
      setToken(token);

      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Erro ao registrar');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  const value: AuthContextType = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user && !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

