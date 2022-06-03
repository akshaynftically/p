
const CONSTANT={
      
   "WMATIC":{
           "TOKEN NAME": "WMATIC",
           "TOKEN ADDRESS": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
           "CONVERSION(Not approved (Need to be checked))": "1E+18",
           "DECIMALS": "18"
       },
       "USDT":  {
           "TOKEN NAME": "USDT",
           "TOKEN ADDRESS": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
           "CONVERSION(Not approved (Need to be checked))": "103370",
           "FIXED CONVERSION": "897334",
           "DECIMALS": "6"
       },
       "USDC":     {
           "TOKEN NAME": "USDC ",
           "TOKEN ADDRESS": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
           "CONVERSION(Not approved (Need to be checked))": "103504",
           "FIXED CONVERSION": "894154",
           "DECIMALS": "6"
       },
       "BUSD":  {
           "TOKEN NAME": "BUSD",
           "TOKEN ADDRESS": "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
           "FIXED CONVERSION": "8.8635E+17",
           "DECIMALS": "18"
       },
       "ETH": {
           "TOKEN NAME": "ETH ",
           "TOKEN ADDRESS": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
           "CONVERSION(Not approved (Need to be checked))": "3.8777E+14",
           "FIXED CONVERSION": "3.758E+14",
           "DECIMALS": "18"
       },
       "WBTC":  {
           "TOKEN NAME": "WBTC",
           "TOKEN ADDRESS": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
           "CONVERSION(Not approved (Need to be checked))": "2.887E+13",
           "FIXED CONVERSION": "2.717E+13",
           "DECIMALS": "8" // no use of this decimal
       },
       "BNB":  {
           "TOKEN NAME": "BNB",
           "TOKEN ADDRESS": "0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F",
           "FIXED CONVERSION": "2.68635E+15",
           "DECIMALS": "18"
       },
       "AAVE":  {
           "TOKEN NAME": "AAVE",
           "TOKEN ADDRESS": "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
           "CONVERSION(Not approved (Need to be checked))": "7.57496E+15",
           "FIXED CONVERSION": "7.6376E+15",
           "DECIMALS": "18"
       },
       "LINK":  {
           "TOKEN NAME": "LINK",
           "TOKEN ADDRESS": "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
           "CONVERSION(Not approved (Need to be checked))": "9.6341E+16",
           "FIXED CONVERSION": "9.58912E+16",
           "DECIMALS": "18"
       },
       "LUNA":   {
           "TOKEN NAME": "LUNA",
           "TOKEN ADDRESS": "0x9cd6746665D9557e1B9a775819625711d0693439",
           "FIXED CONVERSION": "14850",
           "DECIMALS": "6"
       },
       "MANA":    {
           "TOKEN NAME": "MANA",
           "TOKEN ADDRESS": "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
           "FIXED CONVERSION": "7.2896E+17",
           "DECIMALS": "18"
       },
       "SAND":   {
           "TOKEN NAME": "SAND",
           "TOKEN ADDRESS": "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
           "FIXED CONVERSION": "4.79642E+17",
           "DECIMALS": "18"
       }
      }
  


export const _selectTokenOptions = [
      {
        "id":0,
        "logo":"token_logo0",
        "value":"MATIC",
        "label":"MATIC",
        "contract_address":"0x0000000000000000000000000000000000000000",
        "decimals":18
      },
      {
         "id":1,
         "logo":"token_logo4",
         "value":"WMATIC",
         "label":"WMATIC ERC20 on Polygon Network",
         "contract_address":getData('WMATIC'), 
         "decimals":18
      },
      {
         "id":2,
         "logo":"token_logo1",
         "value":"USDT ERC20",
         "label":"USDT ERC20 on Polygon Network",
         "contract_address":getData('USDT'),
         "decimals":6
      },
      {
         "id":3,
         "logo":"token_logo2",
         "value":"USDC ERC20",
         "label":"USDC ERC20 on Polygon Network",
         "contract_address":getData('USDC'),
         "decimals":6
      },
      // {
      //    "id":4,
      //    "logo":"token_logo3",
      //    "value":"BUSD ERC20",
      //    "label":"BUSD ERC20 on Polygon Network",
      //    "contract_address":getData('BUSD'),
      //    "decimals":18
      // },
      {
         "id":5,
         "logo":"token_logo5",
         "value":"ETH",
         "label":"ETH ERC20 on Polygon Network",
         "contract_address":getData('ETH'),
         "decimals":18
      },
      {
         "id":6,
         "logo":"token_logo6",
         "value":"WBTC",
         "label":"WBTC ERC20 on Polygon Network",
         "contract_address":getData('WBTC'),
         "decimals":8
      },
      {
         "id":7,
         "logo":"token_logo7",
         "value":"BNB",
         "label":"BNB ERC20 on Polygon Network",
         "contract_address":getData('BNB'),
         "decimals":18
      },
      {
         "id":8,
         "logo":"token_logo8",
         "value":"Aave",
         "label":"Aave ERC20 on Polygon Network",
         "contract_address":getData('Aave'),
         "decimals":18
      },
      {
         "id":9,
         "logo":"token_logo9",
         "value":"LINK",
         "label":"LINK ERC20 on Polygon Network",
         "contract_address":getData('LINK'),
         "decimals":18
      },
      {
         "id":10,
         "logo":"token_logo11",
         "value":"MANA",
         "label":"MANA ERC20 on Polygon Network",
         "contract_address":getData('MANA'),
         "decimals":18
      },
      {
         "id":11,
         "logo":"token_logo12",
         "value":"SAND",
         "label":"SAND ERC20 on Polygon Network",
         "contract_address":getData('SAND'),
         "decimals":18
      }
  ]

  
  function getData(value){


   switch(value) {
      case 'MATIC':
         if(process.env.REACT_APP_WMATIC_CONTRACT_ADDRESS){
            return process.env.REACT_APP_WMATIC_CONTRACT_ADDRESS

         }else{
            return CONSTANT.WMATIC["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'WMATIC':
         if(process.env.REACT_APP_WMATIC_CONTRACT_ADDRESS){
            return process.env.REACT_APP_WMATIC_CONTRACT_ADDRESS

         }else{
            return CONSTANT.WMATIC["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'USDT':
         if(process.env.REACT_APP_USDT_CONTRACT_ADDRESS){
            return process.env.REACT_APP_USDT_CONTRACT_ADDRESS

         }else{
            return CONSTANT.USDT["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'USDC':
         if(process.env.REACT_APP_USDC_CONTRACT_ADDRESS){
            return process.env.REACT_APP_USDC_CONTRACT_ADDRESS

         }else{
            return CONSTANT.USDC["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'BUSD':
         if(process.env.REACT_APP_BUSD_CONTRACT_ADDRESS){
            return process.env.REACT_APP_BUSD_CONTRACT_ADDRESS

         }else{
            return CONSTANT.BUSD["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'ETH':
           

         if(process.env.REACT_APP_ETH_CONTRACT_ADDRESS){
            return process.env.REACT_APP_ETH_CONTRACT_ADDRESS

         }else{
            return CONSTANT.ETH["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'WBTC':
         if(process.env.REACT_APP_BTC_CONTRACT_ADDRESS){
            return process.env.REACT_APP_BTC_CONTRACT_ADDRESS

         }else{
            return CONSTANT.WBTC["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'BNB':
         if(process.env.REACT_APP_BNB_CONTRACT_ADDRESS){
            return process.env.REACT_APP_BNB_CONTRACT_ADDRESS

         }else{
            return CONSTANT.BNB["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'Aave':
         if(process.env.REACT_APP_AAVE_CONTRACT_ADDRESS){
            return process.env.REACT_APP_AAVE_CONTRACT_ADDRESS

         }else{
            return CONSTANT.AAVE["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'LINK':
         if(process.env.REACT_APP_LINK_CONTRACT_ADDRESS){
            return process.env.REACT_APP_LINK_CONTRACT_ADDRESS

         }else{
            return CONSTANT.LINK["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'MANA':
         if(process.env.REACT_APP_MANA_CONTRACT_ADDRESS){
            return process.env.REACT_APP_MANA_CONTRACT_ADDRESS

         }else{
            return CONSTANT.MANA["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'LINK':
         if(process.env.REACT_APP_LINK_CONTRACT_ADDRESS){
            return process.env.REACT_APP_LINK_CONTRACT_ADDRESS

         }else{
            return CONSTANT.LINK["TOKEN ADDRESS"]
         }
        // code block
        break;
        case 'SAND':
         if(process.env.REACT_APP_SAND_CONTRACT_ADDRESS){
            return process.env.REACT_APP_SAND_CONTRACT_ADDRESS

         }else{
            return CONSTANT.SAND["TOKEN ADDRESS"]
         }
        // code block
        break;
      default:
        // code block
    }

  }

