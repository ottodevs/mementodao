import EventCard from './EventCard'
import Image from 'next/image'
import Link from 'next/link'

const DisplayEvents = ({ title, isLoading, events }: any) => {
    return (
        <div>
            <h1 className='font-semibold text-[18px] text-white text-left'>
                {title} ({events.length})
            </h1>

            <div className='flex flex-wrap mt-[20px] gap-[26px]'>
                {isLoading && (
                    <Image
                        height='100'
                        width='100'
                        src='/loader.svg'
                        alt='loader'
                        className='w-[100px] h-[100px] object-contain'
                    />
                )}

                {!isLoading && events.length === 0 && (
                    <p className='font-semibold text-[14px] leading-[30px] text-[#818183]'>
                        You have not created any events yet
                    </p>
                )}

                {!isLoading &&
                    events.length > 0 &&
                    events.map((event: any) => (
                        <Link key={event.id} href={`/events/${event.id}`}>
                            <EventCard {...event} />
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default DisplayEvents
