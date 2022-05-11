import { FullScreenPopup } from 'components/popups'
import {SimpleButton} from "../components/buttons";

const WrongNetworkModal = (props) => {
    const {openWrongNetworkModal, onClose} = props

    return (
        <>
            {openWrongNetworkModal && (
                <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Account' className='min-h-[100vh] md:min-h-full' onClose={onClose}>
                    <div className='mt-[20px] mb-[40px]'>
                        <div className='flex items-center bg-[#512627] rounded-[8px] border border-[#FF2121] py-[8px] px-[16px]'>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8666 2.99996L22.3926 19.5C22.4804 19.652 22.5266 19.8244 22.5266 20C22.5266 20.1755 22.4804 20.3479 22.3926 20.4999C22.3048 20.652 22.1786 20.7782 22.0266 20.866C21.8746 20.9537 21.7021 21 21.5266 21H2.47458C2.29905 21 2.12661 20.9537 1.97459 20.866C1.82258 20.7782 1.69634 20.652 1.60858 20.4999C1.52081 20.3479 1.47461 20.1755 1.47461 20C1.47461 19.8244 1.52082 19.652 1.60858 19.5L11.1346 2.99996C11.2224 2.84795 11.3486 2.72172 11.5006 2.63396C11.6526 2.5462 11.8251 2.5 12.0006 2.5C12.1761 2.5 12.3485 2.5462 12.5006 2.63396C12.6526 2.72172 12.7788 2.84795 12.8666 2.99996ZM11.0006 16V18H13.0006V16H11.0006ZM11.0006 8.99996V14H13.0006V8.99996H11.0006Z" fill="#FF2121" fill-opacity="0.8"/>
                                </svg>
                            </div>

                            <span className='text-[14px] text-white/80 ml-[12px]'>You do not have sufficient funds in your wallet to make this transaction. Please add some relevant coins/tokens to your wallet. Click on Add Funds button below.</span>
                        </div>
                    </div>

                    <SimpleButton type='button' className='w-full block mb-[44px]'>Retry Now</SimpleButton>
                </FullScreenPopup>
            )}
        </>
    )
}

export default WrongNetworkModal