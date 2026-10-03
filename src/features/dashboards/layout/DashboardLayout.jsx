import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const DashboardLayout = () => {
  return (
    <div className='h-dvh flex flex-col bg-bg'>
      <Topbar/>
      <div className='flex flex-1 min-h-0'>
        <aside className='hidden md:block w-64 shrink-0 bg-surface border-r border-border/40 overflow-y-auto'>
          <Sidebar/>
        </aside>
        
        <main className='flex-1 overflow-y-auto p-4'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
