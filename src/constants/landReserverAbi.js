export const _landReserverAbi = [
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "platformWallet",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "passTokenContractAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "passSourceWallet",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldDiscountPercentage",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newDiscountPercentage",
                "type": "uint256"
            }
        ],
        "name": "DiscountPercentageUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256[6]",
                "name": "parcelQuantities",
                "type": "uint256[6]"
            },
            {
                "indexed": false,
                "internalType": "uint256[6]",
                "name": "_parcelPricesInUSD",
                "type": "uint256[6]"
            },
            {
                "indexed": false,
                "internalType": "uint256[13]",
                "name": "_priceConversionFactors",
                "type": "uint256[13]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_discountPercentage",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum LandReserver.PaymentToken",
                "name": "paymentToken",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalPayablePrice",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tNumber",
                "type": "uint256"
            }
        ],
        "name": "LandReserved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldPassSourceWallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newPassSourceWallet",
                "type": "address"
            }
        ],
        "name": "PassSourceWalletChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldWallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newWallet",
                "type": "address"
            }
        ],
        "name": "PlatformWalletChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "enum LandReserver.ReserverStatus",
                "name": "oldStatus",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "enum LandReserver.ReserverStatus",
                "name": "newStatus",
                "type": "uint8"
            }
        ],
        "name": "ReserverStatusChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "parcelTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldParcelCount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newParcelCount",
                "type": "uint256"
            }
        ],
        "name": "TotalParcelsForSaleUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "APPLIED_WHITELIST_COUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ERC20_PAYMENT_TOKENS_COUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PARCEL_TYPES_COUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WHITELISTED_NO",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WHITELISTED_YES",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "buyerAddresses",
                "type": "address[]"
            }
        ],
        "name": "createWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAppliedWhitelists",
        "outputs": [
            {
                "internalType": "uint256[3]",
                "name": "",
                "type": "uint256[3]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDiscountPercentage",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNextWhitelistId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
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
    },
    {
        "inputs": [],
        "name": "getPassSourceWallet",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPassTokenContract",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPerParcelLimitForBuyers",
        "outputs": [
            {
                "internalType": "uint256[6]",
                "name": "",
                "type": "uint256[6]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformWallet",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPriceConversionFactors",
        "outputs": [
            {
                "internalType": "uint256[13]",
                "name": "",
                "type": "uint256[13]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "whitelistId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "buyerAddress",
                "type": "address"
            }
        ],
        "name": "getSingleAddressWhitelistStatus",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalParcelsForSaleAndSoldCount",
        "outputs": [
            {
                "internalType": "uint256[6]",
                "name": "",
                "type": "uint256[6]"
            },
            {
                "internalType": "uint256[6]",
                "name": "",
                "type": "uint256[6]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "whitelistId",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistAddressCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "whitelistId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pageNumber",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pageSize",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistAddresses",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "uint8[]",
                "name": "",
                "type": "uint8[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "paymentTokensAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[6]",
                "name": "parcelQuantities",
                "type": "uint256[6]"
            },
            {
                "internalType": "enum LandReserver.PaymentToken",
                "name": "paymentToken",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "tNumber",
                "type": "uint256"
            }
        ],
        "name": "reserveLand",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "reserverStatus",
        "outputs": [
            {
                "internalType": "enum LandReserver.ReserverStatus",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[3]",
                "name": "newAppliedWhitelists",
                "type": "uint256[3]"
            }
        ],
        "name": "setAppliedWhitelists",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newDiscountPercentage",
                "type": "uint256"
            }
        ],
        "name": "setDiscountPercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[6]",
                "name": "newParcelPricesInUSD",
                "type": "uint256[6]"
            }
        ],
        "name": "setParcelPricesInUSD",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "passSourceWallet",
                "type": "address"
            }
        ],
        "name": "setPassSourceWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[6]",
                "name": "newPerParcelLimitForBuyers",
                "type": "uint256[6]"
            }
        ],
        "name": "setPerParcelLimitForBuyers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "platformWallet",
                "type": "address"
            }
        ],
        "name": "setPlatformWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[13]",
                "name": "newPriceConversionFactors",
                "type": "uint256[13]"
            }
        ],
        "name": "setPriceConversionFactors",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "enum LandReserver.ReserverStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "setReserverStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "parcelTokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "newParcelCount",
                "type": "uint256"
            }
        ],
        "name": "setTotalParcelsForSale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "whitelistId",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "buyerAddresses",
                "type": "address[]"
            },
            {
                "internalType": "uint8",
                "name": "whitelistStatus",
                "type": "uint8"
            }
        ],
        "name": "updateWhitelistAddresses",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "erc20Contract",
                "type": "address"
            }
        ],
        "name": "withdrawERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawNativeToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

