import { ethers } from 'ethers'

export const landPrices = async (token = 0,returnNumeric = false) => {
    let provider = new ethers.providers.JsonRpcProvider(process.env.POLYGON_RPC_PROVIDER);
    let contract  = new ethers.Contract(process.env.LAND_RESERVER_CONTRACT_ADDRESS, [{
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
