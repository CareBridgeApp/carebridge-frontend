import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { doctorNav, patientNav } from "../../../config/navigation";
import { NavLink } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { LogOut } from "lucide-react";

const navByRole = {
  patient: patientNav,
  doctor: doctorNav,
}

const Sidebar = ({onNavigate}) => {
  const { user, logout } = useContext(AuthContext);

  const items = navByRole[user.role] ?? [];

  return (
    <div>
      <nav className="p-3 flex flex-col gap-2">
        {items.map(({ label, path, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) => cn("flex items-center gap-2 h-10 px-3 border border-transparent rounded-2xl  transition-colors", isActive ? "text-primary font-medium bg-primary/20" : "text-text hover:text-primary")}
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))
        }
      </nav>
      <button
        className='flex items-center gap-2 p-6 text-danger font-medium text-base active:scale-95'
        onClick={() => logout()}>
        <LogOut className="h-5 w-5"/>
        Logout
      </button>




    </div>

  )
}

export default Sidebar
