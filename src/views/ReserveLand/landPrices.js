import { _landReserverAbi } from 'constants/landReserverAbi';
import { BigNumber, ethers } from 'ethers'

export const landPrices = async (token,returnNumeric = false) => {
    let provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_POLYGON_RPC_PROVIDER);
    let contract  = new ethers.Contract(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS,_landReserverAbi,provider)
    let prices = await contract.getParcelPrices(token.id)
    console.log(prices)
    if(returnNumeric){
        prices = prices.map((n) => {
            return ethers.utils.formatUnits(n.toString(),token.decimals);
        })
    }
    return prices
}

export const getTotalParcelPrice = async (basket,token) => {
    let prices = await landPrices(token);
    let sum = BigNumber.from("0")
    prices.forEach((el,i) => {
        return sum = sum.add(el.mul(BigNumber.from(basket[5-i]['qty'])))
    })
    // deduct discount if any
    return sum
}

export const getDiscountPercentage = async () => {
    let provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_POLYGON_RPC_PROVIDER);
    let contract  = new ethers.Contract(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS,_landReserverAbi,provider)
    return await contract.getDiscountPercentage()
}