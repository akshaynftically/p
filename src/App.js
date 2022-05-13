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
import { useState } from 'react'
import ConnectYourWallet from 'modals/ConnectYourWallet'
import { getWalletProvider } from 'lib/walletProviders'

const App = () => {
  const {pathname} = useLocation()
  const [isOpenedConnectYourWallet, setIsOpenedConnectYourWallet ] = useState(false)

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
        resolve(getWalletProvider(userWallet.wallet))
      }else{
        setIsOpenedConnectYourWallet(true)
        document.addEventListener('wallet:connected',function (ev) {
          resolve(ev.detail.provider)
          setIsOpenedConnectYourWallet(false)
        })
        document.removeEventListener('wallet:connected',{},false)
      }
    })
  }

  const appGlobals = {
    getWalletProviderConfirmed,
    hasWalletProvider
  }

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
      {isOpenedConnectYourWallet && <ConnectYourWallet onClose={handleToggleConnectYourWallet}/>}
      </AppContext.Provider>
      {pathname !== '/' && <Footer />}
      {pathname === '/' && <FooterAlt />}
    </main>
  )
}

export default App
