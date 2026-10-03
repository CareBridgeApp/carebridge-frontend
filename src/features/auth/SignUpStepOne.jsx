import { useState } from 'react'
import { publicApi } from '../../api/api';

const SignUpStepOne = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const role=props.role;

    const handleStepOneSubmit= async (e)=>{
        e.preventDefault();
        setError("");

        if(password!=confirmPassword){
            setError("Passwords don't match");
            return;
        }

        try{
           const response = await publicApi.post('/public/signup', { email, password, role});
           props.setUserId(response.data.userId);
           props.setStep(2);

        }
        catch (err){
            setError(err.response?.data?.message ||'Something went wrong. Try again.');
        }
    }
  return (
    <div className = 'h-screen flex flex-col items-center justify-center bg-bg'>
            <h1 className='text-primary font-bold text-xl mb-xs'>SignUp!</h1>
            <form onSubmit={handleStepOneSubmit}>
                <div className='p-sm flex flex-col gap-sm w-[85vw] sm:w-96 md:w-112 border-2 border-border rounded-2xl bg-surface'>
                    <div className='flex flex-col gap-xs'>
                        <label 
                            className='text-lg font-semibold text-text'
                            htmlFor="email">Email</label>
                        <input
                            className='p-xs border rounded-2xl border-border outline-none'
                            type="email"
                            id='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            />
                    </div>
                    <div className='flex flex-col gap-xs'>
                        <label
                            className='text-lg font-semibold text-text'
                            htmlFor="role">You are</label>
                        <select
                         id="role"
                         value={props.role}
                         className='p-xs border rounded-2xl border-border outline-none'
                         onChange={(e)=>{
                            props.setRole(e.target.value)
                         }} 
                         >
                            <option 
                            value="" 
                            disabled>Select</option>
                            <option
                            value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-xs'>
                        <label 
                        className='text-lg font-semibold text-text'
                        htmlFor="password">password</label>
                        <input
                            className='p-xs border rounded-2xl border-border outline-none'
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex flex-col gap-xs'>
                        <label 
                        className='text-lg font-semibold text-text'
                        htmlFor="confirmPassword">confirm password</label>
                        <input
                            className='p-xs border rounded-2xl border-border outline-none'
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm your password"
                            onChange={(e)=>{
                                setConfirmPassword(e.target.value)
                            }}
                        />
                    </div>
                    {
                        error && <p className='text-danger text-sm font-medium'>{error}</p>
                    }
                    <button className='bg-primary rounded-xl text-white font-semibold text-sm py-0.5 active:scale-95 cursor-pointer hover:bg-primary-dark'>Next</button>
                </div>
            </form>

        </div>
  )
}

export default SignUpStepOne
