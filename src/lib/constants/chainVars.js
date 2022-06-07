export const _chainVars = [
    {
        chainId: 1,
        explorar: 'https://etherscan.io/',
        name:'Ethereum (Mainnet)',
        rpc: process.env.REACT_APP_ETHEREUM_MAINNET_RPC,
        currency_name:'ETH',
        currency_code:'ETH',
        decimals:18,
        land_reserver_contract: process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS_ETHEREUEM,
        whitelist_contract: process.env.REACT_APP_WHITELIST_CONTRACT_ADDRESS_ETHEREUEM
    },
    {
        chainId: 4,
        explorar: 'https://rinkeby.etherscan.io/',
        name:'Rinkeby (Testnet)',
        rpc: process.env.REACT_APP_RINKEBY_TESTNET_RPC,
        currency_name:'ETH',
        currency_code:'ETH',
        decimals:18,
        land_reserver_contract: process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS_ETHEREUEM,
        whitelist_contract: process.env.REACT_APP_WHITELIST_CONTRACT_ADDRESS_ETHEREUEM
    },
    {
        chainId: 137,
        explorar: 'https://polygonscan.com/',
        name:'Polygon (Mainnet)',
        rpc: process.env.REACT_APP_POLYGON_MAINNET_RPC,
        currency_name:'MATIC',
        currency_code:'MATIC',
        decimals:18,
        land_reserver_contract: process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS_POLYGON,
        whitelist_contract: process.env.REACT_APP_WHITELIST_CONTRACT_ADDRESS_POLYGON
    },
    {
        chainId: 80001,
        explorar: 'https://mumbai.polygonscan.com/',
        name:'Polygon Mumbai (Testnet)',
        rpc: process.env.REACT_APP_POLYGON_MUMBAI_RPC,
        currency_name:'MATIC',
        currency_code:'MATIC',
        decimals:18,
        land_reserver_contract: process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS_POLYGON,
        whitelist_contract: process.env.REACT_APP_WHITELIST_CONTRACT_ADDRESS_POLYGON
    },
    
]