import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
    return (
        <section className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
            {/* <!-- content - start --> */}
            <div className='flex flex-wrap justify-between mb-8 md:mb-16'>
                <div className='w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0'>
                    <p className='text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
                        Now you can do it, the decentralized way
                    </p>

                    <h1 className='text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12'>
                        Attend events, collect memories
                    </h1>

                    <p className='lg:w-4/5 text-content1 xl:text-lg leading-relaxed mb-8 md:mb-12'>
                        MementoDAO brings decentralization to the collectible memories space and events management with
                        the power of FileCoin.
                    </p>
                    <div className='flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5'>
                        <a href='#' className='btn btn-lg btn-secondary'>
                            Start now
                        </a>

                        <a href='#' className='btn btn-lg text-content1'>
                            Take tour
                        </a>
                    </div>
                </div>
                {/* <!-- content - end --> */}

                {/* <!-- image - start --> */}
                <div className='w-full lg:w-2/3 flex mb-12 md:mb-16'>
                    <div className='bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0'>
                        <Image
                            width='600'
                            height='600'
                            src='/hero2.png'
                            loading='lazy'
                            alt='memories abstract photo'
                            className='w-full h-full object-cover object-center'
                        />
                    </div>

                    <div className='bg-gray-100 rounded-lg shadow-lg overflow-hidden'>
                        <Image
                            width='600'
                            height='600'
                            src='/hero5.png'
                            loading='lazy'
                            alt='memories abstract photo'
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                </div>
                {/* <!-- image - end --> */}
            </div>
        </section>
    )
}
