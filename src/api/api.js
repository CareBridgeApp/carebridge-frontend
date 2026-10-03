import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
let handleLogout=null;

export function registerLogout(fn) {
    handleLogout=fn;
}

export const publicApi = axios.create({
    baseURL:BASE_URL,
    withCredentials:true,   
});

const api = axios.create({
    baseURL:BASE_URL,
    withCredentials:true,   
})

api.interceptors.response.use(
    (response)=> response,
    async (error)=>{
        const originalRequest=error.config;
        if(error.response?.status===401 && !originalRequest._retry){
            originalRequest._retry=true;
            try{
                await axios.post(`${BASE_URL}api/auth/refresh`,{},{withCredentials:true});
                return api(originalRequest);
            } catch(refreshErr){
                if(handleLogout) handleLogout();
                return Promise.reject(refreshErr);
            }
        }
        return Promise.reject(error)

});

export default api