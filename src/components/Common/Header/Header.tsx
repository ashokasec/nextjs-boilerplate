import React from 'react'
import dynamic from 'next/dynamic'
import HeaderItems from './HeaderItems'

const Header = () => {
    return (
        <nav className='x-adjust h-20 border-0 border-b backdrop-blur sticky top-0 z-20'>
            <HeaderItems />
        </nav>
    )
}

export default Header