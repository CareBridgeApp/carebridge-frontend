import {FileText, Pill, CalendarDays, LineChart, MessageSquare, Users, LayoutDashboard} from 'lucide-react'

export const patientNav = [
    {label: "Overview", path: "/patient-dashboard", icon: LayoutDashboard, end:true},
    {label: "Reports", path: "/patient-dashboard/reports", icon: FileText},
    {label: "Medicines", path: "/patient-dashboard/medicines", icon: Pill},
    {label: "Appointments", path: "/patient-dashboard/appointments", icon: CalendarDays},
    {label: "Health Trends", path: "/patient-dashboard/trends", icon: LineChart},
    {label: "Ask My Records", path: "/patient-dashboard/ask", icon: MessageSquare},
]

export const doctorNav = [
    {label: "Patients", path:"/doctor/patients", icon:Users}
]