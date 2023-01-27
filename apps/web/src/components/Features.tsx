import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
    return (
        <section className='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
            {/* <!-- content - start --> */}
            <div className='xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24'>
                <p className='text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
                    Now you can do it in a decentralized way!
                </p>

                <h1 className='text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12'>
                    Attend events, collect memories
                </h1>

                <p className='lg:w-4/5 text-content1 xl:text-lg leading-relaxed mb-8 md:mb-12'>
                    MementoDAO brings decentralization to the collectibles space and events management.
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
            <div className='xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg'>
                <Image
                    width='1000'
                    height='760'
                    src='/photo1.avif'
                    loading='lazy'
                    alt='Photo by Fakurian Design'
                    className='w-full h-full object-cover object-center'
                />
            </div>
            {/* <!-- image - end --> */}
        </section>
    )
}
