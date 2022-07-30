import { useContext, useEffect, useState } from 'react'
import { FullScreenPopup } from 'components/popups'
import { SimpleButton } from 'components/buttons'
import { Link } from 'react-router-dom'
import AddFundsModal from './AddFundsModal'
import CopyToClipboard from 'components/clipboard/CopyToClipboard'
import { useDispatch, useSelector } from 'react-redux'
import { getWallet, removeWallet, setWallet } from 'app/WalletSlice'
import AppContext from 'components/AppContext'
import { _walletIcons } from 'lib/constants/walletIcons'
import { _networks } from 'lib/constants/networks'

const AccountModal = (props) => {
    const {openAccountModal, address, addressExplorar, balance, showLowBalance ,tokenIcon, chainId , onClose} = props
    const [openAddFundsModal, setOpenAddFundsModal] = useState(false)
    const[wallet,setWallet]=useState(null)

    const networkConfig = _networks.filter((el) => {return el.chainId === chainId})[0]

    const userWallet = useSelector(getWallet)
    const appGlobals = useContext(AppContext)
    // const walletInfo = (_walletIcons.filter(((el) =>{return el.title === userWallet.wallet})))[0]
    const [walletInfo,setWalletInfo]=useState((_walletIcons.filter(((el) =>{return el.title === userWallet.wallet})))[0])
    const dispatch = useDispatch()
    const handleBackAddFundsModal = () => {
        setOpenAddFundsModal(false)
    }

    const handleCloseAddFundsModal = () => {
        setOpenAddFundsModal(false)
        onClose()
    }
const getWalletInfo=()=>{

    let wallet= JSON.parse(localStorage.getItem('wallet'))
    return (_walletIcons.filter(((el) =>{return el.title === wallet.wallet})))[0]

}
    const handleChangeWallet = async () => {
        // logic to disconnect wallet if has any
        if(userWallet.wallet === 'MetaMask' || userWallet.wallet === 'Coinbase Wallet'){
            dispatch(removeWallet())
            onClose()
            await appGlobals.getWalletProviderConfirmed()
        }
    }
    useEffect(() => {
        setWallet(appGlobals.walletData)
      }, [appGlobals])
    

    return (
        <>
            {(openAccountModal && !openAddFundsModal) && (
                <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Account' className='min-h-[100vh] md:min-h-full' onClose={onClose}>
                    {showLowBalance && (
                        <div className='my-[20px]'>
                            <div className='flex items-center bg-[#514638] rounded-[8px] border border-[#FFC179] py-[8px] px-[16px]'>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8666 2.99996L22.3926 19.5C22.4804 19.652 22.5266 19.8244 22.5266 20C22.5266 20.1755 22.4804 20.3479 22.3926 20.4999C22.3048 20.652 22.1786 20.7782 22.0266 20.866C21.8746 20.9537 21.7021 21 21.5266 21H2.47458C2.29905 21 2.12661 20.9537 1.97459 20.866C1.82258 20.7782 1.69634 20.652 1.60858 20.4999C1.52081 20.3479 1.47461 20.1755 1.47461 20C1.47461 19.8244 1.52082 19.652 1.60858 19.5L11.1346 2.99996C11.2224 2.84795 11.3486 2.72172 11.5006 2.63396C11.6526 2.5462 11.8251 2.5 12.0006 2.5C12.1761 2.5 12.3485 2.5462 12.5006 2.63396C12.6526 2.72172 12.7788 2.84795 12.8666 2.99996ZM11.0006 16V18H13.0006V16H11.0006ZM11.0006 8.99996V14H13.0006V8.99996H11.0006Z" fill="#FFC179" fillOpacity="0.8"/>
                                    </svg>
                                </div>

                                <span className='text-[14px] text-white/80 ml-[12px]'>You do not have sufficient funds in your wallet to make this transaction. Please add some relevant coins/tokens to your wallet. Click on Add Funds button below. make sure you have at least 0.2 MATIC for transaction gas fee</span>
                            </div>
                        </div>
                    )}

                    <div className='pt-[40px] px-[24px] pb-[44px] bg-[#363738] rounded-[8px] mb-[16px]'>
                        <div className='grid gap-y-4 md:gap-y-0 grid-cols-2 md:grid-cols-3'>
                            <div>
                                <span className='block text-white/70 text-[14px] mb-[4px]'>Total Balance</span>
                                <div className='flex items-center'>
                                {tokenIcon ? <img src={tokenIcon} alt="token logo" /> :
                                    networkConfig.icon
                                }
                                    <span className='font-[900] text-[20px] text-white ml-[8px] mr-[17px]'>{parseFloat(balance).toFixed(4)}</span>
                                </div>
                            </div>
                            <div>
                                <span className='block text-white/60 text-[14px] mb-[4px]'>Network</span>
                                <span className='text-[14px] text-white mr-[17px]'>{networkConfig.label}</span>
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <SimpleButton type='button' size='sm' className='block w-full' onClick={() => setOpenAddFundsModal(true)}>Add Funds</SimpleButton>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[24px] px-[24px] pb-[25px] bg-[#363738] rounded-[8px]'>
                        <div className='flex items-center justify-between flex-wrap'>
                            <div className="flex items-center">
                                <img className='max-h-full' src={getWalletInfo().icon} alt={getWalletInfo().title} />
                                

                                <span className='text-white/80 text-[16px] ml-[10px]'>Connected with {getWalletInfo().title}</span>
                            </div>

                            <SimpleButton type='button' size='sm' className='block w-full mt-3 sm:w-auto sm:inline sm:mt-0' onClick={handleChangeWallet}>Change Wallet</SimpleButton>
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

                        <a href={addressExplorar} target='_blank' rel='noreferrer'>
                            <div className='flex items-center text-[#3F99FF] text-[16px]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 6V8H5V19H16V14H18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H10ZM21 3V12L17.206 8.207L11.207 14.207L9.793 12.793L15.792 6.793L12 3H21Z" fill="#3F99FF"/>
                                </svg>

                                <span className='ml-[8px]'>View on Explorer</span>
                            </div>
                        </a>
                    </div>
                </FullScreenPopup>
            )}

            <AddFundsModal openAddFundsModal={openAddFundsModal} back={handleBackAddFundsModal} address={address} onClose={handleCloseAddFundsModal} />
        </>
    )
}

export default AccountModal