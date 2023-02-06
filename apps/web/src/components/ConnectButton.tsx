import { Avatar, ConnectKitButton } from 'connectkit'

export const ConnectButton = () => {
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, truncatedAddress, address }) => {
                return (
                    <button
                        onClick={show}
                        className='lg:flex-1 flex flex-row max-w-[458px] min-w-[120px] py-2 pl-[.5rem] pr-2 h-[52px] gap-2 bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg rounded-[100px] text-center'>
                        {isConnected && (
                            <div className='w-[46.5px] h-full rounded-[20px] flex items-center justify-center bg-white'>
                                <Avatar size={32} address={address} />{' '}
                            </div>
                        )}

                        <div
                            className={`w-full font-medium text-[1.2rem] leading-9 text-content1 ${
                                isConnected && 'font-mono'
                            }`}>
                            {isConnected ? truncatedAddress : 'Connect'}
                        </div>
                    </button>
                )
            }}
        </ConnectKitButton.Custom>
    )
}
