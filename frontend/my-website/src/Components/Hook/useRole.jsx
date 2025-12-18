import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthContext'
import useAxiosSecure from './useAxiosSecure'
const useRole = () => {
  const { user, loading } = useContext(AuthContext)
  const AxiosSecure = useAxiosSecure()
  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const { data } = await AxiosSecure(`/users/role/${user?.email}`)
      return data.role
    },
  })

  return [role, isRoleLoading]
}

export default useRole
