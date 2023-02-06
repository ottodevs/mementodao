'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const navlinks = [
    {
        name: 'Events',
        imgUrl: '/icons/calendar-days.svg',
        link: '/events',
        disabled: false,
    },
    {
        name: 'Collection',
        imgUrl: '/icons/ticket.svg',
        link: '/collection',
    },
    {
        name: 'DAO',
        imgUrl: '/icons/building-library.svg',
        link: '/dao',
    },
    {
        name: 'Curation body',
        imgUrl: '/icons/shield-check.svg',
        link: '/curation',
    },
    {
        name: 'Dashboard',
        imgUrl: '/icons/identification.svg',
        link: '/dashboard',
    },
    {
        name: 'Logout',
        imgUrl: '/icons/power.svg',
        link: '#logout', // TODO: show modal and keep the user here
    },
]

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }: any) => (
    <span className={`tooltip tooltip-right`} data-tooltip={name}>
        <div
            className={`group w-[48px] h-[48px] rounded-[10px] flex justify-center items-center transition-all ${
                isActive && 'bg-white'
            } ${!disabled && 'cursor-pointer'} ${styles}`}
            onClick={handleClick}>
            <Image
                src={imgUrl}
                width='30'
                height='30'
                alt={`${name}${isActive && ' active'} icon`}
                className={`w-1/2 h-1/2 ${
                    name !== 'Home' &&
                    name !== 'Toggle theme' &&
                    (isActive ? 'filter-active' : 'group-hover:filter-none filter-inactive')
                }`}
            />
        </div>
    </span>
)

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className='sm:flex hidden mr-10 relative'>
            <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
                <Link href='/'>
                    <Icon
                        styles='w-[52px] h-[52px] bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg'
                        imgUrl='/zoomed-logo.svg'
                        name='Home'
                    />
                </Link>

                <div className='flex-1 flex flex-col justify-between items-center bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg rounded-[20px] w-[76px] py-4 mt-12'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        {navlinks.map(link => (
                            <Link href={!link.disabled ? link.link : '#'} key={link.name}>
                                <Icon {...link} isActive={pathname === link.link} />
                            </Link>
                        ))}
                    </div>

                    <Icon styles='bg-slate-50 shadow-secondary' imgUrl='/icons/sun.svg' name='Toggle theme' />
                </div>
            </div>
        </div>
    )
}
