import {useContext, useEffect, useState} from 'react'
import {utils} from 'ethers'
import AccountModal from 'modals/AccountModal'
import CopyToClipboard from "../clipboard/CopyToClipboard";
import {SimpleButton} from "../buttons";
import Select from "../form/Select";
import {components} from "react-select";
import WrongNetworkModal from "../../modals/WrongNetworkModal";
import AppContext from 'components/AppContext';
import { useFieldArray } from 'react-hook-form';
import { getChainData, onNetwork } from 'lib/appHelpers';
import switchNetwork from 'lib/switchNetwork';

const _networks = [
    {
        value: 1,
        label: 'Polygon (Mainnet)',
        chainId: 137,
        mainnet: true,
        icon: <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8469 5.49895C15.4594 5.27061 14.9557 5.27061 14.5295 5.49895L11.5074 7.24948L9.45389 8.39115L6.43174 10.1416C6.04428 10.37 5.54059 10.37 5.1144 10.1416L2.71218 8.77169C2.32472 8.54334 2.05351 8.12472 2.05351 7.66809V4.96618C2.05351 4.50952 2.28598 4.09091 2.71218 3.86258L5.07565 2.53066C5.4631 2.30233 5.96679 2.30233 6.39299 2.53066L8.75648 3.86258C9.14389 4.09091 9.41516 4.50952 9.41516 4.96618V6.71669L11.4686 5.537V3.78647C11.4686 3.32981 11.2362 2.91121 10.81 2.68288L6.43174 0.171247C6.04428 -0.0570825 5.54059 -0.0570825 5.1144 0.171247L0.658672 2.68288C0.232472 2.91121 0 3.32981 0 3.78647V8.84778C0 9.30441 0.232472 9.72303 0.658672 9.95138L5.1144 12.463C5.50185 12.6914 6.00554 12.6914 6.43174 12.463L9.45389 10.7505L11.5074 9.57084L14.5295 7.85836C14.917 7.63001 15.4207 7.63001 15.8469 7.85836L18.2103 9.19031C18.5978 9.41859 18.869 9.8372 18.869 10.2939V12.9958C18.869 13.4524 18.6365 13.8711 18.2103 14.0994L15.8469 15.4694C15.4594 15.6977 14.9557 15.6977 14.5295 15.4694L12.166 14.1374C11.7786 13.9091 11.5074 13.4905 11.5074 13.0338V11.2833L9.45389 12.463V14.2136C9.45389 14.6702 9.68636 15.0888 10.1126 15.3172L14.5683 17.8287C14.9557 18.0571 15.4594 18.0571 15.8856 17.8287L20.3413 15.3172C20.7288 15.0888 21 14.6702 21 14.2136V9.15223C21 8.6956 20.7675 8.27698 20.3413 8.04863L15.8469 5.49895Z" fill="#7A3FE4"/>
        </svg>
    },
    {
        value: 2,
        label: 'Polygon (Testnet)',
        chainId: 80001,
        mainnet: false,
        icon: <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8469 5.49895C15.4594 5.27061 14.9557 5.27061 14.5295 5.49895L11.5074 7.24948L9.45389 8.39115L6.43174 10.1416C6.04428 10.37 5.54059 10.37 5.1144 10.1416L2.71218 8.77169C2.32472 8.54334 2.05351 8.12472 2.05351 7.66809V4.96618C2.05351 4.50952 2.28598 4.09091 2.71218 3.86258L5.07565 2.53066C5.4631 2.30233 5.96679 2.30233 6.39299 2.53066L8.75648 3.86258C9.14389 4.09091 9.41516 4.50952 9.41516 4.96618V6.71669L11.4686 5.537V3.78647C11.4686 3.32981 11.2362 2.91121 10.81 2.68288L6.43174 0.171247C6.04428 -0.0570825 5.54059 -0.0570825 5.1144 0.171247L0.658672 2.68288C0.232472 2.91121 0 3.32981 0 3.78647V8.84778C0 9.30441 0.232472 9.72303 0.658672 9.95138L5.1144 12.463C5.50185 12.6914 6.00554 12.6914 6.43174 12.463L9.45389 10.7505L11.5074 9.57084L14.5295 7.85836C14.917 7.63001 15.4207 7.63001 15.8469 7.85836L18.2103 9.19031C18.5978 9.41859 18.869 9.8372 18.869 10.2939V12.9958C18.869 13.4524 18.6365 13.8711 18.2103 14.0994L15.8469 15.4694C15.4594 15.6977 14.9557 15.6977 14.5295 15.4694L12.166 14.1374C11.7786 13.9091 11.5074 13.4905 11.5074 13.0338V11.2833L9.45389 12.463V14.2136C9.45389 14.6702 9.68636 15.0888 10.1126 15.3172L14.5683 17.8287C14.9557 18.0571 15.4594 18.0571 15.8856 17.8287L20.3413 15.3172C20.7288 15.0888 21 14.6702 21 14.2136V9.15223C21 8.6956 20.7675 8.27698 20.3413 8.04863L15.8469 5.49895Z" fill="#7A3FE4"/>
        </svg>
    },
    {
        value: 3,
        label: 'Ethereum (Mainnet)',
        chainId: 1,
        mainnet: true,
        icon: <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8469 5.49895C15.4594 5.27061 14.9557 5.27061 14.5295 5.49895L11.5074 7.24948L9.45389 8.39115L6.43174 10.1416C6.04428 10.37 5.54059 10.37 5.1144 10.1416L2.71218 8.77169C2.32472 8.54334 2.05351 8.12472 2.05351 7.66809V4.96618C2.05351 4.50952 2.28598 4.09091 2.71218 3.86258L5.07565 2.53066C5.4631 2.30233 5.96679 2.30233 6.39299 2.53066L8.75648 3.86258C9.14389 4.09091 9.41516 4.50952 9.41516 4.96618V6.71669L11.4686 5.537V3.78647C11.4686 3.32981 11.2362 2.91121 10.81 2.68288L6.43174 0.171247C6.04428 -0.0570825 5.54059 -0.0570825 5.1144 0.171247L0.658672 2.68288C0.232472 2.91121 0 3.32981 0 3.78647V8.84778C0 9.30441 0.232472 9.72303 0.658672 9.95138L5.1144 12.463C5.50185 12.6914 6.00554 12.6914 6.43174 12.463L9.45389 10.7505L11.5074 9.57084L14.5295 7.85836C14.917 7.63001 15.4207 7.63001 15.8469 7.85836L18.2103 9.19031C18.5978 9.41859 18.869 9.8372 18.869 10.2939V12.9958C18.869 13.4524 18.6365 13.8711 18.2103 14.0994L15.8469 15.4694C15.4594 15.6977 14.9557 15.6977 14.5295 15.4694L12.166 14.1374C11.7786 13.9091 11.5074 13.4905 11.5074 13.0338V11.2833L9.45389 12.463V14.2136C9.45389 14.6702 9.68636 15.0888 10.1126 15.3172L14.5683 17.8287C14.9557 18.0571 15.4594 18.0571 15.8856 17.8287L20.3413 15.3172C20.7288 15.0888 21 14.6702 21 14.2136V9.15223C21 8.6956 20.7675 8.27698 20.3413 8.04863L15.8469 5.49895Z" fill="#7A3FE4"/>
        </svg>
    },
    {
        value: 4,
        label: 'Rinkeby (Testnet)',
        chainId: 4,
        mainnet: false,
        icon: <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8469 5.49895C15.4594 5.27061 14.9557 5.27061 14.5295 5.49895L11.5074 7.24948L9.45389 8.39115L6.43174 10.1416C6.04428 10.37 5.54059 10.37 5.1144 10.1416L2.71218 8.77169C2.32472 8.54334 2.05351 8.12472 2.05351 7.66809V4.96618C2.05351 4.50952 2.28598 4.09091 2.71218 3.86258L5.07565 2.53066C5.4631 2.30233 5.96679 2.30233 6.39299 2.53066L8.75648 3.86258C9.14389 4.09091 9.41516 4.50952 9.41516 4.96618V6.71669L11.4686 5.537V3.78647C11.4686 3.32981 11.2362 2.91121 10.81 2.68288L6.43174 0.171247C6.04428 -0.0570825 5.54059 -0.0570825 5.1144 0.171247L0.658672 2.68288C0.232472 2.91121 0 3.32981 0 3.78647V8.84778C0 9.30441 0.232472 9.72303 0.658672 9.95138L5.1144 12.463C5.50185 12.6914 6.00554 12.6914 6.43174 12.463L9.45389 10.7505L11.5074 9.57084L14.5295 7.85836C14.917 7.63001 15.4207 7.63001 15.8469 7.85836L18.2103 9.19031C18.5978 9.41859 18.869 9.8372 18.869 10.2939V12.9958C18.869 13.4524 18.6365 13.8711 18.2103 14.0994L15.8469 15.4694C15.4594 15.6977 14.9557 15.6977 14.5295 15.4694L12.166 14.1374C11.7786 13.9091 11.5074 13.4905 11.5074 13.0338V11.2833L9.45389 12.463V14.2136C9.45389 14.6702 9.68636 15.0888 10.1126 15.3172L14.5683 17.8287C14.9557 18.0571 15.4594 18.0571 15.8856 17.8287L20.3413 15.3172C20.7288 15.0888 21 14.6702 21 14.2136V9.15223C21 8.6956 20.7675 8.27698 20.3413 8.04863L15.8469 5.49895Z" fill="#7A3FE4"/>
        </svg>
    },
]

const networkSelectOption = (props) => {
    return (
        <components.Option {...props}>
            <div className='flex items-center'>
                <div className='mr-[8px]'>
                    {props.data.icon}
                </div>

                <span>{props.data.label}</span>

                {props.isSelected && (
                    <svg className='ml-auto' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.22222L7.53846 14L20 2" stroke="#80D984" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )}
            </div>
        </components.Option>
    )
}

const networkSelectValueContainer = (props) => {
    return (
        <components.SingleValue {...props}>
            {props.getValue().length ? (
                <div className='flex items-center'>
                    <div className='mr-[8px]'>
                        {props.getValue()[0].icon}
                    </div>

                    <span>{props.getValue()[0].label}</span>
                </div>
            ) : (
                <>
                    {props.children}
                </>
            )}
        </components.SingleValue>
    )
}

const HeaderBalance = (props) => {

    const mainnetType=!(process.env.REACT_APP_IS_MAINNET_ENABLED == 'false')                    //converting  env data string into boolean
    const {address, provider} = props
    const [balance, setBalance] = useState('0.0')
    const [accountModal, setAccountModal] = useState(false)
    const [wrongNetworkModal, setWrongNetworkModal] = useState(false)
    const [selectNetwork, setSelectNetwork] = useState(_networks[0])
    const appGlobals = useContext(AppContext)
    const [addressExplorar, setAddressExplorar] = useState('')


    

    const customSelectStyles = {
        control: (styles) => ({
            ...styles,
            minHeight: 44,
            background: '#262728',
            borderColor: '#262728',
            borderRadius: '8px'
        }),
        menu: (styles) => ({
            ...styles,
            minWidth: '330px',
            background: '#363738'
        }),
        option: (styles, state) => ({
            ...styles,
            background: state.isFocused ? '#262728' : '#363738',
            color: '#ffffff',
            fontSize: '14px',
            padding: '10px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
        })
    }

    useEffect(() => {
        (async () => {
            let tempProvider = await appGlobals.hasWalletProvider()
            if(!tempProvider) return
            let chainId = (await tempProvider.getNetwork()).chainId
            appGlobals.setIsWrongNetwork(onNetwork(chainId) )
            if(onNetwork(chainId)){
                const networkConfig = await getChainData(tempProvider)
                setAddressExplorar(networkConfig.explorar+'/address/'+address)
            }
            const getNetwork=_networks.filter((el) => {return el.chainId === chainId})
            if(getNetwork.length!==0){
                setSelectNetwork(_networks.filter((el) => {return el.chainId === chainId})[0])
            }
            setBalance(utils.formatEther(await provider.getBalance(address)))
        })()
    }, [appGlobals,provider,address])

    const handleCloseAccountModal = () => {
        setAccountModal(false)
    }

    const handleCloseWrongNetworkModal = () => {
        setWrongNetworkModal(false)
    }

    const handleOpenAccountModal = (e) => {
        if (e.target.closest('[data-tip]')) return
        setAccountModal(true)
    }

    // const handleSelectNetwork = async (val) => {
    //     switchNetwork(val.chainId)
    //     setSelectNetwork(val)
    // }

    return (
        <div className='flex items-center'>
            {/* <Select value={selectNetwork}
                    options={_networks.filter(item=>item.mainnet==mainnetType)}
                    customStyles={customSelectStyles}
                    placeholder='Please Select Token'
                    className='hidden lg:block mr-[12px]'
                    isSearchable={false}
                    onChange={handleSelectNetwork}
                    components={{SingleValue: networkSelectValueContainer}}
                    Option={networkSelectOption}>
            </Select> */}
            {appGlobals.isWrongNetwork? (
                <>
                    <div className='cursor-pointer hidden md:flex bg-[#262728] items-center rounded-[8px] pl-[24px] h-[44px]' onClick={handleOpenAccountModal}>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8469 5.49895C15.4594 5.27061 14.9557 5.27061 14.5295 5.49895L11.5074 7.24948L9.45389 8.39115L6.43174 10.1416C6.04428 10.37 5.54059 10.37 5.1144 10.1416L2.71218 8.77169C2.32472 8.54334 2.05351 8.12472 2.05351 7.66809V4.96618C2.05351 4.50952 2.28598 4.09091 2.71218 3.86258L5.07565 2.53066C5.4631 2.30233 5.96679 2.30233 6.39299 2.53066L8.75648 3.86258C9.14389 4.09091 9.41516 4.50952 9.41516 4.96618V6.71669L11.4686 5.537V3.78647C11.4686 3.32981 11.2362 2.91121 10.81 2.68288L6.43174 0.171247C6.04428 -0.0570825 5.54059 -0.0570825 5.1144 0.171247L0.658672 2.68288C0.232472 2.91121 0 3.32981 0 3.78647V8.84778C0 9.30441 0.232472 9.72303 0.658672 9.95138L5.1144 12.463C5.50185 12.6914 6.00554 12.6914 6.43174 12.463L9.45389 10.7505L11.5074 9.57084L14.5295 7.85836C14.917 7.63001 15.4207 7.63001 15.8469 7.85836L18.2103 9.19031C18.5978 9.41859 18.869 9.8372 18.869 10.2939V12.9958C18.869 13.4524 18.6365 13.8711 18.2103 14.0994L15.8469 15.4694C15.4594 15.6977 14.9557 15.6977 14.5295 15.4694L12.166 14.1374C11.7786 13.9091 11.5074 13.4905 11.5074 13.0338V11.2833L9.45389 12.463V14.2136C9.45389 14.6702 9.68636 15.0888 10.1126 15.3172L14.5683 17.8287C14.9557 18.0571 15.4594 18.0571 15.8856 17.8287L20.3413 15.3172C20.7288 15.0888 21 14.6702 21 14.2136V9.15223C21 8.6956 20.7675 8.27698 20.3413 8.04863L15.8469 5.49895Z" fill="#7A3FE4"/>
                        </svg>

                        <span className='text-[16px] text-white ml-[4px] mr-[17px]'>{parseFloat(balance).toFixed(4)}</span>

                        <div className='bg-[#363738] text-[16px] text-white flex items-center rounded-[8px] px-[16px] h-full'>
                            <span className='mr-[8px]'>{address.slice(0, 7)}...{address.slice(address.length - 5, address.length + 5)}</span>
                            <CopyToClipboard successText='Copied!' copyText={address}>
                                <button>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path d="M5.25 4.5V2.25C5.25 2.05109 5.32902 1.86032 5.46967 1.71967C5.61032 1.57902 5.80109 1.5 6 1.5H15C15.1989 1.5 15.3897 1.57902 15.5303 1.71967C15.671 1.86032 15.75 2.05109 15.75 2.25V12.75C15.75 12.9489 15.671 13.1397 15.5303 13.2803C15.3897 13.421 15.1989 13.5 15 13.5H12.75V15.75C12.75 16.164 12.4125 16.5 11.9948 16.5H3.00525C2.90635 16.5006 2.8083 16.4816 2.71674 16.4442C2.62519 16.4068 2.54192 16.3517 2.47174 16.282C2.40156 16.2123 2.34584 16.1294 2.30779 16.0381C2.26974 15.9468 2.2501 15.8489 2.25 15.75L2.25225 5.25C2.25225 4.836 2.58975 4.5 3.0075 4.5H5.25ZM3.75225 6L3.75 15H11.25V6H3.75225ZM6.75 4.5H12.75V12H14.25V3H6.75V4.5Z" fill="white"/>
                                        </g>
                                    </svg>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <button className='py-[5px] px-[10px] md:hidden bg-[#3F99FF] hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)] rounded-[8px]' onClick={handleOpenAccountModal}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_440_1971)">
                                <path d="M12.5524 3.44731H8.82896C7.98252 3.44731 7.17075 3.78355 6.57223 4.38207C5.97371 4.98059 5.63747 5.79236 5.63747 6.6388C5.63747 7.48523 5.97371 8.297 6.57223 8.89552C7.17075 9.49404 7.98252 9.83029 8.82896 9.83029H12.5524V10.8941C12.5524 11.0352 12.4963 11.1705 12.3966 11.2702C12.2968 11.37 12.1615 11.426 12.0204 11.426H2.44598C2.3049 11.426 2.16961 11.37 2.06986 11.2702C1.9701 11.1705 1.91406 11.0352 1.91406 10.8941V2.38348C1.91406 2.2424 1.9701 2.10711 2.06986 2.00736C2.16961 1.9076 2.3049 1.85156 2.44598 1.85156H12.0204C12.1615 1.85156 12.2968 1.9076 12.3966 2.00736C12.4963 2.10711 12.5524 2.2424 12.5524 2.38348V3.44731ZM8.82896 4.51114H13.0843V8.76646H8.82896C8.26467 8.76646 7.72349 8.54229 7.32447 8.14328C6.92546 7.74427 6.7013 7.20309 6.7013 6.6388C6.7013 6.07451 6.92546 5.53333 7.32447 5.13431C7.72349 4.7353 8.26467 4.51114 8.82896 4.51114ZM8.82896 6.10688V7.17071H10.4247V6.10688H8.82896Z" fill="white" fillOpacity="0.8"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_440_1971">
                                    <rect width="12.766" height="12.766" fill="white" transform="translate(0.318359 0.255859)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <AccountModal openAccountModal={accountModal} addressExplorar={addressExplorar} balance={balance} address={address} onClose={handleCloseAccountModal}/>
                </>
            ) : (
                <>
                    <SimpleButton size='sm' type='button' variant='warning' onClick={() => setWrongNetworkModal(true)}>
                        <svg className='mr-[9px]' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8666 0.999956L21.3926 17.5C21.4804 17.652 21.5266 17.8244 21.5266 18C21.5266 18.1755 21.4804 18.3479 21.3926 18.4999C21.3048 18.652 21.1786 18.7782 21.0266 18.866C20.8746 18.9537 20.7021 19 20.5266 19H1.47458C1.29905 19 1.12661 18.9537 0.974593 18.866C0.822577 18.7782 0.696343 18.652 0.608578 18.4999C0.520812 18.3479 0.474608 18.1755 0.474609 18C0.47461 17.8244 0.520817 17.652 0.608584 17.5L10.1346 0.999956C10.2224 0.847949 10.3486 0.721722 10.5006 0.633962C10.6526 0.546202 10.8251 0.5 11.0006 0.5C11.1761 0.5 11.3485 0.546202 11.5006 0.633962C11.6526 0.721722 11.7788 0.847949 11.8666 0.999956ZM10.0006 14V16H12.0006V14H10.0006ZM10.0006 6.99996V12H12.0006V6.99996H10.0006Z" fill="white" fill-opacity="0.8"/>
                        </svg>

                        Wrong Network
                    </SimpleButton>

                    <WrongNetworkModal openWrongNetworkModal={wrongNetworkModal} onClose={handleCloseWrongNetworkModal} />
                </>
            )}
        </div>
    )
}

export default HeaderBalance