import Image from 'next/image'

export const daysLeft = (deadline: any) => {
    const difference = new Date(deadline).getTime() - Date.now()
    const remainingDays = difference / (1000 * 3600 * 24)

    return remainingDays.toFixed(0)
}

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }: any) => {
    const remainingDays = daysLeft(deadline)

    return (
        <div
            className='group sm:w-[288px] w-full rounded-[15px] bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg cursor-pointer hover:bg-opacity-50 hover:drop-shadow-xl transition-all'
            onClick={handleClick}>
            <Image
                height='158'
                width='288'
                src={image}
                alt='fund'
                className='w-full h-[158px] object-cover rounded-t-[15px] group-hover:brightness-75'
            />

            <div className='flex flex-col p-4 group-hover:filter-none'>
                <div className='flex flex-row items-center mb-[18px]'>
                    <Image
                        height='17'
                        width='17'
                        src='/tag.svg'
                        alt='tag'
                        className='w-[17px] h-[17px] object-contain fill-red-100'
                    />
                    <p className='ml-[12px] mt-[2px] font-medium text-[12px] text-content1'>Huddle01</p>
                </div>

                <div className='block'>
                    <h3 className='font-semibold text-[16px] text-content2 text-left leading-[26px] truncate'>
                        {title}
                    </h3>
                    <p className='mt-[5px] font-normal text-content1 text-left leading-[18px] truncate'>
                        {description}
                    </p>
                </div>

                <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
                    <div className='flex flex-col'>
                        <h4 className='font-semibold text-[14px] text-content2 leading-[22px]'>{amountCollected}</h4>
                        <p className='mt-[3px] font-normal text-[12px] leading-[18px] text-content1 sm:max-w-[120px] truncate'>
                            Raised of {target}
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='font-semibold text-[14px] text-content2 leading-[22px]'>{remainingDays}</h4>
                        <p className='mt-[3px] font-normal text-[12px] leading-[18px] text-content1 sm:max-w-[120px] truncate'>
                            Days Left
                        </p>
                    </div>
                </div>

                <div className='flex items-center mt-[20px] gap-[12px]'>
                    <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-white'>
                        <Image
                            height='15'
                            width='15'
                            src='/thirdweb.png'
                            alt='user'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                    <p className='flex-1 font-normal text-[12px] text-content1 truncate'>
                        by <span className='text-content2'>{owner}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FundCard
