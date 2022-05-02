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
import {useSearchParams} from "react-router-dom";

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

const _basket = [
  {
    id: '1001',
    qty: 2,
    type: '16x16',
    perItemPrice: 10,
  },
  {
    id: '1002',
    qty: 2,
    type: '8x8',
    perItemPrice: 5,
  },
]

const ReserveLand = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const [name, setName] = useState(queryParams.get('name') || '')
  const [email, setEmail] = useState(queryParams.get('email') || '')
  const [company, setCompany] = useState(queryParams.get('company') || '')
  const [selectIndustry, setSelectIndustry] = useState(_selectIndustryOptions[0])
  const [selectCountry, setSelectCountry] = useState(null)
  const [selectToken, setSelectToken] = useState(_selectTokenOptions[0])
  const [areYouRepresenting, setAreYouRepresenting] = useState('individual')
  const [isOpenedConnectYourWallet, setIsOpenedConnectYourWallet] = useState(false)
  const [isOpenedProgressWallet, setIsOpenedProgressWallet] = useState(false)

  useEffect(() => {
    if (queryParams.get('industry')) {
      setSelectIndustry(queryParams.get('industry'))
    }

    if (queryParams.get('country')) {
      setSelectCountry(queryParams.get('country'))
    }
  })

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

  return (
    <Fragment>
      <div className='py-[120px] px-[80px] text-white'>
        <div className='grid md:grid-cols-2 md:gap-x-[7.5rem]'>
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
              <Field value={name} onChange={setName} placeholder='Enter Your Full Name Here' />
            </FieldGroup>
            <FieldGroup label='Email Address'>
              <Field value={email} onChange={setEmail} type='email' placeholder='Enter Your Email Address Here' />
            </FieldGroup>
            <FieldGroup label='Select Industry'>
              <Select
                defaultValue={selectIndustry}
                options={_selectIndustryOptions}
                onChange={setSelectIndustry}
              />
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
              <Field value={company} onChange={setCompany} placeholder='Enter Your Company or Brand Name Here' />
            </FieldGroup>
            <FieldGroup label='Select Country' className='md:mb-[40px]'>
              <Select
                defaultValue={selectCountry}
                options={_selectCountryOptions}
                placeholder='Please Select Country'
                onChange={setSelectCountry}
              />
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
                <LandUnits />
              </FieldGroup>

              <BasketList items={_basket} />
              <FieldGroup className='mb-[24px]' label='Have a Promo Code?'>
                <div className='relative'>
                  <Field className='pr-[210px]' placeholder='Enter Your Promo Code Here' />
                  <SimpleButton
                    className='absolute top-0 right-0 w-[190px] min-h-full rounded-l-none'
                    type='button'
                  >
                    Apply Code Now
                  </SimpleButton>
                </div>
              </FieldGroup>
              <div className='flex text-[20px]'>
                <div className='text-white/[.80]'>Grand Total</div>
                <div className='flex items-center font-semibold text-white ml-auto'>
                  <span className='mr-[5px]'>
                    <svg
                      width='17'
                      height='14'
                      viewBox='0 0 17 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12.3254 4.27696C12.024 4.09937 11.6322 4.09937 11.3008 4.27696L8.95018 5.63848L7.35303 6.52645L5.00246 7.88795C4.70111 8.06555 4.30935 8.06555 3.97786 7.88795L2.10947 6.82243C1.80812 6.64482 1.59717 6.31923 1.59717 5.96407V3.86258C1.59717 3.5074 1.77799 3.18182 2.10947 3.00423L3.94773 1.96829C4.24908 1.7907 4.64084 1.7907 4.97232 1.96829L6.8106 3.00423C7.11191 3.18182 7.3229 3.5074 7.3229 3.86258V5.22409L8.92006 4.30656V2.94503C8.92006 2.58985 8.73925 2.26427 8.40775 2.08668L5.00246 0.133192C4.70111 -0.0443975 4.30935 -0.0443975 3.97786 0.133192L0.5123 2.08668C0.180812 2.26427 0 2.58985 0 2.94503V6.88161C0 7.23677 0.180812 7.56236 0.5123 7.73996L3.97786 9.69345C4.27921 9.87106 4.67097 9.87106 5.00246 9.69345L7.35303 8.36153L8.95018 7.44399L11.3008 6.11206C11.6021 5.93446 11.9939 5.93446 12.3254 6.11206L14.1636 7.14802C14.4649 7.32557 14.6759 7.65116 14.6759 8.00637V10.1078C14.6759 10.463 14.4951 10.7886 14.1636 10.9662L12.3254 12.0317C12.024 12.2093 11.6322 12.2093 11.3008 12.0317L9.46248 10.9958C9.16112 10.8182 8.95018 10.4926 8.95018 10.1374V8.77592L7.35303 9.69345V11.055C7.35303 11.4102 7.53383 11.7358 7.86533 11.9134L11.3309 13.8668C11.6322 14.0444 12.024 14.0444 12.3555 13.8668L15.821 11.9134C16.1224 11.7358 16.3333 11.4102 16.3333 11.055V7.1184C16.3333 6.76324 16.1525 6.43765 15.821 6.26005L12.3254 4.27696Z'
                        fill='#7A3FE4'
                      />
                    </svg>
                  </span>
                  25
                </div>
              </div>
            </div>
            <SimpleButton type='button' block onClick={handleToggleConnectYourWallet}>
              Buy Virtual Land
            </SimpleButton>
          </div>
        </div>
      </div>

      {isOpenedConnectYourWallet && <ConnectYourWallet onSelect={handleSelectConnectYourWallet} onClose={handleToggleConnectYourWallet} />}
      {isOpenedProgressWallet && <ProgressConnectYourWallet onClose={handleProgressWallet} />}
    </Fragment>
  )
}

export default ReserveLand
