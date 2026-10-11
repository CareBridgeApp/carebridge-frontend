import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useState } from 'react'

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className='h-dvh flex flex-col bg-bg'>

      <Topbar onMenuClick={()=> mobileOpen?setMobileOpen(false):setMobileOpen(true)
        }/>

      <div className='flex flex-1 min-h-0 relative'>

        <aside className='hidden md:block w-64 shrink-0 bg-surface border-r border-border/40 overflow-y-auto'>
          <Sidebar/>
        </aside>

        {mobileOpen && (
          <div className='md:hidden inset-0  top-16 fixed bottom-0 z-50'>
            <div className='absolute inset-0 bg-black/40' onClick={()=>setMobileOpen(false)}/>
            <aside className='absolute left-0 top-0 w-[85%] max-w-72 h-full bg-surface'>
              <Sidebar onNavigate={()=>setMobileOpen(false)}/>
            </aside>
          </div>
        )}

        <main className='flex-1 overflow-y-auto p-4'>
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout
