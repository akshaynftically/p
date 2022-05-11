import {useState} from 'react'
import { FullScreenPopup } from 'components/popups'
import {SimpleButton} from 'components/buttons'
import TabsNav from 'components/tabs/TabsNav'
import IframeAddFounds from 'components/wallet/IframeAddFounds'
import CopyToClipboard from 'components/clipboard/CopyToClipboard'

const AddFoundsModal = (props) => {
    const {openAddFoundsModal, back, address, onClose} = props
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            title: 'Deposit From Exchange',
            icon: (activeTab) => <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`${activeTab === 0 ? 'fill-[#3F99FF]' : 'fill-[#B3B3B4]'}`} d="M1.99935 0H25.9993C26.353 0 26.6921 0.140476 26.9422 0.390524C27.1922 0.640573 27.3327 0.979711 27.3327 1.33333V22.6667C27.3327 23.0203 27.1922 23.3594 26.9422 23.6095C26.6921 23.8595 26.353 24 25.9993 24H1.99935C1.64573 24 1.30659 23.8595 1.05654 23.6095C0.806491 23.3594 0.666016 23.0203 0.666016 22.6667V1.33333C0.666016 0.979711 0.806491 0.640573 1.05654 0.390524C1.30659 0.140476 1.64573 0 1.99935 0V0ZM7.33268 13.3333V18.6667H9.99935V13.3333H7.33268ZM12.666 5.33333V18.6667H15.3327V5.33333H12.666ZM17.9993 9.33333V18.6667H20.666V9.33333H17.9993Z" fill="#B3B3B4"/>
            </svg>
        },
        {
            title: 'Buy with a card',
            icon: (activeTab) => <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`${activeTab === 1 ? 'fill-[#3F99FF]' : 'fill-[#B3B3B4]'}`} d="M27.3327 9.33333V22.6667C27.3327 23.0203 27.1922 23.3594 26.9422 23.6095C26.6921 23.8595 26.353 24 25.9993 24H1.99935C1.64573 24 1.30659 23.8595 1.05654 23.6095C0.806491 23.3594 0.666016 23.0203 0.666016 22.6667V9.33333H27.3327ZM27.3327 6.66667H0.666016V1.33333C0.666016 0.979711 0.806491 0.640573 1.05654 0.390524C1.30659 0.140476 1.64573 0 1.99935 0H25.9993C26.353 0 26.6921 0.140476 26.9422 0.390524C27.1922 0.640573 27.3327 0.979711 27.3327 1.33333V6.66667ZM17.9993 17.3333V20H23.3327V17.3333H17.9993Z" fill="white" fillOpacity="0.65"/>
            </svg>
        }
    ]

    const handleBack = () => {
        setActiveTab(0)
        back()
    }

    return (
        <>
            {openAddFoundsModal && (
                <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Add Funds' className='min-h-[100vh] md:min-h-full' onClose={onClose} onBack={handleBack}>
                    <TabsNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

                    {activeTab === 0 ? (
                       <div>
                           <div className='pt-[24px] px-[24px] pb-[25px] bg-[#363738] rounded-[8px] mb-[24px]'>
                               <span className='text-white/80 text-[16px]'>Deposit Polygon (Matic) from your exchange or wallet to the following adress</span>

                               <hr className='border-white/10 my-[16px]' />

                               <div className='flex items-center flex-wrap justify-between mb-[17px]'>
                                   <span className='font-[700] text-[25px] md:text-[32px] text-white/80 mb-2'>{address.slice(0, 10)}...{address.slice(address.length - 5, address.length + 5)}</span>
                                   <CopyToClipboard successText='Copied!' copyText={address}>
                                       <button className='text-[12px] text-white/60 flex items-center py-[8.5px] px-[22px] border-2 rounded-full'>
                                           <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                               <path d="M3.25 3.5V1.25C3.25 1.05109 3.32902 0.860322 3.46967 0.71967C3.61032 0.579018 3.80109 0.5 4 0.5H13C13.1989 0.5 13.3897 0.579018 13.5303 0.71967C13.671 0.860322 13.75 1.05109 13.75 1.25V11.75C13.75 11.9489 13.671 12.1397 13.5303 12.2803C13.3897 12.421 13.1989 12.5 13 12.5H10.75V14.75C10.75 15.164 10.4125 15.5 9.99475 15.5H1.00525C0.906345 15.5006 0.808298 15.4816 0.716742 15.4442C0.625186 15.4068 0.541925 15.3517 0.471744 15.282C0.401563 15.2123 0.345845 15.1294 0.307791 15.0381C0.269737 14.9468 0.250097 14.8489 0.25 14.75L0.25225 4.25C0.25225 3.836 0.58975 3.5 1.0075 3.5H3.25ZM1.75225 5L1.75 14H9.25V5H1.75225ZM4.75 3.5H10.75V11H12.25V2H4.75V3.5Z" fill="white"/>
                                           </svg>
                                           <span className='ml-[6px]'>Copy Address</span>
                                       </button>
                                   </CopyToClipboard>
                               </div>
                           </div>

                           <div className='text-center mb-[10px]'>
                               <SimpleButton type='button' className='block w-full md:w-auto' size='sm'>Done</SimpleButton>
                           </div>
                       </div>
                    ) : (
                        <IframeAddFounds />
                    )}
                </FullScreenPopup>
            )}
        </>
    )
}

export default AddFoundsModal