import { _landReserverAbi } from 'constants/landReserverAbi';
import { _erc20Abi } from 'constants/erc20Abi';
import { getWallet } from 'app/WalletSlice';

import {Fragment, useEffect, useState, useMemo, useContext} from 'react'
import { ethers } from "ethers";
import {components} from 'react-select'

// Tokens list
import { _selectTokenOptions } from 'constants/tokens'

// Components
import {SimpleButton, PillButton} from 'components/buttons'
import {Field, Radio, Select, FieldGroup} from 'components/form'
import {BasketList} from 'components/lists'

// Sections
import Faqs from './sections/Faqs'
import LandUnits from './sections/LandUnits'

// Toasts
import { ToastContainer, toast } from 'react-toastify'

// Modals
import ProgressConnectYourWallet from 'modals/ProgressConnectYourWallet'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getTransactionForm, setTransactionForm} from 'app/TransactionFormSlice'
import {Controller, useForm} from 'react-hook-form'
import { getDiscountPercentage, getTotalParcelPrice, landPrices } from './landPrices';
import countryList from 'react-select-country-list'
import AppContext from 'components/AppContext';


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
  {value: 'Ecommerce', label: 'Ecommerce'},
  {value: 'Option2', label: 'Option 2'},
  {value: 'Option3', label: 'Option 3'},
]

const tokenSelectOption = (props) => {
  return (
      <components.Option {...props}>
        <div className='flex items-center'>
          <div className='mr-[8px] pt-[2px]'>
            <img src={_tokenIcons[props.data.logo]} alt="token logo" />
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
                <img src={_tokenIcons[props.getValue()[0].logo]} alt="token logo" />
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
                <img className='h-[20px] w-[20px]' src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.getValue()[0].value}.svg`} alt="token logo" />
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
            <img className='h-[20px] w-[20px]' src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.data.value}.svg`} alt="token logo" />
          </div>

          <span>{props.data.label}</span>
        </div>
      </components.Option>
  )
}

const ReserveLand = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const appGlobals = useContext(AppContext)
  const { register, control, setValue, getValues, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  })
  const transactionForm = useSelector(getTransactionForm)
  const userWallet = useSelector(getWallet)
  const [basket, setBasket] = useState([
    {
      id: '1000',
      qty: 0,
      type: '32x32',
      perItemPrice: 0,
    },
    {
      id: '1001',
      qty: 0,
      type: '16x16',
      perItemPrice: 0,
    },
    {
      id: '1002',
      qty: 0,
      type: '8x8',
      perItemPrice: 0,
    },
    {
      id: '1004',
      qty: 0,
      type: '4x4',
      perItemPrice: 0,
    },
    {
      id: '1005',
      qty: 0,
      type: '2x2',
      perItemPrice: 0,
    },
    {
      id: '1006',
      qty: 0,
      type: '1x1',
      perItemPrice: 0,
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
  const [progressModalTitle, setProgressModalTitle] = useState("Please confirm the transaction")
  const[txModalProps,setTxModalProps]= useState({
    title:'',
    mainHeading:'Please confirm the transaction with your wallet and then wait for the transaction to complete. ',
    content:'To allow COMEARTH to reserve virtual land units for you in your currently connected wallet, you must authorize this transaction in your wallet. Please keep this tab open while we wait for the blockchain to confirm your action. This only needs to be done once per order.',
    loading:true,
    learn:'',
    view:''
  })

  useEffect(() => {
    notify()
    if (transactionForm) {
      setValue('name', transactionForm.name)
      setValue('email', transactionForm.email)
      setValue('company', transactionForm.company)
      setValue('country', transactionForm.country)

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
  }, [])

  useEffect(() => {
    // currently load just once due to overwhelming console logs
    landPrices(selectToken,true).then((prices) => {
      setBasket((basket) => basket.map((elem, i) => ({
          ...elem,
          perItemPrice: prices[5-i]
        })))
    });
    getDiscountPercentage().then((dis) => {
      setDiscountPercentage(dis.toNumber())
    })
  }, [setValue, transactionForm])

  // commenting for now too much console logs
  // useEffect(() => {
  // }, [basket])

  useEffect(() => {
    dispatch(setTransactionForm({...getValues(), basket, discountCode}))
  }, [basket, discountCode, dispatch, getValues])

  const getTotal = () => {
    let total = basket.reduce((sum, cur) => {
      return sum += cur.perItemPrice * cur.qty
    }, 0)

    return total
  }


  // Handlers

  const handleTokenChange = (token) => {
    setSelectToken(token);
    landPrices(token,true).then((prices) => {
      console.log(prices);
      setBasket((basket) => basket.map((elem, i) => ({
          ...elem,
          perItemPrice: prices[5-i]
        })))
    });
  }
  const handleChangeAreYouRepresenting = (val) => {
    setAreYouRepresenting(val)
  }
  const handleProgressWallet = () => {
    setIsOpenedProgressWallet(!isOpenedProgressWallet)
  }
  const startTransactionFlow = async (provider) => {
    setTxModalProps({...txModalProps,title:"Please approve for "+selectToken.label+" token"})
    setIsOpenedProgressWallet(true)

    let transaction;
    let receipt;
    let tNumber = 0;
    
    const signer = provider.getSigner()
    const account = (await provider.send("eth_accounts",[]))[0];
    let contract = new ethers.Contract(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS,_landReserverAbi,provider);
    let signedContract = contract.connect(signer);
    let parcelQuantities = [...basket].reverse().map((el) => {
      return el.qty
    })
    // check for approval erc20
    let totalPrice = await getTotalParcelPrice(basket,selectToken)
    if(selectToken.id !== 0){
      let erc20 = new ethers.Contract(selectToken.contract_address,_erc20Abi,provider);
      console.log(erc20)
      let allowedAmt = await erc20.allowance(account, process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS);
      // check for balance if balance is low then return low balance modal with balance
      let balance = await erc20.balanceOf(account)
      if(balance.lt(totalPrice)){
        // initialize low balance modal
        throw new Error('erc20 balance is less then total price')
      }
      if(!allowedAmt.gt(0)){
          // ask to approve and procees further
          setProgressModalTitle("Please approve for "+selectToken.label+" token")
          let erc20Signed = erc20.connect(signer);
          transaction = await erc20Signed.approve(process.env.REACT_APP_LAND_RESERVER_CONTRACT_ADDRESS,'0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
          // wait for transaction modal erc20
          receipt = await transaction.wait();
      }
      totalPrice = 0
    }

    // initiate transaction modal
    console.log(parcelQuantities,selectToken.id,tNumber,{value:totalPrice})
    transaction = await signedContract.reserveLand(parcelQuantities,selectToken.id,tNumber,{value:totalPrice})
    // wait for transaction modal
    receipt  = await transaction.wait()
    return receipt;
  }
  const onSubmit = (data) => {
    dispatch(setTransactionForm({...data, basket, discountCode}))
    let walletProvider  = appGlobals.getWalletProviderConfirmed()
    walletProvider.then((provider) => {
      let process = startTransactionFlow(provider)
      process.then((tx) => {
        console.log('success')
      }).catch((err) => {
        console.log(err)
        console.log('error')
      })
    })
  }


  const notify = () => toast('Please wait while we redirect you to the payment page!', {
    icon: () => <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5145 0.0828645L16.2504 4.81786V11.5145L11.5145 16.2504H4.81786L0.0820312 11.5145V4.81786L4.81786 0.0820312H11.5145V0.0828645ZM7.1662 10.4995V12.1662H8.83286V10.4995H7.1662ZM7.1662 3.83286V8.83286H8.83286V3.83286H7.1662Z" fill="white" fillOpacity="0.8"/>
</svg>
,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  });

  return (
    <Fragment>
      <div className="sm:max-w-[90rem] 2xl:max-w-[105rem] sm:items-end w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className='py-[120px] text-white'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='lg:grid md:grid-cols-2 md:gap-x-[7.5rem]'>
              <div>
                <div className='mb-[14px] lg:mb-[50px]'>
                  <PillButton className='md:pr-[30px]' href='/metaverse'>
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='fill-[#3F99FF] group-hover:fill-white mr-[12px] md:mr-[16px]'
                    >
                      <path d='M7.828 10.9997H20V12.9997H7.828L13.192 18.3637L11.778 19.7777L4 11.9997L11.778 4.22168L13.192 5.63568L7.828 10.9997Z' />
                    </svg>
                    Back to Comearth
                  </PillButton>
                </div>

                <h2 className='font-extrabold text-[24px] mb-[16px]'>Reserve Your Land</h2>
                <hr className='border-[#363738] my-[16px]' />

                <FieldGroup label='Name'>
                  <Field placeholder='Enter Your Full Name Here'
                         isError={errors.name}
                         register={register("name", { required: true})}
                  />
                  <small className='text-red-400'>{errors.name?.type === 'required' && "Name is required"}</small>
                </FieldGroup>
                <FieldGroup label='Email ID'>
                  <Field type='email'
                         isError={errors.email}
                         register={register("email", { required: true, pattern: /^\S+@\S+$/i })}
                         placeholder='Enter Your Email Address Here' />
                  <small className='text-red-400'>
                    {errors.email?.type === 'required' && "Email is required"}
                    {errors.email?.type === 'pattern' && "Email is invalid"}
                  </small>
                </FieldGroup>
                <FieldGroup label='Select Industry'>
                  <Controller
                      name='industry'
                      control={control}
                      onChange={setSelectIndustry}
                      rules={{ required: true }}
                      render={({ field }) =>  <Select
                          {...field}
                          isError={errors.industry}
                          defaultValue={selectIndustry}
                          options={_selectIndustryOptions}
                          placeholder='Please Select Industry'
                      />}
                  />

                  <small className='text-red-400'>{errors.industry?.type === 'required' && "Industry is required"}</small>
                </FieldGroup>
                <FieldGroup label='Are you representing'>
                  <div className='grid md:grid-cols-2'>
                    <div>
                      <Radio
                          name='are_you_representing'
                          value='individual'
                          checked={areYouRepresenting === 'individual'}
                          onChange={(evt) => setAreYouRepresenting(evt.target.value)}
                      >
                        Individual
                      </Radio>
                    </div>
                    <div>
                      <Radio
                          name='are_you_representing'
                          value='company'
                          checked={areYouRepresenting === 'company'}
                          onChange={(evt) => handleChangeAreYouRepresenting(evt.target.value)}
                      >
                        Company
                      </Radio>
                    </div>
                  </div>
                </FieldGroup>

                {areYouRepresenting !== 'individual' && (
                    <FieldGroup label='Company Name'>
                      <Field isError={errors.company}
                             register={register("company", { required: true })}
                             placeholder='Enter Your Company or Brand Name Here' />
                      <small className='text-red-400'>{errors.company?.type === 'required' && "Company is required"}</small>
                    </FieldGroup>
                )}

                <FieldGroup label='Select Country' className='md:mb-[40px]'>
                  <Controller
                      name='country'
                      control={control}
                      onChange={setSelectCountry}
                      rules={{ required: true }}
                      render={({ field }) => <Select
                          {...field}
                          Option={countrySelectOption}
                          components={{SingleValue: countrySelectValue}}
                          isError={errors.country}
                          defaultValue={selectCountry}
                          options={_selectCountryOptions}
                          placeholder='Please Select Country'
                      />}
                  />

                  <small className='text-red-400'>{errors.country?.type === 'required' && "Country is required"}</small>
                </FieldGroup>

                <div className='hidden lg:block bg-[#262728] rounded-lg py-[20px] px-[24px]'>
                  <h2 className='font-semibold text-[20px] mb-[20px]'>FAQs</h2>
                  <Faqs />
                </div>
              </div>
              <div>
                <div className='bg-[#262728] rounded-lg py-[30px] px-[32px] mb-[20px]'>
                  <h2 className='font-extrabold text-[24px] mb-[20px]'>Cart Summary</h2>

                  <FieldGroup label='Select Token you want to pay with'>
                    <Select
                        defaultValue={selectToken}
                        options={_selectTokenOptions}
                        placeholder='Please Select Token'
                        components={{SingleValue: tokenSelectValue}}
                        Option={tokenSelectOption}
                        onChange={handleTokenChange}
                    />
                  </FieldGroup>

                  <FieldGroup label='Select Land Units'>
                    <LandUnits basket={basket} setBasket={setBasket} />
                  </FieldGroup>

                  <BasketList items={basket} setBasket={setBasket} discountCode={discountCode} discountPercentage={discountPercentage} setDiscountCode={setDiscountCode} />
                </div>
                <SimpleButton type='submit' className='mb-[27px]' block disabled={!getTotal()}>
                  Buy Virtual Land
                </SimpleButton>

                <div className='lg:hidden bg-[#262728] rounded-lg py-[20px] px-[24px] mb-[27px]'>
                  <h2 className='font-semibold text-[20px] mb-[20px]'>FAQs</h2>
                  <Faqs />
                </div>

                <div className='py-[34px] px-[32px] text-[14px] text-white/70 bg-[#262728] rounded-[8px]'>
                  <div className='font-[900] mb-1'>Important:</div>
                  <p className='mb-5'>Currently you are pre-reserving the land units in the COMEARTH. You will be getting the pre-mint NFT Pass in your connected wallet which you can later swap against the exact land units in the COMEARTH Metaverse.</p>
                  <p>Once the landscape is launched, you, the pre-mint NFT Pass holder, will be offered the first right to select & fix your units’ exact location on the map before they are opened for general public.</p>
                </div>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>

      {isOpenedProgressWallet && <ProgressConnectYourWallet onClose={handleProgressWallet} 
      {...txModalProps}
      />}
    </Fragment>
  )
}

export default ReserveLand
