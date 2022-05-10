import { _landReserverAbi } from 'constants/landReserverAbi';
import { ethers } from 'ethers'

export const landPrices = async (token,returnNumeric = false) => {
    let provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_POLYGON_RPC_PROVIDER);
    let contract  = new ethers.Contract(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS,_landReserverAbi,provider)
    let prices = await contract.getParcelPrices(token.id)
    if(returnNumeric){
        prices = prices.map((n) => {
            return ethers.utils.formatUnits(n.toString(),token.decimals);
        })
    }
    return prices
}
