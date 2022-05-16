import {useEffect, useState} from 'react'
import { FullScreenPopup } from 'components/popups'
import { SimpleButton } from 'components/buttons'
import {useNavigate} from 'react-router-dom'
import FieldGroup from '../components/form/FieldGroup'
import Field from '../components/form/Field'
import {getTransactionForm, setTransactionForm} from '../app/TransactionFormSlice'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'


const ReserveLandModal = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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

    const onSubmit = (data) => {
        dispatch(setTransactionForm(data))
        navigate('/reserve-land')
    }

    return (
      <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Account' className='min-h-[100vh] md:min-h-full' onClose={onClose}>
          <>
              <h2 className='font-extrabold text-[24px] mb-[16px]'>Enter Your Details</h2>
              <hr className='border-[#363738] my-[16px]' />

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
      </FullScreenPopup>
    )
}

export default ReserveLandModal