import { _chainVars } from "lib/constants/chainVars"

export const getChainData = async (provider) => {
    let {chainId} = await provider.getNetwork()
    return (_chainVars.filter((el) => {return el.chainId === chainId}))[0]
}

export const onNetwork = (chainId) => {
    let supports = (process.env.REACT_APP_CHAIN_ID).split(',')
    return (supports.filter((chain) => {return chain == chainId})).length >= 1
}