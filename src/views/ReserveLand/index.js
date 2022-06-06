import {_landReserverAbi} from 'lib/constants/landReserverAbi'
import {_erc20Abi} from 'lib/constants/erc20Abi'

import {Fragment, useEffect, useState, useMemo, useContext} from 'react'
import {BigNumber, ethers, utils} from 'ethers'
import {components} from 'react-select'
import {useCookies} from 'react-cookie'

// Tokens list
import {_selectTokenOptions} from 'lib/constants/tokens'

// Components
import {SimpleButton, PillButton} from 'components/buttons'
import {Field, Radio, Select, FieldGroup} from 'components/form'
import {BasketList} from 'components/lists'

// Sections
import Faqs from './sections/Faqs'
import LandUnits from './sections/LandUnits'

// Toasts
import {ToastContainer} from 'react-toastify'

// Modals
import ProgressConnectYourWallet from 'modals/ProgressConnectYourWallet'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getTransactionForm, setTransactionForm} from 'app/TransactionFormSlice'
import {Controller, useForm} from 'react-hook-form'
import {
  checkInWhiteList,
  extractReceiptData,
  getDiscountPercentage,
  getParcelAvailabilityForBuyer,
  getTotalParcelPrice,
  landPrices
} from './landPrices'
import countryList from 'react-select-country-list'
import AppContext from 'components/AppContext'
import {getChainData,onNetwork} from 'lib/appHelpers'
import globalErrorNotifier from 'lib/globalNotifier'
import AccountModal from 'modals/AccountModal'
import {getUser} from 'app/UserSlice'
import apiRepository from 'lib/apiRepository'
import AddFundsModal from 'modals/AddFundsModal'


import _founder1 from 'assets/img/founders/1.svg'
import _founder2 from 'assets/img/founders/2.svg'
import _founder3 from 'assets/img/founders/3.svg'
import _founder4 from 'assets/img/founders/4.svg'
import _founder5 from 'assets/img/founders/5.svg'
import _founder6 from 'assets/img/founders/6.svg'
import _founder7 from 'assets/img/founders/7.svg'
import _founder8 from 'assets/img/founders/8.svg'
import _founder9 from 'assets/img/founders/9.svg'
import _founder10 from 'assets/img/founders/10.svg'
import _founder11 from 'assets/img/founders/11.svg'
import _founder12 from 'assets/img/founders/12.svg'
import _founder13 from 'assets/img/founders/13.svg'
import _founder14 from 'assets/img/founders/14.svg'

const _founders = [
  _founder1,
  _founder2,
  _founder3,
  _founder4,
  _founder5,
  _founder6,
  _founder7,
  _founder8,
  _founder9,
  _founder10,
  _founder11,
  _founder12,
  _founder13,
  _founder14,
]

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
]

const _tokenIcons = {
  'token_logo0': require('assets/img/tokens/token_logo0.png'),
  'token_logo1': require('assets/img/tokens/token_logo1.png'),
  'token_logo2': require('assets/img/tokens/token_logo2.png'),
  'token_logo3': require('assets/img/tokens/token_logo3.png'),
  'token_logo4': require('assets/img/tokens/token_logo4.png'),
  'token_logo5': require('assets/img/tokens/token_logo5.png'),
  'token_logo6': require('assets/img/tokens/token_logo6.png'),
  'token_logo7': require('assets/img/tokens/token_logo7.png'),
  'token_logo8': require('assets/img/tokens/token_logo8.png'),
  'token_logo9': require('assets/img/tokens/token_logo9.png'),
  'token_logo10': require('assets/img/tokens/token_logo10.png'),
  'token_logo11': require('assets/img/tokens/token_logo11.png'),
  'token_logo12': require('assets/img/tokens/token_logo12.png'),
}


const _selectIndustryOptions = [
  {value: 'Ecommerce', label: 'E-Commerce'},
  {value: 'Creators/Artists', label: 'Creators/Artists'},
  {value: 'Media & Entertainment', label: 'Media & Entertainment'},
  {value: 'Events & Conference', label: 'Events & Conference'},
  {value: 'Crypto & Blockchain', label: 'Crypto & Blockchain'},
  {value: 'Gaming', label: 'Gaming'},
  {value: 'eSports', label: 'eSports'},
  {value: 'Sports', label: 'Sports'},
  {value: 'Real Estate', label: 'Real Estate'},
  {value: 'Fashion', label: 'Fashion'},
  {value: 'Retail', label: 'Retail'},
  {value: 'Social Causes', label: 'Social Causes'},
  {value: 'Art Gallery, Museums', label: 'Art Gallery, Museums'},
  {value: 'Governments', label: 'Governments'},
  {value: 'OpenSource Communities', label: 'OpenSource Communities'},
  {value: 'Social Communities', label: 'Social Communities'},
  {value: 'Others', label: 'Others'},


]


const tokenSelectOption = (props) => {
  return (
    <components.Option {...props}>
      <div className='flex items-center'>
        <div className='mr-[8px] pt-[2px]'>
          <img src={_tokenIcons[props.data.logo]} alt='token logo'/>
        </div>

        <span>{props.data.label}</span>
      </div>
    </components.Option>
  )
}


const tokenSelectValue = (props) => {
  return (
    <components.SingleValue {...props}>
      {props.getValue().length ? (
        <div className='flex items-center'>
          <div className='mr-[8px]'>
            <img src={_tokenIcons[props.getValue()[0].logo]} alt='token logo'/>
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

const countrySelectValue = (props) => {
  return (
    <components.SingleValue {...props}>
      {props.getValue().length ? (
        <div className='flex items-center'>
          <div className='mr-[8px]'>


            <img className='h-[20px] w-[20px]'
                 src={`https://flagcdn.com/${(props.getValue()[0].value).toLowerCase()}.svg`} alt='token logo'/>
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

const countrySelectOption = (props) => {
  return (
    <components.Option {...props}>
      <div className='flex items-center'>
        <div className='mr-[8px]'>

          <img className='h-[20px] w-[20px]' src={`https://flagcdn.com/${(props.data.value).toLowerCase()}.svg`}
               alt='token logo'/>
        </div>

        <span>{props.data.label}</span>
      </div>
    </components.Option>
  )
}

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

const ReserveLand = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [openAddFundsModal, setOpenAddFundsModal] = useState(false)
  const [cookies, setCookie] = useCookies()
  const [selectNetwork, setSelectNetwork] = useState(_networks[0])
  const mainnetType=!(process.env.REACT_APP_IS_MAINNET_ENABLED == 'false')

  const appGlobals = useContext(AppContext)
  const {setValue, getValues, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange'
  })
  const transactionForm = useSelector(getTransactionForm)
  const [wrongNetworkModal, setWrongNetworkModal] = useState(false)
  const [isWhiteListed, setIsWhiteListed] = useState(false)
  const [whiteListError, setWhiteListError] = useState(null)
  const [disabledReserveLand, setDisabledReserveLand] = useState(false)
  const [emailReadOnly, setEmailReadOnly] = useState(null)
  const [email, setEmail] = useState('')
  const [authData, setAuthData] = useState(null)
  const [openModal, setOpenModal] = useState(false)


  const [transactionFormData, setTransactionFormData] = useState(null)


  const [basket, setBasket] = useState([
    {
      id: '1006',
      qty: 0,
      type: '1x1',
      perItemPrice: 0,
      perItemPriceUSD: 200
    },
    {
      id: '1005',
      qty: 0,
      type: '2x2',
      perItemPrice: 0,
      perItemPriceUSD: 700
    },
    {
      id: '1004',
      qty: 0,
      type: '4x4',
      perItemPrice: 0,
      perItemPriceUSD: 2750
    },
    {
      id: '1002',
      qty: 0,
      type: '8x8',
      perItemPrice: 0,
      perItemPriceUSD: 10000
    },
    {
      id: '1001',
      qty: 0,
      type: '16x16',
      perItemPrice: 0,
      perItemPriceUSD: 45000
    },
    {
      id: '1000',
      qty: 0,
      type: '32x32',
      perItemPrice: 0,
      perItemPriceUSD: 180000
    }
  ])
  const _selectCountryOptions = useMemo(() => countryList().getData(), [])
  const [discountCode, setDiscountCode] = useState('')
  const [selectIndustry, setSelectIndustry] = useState(_selectIndustryOptions[0])
  const [selectCountry, setSelectCountry] = useState(null)
  const [selectToken, setSelectToken] = useState(_selectTokenOptions[0])
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [areYouRepresenting, setAreYouRepresenting] = useState('individual')
  const [isOpenedProgressWallet, setIsOpenedProgressWallet] = useState(false)
  const userInfo = useSelector(getUser)
  const [account, setAccount] = useState(null)
  const [isWrongNetwork, setIsWrongNetwork] = useState(null)
  const [parcelAvailabilityForBuyer, setParcelAvailabilityForBuyer] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const user_id_mobile = searchParams.get('user_id')


  const [txModalProps, setTxModalProps] = useState({
    title: '',
    mainHeading: 'Please confirm the transaction with your wallet and then wait for the transaction to complete. ',
    content: 'To allow COMEARTH to reserve virtual land Parcel(s) for you in your currently connected wallet, you must authorize this transaction in your wallet. Please keep this tab open while we wait for the blockchain to confirm your action. This only needs to be done once per order.',
    loading: true,
    learn: '',
    view: ''
  })
  const [accountModalProps, setAccountModalProps] = useState({
    openAccountModal: false,
    address: '',
    balance: '',
  })
  const handleAccountModalClose = () => {
    setAccountModalProps({
      openAccountModal: false,
      address: '',
      balance: '',
    })
  }
  const handleCloseWrongNetworkModal = () => {
    setWrongNetworkModal(false)

  }

  const handleBackAddFundsModal = () => {
    setOpenAddFundsModal(false)
  }

  const handleCloseAddFundsModal = () => {
    setOpenAddFundsModal(false)
    // onClose()
  }
  // const [progressModalTitle, setProgressModalTitle] = useState("Please confirm the transaction")
  // const [tokenLogo, setTokenLogo] = useState("token_logo0")
  useEffect(() => {
    console.log(transactionForm)
    if (transactionForm) {
      setValue('name', transactionForm.name)
      setValue('email', transactionForm.email)
      setValue('company', transactionForm.company)
      setValue('country', transactionForm.country)
      setEmail(transactionForm.email)
      if (transactionForm.email) {

        setEmailReadOnly(true)
      }

      // Other fields
      if (transactionForm.token) {
        setSelectToken(transactionForm.token)
      }

      if (transactionForm.representing) {
        setAreYouRepresenting(transactionForm.representing)
      }

      if (transactionForm.basket) {
        setBasket(transactionForm.basket)
      }

      if (transactionForm.discountCode) {
        setDiscountCode(transactionForm.discountCode)
      }
    }

    setValue('industry', _selectIndustryOptions[0])

    if (email) {
      setEmailReadOnly(false)
    }

  }, [])

  useEffect(() => {
    (async () => {
      if (user_id_mobile != null) {
        let resp = await new apiRepository().getUserById(user_id_mobile)
        if (resp.status === 200) {
          let user = resp.data
          localStorage.removeItem('auth')
          localStorage.removeItem('transaction_form')
          localStorage.removeItem('order')
          // prevent removing wallet to disconnecting user on buy more
          // localStorage.removeItem('wallet')
          localStorage.setItem('auth', JSON.stringify(user))
          let country = _selectCountryOptions.filter((el) => {
            return el.value === user.country_code
          })
          dispatch(setTransactionForm({
            name: user.name,
            email: user.email,
            country: country[0],
            company: user.company,
            representing: user.company != null ? 'company' : 'individual'
          }))
          navigate('/reserve-land')
          window.location.reload()
        }
      }
    })()
  })

  const checkAddressInWhiteList = async (account) => {
    if (account != null) {
      let provider = await appGlobals.hasWalletProvider()
      let chainId = (await provider.getNetwork()).chainId
      if(!onNetwork(chainId)) return false
      setDisabledReserveLand(true)
      let {atleastOneWhitelistApplied, buyerWhitelistId} = await checkInWhiteList(account)
      if (atleastOneWhitelistApplied === true) {
        if (parseInt(buyerWhitelistId) === 0) {
          // join waiting list modal
          setIsWhiteListed(false)
          setDisabledReserveLand(true)
          setWhiteListError({
            heading: 'Sorry!! This wallet is not whitelisted',
            claimed_all: false
          })
          return false
        } else {
          // check for avalability
          let allowed = await getParcelAvailabilityForBuyer(account)
          if (allowed.reduce((sum, el) => {
            return sum += el
          }, 0) > 0) {
            // congratulations modal
            let nonZeroParcels = ''
            allowed.forEach((el, i) => {
              if (el !== 0) {
                nonZeroParcels += (i === 0 ? '' : ', ') + el + ' Parcel(s) of size ' + basket[i]['type']
              }
            })
            if (nonZeroParcels.length > 0 && nonZeroParcels[0] === ',') {
              nonZeroParcels = nonZeroParcels.substring(1)
            }
            setParcelAvailabilityForBuyer(nonZeroParcels)
            setIsWhiteListed(true)
            setDisabledReserveLand(false)
            setWhiteListError(null)
            return true
          } else {
            setIsWhiteListed(false)
            setDisabledReserveLand(true)
            setWhiteListError({
              heading: 'Oops!! You have exhausted your parcel limit!',
              claimed_all: true
            })
            return false
          }
        }
      }
      // else it is a normal sale
      return true
    }
  }

  useEffect(() => {
    (async () => {
      getDiscountPercentage(account).then((dis) => {
        setDiscountPercentage(dis)
      })
      await checkAddressInWhiteList(account)
    })()
  }, [account])


  useEffect(() => {
    // currently load just once due to overwhelming console logs
    landPrices(selectToken, true).then((prices) => {
      setBasket((basket) => basket.map((elem, i) => ({
        ...elem,
        perItemPrice: prices[i]
      })))
    })
    // getDiscountPercentage(account).then((dis) => {
    //   setDiscountPercentage(dis)
    // })
  }, [setValue, transactionForm])

  // commenting for now too much console logs
  // useEffect(() => {
  // }, [basket])

  useEffect(() => {
    dispatch(setTransactionForm({...getValues(), basket, discountCode}))
  }, [basket, discountCode, dispatch, getValues])

  useEffect(() => {
    getParcelAvailabilityForBuyer(account).then((pieces) => {
      basket.forEach((item, i) => {
        if (item.qty > pieces[i] && account != null) {
          setBasket((basket) => basket.map((elem, subIndex) => ({
            ...elem,
            qty: subIndex === i ? pieces[i] : elem.qty
          })))
          pieces[i] === 0 ? globalErrorNotifier({
            message: 'You can\'t reserve land Parcel(s) of size ' + basket[i].type,
            scope: 'comearth:notify'
          }) : globalErrorNotifier({
            message: 'You can reserve max ' + pieces[i] + ' Parcel(s) of land size ' + basket[i].type,
            scope: 'comearth:notify'
          })
        }
      })
    })
  }, [basket, account])

  const getTotal = () => {
    let total = basket.reduce((sum, cur) => {
      return sum += cur.perItemPrice * cur.qty
    }, 0)

    return total
  }
  useEffect(() => {
    (async () => {
      let tempProvider = await appGlobals.hasWalletProvider()
      if(!tempProvider) return
      const accountsList = await tempProvider.send("eth_accounts", [])
    
      setAccount(accountsList[0])
      if(!onNetwork((await tempProvider.getNetwork())['chainId'])){
        setIsWrongNetwork(true)
        setDisabledReserveLand(true)
      }
    })()
  }, [appGlobals])

  const showTransactionModal = (obj) => {
    setTxModalProps(obj)
    setIsOpenedProgressWallet(true)
  }

  // Handlers

  const handleTokenChange = (token) => {
    console.log(token)
    setSelectToken(token)
    landPrices(token, true).then((prices) => {
      setBasket((basket) => basket.map((elem, i) => ({
        ...elem,
        perItemPrice: prices[i]
      })))
    })
  }
  const handleChangeAreYouRepresenting = (val) => {
    setAreYouRepresenting(val)
  }
  const handleProgressWallet = () => {
    setIsOpenedProgressWallet(!isOpenedProgressWallet)
  }

  const openAccountModalDynamic = async (e) => {
    e.preventDefault()
    let provider = await appGlobals.hasWalletProvider()
    let networkConfig = await getChainData(provider)
    let balance = utils.formatEther(await provider.getBalance(account))
    setAccountModalProps({
      openAccountModal: true,
      address: account,
      balance: balance,
      addressExplorar: networkConfig.explorar + '/address/' + account
    })
  }

  const startTransactionFlow = async (provider) => {

    let transaction
    let receipt
    let tNumber = 0
    let err

    // await new apiRepository().createOrUpdateUser()

    showTransactionModal({
      title: 'Please wait...',
      mainHeading: '',
      content: '',
      loading: true,
      learn: '',
      view: ''
    })


    const signer = provider.getSigner()
    const account = (await provider.send('eth_accounts', []))[0]
    const networkConfig = await getChainData(provider)


    let contract = new ethers.Contract(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS, _landReserverAbi, provider)
    let signedContract = contract.connect(signer)
    let parcelQuantities = basket.map((el) => {
      return el.qty
    })

    let discount = (await getDiscountPercentage(account))[0] / 1000
    let prices = await landPrices(selectToken, true)
    let order = await new apiRepository().createOrder(selectToken.id, discount,
      cookies.referral_first_touch, cookies.referral_last_touch, cookies.utm_first_touch, cookies.utm_last_touch, account, prices)
    tNumber = order.tracking_number
    try {
      tNumber = BigNumber.from(tNumber)
    } catch (e) {
      tNumber = BigNumber.from(0)
    }
    console.log(tNumber)
    // check for approval erc20
    let totalPrice = await getTotalParcelPrice(basket, selectToken, account)
    if (selectToken.id !== 0) {
      let erc20 = new ethers.Contract(selectToken.contract_address, _erc20Abi, provider)
      let allowedAmt = await erc20.allowance(account, process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS)
      // check for balance if balance is low then return low balance modal with balance
      let balance = await erc20.balanceOf(account)
      if (balance.lt(totalPrice)) {
        // initialize low balance modal
        setAccountModalProps({
          openAccountModal: true,
          address: account,
          balance: balance.toNumber(),
          showLowBalance: true,
          tokenIcon: _tokenIcons[selectToken.logo],
          addressExplorar: networkConfig.explorar + '/address/' + account
        })
        err = {scope: 'comearth', message: 'Low erc20 balance'}
        throw err
      }
      if (!allowedAmt.gt(0)) {
        showTransactionModal({
          loading: false,
          mainHeading: 'Please confirm the transaction with your wallet and then wait for the transaction to complete',
          title: selectToken.label + ' approval',
          content: 'To unlock ' + selectToken.label + ' to be used as payment token at COMEARTH, you must complete a free (plus gas) transaction. This needs to be done once only'
        })
        // ask to approve and procees further
        let erc20Signed = erc20.connect(signer)
        transaction = await erc20Signed.approve(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
        // wait for transaction modal erc20
        showTransactionModal({
          content: '',
          learn: '',
          title: 'Please wait',
          loading: true,
          mainHeading: 'Please wait while we are confirming your transaction on the ' + networkConfig.name + ' Blockchain',
          view: networkConfig.explorar + 'tx/' + transaction.hash
        })
        receipt = await transaction.wait()
      }
      totalPrice = 0
    }

    // initiate transaction modal
    showTransactionModal({
      title: 'Reserve your Land',
      mainHeading: 'Please confirm the transaction with your wallet and then wait for the transaction to complete. ',
      content: 'To allow COMEARTH to reserve virtual land Parcel(s) for you in your currently connected wallet, you must authorize this transaction in your wallet. Please keep this tab open while we wait for the blockchain to confirm your action. This only needs to be done once per order.',
      loading: false,
      learn: '',
      view: ''
    })
    transaction = await signedContract.reserveLand(parcelQuantities, selectToken.id, tNumber, {value: totalPrice})
    // wait for transaction modal
    showTransactionModal({
      content: '',
      learn: '',
      title: 'Please wait',
      loading: true,
      mainHeading: 'Please wait while we are confirming your transaction on the ' + networkConfig.name + ' Blockchain',
      view: networkConfig.explorar + 'tx/' + transaction.hash
    })
    await new apiRepository().updateOrderTx({
      amount: 0,
      status: 'pending',
      bc_tx_id: transaction.hash,
      address: account,
      parcel_quantities: parcelQuantities
    })

    receipt = await transaction.wait()
    let actualData = extractReceiptData(receipt, selectToken)
    await new apiRepository().updateOrderTx({
      status: 'success',
      bc_tx_id: transaction.hash,
      address: account,
      order_status: 'fulfilled',
      parcel_quantities: actualData.p,
      amount: actualData.a,
      conversion_factor: actualData.c
    })
    return receipt
  }
  const onSubmit = (data) => {
    let discount = (discountPercentage[0] / 1000).toFixed(2)
    localStorage.setItem('discount', JSON.stringify(discount))
    dispatch(setTransactionForm({...data, basket, discount}))
    setEmailReadOnly(true)


    let total_qty = basket.reduce((sum, el) => {
      return sum += parseInt(el.qty)
    }, 0)
    if (total_qty === 0) {
      globalErrorNotifier({
        scope: 'comearth:notify',
        message: 'You need to select at least 1 parcel to reserve virtual land'
      })
      return
    }
    (new apiRepository().createOrUpdateUser()).then(() => {
      let walletProvider = appGlobals.getWalletProviderConfirmed()
      walletProvider.then((provider) => {
        provider.send('eth_accounts', []).then((accounts) => {
          checkAddressInWhiteList(accounts[0]).then((status) => {
            if (!status) {
              return
            }
            let process = startTransactionFlow(provider)
            process.then((tx) => {
              navigate('/success', {state: {tokenLogo: selectToken}})
            }).catch((err) => {
              console.log(err)
              setIsOpenedProgressWallet(false)
              if (globalErrorNotifier(err) === false) {
                // if we have an uncaught error then send user to failed page
                navigate('/failed')
              } else {
                // for native token error
                if ((JSON.stringify(err)).includes('insufficient funds for gas')) {
                  console.log('inside err')

                  setOpenAddFundsModal(true)
                }
              }
            })
          })
        })
      })
    }).catch((err) => {
      if (err?.response?.status === 409) {
        //user directly here so send lead request first
        new apiRepository().createLead(data.email)
          .then(res => {
            // save lead in localstorage
            console.log(res)
            navigate('/reserve-land')
          })
          .catch(err => {
            if (err?.response?.status === 302) {
              showTransactionModal({
                title: 'Already Registered',
                mainHeading: 'We have an account already registered with this email, Please check your email to proceed further.',
                content: '',
                loading: false,
                learn: '',
                view: ''
              })
            }
          })
      }
    })
  }
  const handleEmailEdit = () => {
    setEmailReadOnly(!emailReadOnly)


  }

  useEffect(() => {
    if (email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      dispatch(setTransactionForm({email: email, basket}))


    }
  }, [email])


  useEffect(() => {
    setAuthData(JSON.parse(localStorage.getItem('auth')))
    setTransactionFormData(JSON.parse(localStorage.getItem('transaction_form')))
    console.log(emailReadOnly)
    if (emailReadOnly === false) {
      localStorage.removeItem('auth')
      localStorage.removeItem('transaction_form')
      setValue('email', '')


    } else {
      setTransactionFormData({...transactionForm, email: email})
      console.log(email)
      localStorage.setItem('transaction_form', JSON.stringify({...transactionFormData, email: email}))
    }
  }, [emailReadOnly])

  return (
    <Fragment>
      <div className='sm:items-end w-full mx-auto px-4 sm:px-6 px-[20px] lg:px-[80px]'>
        <div className='py-[120px] text-white'>
          <div className='mb-[14px] lg:mb-[20px]'>
            <div className='mb-[19px]'>
              <PillButton className='md:pr-[30px]' href='/metaverse'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='fill-[#3F99FF] group-hover:fill-white mr-[12px] md:mr-[16px]'
                >
                  <path
                    d='M7.828 10.9997H20V12.9997H7.828L13.192 18.3637L11.778 19.7777L4 11.9997L11.778 4.22168L13.192 5.63568L7.828 10.9997Z'/>
                </svg>
                Back to COMEARTH
              </PillButton>
            </div>

            {isWhiteListed &&
              <div
                className='border border-[#0BB783] bg-[#0BB783]/10 flex px-[20px] py-[16px] pb-[20px] rounded-[8px] mb-[14px]'>
                <div>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18.632 7.664C18.328 7.412 18.064 7.112 17.856 6.776C17.752 6.364 17.72 5.94 17.76 5.52C17.776 4.636 17.796 3.632 17.096 2.932C16.392 2.232 15.392 2.268 14.504 2.268C14.084 2.308 13.66 2.276 13.248 2.172C12.912 1.964 12.612 1.704 12.36 1.396C11.768 0.788 11.032 0 10 0C8.968 0 8.232 0.788 7.664 1.372C7.412 1.676 7.112 1.94 6.776 2.148C6.364 2.252 5.94 2.284 5.52 2.244C4.632 2.228 3.628 2.212 2.928 2.908C2.228 3.608 2.264 4.612 2.264 5.496C2.304 5.916 2.272 6.34 2.168 6.752C1.96 7.088 1.7 7.388 1.392 7.64C0.788 8.232 0 8.968 0 10C0 11.032 0.788 11.768 1.392 12.336C1.696 12.588 1.96 12.888 2.168 13.224C2.272 13.636 2.304 14.06 2.264 14.48C2.248 15.368 2.204 16.368 2.908 17.068C3.612 17.768 4.612 17.732 5.5 17.732C5.92 17.692 6.344 17.728 6.756 17.828C7.092 18.036 7.392 18.296 7.644 18.604C8.236 19.224 8.972 20 10 20C11.028 20 11.768 19.212 12.336 18.628C12.588 18.324 12.888 18.06 13.224 17.852C13.636 17.748 14.06 17.716 14.48 17.756C15.368 17.772 16.372 17.788 17.072 17.092C17.772 16.392 17.736 15.388 17.736 14.504C17.696 14.084 17.728 13.66 17.832 13.248C18.04 12.912 18.3 12.612 18.608 12.36C19.212 11.768 20 11.032 20 10.004C20 8.976 19.212 8.232 18.632 7.664ZM14.412 8.628L9.72 13.324C9.516 13.524 9.244 13.632 8.96 13.632C8.716 13.632 8.48 13.548 8.288 13.396L5.68 11.312C5.216 10.94 5.14 10.264 5.512 9.8C5.884 9.336 6.56 9.26 7.024 9.632L8.88 11.12L12.888 7.112C13.308 6.692 13.992 6.692 14.412 7.112C14.832 7.528 14.832 8.208 14.412 8.628Z'
                      fill='url(#paint0_linear_1214_352)'/>
                    <defs>
                      <linearGradient id='paint0_linear_1214_352' x1='10' y1='0' x2='10.1818' y2='19.0909'
                                      gradientUnits='userSpaceOnUse'>
                        <stop stop-color='#72F3B4'/>
                        <stop offset='1' stop-color='#16A25E'/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className='ml-[8px]'>
                  <div className='text-white text-[16px] font-[500] mb-[8px]'>Congratulations!!! Your wallet is already
                    whitelisted
                  </div>
                  <div className='text-white text-[14px]'>Currently you are whitelisted to
                    reserve {parcelAvailabilityForBuyer} </div>
                </div>
              </div>
            }
            {whiteListError &&
              <div className='my-[20px]'>
                <div
                  className='flex items-center bg-[#514638] rounded-[8px] border border-[#FFC179] py-[8px] px-[16px]'>
                  <div>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.8666 2.99996L22.3926 19.5C22.4804 19.652 22.5266 19.8244 22.5266 20C22.5266 20.1755 22.4804 20.3479 22.3926 20.4999C22.3048 20.652 22.1786 20.7782 22.0266 20.866C21.8746 20.9537 21.7021 21 21.5266 21H2.47458C2.29905 21 2.12661 20.9537 1.97459 20.866C1.82258 20.7782 1.69634 20.652 1.60858 20.4999C1.52081 20.3479 1.47461 20.1755 1.47461 20C1.47461 19.8244 1.52082 19.652 1.60858 19.5L11.1346 2.99996C11.2224 2.84795 11.3486 2.72172 11.5006 2.63396C11.6526 2.5462 11.8251 2.5 12.0006 2.5C12.1761 2.5 12.3485 2.5462 12.5006 2.63396C12.6526 2.72172 12.7788 2.84795 12.8666 2.99996ZM11.0006 16V18H13.0006V16H11.0006ZM11.0006 8.99996V14H13.0006V8.99996H11.0006Z'
                        fill='#FFC179' fillOpacity='0.8'/>
                    </svg>
                  </div>
                  <div className='ml-[18px]'>
                    <div className='text-white text-[16px] font-[500] mb-[8px]'>{whiteListError.heading}</div>
                    {whiteListError.claimed_all ?
                      <div className='text-white text-[14px]'>You have already reserved maximum parcel quantity
                        allocated to you.</div>
                      :
                      <div className='text-white text-[14px]'>Either
                        <button className='font-bold text-[#3E97FC] hover:underline'
                                onClick={openAccountModalDynamic}>&nbsp; change wallet &nbsp;</button>
                        or
                        <a className='font-bold text-[#3E97FC] hover:underline' rel='noreferrer'
                           href={process.env.REACT_APP_JOIN_WHITELIST_LINK} target='_blank'> click here </a>to join the
                        whitelist
                      </div>
                    }
                  </div>
                  {/* <span className='text-[14px] text-white/80 ml-[12px]'>You do not have sufficient funds in your wallet to make this transaction. Please add some relevant coins/tokens to your wallet. Click on Add Funds button below. make sure you have at least 0.2 MATIC for transaction gas fee</span> */}
                </div>
              </div>
            }
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='lg:grid md:grid-cols-2 md:gap-x-[7.5rem]'>
              <div>


                <div className='bg-[#262728] rounded-lg py-[30px] px-[32px] mb-[20px]'>
                  <h2 className='font-extrabold text-[24px] mb-[20px]'>Cart Summary</h2>

                  <FieldGroup label='Select the Blockchain network you want to pay inh'>
                    <Select defaultValue={selectNetwork}
                            options={_networks.filter(item=>item.mainnet === mainnetType)}
                            isSearchable={false}
                            onChange={setSelectNetwork}
                            components={{SingleValue: networkSelectValueContainer}}
                            Option={networkSelectOption}>
                    </Select>
                  </FieldGroup>

                  <FieldGroup label='Select a Token you want to pay with'>
                    <Select
                      defaultValue={selectToken}
                      options={_selectTokenOptions}
                      placeholder='Please Select Token'
                      components={{SingleValue: tokenSelectValue}}
                      Option={tokenSelectOption}
                      onChange={handleTokenChange}
                    />
                  </FieldGroup>

                  <FieldGroup label='Select Virtual Land Parcels'>
                    <LandUnits basket={basket} setBasket={setBasket} disableCounter={disabledReserveLand}/>
                  </FieldGroup>

                  <BasketList items={basket} setBasket={setBasket} discountCode={discountCode}
                              discountPercentage={discountPercentage} setDiscountCode={setDiscountCode}
                              tokenLogo={selectToken}/>

                  <SimpleButton type='submit' className='mt-[32px] mb-[27px]' block disabled={disabledReserveLand}>
                    Reserve Virtual Land
                  </SimpleButton>
                </div>
              </div>

              <div>
                <h2 className='leading-tight font-black text-[32px] lg:text-[52px] mb-[24px]'>
                  The Go-To Destination for <span className='text-gradient'>Commerce in Metaverse</span>
                </h2>

                <p className='text-white/80 text-[16px] lg:mb-[38px] mb-[24px]'>Combining the best of Amazon.com, Web3, and the Metaverse, COMEARTH shall power e-commerce and experiences to connect brands, creators, and products with their customers in an exciting and immersive environment.</p>

                <div className='py-[34px] px-[32px] text-[14px] bg-[#262728] rounded-[8px] mb-[20px]'>
                  <h5 className='leading-tight font-black text-white text-[28px] lg:text-[28px] mb-[24px]'>
                    Backed by <span className='text-gradient'>Founders & Leaders</span> of
                  </h5>

                  <div className='flex flex-wrap gap-x-[37px] gap-y-[24px]'>
                    {_founders.map(founder => (
                      <img src={founder} alt='Founder'/>
                    ))}
                  </div>
                </div>

                <div className='bg-[#262728] rounded-lg py-[20px] px-[24px] mb-[20px]'>
                  <h2 className='font-semibold text-[20px] mb-[20px]'>FAQs</h2>
                  <Faqs/>
                </div>

                <div className='py-[34px] px-[32px] text-[14px] text-white/70 bg-[#262728] rounded-[8px]'>
                  <div className='font-[900] mb-1'>Important:</div>
                  <p className='mb-5'>Currently you are pre-reserving the land Parcel(s) in the COMEARTH. You will be
                    getting the pre-mint NFT Pass in your connected wallet which you can later swap against the exact
                    land Parcel(s) in the COMEARTH Metaverse.</p>
                  <p>Once the landscape is launched, you, the pre-mint NFT Pass holder, will be offered the first right
                    to select & fix your Parcel(s) exact location on the map before they are opened for general
                    public.</p>
                </div>
              </div>
            </div>
          </form>
          <ToastContainer/>
        </div>
      </div>

      {isOpenedProgressWallet && <ProgressConnectYourWallet onClose={handleProgressWallet}
                                                            {...txModalProps}
      />}
      {accountModalProps.openAccountModal &&
        <AccountModal {...accountModalProps} onClose={handleAccountModalClose}></AccountModal>}
      {
        openAddFundsModal &&
        <AddFundsModal openAddFundsModal={openAddFundsModal} back={handleBackAddFundsModal} address={account}
                       onClose={handleCloseAddFundsModal}/>
      }
    </Fragment>
  )
}

export default ReserveLand
