import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'

const NavBar = () => {
  return (
    <div className='bg-[#fff] sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>

              {/* Todo: Mobile nav */}

              <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  <Icons.logo className='h-8 w-auto cursor-pointer' />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default NavBar