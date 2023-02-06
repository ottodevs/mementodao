import { useState } from 'react'
import Link from 'next/link'

// import { useStateContext } from '../context'

import Image from 'next/image'
import { navlinks } from './Sidebar'
import { usePathname } from 'next/navigation'
import { ConnectButton } from './ConnectButton'

const Navbar = () => {
    const pathname = usePathname()
    const [toggleDrawer, setToggleDrawer] = useState(false)
    // const { connect, address } = useStateContext()

    return (
        <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
            <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg rounded-[100px]'>
                <input
                    type='text'
                    placeholder='Search events'
                    className='flex w-full font-normal text-[14px] placeholder:text-content1 text-content2 bg-transparent outline-none px-3'
                />

                <div className='w-[72px] h-full rounded-[20px] bg-slate-50 flex justify-center items-center cursor-pointer'>
                    <Image
                        width='15'
                        height='15'
                        src='/icons/search.svg'
                        alt='search'
                        className='w-[15px] h-[15px] object-contain'
                    />
                </div>
            </div>

            <div className='sm:flex hidden flex-row justify-end gap-4'>
                <ConnectButton />
            </div>

            {/* Small screen navigation */}
            <div className='sm:hidden flex justify-between items-center relative'>
                <div className='w-[40px] h-[40px] rounded-[10px] bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg flex justify-center items-center cursor-pointer'>
                    <Image
                        width='24'
                        height='24'
                        src='/zoomed-logo.svg'
                        alt='user'
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>

                <Image
                    width='34'
                    height='34'
                    src='/icons/bars-2.svg'
                    alt='menu'
                    className='invert w-[34px] h-[34px] object-contain cursor-pointer'
                    onClick={() => setToggleDrawer(prev => !prev)}
                />

                <div
                    className={`absolute top-[60px] right-0 left-0 z-10 shadow-secondary py-4 bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg ${
                        !toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'
                    } transition-all duration-700`}>
                    <div className='flex mx-4 justify-center'>
                        <ConnectButton />
                    </div>

                    <ul className='mt-4'>
                        {navlinks.map((link: any) => (
                            <Link
                                onClick={() => setToggleDrawer(false)}
                                href={!link.disabled ? link.link : '#'}
                                key={link.name}>
                                <li className={`flex p-4 ${pathname === link.link ? 'bg-white' : 'hover:bg-black'}`}>
                                    <Image
                                        width='24'
                                        height='24'
                                        src={link.imgUrl}
                                        alt={link.name}
                                        className={`w-[24px] h-[24px] object-contain ${
                                            pathname === link.link ? 'filter-active' : 'filter-inactive'
                                        }`}
                                    />
                                    <span
                                        className={`ml-[20px] font-semibold text-xl ${
                                            pathname === link.link ? 'text-[#ef4136]' : 'text-content1'
                                        }`}>
                                        {link.name}
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
