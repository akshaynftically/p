import {FullScreenPopup} from 'components/popups'
import {SimpleButton} from 'components/buttons'
import FieldGroup from '../components/form/FieldGroup'
import Field from '../components/form/Field'
import {useForm} from 'react-hook-form'


const ReserveLandModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
  })
  const {onClose} = props

  const onSubmit = (data) => {

  }

  return (
    <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Subscribe to Our Newsletter'
                     className='min-h-[100vh] md:min-h-full' onClose={onClose}>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup label='Full Name'>
            <Field
              isError={errors.name}
              register={register('name', {required: true})}
              type='text'
              placeholder='Please Enter Your Full Name Here'
            />
            <small className='text-red-400'>
              {errors.name?.type === 'required' && 'Full Name is required'}
            </small>
          </FieldGroup>

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
            Subscribe Now
          </SimpleButton>
        </form>
      </>
    </FullScreenPopup>
  )
}

export default ReserveLandModal