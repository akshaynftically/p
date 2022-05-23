import { _chainVars } from 'constants/chainVars';
import globalErrorNotifier from './globalNotifier';
import { getWalletProvider } from './walletProviders';

const switchNetwork = (chainId) => {
    chainId = parseInt(chainId);
    let chain = (_chainVars.filter((ch) => ch.chainId === chainId ))[0]
    // convert to hex
    chainId = '0x' + chainId.toString(16);
    let userWallet = localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null
    getWalletProvider(userWallet.wallet).then((provider) => {
        provider.send('wallet_switchEthereumChain',
          [{ chainId: chainId }]
        ).catch((error) => {
            // This error code indicates that the chain has not been added to MetaMask.
            if (error.code === 4902) {
                provider.send('wallet_addEthereumChain',
                    [{
                        chainId: chainId,
                        rpcUrls: [chain.rpc],
                        chainName: chain.name,
                        blockExplorerUrls: [chain.explorar],
                        nativeCurrency: {
                            name: chain.currency_name,
                            symbol: chain.currency_code,
                            decimals: chain.decimals,
                        }
                    }],
                ).catch((addError) => {
                // handle "add" error
                });
            }
            if(error.code === 4001) {
                let err = {scope:'comearth', message: 'Network switching rejected'}
                globalErrorNotifier(err)
            }
            // handle other "switch" errors
        });
    })
}

export default switchNetwork