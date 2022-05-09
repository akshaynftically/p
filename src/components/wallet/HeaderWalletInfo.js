import { SimpleButton } from 'components/buttons'
import {ethers} from 'ethers'
import {useEffect, useState} from "react";
import HeaderBalance from "./HeaderBalance";

const HeaderWalletInfo = () => {
    const [accounts, setAccounts] = useState([])
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    useEffect(() => {
        if (!window.ethereum) return
        (async () => {
            const accountsList = await provider.send("eth_accounts", [])
            setAccounts(accountsList)
            provider.provider.on('accountsChanged', changeAccount)
        })()
    }, [])

    const changeAccount = (accounts) => {
        setAccounts(accounts)
    }

    const connectWallet = async ()  => {
        await provider.send("eth_requestAccounts", [])
    }

    return (
        <div className='ml-auto'>
            {!accounts.length
                ? (
                    <SimpleButton type='button' onClick={connectWallet}>
                        <svg className='mr-[8px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 6H15C13.4087 6 11.8826 6.63214 10.7574 7.75736C9.63214 8.88258 9 10.4087 9 12C9 13.5913 9.63214 15.1174 10.7574 16.2426C11.8826 17.3679 13.4087 18 15 18H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V6ZM15 8H23V16H15C13.9391 16 12.9217 15.5786 12.1716 14.8284C11.4214 14.0783 11 13.0609 11 12C11 10.9391 11.4214 9.92172 12.1716 9.17157C12.9217 8.42143 13.9391 8 15 8ZM15 11V13H18V11H15Z" fill="white" fillOpacity="0.8"/>
                        </svg>

                        Connect Wallet
                    </SimpleButton>
                )

                : (
                    <HeaderBalance provider={provider} address={accounts[0]} />
                )
            }
        </div>
    )
}

export default HeaderWalletInfo