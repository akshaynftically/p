import {Fragment, useEffect, useState} from 'react'

// Components
import {SimpleButton, PillButton} from 'components/buttons'
import {Field, Radio, Select, FieldGroup} from 'components/form'
import {BasketList} from 'components/lists'

// Sections
import Faqs from './sections/Faqs'
import LandUnits from './sections/LandUnits'

// Modals
import ConnectYourWallet from 'modals/ConnectYourWallet'
import ProgressConnectYourWallet from 'modals/ProgressConnectYourWallet'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getTransactionForm, setTransactionForm} from 'app/TransactionFormSlice'
import {Controller, useForm} from 'react-hook-form'

const _selectIndustryOptions = [
  {value: 'Ecommerce', label: 'Ecommerce'},
  {value: 'Option2', label: 'Option 2'},
  {value: 'Option3', label: 'Option 3'},
]

const _selectCountryOptions = [
  {value: 'Option1', label: 'Option 1'},
  {value: 'Option2', label: 'Option 2'},
  {value: 'Option3', label: 'Option 3'},
]

const _selectTokenOptions = [
  {value: 'MATIC', label: 'MATIC'},
  {value: 'Option2', label: 'Option 2'},
  {value: 'Option3', label: 'Option 3'},
]

const ReserveLand = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, control, setValue, getValues, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  })
  const transactionForm = useSelector(getTransactionForm)
  const [basket, setBasket] = useState([
    {
      id: '1000',
      qty: 0,
      type: '32x32',
      perItemPrice: 20,
    },
    {
      id: '1001',
      qty: 0,
      type: '16x16',
      perItemPrice: 10,
    },
    {
      id: '1002',
      qty: 0,
      type: '8x8',
      perItemPrice: 5,
    },
    {
      id: '1004',
      qty: 0,
      type: '4x4',
      perItemPrice: 4,
    },
    {
      id: '1005',
      qty: 0,
      type: '2x2',
      perItemPrice: 2,
    },
    {
      id: '1006',
      qty: 0,
      type: '1x1',
      perItemPrice: 1,
    }
  ])
  const [discountCode, setDiscountCode] = useState('')
  const [selectIndustry, setSelectIndustry] = useState(_selectIndustryOptions[0])
  const [selectCountry, setSelectCountry] = useState(null)
  const [selectToken, setSelectToken] = useState(_selectTokenOptions[0])
  const [areYouRepresenting, setAreYouRepresenting] = useState('individual')
  const [isOpenedConnectYourWallet, setIsOpenedConnectYourWallet] = useState(false)
  const [isOpenedProgressWallet, setIsOpenedProgressWallet] = useState(false)

  useEffect(() => {
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
    dispatch(setTransactionForm({...getValues(), basket, discountCode}))
  }, [basket, discountCode])

  const getTotal = () => {
    let total = basket.reduce((sum, cur) => {
      return sum += cur.perItemPrice * cur.qty
    }, 0)

    return total
  }


  // Handlers
  const handleChangeAreYouRepresenting = (val) => {
    setAreYouRepresenting(val)
  }
  const handleToggleConnectYourWallet = () => {
    setIsOpenedConnectYourWallet(!isOpenedConnectYourWallet)
  }
  const handleProgressWallet = () => {
    setIsOpenedProgressWallet(!isOpenedProgressWallet)
  }
  const handleSelectConnectYourWallet = () => {
    setIsOpenedConnectYourWallet(false)
    setTimeout(() => setIsOpenedProgressWallet(true))
  }
  const onSubmit = (data) => {
    dispatch(setTransactionForm({...data, basket, discountCode}))
    handleSelectConnectYourWallet()
    setTimeout(() => {
      navigate('/success')
    }, 2000)
  }


  function lol () {
    console.log(1)
  }
  return (
    <Fragment>
      <div className='py-[120px] px-10 lg:px-[80px] text-white'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='lg:grid md:grid-cols-2 md:gap-x-[7.5rem]'>
              <div>
                <div className='mb-[14px] lg:mb-[50px]'>
                  <PillButton className='md:pr-[30px]' href='/'>
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
                <FieldGroup label='Company Name'>
                  <Field isError={errors.company}
                         register={register("company", { required: true })}
                         placeholder='Enter Your Company or Brand Name Here' />
                  <small className='text-red-400'>{errors.company?.type === 'required' && "Company is required"}</small>
                </FieldGroup>
                <FieldGroup label='Select Country' className='md:mb-[40px]'>
                  <Controller
                      name='country'
                      control={control}
                      onChange={setSelectCountry}
                      rules={{ required: true }}
                      render={({ field }) => <Select
                          {...field}
                          isError={errors.country}
                          defaultValue={selectCountry}
                          options={_selectCountryOptions}
                          placeholder='Please Select Country'
                      />}
                  />

                  <small className='text-red-400'>{errors.country?.type === 'required' && "Country is required"}</small>
                </FieldGroup>

                <div className='bg-[#262728] rounded-lg py-[20px] px-[24px]'>
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
                        onChange={setSelectToken}
                    />
                  </FieldGroup>

                  <FieldGroup label='Select Land Units'>
                    <LandUnits basket={basket} setBasket={setBasket} />
                  </FieldGroup>

                  <BasketList items={basket} setBasket={setBasket} discountCode={discountCode} setDiscountCode={setDiscountCode} />
                </div>
                <SimpleButton type='submit' block disabled={!getTotal()}>
                  Buy Virtual Land
                </SimpleButton>
              </div>
          </div>
        </form>
      </div>

      {isOpenedConnectYourWallet && <ConnectYourWallet onSelect={handleSelectConnectYourWallet} onClose={handleToggleConnectYourWallet} />}
      {isOpenedProgressWallet && <ProgressConnectYourWallet onClose={handleProgressWallet} />}
    </Fragment>
  )
}

export default ReserveLand
