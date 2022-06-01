export const _whitelistManagerAbi =  [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldLandReserverAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newLandReserverAddress",
        "type": "address"
      }
    ],
    "name": "LandReserverAddressChanged",
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
    "name": "WhitelistDiscountPercentagesUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[6]",
        "name": "oldParcelLimitForBuyers",
        "type": "uint256[6]"
      },
      {
        "indexed": false,
        "internalType": "uint256[6]",
        "name": "newParcelLimitForBuyers",
        "type": "uint256[6]"
      }
    ],
    "name": "WhitelistParcelLimitForBuyersUpdated",
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
    "inputs": [],
    "name": "getLandReserverAddress",
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
        "internalType": "address",
        "name": "landReserverAddress",
        "type": "address"
      }
    ],
    "name": "setLandReserverAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "getBuyerApplicableWhitelistId",
    "outputs": [
      {
        "internalType": "bool",
        "name": "atleastOneWhitelistApplied",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "buyerWhitelistId",
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
    "inputs": [],
    "name": "getAppliedWhitelists",
    "outputs": [
      {
        "internalType": "uint256[10]",
        "name": "",
        "type": "uint256[10]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[10]",
        "name": "newAppliedWhitelists",
        "type": "uint256[10]"
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
        "name": "whitelistId",
        "type": "uint256"
      },
      {
        "internalType": "uint256[6]",
        "name": "newPerParcelLimitForBuyers",
        "type": "uint256[6]"
      }
    ],
    "name": "setParcelLimitForBuyersForGivenWhitelist",
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
      }
    ],
    "name": "getParcelLimitsForWhitelistedBuyers",
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
        "internalType": "uint256",
        "name": "whitelistId",
        "type": "uint256"
      },
      {
        "internalType": "uint256[6]",
        "name": "newDiscountPercentages",
        "type": "uint256[6]"
      }
    ],
    "name": "setDiscountPercentagesForGivenWhitelist",
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
      }
    ],
    "name": "getDiscountsForGivenWhitelist",
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
    "name": "getQuantitiesPurchasedForWhitelistedBuyer",
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
        "internalType": "uint256",
        "name": "buyerWhitelistId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "buyerAddresss",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "parcelType",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantityPurchased",
        "type": "uint256"
      }
    ],
    "name": "setQuantityPurchasedForWhitelistedBuyerForGivenParcelType",
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
        "internalType": "address",
        "name": "buyerAddress",
        "type": "address"
      }
    ],
    "name": "getWhitelistLimitsDiscountsQuantitiesPurchasedByBuyer",
    "outputs": [
      {
        "internalType": "uint256[6][3]",
        "name": "",
        "type": "uint256[6][3]"
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
    "inputs": [
      {
        "internalType": "uint256[6]",
        "name": "parcelLimitForBuyers",
        "type": "uint256[6]"
      },
      {
        "internalType": "uint256[6]",
        "name": "parcelDiscounts",
        "type": "uint256[6]"
      },
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
  }
]