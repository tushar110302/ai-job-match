import ProtectedRoute from '@/components/ProtectedRoute';
import NewReportForm from '@/components/report/NewReportForm';
import React from 'react'

const CreateReportPage = () => {
  return (
    <ProtectedRoute>
      <NewReportForm />
    </ProtectedRoute>
  )
}

export default CreateReportPage;