import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import CertificateVerification from './components/verification/CertificateVerification';
import VerificationHistory from './components/verification/VerificationHistory';
import DegreeSubmission from './components/university/DegreeSubmission';
import ManageDegrees from './components/university/ManageDegrees';
import Analytics from './components/admin/Analytics';
import UniversityManagement from './components/admin/UniversityManagement';
import SystemHealth from './components/admin/SystemHealth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
// Instead of separate hook files, import directly from contexts
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../contexts/NotificationContext';
import './App.css';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Con-firm...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Employer Routes */}
        <Route 
          path="/verify" 
          element={
            <ProtectedRoute allowedRoles={['employer', 'admin']}>
              <CertificateVerification />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/history" 
          element={
            <ProtectedRoute allowedRoles={['employer', 'admin']}>
              <VerificationHistory />
            </ProtectedRoute>
          } 
        />
        
        {/* University Routes */}
        <Route 
          path="/submit" 
          element={
            <ProtectedRoute allowedRoles={['university', 'admin']}>
              <DegreeSubmission />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/manage" 
          element={
            <ProtectedRoute allowedRoles={['university', 'admin']}>
              <ManageDegrees />
            </ProtectedRoute>
          } 
        />
        
        {/* Admin Routes */}
        <Route 
          path="/analytics" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Analytics />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/universities" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <UniversityManagement />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/system" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <SystemHealth />
            </ProtectedRoute>
          } 
        />
        
        {/* Fallback */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
