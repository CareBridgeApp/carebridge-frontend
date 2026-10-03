import { useState } from 'react'
import SignUpStepOne from '../auth//SignUpStepOne'
import PatientSignUp from '../auth/PatientSignUp'
import DoctorSignUp from '../auth/DoctorSignUp'

const SignUp = () => {

    const [step,setStep] = useState(1)
    const [userId,setUserId] = useState("")
    const [role, setRole] = useState("")


    
    return (
    <>
        {step === 1 && <SignUpStepOne setStep={setStep} setUserId={setUserId} role={role} setRole={setRole}/>}
        {(step === 2 && role==='patient') && <PatientSignUp userId={userId}/>}
        {(step === 2 && role==='doctor') && <DoctorSignUp userId={userId}/>}
    </>
    )
        
    
}

export default SignUp
