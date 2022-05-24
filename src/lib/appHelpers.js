import { _chainVars } from "lib/constants/chainVars"

export const getChainData = async (provider) => {
    let {chainId} = await provider.getNetwork()
    return (_chainVars.filter((el) => {return el.chainId === chainId}))[0]
}