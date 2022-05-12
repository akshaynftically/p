import { FullScreenPopup } from 'components/popups'
import {SimpleButton} from "../components/buttons";

const WrongNetworkModal = (props) => {
    const {openWrongNetworkModal, onClose} = props

    return (
        <>
            {openWrongNetworkModal && (
                <FullScreenPopup fullscreen={true} size='w-full md:w-[520px]' title='Network Not Supported' className='min-h-[100vh] md:min-h-full' onClose={onClose}>
                    <p className='text-white/80 text-[14px] mb-[20px]'>Your currently selected Blockchain network in your wallet is Ethereum Mainnet. Presently, this store does not support this network and supports only the below-mentioned network(s).</p>

                    <div className='rounded-[4px] bg-[#363738] pt-[20px] px-[16px] pb-[32px]'>
                        <p className='text-white/80 text-[16px] mb-[20px]'>Please select one of the below-mentioned networks by clicking on its button below.</p>
                        <div className='text-center'>
                            <SimpleButton type='button' size='sm'>
                                <svg className='mr-[4px]' width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8469 5.49895C15.4594 5.27061 14.9557 5.27061 14.5295 5.49895L11.5074 7.24948L9.45389 8.39115L6.43174 10.1416C6.04428 10.37 5.54059 10.37 5.1144 10.1416L2.71218 8.77169C2.32472 8.54334 2.05351 8.12472 2.05351 7.66809V4.96618C2.05351 4.50952 2.28598 4.09091 2.71218 3.86258L5.07565 2.53066C5.4631 2.30233 5.96679 2.30233 6.39299 2.53066L8.75648 3.86258C9.14389 4.09091 9.41516 4.50952 9.41516 4.96618V6.71669L11.4686 5.537V3.78647C11.4686 3.32981 11.2362 2.91121 10.81 2.68288L6.43174 0.171247C6.04428 -0.0570825 5.54059 -0.0570825 5.1144 0.171247L0.658672 2.68288C0.232472 2.91121 0 3.32981 0 3.78647V8.84778C0 9.30441 0.232472 9.72303 0.658672 9.95138L5.1144 12.463C5.50185 12.6914 6.00554 12.6914 6.43174 12.463L9.45389 10.7505L11.5074 9.57084L14.5295 7.85836C14.917 7.63001 15.4207 7.63001 15.8469 7.85836L18.2103 9.19031C18.5978 9.41859 18.869 9.8372 18.869 10.2939V12.9958C18.869 13.4524 18.6365 13.8711 18.2103 14.0994L15.8469 15.4694C15.4594 15.6977 14.9557 15.6977 14.5295 15.4694L12.166 14.1374C11.7786 13.9091 11.5074 13.4905 11.5074 13.0338V11.2833L9.45389 12.463V14.2136C9.45389 14.6702 9.68636 15.0888 10.1126 15.3172L14.5683 17.8287C14.9557 18.0571 15.4594 18.0571 15.8856 17.8287L20.3413 15.3172C20.7288 15.0888 21 14.6702 21 14.2136V9.15223C21 8.6956 20.7675 8.27698 20.3413 8.04863L15.8469 5.49895Z" fill="white"/>
                                </svg>
                                Switch to Polygon (Mainnet)
                            </SimpleButton>
                        </div>
                    </div>
                </FullScreenPopup>
            )}
        </>
    )
}

export default WrongNetworkModal