import { ethers } from 'ethers'

export const landPrices = async (token = 0,returnNumeric = false) => {
    let provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/v1/ed1d8f3be6339832a88e7a42c1ed787ecb18e568");
    let contract  = new ethers.Contract('0x12351a2d5f5F80D1D0C56597Af14337b340CCE05',[{
        "inputs": [
            {
                "internalType": "enum LandReserver.PaymentToken",
                "name": "paymentToken",
                "type": "uint8"
            }
        ],
        "name": "getParcelPrices",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },],provider)
    let prices = await contract.getParcelPrices(token)
    if(returnNumeric){
        prices = prices.map((n) => {
            return ethers.utils.formatUnits(n.toString(),18);
        })
    }
    return prices
}
