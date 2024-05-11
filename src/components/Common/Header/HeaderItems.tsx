import React from 'react'
import Link from 'next/link'
import FadeInPage from '@/components/Animations/FadeInPage'
import Logo from '../Logo'
import dynamic from 'next/dynamic'
import { navItems } from '@/config'

const CTAButton = dynamic(() => import('@/components/Common/Header/CTAButton'), { ssr: false })

const HeaderItems = () => {
    return (
        <FadeInPage className='flex justify-between items-center h-full'>
            <div className='flex'>
                <Logo />
                <ul className='flex items-center ml-8 space-x-4 font-medium font-inter text-[15px] pt-2'>
                    {
                        navItems.map((item, index) => (
                            <li className="cursor-pointer transition-all text-gray-700 hover:text-[#18181b]" key={index}>
                                <Link href={item.link}>{item.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <CTAButton />
        </FadeInPage>
    )
}

export default HeaderItems