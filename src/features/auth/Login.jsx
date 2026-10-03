import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [SuccessMessage, setSuccessMessage] = useState("");
    const [errMessage, setErrMessage] = useState(""); 
    const [isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();

    const handleLoginSubmit=async (e)=>{
        e.preventDefault()
        setErrMessage('')
        setSuccessMessage('')
        setIsLoading(true)
        if(!email || !password){
            setErrMessage('please enter both email and password.')
            setIsLoading(false)
            return
        }
        try{
            
            const data = await login(email, password);
            setSuccessMessage('Login Successful!')
            setTimeout(()=>navigate(data.role === 'doctor'? '/doctor-dashboard':'/patient-dashboard'),1000)
        }
        catch(err){
            setErrMessage(err.message);
        } finally{
            setIsLoading(false)
        }
    }


    return (
        <div className='h-screen flex flex-col items-center justify-center bg-bg'>
            <h1 className='text-primary font-bold text-xl mb-xs '>Login!</h1>
            <form onSubmit={handleLoginSubmit}>
                <div className='p-sm border-2 border-border rounded-2xl flex flex-col gap-sm w-[85vw] sm:w-96 md:w-112 bg-surface'>
                    <div className='flex flex-col'>
                        <label 
                        className='font-sans text-lg font-semibold text-text'  
                        htmlFor='email'>email</label>
                        <input
                            className='text-sm border rounded-2xl border-border px-sm py-xs text-text outline-none'
                            type="email" 
                            id='email'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder='Enter your username or email' />
                    </div>

                    <div className='flex flex-col'>
                        <label 
                        className='font-sans text-lg font-semibold text-text'  
                        htmlFor='password'>password</label>
                        <input
                            className='text-sm border rounded-2xl border-border px-sm py-xs outline-none'
                            id='password'
                            type="password" 
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            placeholder='Enter your password' />
                    </div>
                    {SuccessMessage && <p className='text-sm font-medium text-success'>{SuccessMessage}</p>}
                    {errMessage && <p className='text-sm text-danger font-medium'>{errMessage}</p>}
                    <button className='bg-primary rounded-xl text-white font-semibold text-sm py-0.5 active:scale-95 cursor-pointer hover:bg-primary-dark'>{isLoading?'Submmitting...':'Submit'}</button>
                </div>
            </form>

        </div>
    )
}

export default Login
