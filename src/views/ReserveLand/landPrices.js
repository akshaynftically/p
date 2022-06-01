import { _landReserverAbi } from 'lib/constants/landReserverAbi';
import {_whitelistManagerAbi} from 'lib/constants/whitelistManagerAbi';
import { BigNumber, ethers } from 'ethers'

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

export const getTotalParcelPrice = async (basket,token, account) => {
    let prices = await landPrices(token);
    let sum = BigNumber.from("0")
    prices.forEach((el,i) => {
        return sum = sum.add(el.mul(BigNumber.from(basket[i]['qty'])))
    })

    // deduct discount if any
    let maxDiscount = BigNumber.from("100000")
    let discount = await getDiscountPercentage(!!account ? account : "0x0000000000000000000000000000000000000000")
    sum = sum.mul(maxDiscount.sub(discount[0])).div(maxDiscount);
    return sum
}

export const getDiscountPercentage = async (account) => {
    let provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_POLYGON_RPC_PROVIDER);
    let contract  = new ethers.Contract(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS,_landReserverAbi,provider)
    let discount = await contract.getApplicableDiscountPercentages(!!account ? account : "0x0000000000000000000000000000000000000000")
    return discount
}

export const getParcelAvailabilityForBuyer = async (account) => {
    let provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_POLYGON_RPC_PROVIDER);
    let contract  = new ethers.Contract(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS,_landReserverAbi,provider)
    let sizes = await contract.getParcelAvailabilityForBuyer(!!account ? account : "0x0000000000000000000000000000000000000000")
    return sizes.map((el) => { return parseInt(el)})
}

export const extractReceiptData = (receipt,token) =>{
    let data
    receipt.events.forEach((event,i) =>{
        if(event.event === 'LandReserved'){
            let parcel_quantities = event.args[0]
            let amount = event.args[5]
            let conversion_factor = event.args[3]
            parcel_quantities = parcel_quantities.map((n) => n.toNumber())
            data = {p: parcel_quantities,a: ethers.utils.formatUnits(amount.toString(),token.decimals),c: conversion_factor.toString()}
        }
    })
    return data
}

export const checkInWhiteList = async(address) =>{
    let provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_POLYGON_RPC_PROVIDER);
    let whiteListContract = new ethers.Contract(process.env.REACT_APP_WHITELIST_CONTRACT_ADDRESS,_whitelistManagerAbi,provider)
    return await whiteListContract.getBuyerApplicableWhitelistId(!!address ? address : "0x0000000000000000000000000000000000000000")
}