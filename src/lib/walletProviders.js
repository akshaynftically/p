import { ethers } from "ethers";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import logo from 'assets/img/logo.svg'
import Fortmatic from 'fortmatic'
import WalletConnectProvider from '@walletconnect/web3-provider'
import apiRepository from "./apiRepository";
import { isMobile } from "react-device-detect";

export const getWalletProvider = async (walletTitle) =>{
    let walletWeb3;
    let userWallet = localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null
    if(isMobile){
      let userInfo = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
      let userString = window.location.search === '' ? '?user_id='+userInfo.id : '&user_id='+userInfo.id
      if(walletTitle === 'MetaMask' && typeof window.ethereum === "undefined"){
        let locat= 'https://metamask.app.link/dapp/'+window.location.host+window.location.pathname+userString
        window.location = locat
        return
      }
      if(walletTitle === 'Coinbase Wallet' && typeof window.ethereum === "undefined"){
        let locat= 'https://go.cb-w.com/dapp?cb_url='+window.location.host+window.location.pathname+userString
        window.location = locat
        return
      }
    }
    if(walletTitle === "MetaMask") {
      // if wallet is metamask pluck only metamask provider
      if(typeof window.ethereum.providers != "undefined"){
        walletWeb3 = window.ethereum.providers.find((provider) => provider.isMetaMask);
      }else{
        walletWeb3 = window.ethereum;
      }
      if(walletWeb3) {
        let accounts =  await walletWeb3.request({method: "eth_requestAccounts"})
        if(userWallet === null){
            await new apiRepository().addWallets({address : accounts[0], wallet : 'MetaMask'})
            localStorage.setItem('wallet', JSON.stringify({address : accounts[0], wallet : 'MetaMask'}))
        }
      }
    }
    if(walletTitle === "Fortmatic") {
      let fm = new Fortmatic(process.env.REACT_APP_FORTMATIC_API_KEY,{
        rpcUrl: process.env.REACT_APP_POLYGON_RPC_PROVIDER,
        chainId: process.env.REACT_CHAIN_ID
      })
      if(userWallet === null){
        let accounts = await fm.user.login();
        await new apiRepository().addWallets({address : accounts[0], wallet : 'Fortmatic'})
        localStorage.setItem('wallet', JSON.stringify({address : accounts[0], wallet : 'Fortmatic'}))
      }
      walletWeb3 = fm.getProvider();
    }
    if(walletTitle === "Coinbase Wallet"){
      let coinbaseWallet = new CoinbaseWalletSDK({
        appName: 'COMEARTH',
        appLogoUrl: logo,
        darkMode: false
      })
      walletWeb3 = coinbaseWallet.makeWeb3Provider(process.env.REACT_APP_POLYGON_RPC_PROVIDER,process.env.REACT_CHAIN_ID)
      if(userWallet === null){
        let accounts = await walletWeb3.enable();
        await new apiRepository().addWallets({address : accounts[0], wallet : 'Coinbase Wallet'})
        localStorage.setItem('wallet', JSON.stringify({address : accounts[0], wallet : 'Coinbase Wallet'}))
      }
    }
    if(walletTitle === "WalletConnect"){
      let rpcObject = process.env.REACT_CHAIN_ID === 80001 ? {80001 : process.env.REACT_APP_POLYGON_RPC_PROVIDER} : {137 : process.env.REACT_APP_POLYGON_RPC_PROVIDER}
      walletWeb3 = new WalletConnectProvider({
        rpc : rpcObject
      })
      if(userWallet === null){
        let accounts = await walletWeb3.enable();
        await new apiRepository().addWallets({address : accounts[0], wallet : 'WalletConnect'})
        localStorage.setItem('wallet', JSON.stringify({address : accounts[0], wallet : 'WalletConnect'}))
      }
    }
    let provider = new ethers.providers.Web3Provider(walletWeb3);
    return provider
}

export const isConnected = async () => {
  let userWallet = localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null
  return userWallet ? await getWalletProvider(userWallet.wallet) : null
}

export const getProvider = async () => {
  let provider
  // default provider first
  if(!(provider = await isConnected())){
      // fallback provider if no wallet connected
      return provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ETHERUEM_RPC_PROVIDER);
  }
  return provider
}