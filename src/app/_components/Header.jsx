import { Button } from '@/components/ui/button'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

function Header() {
    console.log("user")
    
    const {userId} = auth()
    // const isAuth = !!userId 

    // // if(!isAuth){
    // //     redirect('/')
    // // }
    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <Image
                src={'./logo.svg'}
                alt='logo'
                width={160}
                height={100}
            />
      
          {userId ?   
                <UserButton />
                :  
                <SignInButton forceRedirectUrl='/dashboard'>
                    <Button>Get started</Button>
                </SignInButton> 
            }
           
        </div>
    )
}

export default Header
