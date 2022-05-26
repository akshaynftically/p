import {useEffect, useRef, useState} from 'react'

import '@google/model-viewer'

// Components
import {SimpleButton} from 'components/buttons'
import {Field, FieldGroup} from 'components/form'

// Sources
import _bgEarth from 'assets/img/earth-md.png'
import {useForm} from 'react-hook-form'

const Main = () => {
  const modelViewerRef = useRef()
  const [loading, setLoading] = useState(0)


  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
  })

  useEffect(() => {
    modelViewerRef.current.addEventListener('progress', (e) => {
      setLoading(e.detail.totalProgress * 180)
    })
  })

  const onSubmit = (data) => {
    // dispatch(setTransactionForm(data))
    // navigate('/reserve-land')
    window.open(`${process.env.REACT_APP_JOIN_LINK}`, "_blank")
  }

  return (
    <div className='bg-center bg-no-repeat bg-cover pt-[90px] pb-[40px] md:pt-[200px] md:pb-[80px] relative '>
      <div className='mx-[20px] lg:mx-[80px] relative z-[2]'>
        <div className='grid grid-cols-12 gap-x-[30px]'>
          <div className='relative z-[100] col-span-12 md:col-span-6'>
            <h1 className='leading-tight font-extrabold text-[32px] lg:text-[52px] mb-[24px]'>
              Contact Us
            </h1>
            <div className='text-[16px] text-white/[.80] mb-[72px] lg:mb-[40px]'>
              We are on a mission to bring e-commerce to web3.0 & metaverse making the buying & selling of digital products & experiences a breeze through our DIY E-Commerce Metaverse COMEARTH.
            </div>
          </div>
          <div className='flex justify-center md:order-2 col-span-12 md:col-span-6 text-right metaverse-demo min-h-[300px] h-full relative'>
            <div className='w-full pt-[24px] z-[1000] bg-[#262728] rounded-[8px] px-[24px]'>
              <h2 className='font-extrabold text-[24px] lg:text-[36px]'>
                <div className="flex items-center">
                  Get in touch!
                </div>
              </h2>
              <hr className='border-[#363738] mt-[16px] lg:mt-0 mb-[16px]' />

              <form onSubmit={handleSubmit(onSubmit)} className='text-left pb-7'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-[16px]'>
                  <FieldGroup className='col-span-2 lg:col-span-1' label='Full Name'>
                    <Field
                      className='bg-[#161718] border-[#363738] !shadow-none'
                      isError={errors.first_name}
                      register={register('first_name', {required: true})}
                      type='text'
                      placeholder='Enter Your First Name Here'
                    />
                    <small className='text-red-400'>
                      {errors.first_name?.type === 'required' && 'First Name is required'}
                    </small>
                  </FieldGroup>

                  <FieldGroup className='col-span-2 lg:col-span-1' label='Last Name'>
                    <Field
                      className='bg-[#161718] border-[#363738] !shadow-none'
                      isError={errors.last_name}
                      register={register('last_name', {required: true})}
                      type='text'
                      placeholder='Enter Your Last Name Here'
                    />
                    <small className='text-red-400'>
                      {errors.last_name?.type === 'required' && 'Last Name is required'}
                    </small>
                  </FieldGroup>

                  <FieldGroup className='col-span-2 lg:col-span-1' label='E-mail Address'>
                    <Field
                      className='bg-[#161718] border-[#363738] !shadow-none'
                      isError={errors.email}
                      register={register('email', {required: true, pattern: /^\S+@\S+$/i})}
                      type='text'
                      placeholder='Enter Your E-mail Address'
                    />
                    <small className='text-red-400'>
                      {errors.email?.type === 'required' && 'Email is required'}
                      {errors.email?.type === 'pattern' && 'Email is invalid'}
                    </small>
                  </FieldGroup>

                  <FieldGroup className='col-span-2 lg:col-span-1' label='Subject'>
                    <Field
                      className='bg-[#161718] border-[#363738] !shadow-none'
                      isError={errors.subject}
                      register={register('subject', {required: true})}
                      type='text'
                      placeholder='Enter Subject'
                    />
                    <small className='text-red-400'>
                      {errors.subject?.type === 'required' && 'Subject is required'}
                    </small>
                  </FieldGroup>

                  <FieldGroup label='Message' className='col-span-2'>
                    <Field
                      className='bg-[#161718] border-[#363738] !shadow-none'
                      isError={errors.message}
                      register={register('message', {required: true})}
                      type='textarea'
                      placeholder='Enter Message Here'
                    />
                    <small className='text-red-400'>
                      {errors.message?.type === 'required' && 'Message is required'}
                    </small>
                  </FieldGroup>
                </div>

                <SimpleButton type='submit' size='sm' block>Submit</SimpleButton>
              </form>
            </div>

            <model-viewer
              class='top-0 right-0 -translate-y-[50px] lg:-translate-y-[200px] translate-x-[100px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] 2xl:w-[600px] 2xl:h-[600px]'
              bounds='tight'
              src='/Old_shade_blue_comearth.glb'
              ar
              disable-zoom
              interpolation-decay='200'
              ar-modes='webxr scene-viewer quick-look'
              environment-image='neutral'
              poster='poster.webp'
              orbit-sensitivity={0.4}
              auto-rotate
              auto-rotate-delay={0}
              ref={(ref) => {
                modelViewerRef.current = ref
              }}
            >
              <div className='progress-bar hide' slot='progress-bar'>
                <div className='flex items-center relative justify-center h-full' slot='poster'></div>
              </div>

              <div className='flex items-center justify-center h-full relative' slot='poster'>
                <img className='scale-[1.09] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] 2xl:w-[600px] 2xl:h-[600px]' src={_bgEarth} alt='Preloader'/>

                <div className='text-center'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                      <div
                        className='w-[180px] overflow-hidden block h-[24px] relative border-2 rounded-[40px] bg-white/30 mb-[26px]'>
                        <div
                          className='bg-[#3F99FF] absolute rounded-[40px] overflow-hidden transition-[width] top-0 left-0 h-full'
                          style={{width: `${loading}px`}}
                        >
                          <svg
                            className='absolute top-[-2px] right-0'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <mask id='path-1-inside-1_310_4' fill='white'>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.9998 20.667C16.7863 20.667 20.6665 16.7868 20.6665 12.0003C20.6665 7.21386 16.7863 3.33366 11.9998 3.33366C7.21337 3.33366 3.33317 7.21386 3.33317 12.0003C3.33317 16.7868 7.21337 20.667 11.9998 20.667Z'
                              />
                            </mask>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.9998 20.667C16.7863 20.667 20.6665 16.7868 20.6665 12.0003C20.6665 7.21386 16.7863 3.33366 11.9998 3.33366C7.21337 3.33366 3.33317 7.21386 3.33317 12.0003C3.33317 16.7868 7.21337 20.667 11.9998 20.667Z'
                              fill='white'
                            />
                            <path
                              d='M-8 12C-8 0.954305 0.954305 -8 12 -8V56C36.3005 56 56 36.3005 56 12H-8ZM12 32C0.954305 32 -8 23.0457 -8 12H56C56 -12.3005 36.3005 -32 12 -32V32ZM32 12C32 23.0457 23.0457 32 12 32V-32C-12.3005 -32 -32 -12.3005 -32 12H32ZM12 -8C23.0457 -8 32 0.954305 32 12H-32C-32 36.3005 -12.3005 56 12 56V-8ZM-11.3335 12.0003C-11.3335 -0.886319 -0.886808 -11.333 11.9998 -11.333V52.667C34.4594 52.667 52.6665 34.4599 52.6665 12.0003H-11.3335ZM11.9998 35.3337C-0.886813 35.3337 -11.3335 24.887 -11.3335 12.0003H52.6665C52.6665 -10.4592 34.4594 -28.6663 11.9998 -28.6663V35.3337ZM35.3332 12.0003C35.3332 24.887 24.8865 35.3337 11.9998 35.3337V-28.6663C-10.4597 -28.6663 -28.6668 -10.4593 -28.6668 12.0003H35.3332ZM11.9998 -11.333C24.8865 -11.333 35.3332 -0.886325 35.3332 12.0003H-28.6668C-28.6668 34.4599 -10.4597 52.667 11.9998 52.667V-11.333Z'
                              fill='white'
                              mask='url(#path-1-inside-1_310_4)'
                            />
                            <path
                              d='M9.71516 3.33203C10.9775 3.40629 13.7693 4.02055 14.4822 4.19877C15.3733 4.42154 17.0237 5.07259 17.2465 6.85479C17.4693 8.63699 17.6921 9.97364 18.3604 10.8647C19.0287 11.7558 19.4743 13.538 15.6871 12.8697C13.9873 12.4448 10.0583 11.8172 6.60605 14.6593C6.26586 14.9394 5.8539 15.1747 5.64766 15.5641C5.46384 15.9111 5.51317 16.3572 5.66221 17.1024C5.84043 17.9935 5.58796 18.0678 5.43945 17.9935'
                              stroke='white'
                              strokeWidth='0.6'
                            />
                            <path
                              d='M3.33447 7.66667C4.22557 7.29538 7.71218 6.00876 8.7815 5.29588C10.1182 4.40478 13.237 4.182 14.3509 6.18698C15.4647 8.19195 15.6875 10.6425 14.1281 11.088C13.0142 11.3108 11.232 9.30585 6.9993 11.7564C5.2171 12.8702 4.326 13.9841 4.54878 14.8752C4.727 15.5881 4.62304 16.3604 4.54878 16.6574'
                              stroke='white'
                              strokeWidth='0.6'
                            />
                            <path
                              d='M20.3661 8.19052C19.9205 8.33904 19.074 8.9034 19.2522 9.97272C19.475 11.3094 21.2572 13.9827 18.5839 15.0965C17.0244 15.5421 17.2472 14.2054 13.46 14.4282C10.3412 14.4282 8.11343 14.651 7.66788 17.1015C7.4451 18.4382 7.4451 19.1065 6.99955 19.3293M9.45008 20.6659C8.78175 19.7006 7.97976 17.5471 10.1184 16.656C11.4551 16.099 13.2373 15.9876 14.3511 15.9876C16.1333 15.9876 16.5789 17.1015 17.9155 17.1015C18.9848 17.1015 19.5492 17.1015 19.6977 17.1015M5.2174 8.85885C5.96362 8.11262 7.67844 6.7415 9.36757 6.31539C10.0018 6.15539 10.6731 6.24625 11.2604 6.53421C11.6062 6.70374 11.8648 6.85387 12.1234 6.85387C12.569 6.85387 14.1284 8.19052 12.569 9.08162C11.0096 9.97272 10.564 9.3044 9.00458 9.97272C7.44515 10.641 6.33128 11.5321 5.44018 11.3094C4.54908 11.0866 4.10353 10.1955 5.2174 8.85885ZM10.7867 7.74497C10.6995 7.65778 10.2889 7.63813 9.8052 7.6495C8.83217 7.67236 7.28697 8.03758 7.67487 8.93024C7.74023 9.08066 7.88922 9.15636 8.11343 9.08162C8.78175 8.85885 8.78175 9.08162 9.67285 9.08162C10.564 9.08162 11.0095 7.96775 10.7867 7.74497Z'
                              stroke='white'
                              strokeWidth='0.6'
                            />
                            <path
                              d='M15.2423 19.1082C14.3512 19.4647 12.6433 19.8508 11.9007 19.9993C10.3413 20.3529 10.1185 19.1082 10.564 18.6628C11.0096 18.2174 11.0096 18.4399 11.6779 17.7716C12.3462 17.1033 13.0146 17.1033 15.2423 17.5488C18.1384 17.7716 16.3562 18.6627 15.2423 19.1082Z'
                              stroke='white'
                              strokeWidth='0.6'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button slot='ar-button' id='ar-button'></button>
            </model-viewer>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-[#161718]/0 to-[#161718] h-[40px] md:h-[107px] absolute bottom-0 left-0 w-full'></div>
    </div>
  )
}

export default Main
