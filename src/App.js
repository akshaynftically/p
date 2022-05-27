import {useLocation} from 'react-router-dom'
import clsx from 'clsx'

// Components
import {HeaderMenu} from 'components/layout/HeaderMenu'
import Footer from 'components/layout/Footer'
import FooterAlt from 'components/layout/FooterAlt'
import {Aside} from 'components/aisde/index'

// Routing
import Routes from 'routing/Routes'
import AppContext from 'components/AppContext'
import { useEffect, useState } from 'react'
import ConnectYourWallet from 'modals/ConnectYourWallet'
import { getWalletProvider } from 'lib/walletProviders'
import registerWalletEvents from 'lib/registerWalletEvents'

const App = () => {
  const {pathname} = useLocation()
  const [isOpenedConnectYourWallet, setIsOpenedConnectYourWallet ] = useState(false)
  const [isWrongNetwork, setIsWrongNetwork ] = useState('null')


  const handleToggleConnectYourWallet = () => {
    setIsOpenedConnectYourWallet(!isOpenedConnectYourWallet)
  }

  const hasWalletProvider = async () => {
    let userWallet = localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null
    return userWallet ? await getWalletProvider(userWallet.wallet) : null
  }

  const getWalletProviderConfirmed = () => {
    return new Promise((resolve, reject) => {
      let userWallet = localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null
      if(userWallet){
        getWalletProvider(userWallet.wallet).then((provider) => { resolve(provider)})
      }else{
        setIsOpenedConnectYourWallet(true)
        document.addEventListener('wallet:connected',function (ev) {
          setIsOpenedConnectYourWallet(false)
          resolve(ev.detail.provider)
        })
        document.removeEventListener('wallet:connected',{},false)
      }
    })
  }

  const appGlobals = {
    getWalletProviderConfirmed,
    hasWalletProvider,
    isWrongNetwork,
     setIsWrongNetwork
  }

  useEffect(() => {
    (async() => {
     let wp =await appGlobals.hasWalletProvider()
     registerWalletEvents(wp)
    })() 
   },[])

  return (
    <main
      className={clsx(
        {'home-page': pathname === '/'},
        {'inner-page': pathname !== '/' && pathname !== '/metaverse'}
      )}
    >
      <AppContext.Provider value={appGlobals}>
      <HeaderMenu />
      <Aside />
      <Routes />
        {pathname !== '/' && pathname !== '/about-us' && pathname !== '/terms' && pathname !== '/404' && pathname !== '/500' && <Footer />}
        {(pathname === '/' || pathname === '/about-us' || pathname === '/terms' || pathname === '/404' || pathname === '/500') && <FooterAlt />}
      {isOpenedConnectYourWallet && <ConnectYourWallet onClose={handleToggleConnectYourWallet}/>}
      </AppContext.Provider>
    </main>
  )
}

export default App
