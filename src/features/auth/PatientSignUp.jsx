import { useState } from 'react'
import stateCity from '../../data/statesAndCities.json';
import { useNavigate } from 'react-router-dom';
import { publicApi } from '../../api/api';

const PatientSignUp = (props) => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userid=props.userId;

  const handlePatientSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try{
      const response =await publicApi.post('/public/patientSignup', { name, dateOfBirth, gender, phone, state, city, userid});
      setMessage(response.data.message);
      setTimeout(()=>{navigate('/login')},1000);
    }
    catch(err){
      setError(err.response?.data?.message||'Something went wrong. try again.');
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-bg'>
      <h1 className='text-primary font-bold text-xl mb-xs'>Enter your  Details...</h1>
      <form onSubmit={handlePatientSubmit}>
        <div className="p-sm flex flex-col gap-sm w-[85vw] sm:w-96 md:w-112 border-2 border-border rounded-2xl bg-surface">
          <div className="flex flex-col gap-xs">
            <label
              className="text-lg font-semibold text-text"
              htmlFor="name">Full Name
            </label>
            <input
              className="p-xs border rounded-2xl border-border outline-none"
              type="text"
              id="name"
              value={name}
              required
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-xs">
            <label
              className="text-lg font-semibold text-text"
              htmlFor="dateOfBirth">Date of birth
            </label>
            <input
              className="p-xs border rounded-2xl border-border outline-none"
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              placeholder="Enter your date of birth"
              onChange={(e) =>setDateOfBirth(e.target.value)}
              required
            />
            <span className="text-xs text-text-muted">Click the calendar icon to select</span>
          </div>
          <div className="flex flex-col gap-xs">
              <label 
                className="text-lg font-semibold text-text"
                htmlFor="phone">Phone
              </label>
              <input
                className="p-xs border rounded-2xl border-border outline-none"
                type="tel"
                id="phone"
                value={phone}
                placeholder="Enter your contact number"
                onChange={(e)=>{
                  setError('')
                  const value=e.target.value.replace(/\D/g,"")
                  if(value.length<=10){
                  setPhone(value)
                  }else{
                    setError("phone number must be 10 digits")
                  }
                }}
                required
              />
          </div>
          <div className='flex flex-col gap-xs'>
            <label
            className="text-lg font-semibold text-text"
            htmlFor="gender">Gender</label>
            <select
            className='p-xs border rounded-2xl border-border outline-none mb-xs'
            id="gender"
            value={gender}
            onChange={(e)=>{
              setGender(e.target.value)
            }}
            required
            >
              <option 
              value="" 
              disabled>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className='flex gap-sm'>
            <div className='flex flex-1'>
              <select 
              className='p-xs border rounded-2xl border-border outline-none w-full'
              id="state"
              value={state}
              onChange={(e)=>{
                setState(e.target.value)
                setCity('')
              }}
              required
              >
                <option value="" disabled>State</option>
                {Object.keys(stateCity).map((s)=>(
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-1'>
              <select 
              className='p-xs border rounded-2xl border-border outline-none w-full'
              id="city"
              value={city}
              disabled={!state}
              onChange={(e)=>{
                setCity(e.target.value)
              }}
              required
              >
                <option value="" disabled>City</option>
                {
                  state && stateCity[state].map((c)=>(
                    <option key={c} value={c}>{c}</option>
                  ))
                }
              </select>
            </div>
          </div>
          {error && <p className='text-danger font-medium text-sm'>{error}</p>}
          {message && <p className='text-success font-medium text-sm'>{message}</p>}

          <button className='bg-primary rounded-xl text-white font-semibold text-sm py-0.5 active:scale-95 cursor-pointer hover:bg-primary-dark'
          disabled={loading}>{loading?"Submitting":"Submit"}</button>

        </div>
      </form>
    </div>
  )
}

export default PatientSignUp;
