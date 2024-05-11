import { project } from '@/config'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={project.link}>
            <span className='font-space-grotesk text-3xl font-bold text-primary'>{project.name}</span>
        </Link>
    )
}

export default Logo