import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CreateResumePage } from './pages/CreateResumePage'
import { FindJobPage } from './pages/FindJobPage'
import { FindResumePage } from './pages/FindResumePage'
import { HomePage } from './pages/HomePage'
import { JobPage } from './pages/JobPage'
import { MainUserPage } from './pages/MainUserPage'
import { RegisterPage } from './pages/RegisterPage'
import { ResumePage } from './pages/ResumePage'
import { CreateJobPage } from './pages/CreateJobPage'

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<MainUserPage />} />
                    <Route path='/explorer' element={<HomePage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/jobs' element={<FindJobPage />} />
                    <Route path='/jobs/:jobId' element={<JobPage />} />
                    <Route path='/candidates' element={<FindResumePage />} />
                    <Route path='/candidates/candidate' element={<ResumePage />} />
                    <Route path='/add-job' element={<CreateJobPage />} />
                    <Route path='/add-resume' element={<CreateResumePage />} />
                    <Route path='*' element={<h1>Page Not Found</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter