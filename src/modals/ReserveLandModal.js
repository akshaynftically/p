import {useEffect, useState} from 'react'
import { FullScreenPopup } from 'components/popups'
import { SimpleButton } from 'components/buttons'
import {useNavigate} from 'react-router-dom'
import FieldGroup from '../components/form/FieldGroup'
import Field from '../components/form/Field'
import {getTransactionForm, setTransactionForm} from '../app/TransactionFormSlice'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import apiRepository from 'lib/apiRepository'
import ProgressConnectYourWallet from './ProgressConnectYourWallet'


const ReserveLandModal = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [txModalProps,setTxModalProps] = useState({
        title:'Already Registered',
        mainHeading:'We have an account already registered with this email, Please check your email to proceed further.',
        content:'',
        loading:false,
learn:'',
        view:''
      })
  const [isOpenedProgressWallet, setIsOpenedProgressWallet] = useState(false)

    const transactionForm = useSelector(getTransactionForm)
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm({
        mode: 'onChange',
    })
    const {onClose} = props

    useEffect(() => {
        if (transactionForm) {
            setValue('email', transactionForm.email)
        }
    }, [])
    const handleProgressWallet =() =>{
        setIsOpenedProgressWallet(!isOpenedProgressWallet)
      }

    const onSubmit = (data) => {
        // remove any cached localstorage
        localStorage.removeItem('order')
        localStorage.removeItem('wallet')
        localStorage.removeItem('transaction_form')
        localStorage.removeItem('auth')
        dispatch(setTransactionForm(data))
        new apiRepository().createLead(data.email)
        .then(res => {
          // save lead in localstorage
          console.log(res)
          onClose()
          navigate('/reserve-land')
        })
        .catch(err => {
          console.log(err)
          if(err?.response?.status === 409){
            onClose()

            navigate('/reserve-land')
          }
          if(err?.response?.status === 302){
            // handleToggleEnterYourDetails()
            // onClose()
            setIsOpenedProgressWallet(true)
          }
        })
    }

    return (
      <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Please Enter Your Email ID' className='min-h-[100vh] md:min-h-full' onClose={onClose}>
          <>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <FieldGroup label='Email ID'>
                      <Field
                        isError={errors.email}
                        register={register('email', {required: true, pattern: /^\S+@\S+$/i})}
                        type='email'
                        placeholder='Enter Your Email Address Here'
                      />
                      <small className='text-red-400'>
                          {errors.email?.type === 'required' && 'Email is required'}
                          {errors.email?.type === 'pattern' && 'Email is invalid'}
                      </small>
                  </FieldGroup>
                  <SimpleButton type='submit' block>
                      Reserve Land Now
                  </SimpleButton>
              </form>
          </>
          {isOpenedProgressWallet && <ProgressConnectYourWallet onClose={handleProgressWallet} 
      {...txModalProps}
      />}
      </FullScreenPopup>
    )
}

export default ReserveLandModal