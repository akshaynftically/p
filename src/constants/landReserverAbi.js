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
            },
            {
                "internalType": "address",
                "name": "whitelistManager",
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
                "internalType": "uint256[6]",
                "name": "oldDiscountPercentage",
                "type": "uint256[6]"
            },
            {
                "indexed": false,
                "internalType": "uint256[6]",
                "name": "newDiscountPercentage",
                "type": "uint256[6]"
            }
        ],
        "name": "DiscountPercentagesUpdated",
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
                "internalType": "enum LandReserver.PaymentToken",
                "name": "paymentToken",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_priceConversionFactor",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256[6]",
                "name": "discounts",
                "type": "uint256[6]"
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
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldWhitelistManagerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newWhitelistManagerAddress",
                "type": "address"
            }
        ],
        "name": "WhitelistManagerAddressChanged",
        "type": "event"
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
        "inputs": [
            {
                "internalType": "address",
                "name": "buyerAddress",
                "type": "address"
            }
        ],
        "name": "getApplicableDiscountPercentages",
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
        "name": "getDiscountPercentages",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "buyerAddress",
                "type": "address"
            }
        ],
        "name": "getParcelAvailabilityForBuyer",
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
        "name": "getPaymentTokensAddresses",
        "outputs": [
            {
                "internalType": "address[12]",
                "name": "",
                "type": "address[12]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPaymentTokensStatus",
        "outputs": [
            {
                "internalType": "bool[12]",
                "name": "",
                "type": "bool[12]"
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
                "internalType": "uint256[12]",
                "name": "",
                "type": "uint256[12]"
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
        "inputs": [],
        "name": "getWhitelistManager",
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
                "internalType": "uint256[6]",
                "name": "newDiscountPercentages",
                "type": "uint256[6]"
            }
        ],
        "name": "setDiscountPercentages",
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
                "internalType": "enum LandReserver.PaymentToken",
                "name": "paymentToken",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "enabled",
                "type": "bool"
            }
        ],
        "name": "setPaymentTokenStatus",
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
                "internalType": "uint256[12]",
                "name": "newPriceConversionFactors",
                "type": "uint256[12]"
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
                "name": "whitelistManagerAddress",
                "type": "address"
            }
        ],
        "name": "setWhitelistManager",
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

