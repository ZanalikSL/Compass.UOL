import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation()

  if (
    localStorage.getItem('user') !== 'admin' ||
    localStorage.getItem('password') !== 'admin'
  ) {
    return <Navigate to="/401" state={{ from: location }} replace />
  }

  return children
}
