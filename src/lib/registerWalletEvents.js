import React from 'react'

const registerWalletEvents = (provider) => {
    if(provider!== null){
        provider.provider.on('accountsChanged', (accounts) => {
            
          let userWallet = localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null
          localStorage.setItem('wallet',JSON.stringify({address:accounts[0], wallet: userWallet.wallet}))
          window.location.reload()

        });
        provider.provider.on('chainChanged', (chainId) => {
            window.location.reload()
        });
        provider.provider.on('disconnect',console.log);
    }
}

export default registerWalletEvents