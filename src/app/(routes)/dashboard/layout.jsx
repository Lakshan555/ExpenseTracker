import React from 'react'
import SideBar from './_components/SideBar'

function DashboardLayout({ children }) {
    return (
        <div>
            <div className='fixed md:w-64 hidden md:block shadow-sm'>
                <SideBar />
            </div>
            <div className='md:ml-64 bg-blue-500'>
                {children}
            </div>

        </div>
    )
}

export default DashboardLayout
