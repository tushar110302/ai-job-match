import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
        <h1>Dashboard</h1>
    </ProtectedRoute>
  )
}

export default page