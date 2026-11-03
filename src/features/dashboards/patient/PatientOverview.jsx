import { useContext, useEffect, useState } from 'react';
import { FileText, Pill, CalendarDays, File } from 'lucide-react';
import SummaryCard from '../../../components/SummaryCard';
import ReportsList from './components/ReportsList';
import AppointmentInfo from './components/AppointmentInfo';
import { AuthContext } from '../../../context/AuthContext';
import MedicinesList from './components/MedicinesList';
import RecordsList from './components/RecordsList';
import api from '../../../api/api';
import { getGreeting } from '../../../utils/getGreeting';
import HealthTips from './components/HealthTips';

const dummyReports = [
  { id: "rep1", title: "Complete Blood Count", type: "LAB", date: "2026-10-12", doctorName: "Dr. Rao", medicalRecordId: "rec1" },
  { id: "rep2", title: "Chest X-Ray", type: "RADIOLOGY", date: "2026-10-05", doctorName: "Dr. Mehta", medicalRecordId: "rec2" },
  { id: "rep3", title: "HbA1c Test", type: "LAB", date: "2026-09-28", doctorName: "Dr. Rao", medicalRecordId: "rec1" },
  { id: "rep4", title: "Discharge Summary", type: "DISCHARGE", date: "2026-08-14", doctorName: "Dr. Iyer", medicalRecordId: "rec3" },
  { id: "rep4", title: "Discharge Summary", type: "DISCHARGE", date: "2026-08-14", doctorName: "Dr. Iyer", medicalRecordId: "rec3" },
  { id: "rep4", title: "Discharge Summary", type: "DISCHARGE", date: "2026-08-14", doctorName: "Dr. Iyer", medicalRecordId: "rec3" },
  { id: "rep4", title: "Discharge Summary", type: "DISCHARGE", date: "2026-08-14", doctorName: "Dr. Iyer", medicalRecordId: "rec3" },
  { id: "rep4", title: "Discharge Summary", type: "DISCHARGE", date: "2026-08-14", doctorName: "Dr. Iyer", medicalRecordId: "rec3" },
];

const dummyAppointments = [
  { id: "apt1", doctorName: "Dr. Ahmed Khan", specialization: "Cardiologist", dateTime: "2026-10-20T10:00:00", location: "Apollo Hospitals, Hyderabad", status: "confirmed" },
  { id: "apt2", doctorName: "Dr. Sana Rao", specialization: "Endocrinologist", dateTime: "2026-10-27T15:30:00", location: "Care Hospitals, Banjara Hills", status: "pending" },
  { id: "apt3", doctorName: "Dr. Iyer", specialization: "General Physician", dateTime: "2026-11-03T09:15:00", location: "Yashoda Hospitals, Secunderabad", status: "confirmed" },
  { id: "apt3", doctorName: "Dr. Iyer", specialization: "General Physician", dateTime: "2026-11-03T09:15:00", location: "Yashoda Hospitals, Secunderabad", status: "confirmed" },
  { id: "apt3", doctorName: "Dr. Iyer", specialization: "General Physician", dateTime: "2026-11-03T09:15:00", location: "Yashoda Hospitals, Secunderabad", status: "confirmed" }
];

const dummyMedicines = [
  {
    id: "med1",
    name: "Amlodipine 5mg",
    dosage: "1 tablet daily",
  },
  {
    id: "med2",
    name: "Metformin 500mg",
    dosage: "1 tablet twice daily",
  },
  {
    id: "med3",
    name: "Amoxicillin 250mg",
    dosage: "1 capsule thrice daily",
  },
  {
    id: "med4",
    name: "Paracetamol 650mg",
    dosage: "1 tablet as needed",
  },
  {
    id: "med5",
    name: "Atorvastatin 10mg",
    dosage: "1 tablet once daily (At bedtime)",
  },
];

const dummyMedicalRecords = [
  {
    id: "rec1",
    title: "General Consultation",
    dateTime: "2020-10-20T10:00:00.000Z",
  },
  {
    id: "rec2",
    title: "Cardiology Follow-up",
    dateTime: "2026-10-15T14:30:00.000Z",
  },
  {
    id: "rec3",
    title: "Check-up",
    dateTime: "2026-10-08T09:15:00.000Z",
  },
  {
    id: "rec4",
    title: "Dermatology Skin Check",
    dateTime: "2026-09-22T16:45:00.000Z",
  },
];

const PatientOverview = () => {
  const { user } = useContext(AuthContext);
  
  const [overviewData, setOverviewData] = useState({
    appointments: [],
    medicines: [],
    medicalRecords: [],
    reports: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   let isMounted = true;
  //   const fetchOverviewData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await api('/api/patient/overview')
  //       if (isMounted) {
  //         setOverviewData(response.data)
  //         setError(null)
  //       }
  //     } catch (err) {
  //       if (isMounted) {
  //         setError(err.message)
  //       }
  //     } finally {
  //       if (isMounted) {
  //         setLoading(false)
  //       }
  //     }
  //   }
  //   fetchOverviewData();

  //   return ()=>{
  //     isMounted = false;
  //   }

  // }, [])
  return (

    <div className='h-full bg-bg'>
      <h2 className='text-xl sm:text-2xl font-bold text-text'>{getGreeting(user)}</h2>
      <span className='text-text-muted font-medium text-xs sm:text-base'>Here is your health overview...</span>
      <div className='m-2'>
        <HealthTips/>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-3 m-3'>

        <SummaryCard title="Upcoming Appointments" viewAllTo="/patient-dashboard/appointments" icon={CalendarDays}>
          <AppointmentInfo/>
        </SummaryCard>

        <SummaryCard title="Current Medicines" viewAllTo="/patient-dashboard/medicines" icon={Pill}>
          <MedicinesList/>
        </SummaryCard>

        <SummaryCard title="Recent Medical Records" viewAllTo="/patient-dashboard/medicalRecords" icon={FileText}>
          <RecordsList/>
        </SummaryCard>

        <SummaryCard title="Recent Reports" viewAllTo="/patient-dashboard/reports" icon={File}>
          <ReportsList/>
        </SummaryCard>

      </div>

    </div>
  )
}

export default PatientOverview
