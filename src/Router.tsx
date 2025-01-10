import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import App from './App'
import AdminDashboard from './Admin/Components/AdminDashboard'
import NotFound from './Components/NotFound'

export default function AppRouter() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/" element={<App />} />
                <Route path='/admin' element={<AdminDashboard />} />
            </Routes>
        </Router>
    </div>
  )
}
