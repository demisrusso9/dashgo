import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { api } from '../services/api'

export type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

export type GetUsersResponse = {
  totalCount: number
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', { params: { page } })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    totalCount,
    users
  }
}

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options
  }) as UseQueryResult<GetUsersResponse, unknown>
}
