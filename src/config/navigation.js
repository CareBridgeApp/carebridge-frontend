import {FileText, Pill, CalendarDays, LineChart, MessageSquare, Users, LayoutDashboard, Search, Bot, File} from 'lucide-react'

export const patientNav = [
    {label: "Overview", path: "/patient-dashboard", icon: LayoutDashboard, end:true},
    {label: "Find Doctors", path: "/patient-dashboard/find-doctors", icon: Search},
    {label: "Appointments", path: "/patient-dashboard/appointments", icon: CalendarDays},
    {label: "Reports", path: "/patient-dashboard/reports", icon: File},
    {label: "Medicines", path: "/patient-dashboard/medicines", icon: Pill},
    {label: "Medical Records", path: "/patient-dashboard/medical-records", icon: FileText},
    {label: "CareBridge Ai", path: "/patient-dashboard/ask", icon: Bot},
]

export const doctorNav = [
    {label: "Patients", path:"/doctor/patients", icon:Users}
]