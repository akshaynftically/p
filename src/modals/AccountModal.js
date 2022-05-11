import { useState } from 'react'
import { FullScreenPopup } from 'components/popups'
import { SimpleButton } from 'components/buttons'
import { Link } from 'react-router-dom'
import AddFoundsModal from './AddFoundsModal'
import CopyToClipboard from 'components/clipboard/CopyToClipboard'

const AccountModal = (props) => {
    const {openAccountModal, address, balance, onClose} = props
    const [openAddFoundsModal, setOpenAddFoundsModal] = useState(false)

    const handleBackAddFoundsModal = () => {
        setOpenAddFoundsModal(false)
    }

    const handleCloseAddFoundsModal = () => {
        setOpenAddFoundsModal(false)
        onClose()
    }

    return (
        <>
            {(openAccountModal && !openAddFoundsModal) && (
                <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Account' className='min-h-[100vh] md:min-h-full' onClose={onClose}>
                    {true && (
                        <div className='my-[20px]'>
                            <div className='flex items-center bg-[#514638] rounded-[8px] border border-[#FFC179] py-[8px] px-[16px]'>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8666 2.99996L22.3926 19.5C22.4804 19.652 22.5266 19.8244 22.5266 20C22.5266 20.1755 22.4804 20.3479 22.3926 20.4999C22.3048 20.652 22.1786 20.7782 22.0266 20.866C21.8746 20.9537 21.7021 21 21.5266 21H2.47458C2.29905 21 2.12661 20.9537 1.97459 20.866C1.82258 20.7782 1.69634 20.652 1.60858 20.4999C1.52081 20.3479 1.47461 20.1755 1.47461 20C1.47461 19.8244 1.52082 19.652 1.60858 19.5L11.1346 2.99996C11.2224 2.84795 11.3486 2.72172 11.5006 2.63396C11.6526 2.5462 11.8251 2.5 12.0006 2.5C12.1761 2.5 12.3485 2.5462 12.5006 2.63396C12.6526 2.72172 12.7788 2.84795 12.8666 2.99996ZM11.0006 16V18H13.0006V16H11.0006ZM11.0006 8.99996V14H13.0006V8.99996H11.0006Z" fill="#FFC179" fillOpacity="0.8"/>
                                    </svg>
                                </div>

                                <span className='text-[14px] text-white/80 ml-[12px]'>You do not have sufficient funds in your wallet to make this transaction. Please add some relevant coins/tokens to your wallet. Click on Add Funds button below.</span>
                            </div>
                        </div>
                    )}

                    <div className='pt-[40px] px-[24px] pb-[44px] bg-[#363738] rounded-[8px] mb-[16px]'>
                        <div className='grid gap-y-4 md:gap-y-0 grid-cols-2 md:grid-cols-3'>
                            <div>
                                <span className='block text-white/70 text-[14px] mb-[4px]'>Total Balance</span>
                                <div className='flex items-center'>
                                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8469 5.49895C15.4594 5.27061 14.9557 5.27061 14.5295 5.49895L11.5074 7.24948L9.45389 8.39115L6.43174 10.1416C6.04428 10.37 5.54059 10.37 5.1144 10.1416L2.71218 8.77169C2.32472 8.54334 2.05351 8.12472 2.05351 7.66809V4.96618C2.05351 4.50952 2.28598 4.09091 2.71218 3.86258L5.07565 2.53066C5.4631 2.30233 5.96679 2.30233 6.39299 2.53066L8.75648 3.86258C9.14389 4.09091 9.41516 4.50952 9.41516 4.96618V6.71669L11.4686 5.537V3.78647C11.4686 3.32981 11.2362 2.91121 10.81 2.68288L6.43174 0.171247C6.04428 -0.0570825 5.54059 -0.0570825 5.1144 0.171247L0.658672 2.68288C0.232472 2.91121 0 3.32981 0 3.78647V8.84778C0 9.30441 0.232472 9.72303 0.658672 9.95138L5.1144 12.463C5.50185 12.6914 6.00554 12.6914 6.43174 12.463L9.45389 10.7505L11.5074 9.57084L14.5295 7.85836C14.917 7.63001 15.4207 7.63001 15.8469 7.85836L18.2103 9.19031C18.5978 9.41859 18.869 9.8372 18.869 10.2939V12.9958C18.869 13.4524 18.6365 13.8711 18.2103 14.0994L15.8469 15.4694C15.4594 15.6977 14.9557 15.6977 14.5295 15.4694L12.166 14.1374C11.7786 13.9091 11.5074 13.4905 11.5074 13.0338V11.2833L9.45389 12.463V14.2136C9.45389 14.6702 9.68636 15.0888 10.1126 15.3172L14.5683 17.8287C14.9557 18.0571 15.4594 18.0571 15.8856 17.8287L20.3413 15.3172C20.7288 15.0888 21 14.6702 21 14.2136V9.15223C21 8.6956 20.7675 8.27698 20.3413 8.04863L15.8469 5.49895Z" fill="#7A3FE4"/>
                                    </svg>

                                    <span className='font-[900] text-[20px] text-white ml-[8px] mr-[17px]'>{balance}</span>
                                </div>
                            </div>
                            <div>
                                <span className='block text-white/60 text-[14px] mb-[4px]'>Network</span>
                                <span className='text-[14px] text-white mr-[17px]'>Polygon (Mainnet)</span>
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <SimpleButton type='button' size='sm' className='block w-full' onClick={() => setOpenAddFoundsModal(true)}>Add Founds</SimpleButton>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[24px] px-[24px] pb-[25px] bg-[#363738] rounded-[8px]'>
                        <div className='flex items-center justify-between flex-wrap'>
                            <div className="flex items-center">
                                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.7109 1L15.5547 8.49997L17.4433 4.07999L25.7109 1Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2.28906 1L12.3548 8.56997L10.5566 4.07999L2.28906 1Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M22.0538 18.3906L19.3516 22.5106L25.1378 24.1006L26.7954 18.4807L22.0538 18.3906Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.21094 18.4807L2.85841 24.1006L8.63468 22.5106L5.94243 18.3906L1.21094 18.4807Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.32017 11.4309L6.71289 13.8509L12.4389 14.1109L12.2481 7.96094L8.32017 11.4309Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.6733 11.4306L15.6853 7.89062L15.5547 14.1106L21.2807 13.8506L19.6733 11.4306Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.63477 22.5095L12.1005 20.8395L9.11698 18.5195L8.63477 22.5095Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.9004 20.8395L19.356 22.5095L18.8839 18.5195L15.9004 20.8395Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.356 22.5098L15.9004 20.8398L16.1816 23.0798L16.1515 24.0298L19.356 22.5098Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.63477 22.5098L11.8494 24.0298L11.8293 23.0798L12.1005 20.8398L8.63477 22.5098Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.9102 17.0395L9.03711 16.1996L11.0663 15.2695L11.9102 17.0395Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.0918 17.0395L16.9357 15.2695L18.9749 16.1996L16.0918 17.0395Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.63557 22.5106L9.13788 18.3906L5.94336 18.4807L8.63557 22.5106Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.8613 18.3906L19.3536 22.5106L22.0558 18.4807L18.8613 18.3906Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21.2807 13.8496L15.5547 14.1096L16.0871 17.0397L16.9309 15.2696L18.9702 16.1996L21.2807 13.8496Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.03343 16.1996L11.0626 15.2696L11.9065 17.0397L12.4389 14.1096L6.71289 13.8496L9.03343 16.1996Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.71289 13.8496L9.11382 18.5196L9.0334 16.1996L6.71289 13.8496Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.9713 16.1996L18.8809 18.5196L21.2818 13.8496L18.9713 16.1996Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.4446 14.1094L11.9121 17.0394L12.5852 20.4994L12.7359 15.9394L12.4446 14.1094Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.5567 14.1094L15.2754 15.9294L15.416 20.4994L16.0891 17.0394L15.5567 14.1094Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.0871 17.0393L15.4141 20.4992L15.8963 20.8392L18.8798 18.5192L18.9702 16.1992L16.0871 17.0393Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.03711 16.1992L9.11753 18.5192L12.101 20.8392L12.5832 20.4992L11.9102 17.0393L9.03711 16.1992Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.1489 24.0298L16.179 23.0798L15.9179 22.8597H12.0804L11.8293 23.0798L11.8494 24.0298L8.63477 22.5098L9.75987 23.4298L12.0402 24.9998H15.9479L18.2384 23.4298L19.3534 22.5098L16.1489 24.0298Z" fill="#C0AC9D" stroke="#C0AC9D" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.8985 20.84L15.4163 20.5H12.5835L12.1013 20.84L11.8301 23.08L12.0812 22.86H15.9186L16.1799 23.08L15.8985 20.84Z" fill="#161616" stroke="#161616" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M26.1469 8.98995L27.0008 4.84999L25.7149 1L15.9004 8.25L19.6775 11.4299L25.0117 12.98L26.1871 11.61L25.6748 11.2399L26.4884 10.5L25.8656 10.02L26.6793 9.39997L26.1469 8.98995Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 4.84999L1.86392 8.98995L1.31142 9.39997L2.13516 10.02L1.51233 10.5L2.32602 11.2399L1.81369 11.61L2.98904 12.98L8.3233 11.4299L12.1004 8.25L2.28584 1L1 4.84999Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M25.0087 12.9796L19.6745 11.4297L21.2818 13.8497L18.8809 18.5196L22.0553 18.4797H26.7968L25.0087 12.9796Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.32321 11.4297L2.98901 12.9796L1.21094 18.4797H5.94243L9.11681 18.5196L6.71594 13.8497L8.32321 11.4297Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.5613 14.1101L15.9029 8.25003L17.4499 4.08008H10.5586L12.1056 8.25003L12.4471 14.1101L12.5777 15.95L12.5878 20.5H15.4207L15.4307 15.95L15.5613 14.1101Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                <span className='text-white/80 text-[16px] ml-[10px]'>Connected with Metamask</span>
                            </div>

                            <SimpleButton type='button' size='sm' className='block w-full mt-3 sm:w-auto sm:inline sm:mt-0'>Change Wallet</SimpleButton>
                        </div>
                        <hr className='border-white/10 my-[16px]' />
                        
                        <div className='flex items-center flex-wrap justify-between mb-[17px]'>
                            <span className='font-[700] text-[25px] md:text-[32px] mb-2 md:mb-0 text-white/80'>{address.slice(0, 10)}...{address.slice(address.length - 5, address.length + 5)}</span>
                            <CopyToClipboard successText='Copied!' copyText={address}>
                                <button className='text-[12px] text-white/60 flex items-center py-[8.5px] px-[22px] border-2 rounded-full'>
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.25 3.5V1.25C3.25 1.05109 3.32902 0.860322 3.46967 0.71967C3.61032 0.579018 3.80109 0.5 4 0.5H13C13.1989 0.5 13.3897 0.579018 13.5303 0.71967C13.671 0.860322 13.75 1.05109 13.75 1.25V11.75C13.75 11.9489 13.671 12.1397 13.5303 12.2803C13.3897 12.421 13.1989 12.5 13 12.5H10.75V14.75C10.75 15.164 10.4125 15.5 9.99475 15.5H1.00525C0.906345 15.5006 0.808298 15.4816 0.716742 15.4442C0.625186 15.4068 0.541925 15.3517 0.471744 15.282C0.401563 15.2123 0.345845 15.1294 0.307791 15.0381C0.269737 14.9468 0.250097 14.8489 0.25 14.75L0.25225 4.25C0.25225 3.836 0.58975 3.5 1.0075 3.5H3.25ZM1.75225 5L1.75 14H9.25V5H1.75225ZM4.75 3.5H10.75V11H12.25V2H4.75V3.5Z" fill="white"/>
                                    </svg>
                                    <span className='ml-[6px]'>Copy Address</span>
                                </button>
                            </CopyToClipboard>
                        </div>

                        <Link to='/' target='_blank'>
                            <div className='flex items-center text-[#3F99FF] text-[16px]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 6V8H5V19H16V14H18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H10ZM21 3V12L17.206 8.207L11.207 14.207L9.793 12.793L15.792 6.793L12 3H21Z" fill="#3F99FF"/>
                                </svg>

                                <span className='ml-[8px]'>View on Explorer</span>
                            </div>
                        </Link>
                    </div>
                </FullScreenPopup>
            )}

            <AddFoundsModal openAddFoundsModal={openAddFoundsModal} back={handleBackAddFoundsModal} address={address} onClose={handleCloseAddFoundsModal} />
        </>
    )
}

export default AccountModal