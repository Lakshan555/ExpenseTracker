import { Button } from '@/components/ui/button'
import { SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <Image
                src={'./logo.svg'}
                alt='logo'
                width={160}
                height={100}
            />
            <SignInButton forceRedirectUrl='/dashboard'>
                <Button>Get started</Button>
            </SignInButton>

            <UserButton />
        </div>
    )
}

export default Header
