import {Fragment, useState} from 'react'

// Components
import {SimpleButton, PillButton} from 'components/buttons'
import FieldGroup from 'components/form/FieldGroup'
import Field from 'components/form/Field'
import Radio from 'components/form/Radio'
import Select from 'components/form/Select'
import BasketList from 'components/lists/BasketList'
import FullScreenPopup from 'components/popups/FullScreenPopup'

// Sections
import Faqs from './sections/Faqs'
import LandUnits from './sections/LandUnits'

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
  const [selectIndustry, setSelectIndustry] = useState(_selectIndustryOptions[0])
  const [selectCountry, setSelectCountry] = useState(null)
  const [areYouRepresenting, setAreYouRepresenting] = useState('individual')
  const [enterYourDetailsIsOpened, setEnterYourDetailsIsOpened] = useState(true)

  // Handlers
  const handleChangeAreYouRepresenting = (val) => {
    setAreYouRepresenting(val)
  }

  const handleToggleEnterYourDetails = () => {
    setEnterYourDetailsIsOpened(!enterYourDetailsIsOpened)
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

              <PillButton type='button' onClick={handleToggleEnterYourDetails}>
                Open Enter Your Details
              </PillButton>
            </div>

            <h2 className='font-extrabold text-[24px] mb-[16px]'>Reserve Your Land</h2>
            <hr className='border-[#363738] my-[16px]' />

            <FieldGroup label='Name'>
              <Field placeholder='Enter Your Full Name Here' />
            </FieldGroup>
            <FieldGroup label='Email Address'>
              <Field type='email' placeholder='Enter Your Email Address Here' />
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
              <Field placeholder='Enter Your Company or Brand Name Here' />
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
            <div className='bg-[#262728] rounded-lg py-[30px] px-[32px]'>
              <h2 className='font-extrabold text-[24px] mb-[20px]'>Cart Summary</h2>

              <div className='md:mb-[34px]'>
                <div className='text-[14px] text-white/[.80] mb-[12px]'>Select Land Units</div>
                <LandUnits />
                <BasketList items={_basket} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {enterYourDetailsIsOpened && (
        <FullScreenPopup onClose={handleToggleEnterYourDetails}>
          <h2 className='font-extrabold text-[24px] mb-[16px]'>Enter Your Details</h2>
          <hr className='border-[#363738] my-[16px]' />

          <FieldGroup label='Name'>
            <Field placeholder='Enter Your Full Name Here' />
          </FieldGroup>
          <FieldGroup label='Email Address'>
            <Field type='email' placeholder='Enter Your Email Address Here' />
          </FieldGroup>
          <FieldGroup label='Select Industry'>
            <Select
              defaultValue={selectIndustry}
              options={_selectIndustryOptions}
              onChange={setSelectIndustry}
            />
          </FieldGroup>
          <FieldGroup label='Company Name'>
            <Field placeholder='Enter Your Company or Brand Name Here' />
          </FieldGroup>
          <FieldGroup label='Select Country' className='md:mb-[40px]'>
            <Select
              defaultValue={selectCountry}
              options={_selectCountryOptions}
              placeholder='Please Select Country'
              onChange={setSelectCountry}
            />
          </FieldGroup>

          <SimpleButton type='button' block>
            Reserve Land Now
          </SimpleButton>
        </FullScreenPopup>
      )}
    </Fragment>
  )
}

export default ReserveLand
