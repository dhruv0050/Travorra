import BecomeaHostComponent from '@/components/BecomeaHostComponent';
import { getAuthSession } from '@/utils/auth'
import Link from 'next/link';
import React from 'react'

async function BecomeAHost() {
    const session = await getAuthSession();
    if(!session) {
        return <section className='w-full h-screen grid place-items-center'>
            <div className='space-y-2 text-center'>
                <h1 className='text-xl md:text-2xl font-bold'>Not authroized</h1>
                <span>To add Your properties, <Link className='underline' href="/sign-in">Sign in</Link></span>
            </div>
        </section>
    }
  return (
    <div>
        <BecomeaHostComponent />
    </div>
  )
}

export default BecomeAHost
