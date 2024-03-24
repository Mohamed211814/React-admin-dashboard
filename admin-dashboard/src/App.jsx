import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboardview from './components/Dashboard/Dashboardview'
import {Outlet} from 'react-router-dom'
import Main from './components/Main/Main'

export default function App() {
  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh]'><Sidebar /></div>
      <div className='basis-[88%]'><Dashboardview />
        <Main />
      </div>
    </div>
  )
}
