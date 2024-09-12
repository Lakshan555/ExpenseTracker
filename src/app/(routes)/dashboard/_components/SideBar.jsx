'use client'
import { UserButton } from '@clerk/nextjs'
import { LayoutGrid, PiggyBankIcon, ReceiptText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideBar() {

    const menuList = [
        {
            id: 1,
            name: "DashBoard",
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: "Budgets",
            icon: PiggyBankIcon,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: "Expense",
            icon: ReceiptText,
            path: '/dashboard/expense'
        },
        {
            id: 4,
            name: "Upgrade",
            icon: ShieldCheck,
            path: '/dashboard/upgrade'
        },

    ]

    const params = usePathname()
    return (
        <div className='h-screen p-5'>
            <Image
                src={'/logo.svg'}
                alt='logo'
                width={160}
                height={100}
            />
            <div className='mt-5'>
                {menuList.map((menu) => (
                    <Link key={menu.id} href={menu.path}>
                        <h2 key={menu.id} className={`flex gap-2 items-center text-gray-500 font-medium p-5 rounded-md cursor-pointer hover:text-primary hover:bg-custom-orange mb-2
                        ${params === menu.path && 'bg-custom-orange text-primary'}`}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className='fixed flex bottom-10 gap-2 item-center p-5'>
                <UserButton />
                Profile
            </div>
        </div>
    )
}

export default SideBar
