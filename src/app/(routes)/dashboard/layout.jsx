'use client'
import React, { useEffect } from 'react'
import SideBar from './_components/SideBar'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '../../../../utils/dbConfig'
import { Budgets } from '../../../../utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'

function DashboardLayout({ children }) {
    const user = useUser();
    const route = useRouter()

    useEffect(()=>{
       if(user.isLoaded){
        checkUserBudget()
       }
    },[user])

    const checkUserBudget = async ()=>{

      
        const result = await db.select()
        .from(Budgets)
        .where(eq(Budgets.createdBy,user?.user?.primaryEmailAddress?.emailAddress))

        console.log(result)

        if(result.length == 0){
            route.replace('/dashboard/budgets')
        }
    }
    return (
        <div>
            <div className='fixed md:w-64 hidden md:block  shadow-sm'>
                <SideBar />
            </div>
            <div className='md:ml-64 '>
                <DashboardHeader />
                {children}
            </div>

        </div>
    )
}

export default DashboardLayout
