export const _chainVars = [
    {
        chainId: 80001,
        explorar: 'https://mumbai.polygonscan.com/',
        name:'Polygon Mumbai (Testnet)',
        rpc: process.env.REACT_APP_POLYGON_MUMBAI_RPC,
        currency_name:'MATIC',
        currency_code:'MATIC',
        decimals:18
    },
    {
        chainId: 137,
        explorar: 'https://polygonscan.com/',
        name:'Polygon (Mainnet)',
        rpc: process.env.REACT_APP_POLYGON_MAINNET_RPC,
        currency_name:'MATIC',
        currency_code:'MATIC',
        decimals:18
    },
]