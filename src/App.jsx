import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./features/auth/Login"
import SignUp from "./features/auth/SignUp"
import ProtectedRoute from './routes/ProtectedRoute'
import Home from "./features/home/Home"
import PatientDashboard from './features/dashboards/patient/PatientDashboard'
import DoctorDashboard from './features/dashboards/doctor/DoctorDashboard'
import DashboardLayout from "./features/dashboards/layout/DashboardLayout"
import Reports from "./features/dashboards/patient/Reports"
import Medicines from "./features/dashboards/patient/Medicines"
import Appointments from "./features/dashboards/patient/Appointments"
import Trends from "./features/dashboards/patient/Appointments"
import AskMyRecords from "./features/dashboards/patient/AskMyRecords"
import PatientOverview from "./features/dashboards/patient/PatientOverview"
import PublicRoute from "./routes/PublicRoute"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route element={<PublicRoute/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/patient-dashboard" element={<PatientDashboard />}>
                <Route index element={<PatientOverview />} />
                <Route path="reports" element={<Reports />} />
                <Route path="medicines" element={<Medicines />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="trends" element={<Trends />} />
                <Route path="ask" element={<AskMyRecords />} />
              </Route>
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
