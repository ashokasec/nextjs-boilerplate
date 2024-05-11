import React from 'react'
import Logo from '../Logo'
import { project } from '@/config'
import Link from 'next/link'
import { IconBrandX } from '@tabler/icons-react'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className='border-0 border-t mt-8'>
            <div className='x-adjust flex justify-between pt-8 pb-10'>
                <div>
                    <Logo />
                    <p className='font-inter text-base pt-3'>Create a beautiful and impactful bio page in minutes. Free to start!</p>
                </div>
                <div className='pt-2 flex flex-col items-end'>
                    <p className='font-space-grotesk text-2xl font-semibold'>Subscribe to our newsletter</p>
                    <div className='leading-none h-fit flex items-center rounded-md border border-soul w-fit overflow-clip pr-1 mt-3'>
                        <input type="email" placeholder="user@example.com" className="text-[15px] w-80 p-3 placeholder:text-slate-600/75 !outline-none" spellCheck="false" />
                        <button className='primary'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='x-adjust flex items-center justify-between bg-primary'>
                <div className='py-6 text-base font-medium text-white'>
                    &copy;{year} <span className='capitalize'>{project.name}</span>. All rights reserved.
                </div>
                <ul>
                    <li><Link href={project.twitter} target='_blank' className='text-white'><IconBrandX /></Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer