import AppContext from 'components/AppContext';
import { SimpleButton } from 'components/buttons'
import ProgressConnectYourWallet from 'modals/ProgressConnectYourWallet';
import ReserveLandModal from 'modals/ReserveLandModal';
import {useContext, useEffect, useState} from "react";
import HeaderBalance from "./HeaderBalance";

const HeaderWalletInfo = () => {
    const [account, setAccount] = useState(null)
    const [provider,setProvider] = useState(null)

  const [isOpenedProgressWallet, setIsOpenedProgressWallet] = useState(false)

  const [txModalProps,setTxModalProps] = useState({
    title:'Email is Required',
    mainHeading:'Please enter Email ID before connecting wallet.',
    content:'',
    loading:false,
    learn:'',
    view:''
  })

    const appGlobals = useContext(AppContext)

    useEffect(() => {
        (async () => {
            let tempProvider = await appGlobals.hasWalletProvider()
            if(!tempProvider) return
            const accountsList = await tempProvider.send("eth_accounts", [])
            setProvider(tempProvider)
            setAccount(accountsList[0])
        })()
    }, [appGlobals])

    const changeAccount = (provider) => {
        provider.send("eth_accounts",[]).then((accounts) => {
            setAccount(accounts[0])
        })
    }
    const handleProgressWallet =() =>{
        setIsOpenedProgressWallet(!isOpenedProgressWallet)
      }

    const connectWallet = async ()  => {
let transaction_form=JSON.parse(localStorage.getItem('transaction_form'))
if(!transaction_form){
    setIsOpenedProgressWallet(true)
    return
    
}else if(!transaction_form.email){
    setIsOpenedProgressWallet(true)
    return
}

        let tempProvider = await appGlobals.getWalletProviderConfirmed()
        setProvider(tempProvider)
        changeAccount(tempProvider)
    }

    return (
        <div className='ml-auto'>
            {!account
                ? (
                    <>
                        <SimpleButton type='button' size='sm' className='hidden md:block' onClick={connectWallet}>
                            <svg className='mr-[8px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6H15C13.4087 6 11.8826 6.63214 10.7574 7.75736C9.63214 8.88258 9 10.4087 9 12C9 13.5913 9.63214 15.1174 10.7574 16.2426C11.8826 17.3679 13.4087 18 15 18H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V6ZM15 8H23V16H15C13.9391 16 12.9217 15.5786 12.1716 14.8284C11.4214 14.0783 11 13.0609 11 12C11 10.9391 11.4214 9.92172 12.1716 9.17157C12.9217 8.42143 13.9391 8 15 8ZM15 11V13H18V11H15Z" fill="white" fillOpacity="0.8"/>
                            </svg>

                            Connect Wallet
                        </SimpleButton>
                        <button className='py-[5px] px-[10px] md:hidden bg-[#3F99FF] hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)] rounded-[8px]' onClick={connectWallet}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_440_1971)">
                                    <path d="M12.5524 3.44731H8.82896C7.98252 3.44731 7.17075 3.78355 6.57223 4.38207C5.97371 4.98059 5.63747 5.79236 5.63747 6.6388C5.63747 7.48523 5.97371 8.297 6.57223 8.89552C7.17075 9.49404 7.98252 9.83029 8.82896 9.83029H12.5524V10.8941C12.5524 11.0352 12.4963 11.1705 12.3966 11.2702C12.2968 11.37 12.1615 11.426 12.0204 11.426H2.44598C2.3049 11.426 2.16961 11.37 2.06986 11.2702C1.9701 11.1705 1.91406 11.0352 1.91406 10.8941V2.38348C1.91406 2.2424 1.9701 2.10711 2.06986 2.00736C2.16961 1.9076 2.3049 1.85156 2.44598 1.85156H12.0204C12.1615 1.85156 12.2968 1.9076 12.3966 2.00736C12.4963 2.10711 12.5524 2.2424 12.5524 2.38348V3.44731ZM8.82896 4.51114H13.0843V8.76646H8.82896C8.26467 8.76646 7.72349 8.54229 7.32447 8.14328C6.92546 7.74427 6.7013 7.20309 6.7013 6.6388C6.7013 6.07451 6.92546 5.53333 7.32447 5.13431C7.72349 4.7353 8.26467 4.51114 8.82896 4.51114ZM8.82896 6.10688V7.17071H10.4247V6.10688H8.82896Z" fill="white" fillOpacity="0.8"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_440_1971">
                                        <rect width="12.766" height="12.766" fill="white" transform="translate(0.318359 0.255859)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </>
                )

                : (
                    <HeaderBalance provider={provider} address={account} />
                )
            }
          {isOpenedProgressWallet && <ProgressConnectYourWallet onClose={handleProgressWallet} 
      {...txModalProps}
      />}
        </div>
    )
}

export default HeaderWalletInfo