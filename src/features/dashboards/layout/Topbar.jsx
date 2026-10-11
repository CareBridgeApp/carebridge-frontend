import { Bell, Menu } from "lucide-react"
import defaultAvatar from './../../../components/default-avatar.png'
import heartBeatLogo from './../../../components/heart-beat-logo.png'
const Topbar = (props) => {
  return (
    <div className="h-16 flex items-center justify-between px-2 py-2 bg-surface border-b border-border/40 select-none">
      <button className="">
        <Menu className="h-6 w-6" onClick={props.onMenuClick}/>
      </button>
      <div className="flex items-center gap-1 min-w-0">
        <img
          className="h-14 w-auto object-contain shrink-0"
          src={heartBeatLogo} alt="" />
        <div className="flex flex-col justify-center min-w-0">
          <div className="text-2xl font-bold leading-none">
            <span className="text-text">Care</span>
            <span className="text-primary">Bridge</span>
          </div>
          <span className="text-[0.65rem] sm:text-sm text-text-muted font-medium leading-none mt-1 tracking-tight">Your Health, Our Priority</span>
        </div>
      </div>

      <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 shrink-0 ">
        <button 
        aria-label="Notifications"
        className="flex items-center justify-center text-text hover:text-primary active:scale-95 transition-transform focus:outline-none">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
        </button>
        <button 
        aria-label="User Profile"
        className="flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 active:scale-95 transition-transform">
          <img
            src={defaultAvatar}
            className="h-8 w-8 rounded-full object-cover border border-transparent shrink-0"
          />
        </button>

      </nav>
    </div >
  )
}

export default Topbar
