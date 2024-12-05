import { SignIn, SignUp } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
    return (
        <>
            <div>
                <Image alt='login image' src='https://images.pexels.com/photos/1386649/pexels-photo-1386649.jpeg' height={900} width={1000} className='object-contain w-full h-full ' />
            </div>

            <div>
                <div className='absolute top-20 right-10'>
                    <SignIn />
                </div>
            </div>
        </>
    )
}

export default SignInPage