import {FullScreenPopup} from 'components/popups'
import {SimpleButton} from 'components/buttons'
import FieldGroup from '../components/form/FieldGroup'
import Field from '../components/form/Field'
import {useForm} from 'react-hook-form'
import apiRepository from 'lib/apiRepository'
import { toast,ToastContainer } from 'react-toastify';



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

    console.log(data)
    new apiRepository().createLead({email:data.email,lead_type:'newsletter-subscription',name:data.name})
    .then(res => {
      // save lead in localstorage
      console.log(res)
     
       toast.success('You have subscribed our newletter.', {
      position: "top-right",
      autoClose:1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      onClose:()=>onClose()
  });
 
    })
    .catch(err => {
      console.log(err)
      if(err?.response?.status === 409){
         toast.success('You have already subscribed our newletter.', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      onClose:()=>onClose()
  });


      }
      if(err?.response?.status === 302){
        // handleToggleEnterYourDetails()
        toast.success('You have already subscribed our newletter.', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          onClose:()=>onClose()
      });

      }
    })

    

  }

  return (
    <FullScreenPopup fullscreen={true} size='w-full md:w-[640px]' title='Subscribe to Our Newsletter'
                     className='min-h-[100vh] md:min-h-full' onClose={onClose}>
      <>
      <ToastContainer />

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup label='Full Name'>
            <Field
              isError={errors.name}
              register={register('name', {required: false})}
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