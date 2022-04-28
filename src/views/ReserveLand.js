import {useState} from 'react'

// Components
import Button from 'components/buttons/Button'
import FieldGroup from 'components/form/FieldGroup'
import Field from 'components/form/Field'
import Radio from 'components/form/Radio'
import Select from 'components/form/Select'
import AccordionItem from 'components/accordion/AccordionItem'

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

const ReserveLand = () => {
  const [selectIndustry, setSelectIndustry] = useState(_selectIndustryOptions)
  const [selectCountry, setSelectCountry] = useState(_selectCountryOptions)
  const [areYouRepresenting, setAreYouRepresenting] = useState('individual')
  const [faqsSelected, setFaqsSelected] = useState('2')

  // Handlers
  const handleChangeAreYouRepresenting = (val) => {
    setAreYouRepresenting(val)
  }

  const handleClickFaqsItem = (val) => {
    setFaqsSelected(val)
  }

  return (
    <div className='py-[120px] px-[80px] text-white'>
      <div className='grid md:grid-cols-2'>
        <div>
          <div className='mb-[14px] lg:mb-[50px]'>
            <Button className='md:pr-[30px]' href='/'>
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
            </Button>
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
              defaultValue={selectIndustry[0]}
              options={selectIndustry}
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
              options={selectCountry}
              placeholder='Please Select Country'
              onChange={setSelectCountry}
            />
          </FieldGroup>

          <div className='bg-[#262728] rounded-lg py-[20px] px-[24px]'>
            <h2 className='font-semibold text-[20px] mb-[20px]'>FAQs</h2>

            <AccordionItem
              title='What is the significance of the land sizes ?'
              isOpened={faqsSelected === '1'}
              onClick={() => handleClickFaqsItem('1')}
            >
              Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum
              voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut
              repellendus minima aut commodi.
            </AccordionItem>
            <AccordionItem
              title='Can I buy it later?'
              isOpened={faqsSelected === '2'}
              onClick={() => handleClickFaqsItem('2')}
            >
              Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum
              voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut
              repellendus minima aut commodi.
            </AccordionItem>
            <AccordionItem
              title='What is the significance of the land sizes ?'
              isOpened={faqsSelected === '3'}
              onClick={() => handleClickFaqsItem('3')}
            >
              Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum
              voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut
              repellendus minima aut commodi.
            </AccordionItem>
            <AccordionItem
              title='What is the significance of the land sizes ?'
              isOpened={faqsSelected === '4'}
              onClick={() => handleClickFaqsItem('4')}
            >
              Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum
              voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut
              repellendus minima aut commodi.
            </AccordionItem>
            <AccordionItem
              className='mb-0'
              title='What is the significance of the land sizes ?'
              isOpened={faqsSelected === '5'}
              onClick={() => handleClickFaqsItem('5')}
            >
              Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum
              voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut
              repellendus minima aut commodi.
            </AccordionItem>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ReserveLand
