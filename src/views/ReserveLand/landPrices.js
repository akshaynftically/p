import { _landReserverAbi } from 'lib/constants/landReserverAbi';
import {_whitelistManagerAbi} from 'lib/constants/whitelistManagerAbi';
import { BigNumber, ethers } from 'ethers'
import { getProvider } from 'lib/walletProviders';
import { _chainVars } from 'lib/constants/chainVars';
import { getChainData } from 'lib/appHelpers';

export const landPrices = async (token,returnNumeric = false) => {
    let contract  = await getLandReserverContract()
    let prices = await contract.getParcelPrices(token.id)
    if(returnNumeric){
        prices = prices.map((n) => {
            return ethers.utils.formatUnits(n.toString(),token.decimals);
        })
    }
    return prices
}

export const getUSDPrices = async () => {
    let contract  = await getLandReserverContract()
    let prices = await contract.getParcelPricesInUSD()
    return prices.map((price) => {return parseInt(price)})
    
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
    let contract  = await getLandReserverContract()
    let discount = await contract.getApplicableDiscountPercentages(!!account ? account : "0x0000000000000000000000000000000000000000")
    return discount
}

export const getParcelAvailabilityForBuyer = async (account) => {
    let contract = await getLandReserverContract()
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
    let contract = await getWhiteListContract()
    return await contract.getBuyerApplicableWhitelistId(!!address ? address : "0x0000000000000000000000000000000000000000")
}

export const getWhiteListContract = async () =>{
    let provider = await getProvider()
    let chain = await getChainData(provider)
    let contract =new ethers.Contract(chain.whitelist_contract,_whitelistManagerAbi,provider)
    return contract
}

export const getLandReserverContract = async () =>{
    let provider = await getProvider()
    let chain = await getChainData(provider)
    let contract = new ethers.Contract(chain.land_reserver_contract,_landReserverAbi,provider)
    return contract
}