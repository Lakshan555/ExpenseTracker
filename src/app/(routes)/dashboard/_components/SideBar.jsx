import { UserButton } from '@clerk/nextjs'
import { LayoutGrid, PiggyBankIcon, ReceiptText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideBar() {

    const menuList = [
        {
            id: 1,
            name: "DashBoard",
            icon: LayoutGrid
        },
        {
            id: 2,
            name: "Budgets",
            icon: PiggyBankIcon
        },
        {
            id: 2,
            name: "Expense",
            icon: ReceiptText
        },
        {
            id: 1,
            name: "Upgrade",
            icon: ShieldCheck
        },

    ]
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
                    <h2 key={menu.id} className='flex gap-2 items-center text-gray-500 font-medium p-5 rounded-md cursor-pointer hover:text-primary hover:bg-custom-orange'>
                        <menu.icon />
                        {menu.name}
                    </h2>
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
