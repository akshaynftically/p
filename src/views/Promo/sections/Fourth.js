import {useState} from 'react'

// Components
import {SimpleButton, BlurButton} from 'components/buttons'

// Mocks
import _imgBanner1 from 'assets/img/320x345/1.jpg'
import _imgBanner2 from 'assets/img/320x345/2.jpg'
import _imgBanner3 from 'assets/img/320x345/3.jpg'
import _imgBanner4 from 'assets/img/320x345/4.jpg'
import ReserveLandModal from '../../../modals/ReserveLandModal'

const _banners = [
  {
    id: '1001',
    title: 'Drive Key Business Metrics',
    text: 'Conduct end-to-end personalization based on user personas. Leverage AR/VR to create unforgettable shopping experiences',
    image: _imgBanner1,
  },
  {
    id: '1002',
    title: 'Use Metaverse for branding',
    text: 'Conduct end-to-end personalization based on user personas. Leverage AR/VR to create unforgettable shopping experiences',
    image: _imgBanner2,
  },
  {
    id: '1003',
    title: 'Create out-of-this-world consumer experiences, literally',
    text: 'Conduct end-to-end personalization based on user personas. Leverage AR/VR to create unforgettable shopping experiences',
    image: _imgBanner3,
  },
  {
    id: '1004',
    title: 'Metaverse’s hottest commercial real estate',
    text: 'Conduct end-to-end personalization based on user personas. Leverage AR/VR to create unforgettable shopping experiences',
    image: _imgBanner4,
  },
]

const Fourth = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='pt-[70px] relative'>
      <div className='absolute top-0 left-0 transform translate-y-[220px] md:translate-y-[-300px] bg-contain 4xl:bg-cover w-full bg-no-repeat h-full bg-[url("assets/img/bg/8.png")]'></div>
      <div className='hidden md:block bg-gradient-to-b transform md:translate-y-[-200px] 4xl:translate-y-[-170px] 3xl:translate-y-[-150px] from-[#161819] z-[0] to-[#161718]/0 h-[110px] absolute top-0 z-[1] left-0 w-full'></div>
      <div className='md:hidden bg-[#161819] z-[0] h-[110px] absolute top-[30px] z-[1] left-0 w-full'></div>
      <div className='md:hidden bg-gradient-to-b from-[#161819] to-[#161718]/0 z-[0] h-[110px] absolute top-[50px] z-[1] left-0 w-full'></div>

      <div className='mt-[40px] md:mt-0 relative'>
        <div className='mx-[20px] lg:mx-[80px] relative z-[2]'>
          <div className='grid grid-cols-12'>
            <div className='md:col-span-3'></div>
            <div className='col-span-12 md:col-span-6 mb-[30px] md:md-0'>
              <h2 className='leading-2 font-extrabold md:text-center text-[32px] lg:text-[48px]'>
                <span className='text-gradient'>A Measdtaverse</span>
                <br />
                That Users Will Flock To
              </h2>
            </div>
            <div className='md:col-span-3'></div>
          </div>

          <div className='grid grid-cols-12 gap-[30px] mb-[60px]'>
            <div className='col-span-12 md:col-span-3 order-1 md:order-1'>
              <div className='-mb-[16px]'>
                <BlurButton className='w-full text-left mb-[16px]' type='button'>
                  <svg
                      className='fill-[#3F99FF] mr-[8px]'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8.00033 11.9993H26.5843L27.251 9.33268H10.667V6.66602H28.9603C29.163 6.66602 29.363 6.71223 29.5451 6.80113C29.7273 6.89003 29.8868 7.01928 30.0114 7.17906C30.1361 7.33884 30.2227 7.52495 30.2647 7.72323C30.3067 7.92151 30.3029 8.12675 30.2537 8.32335L26.9203 21.6567C26.8481 21.945 26.6816 22.2009 26.4473 22.3838C26.2129 22.5667 25.9242 22.666 25.627 22.666H6.66699C6.31337 22.666 5.97423 22.5255 5.72418 22.2755C5.47413 22.0254 5.33366 21.6863 5.33366 21.3327V5.33268H2.66699V2.66602H6.66699C7.02061 2.66602 7.35975 2.80649 7.6098 3.05654C7.85985 3.30659 8.00033 3.64573 8.00033 3.99935V11.9993ZM8.00033 30.666C7.29308 30.666 6.6148 30.3851 6.11471 29.885C5.61461 29.3849 5.33366 28.7066 5.33366 27.9993C5.33366 27.2921 5.61461 26.6138 6.11471 26.1137C6.6148 25.6136 7.29308 25.3327 8.00033 25.3327C8.70757 25.3327 9.38585 25.6136 9.88594 26.1137C10.386 26.6138 10.667 27.2921 10.667 27.9993C10.667 28.7066 10.386 29.3849 9.88594 29.885C9.38585 30.3851 8.70757 30.666 8.00033 30.666ZM24.0003 30.666C23.2931 30.666 22.6148 30.3851 22.1147 29.885C21.6146 29.3849 21.3337 28.7066 21.3337 27.9993C21.3337 27.2921 21.6146 26.6138 22.1147 26.1137C22.6148 25.6136 23.2931 25.3327 24.0003 25.3327C24.7076 25.3327 25.3858 25.6136 25.8859 26.1137C26.386 26.6138 26.667 27.2921 26.667 27.9993C26.667 28.7066 26.386 29.3849 25.8859 29.885C25.3858 30.3851 24.7076 30.666 24.0003 30.666Z' />
                  </svg>
                  Incentive for Visitors
                </BlurButton>
                <BlurButton className='w-full text-left mb-[16px]' type='button'>
                  <svg
                      className='fill-[#3F99FF] mr-[8px]'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M16.0003 29.3327C8.63633 29.3327 2.66699 23.3633 2.66699 15.9993C2.66699 8.63535 8.63633 2.66602 16.0003 2.66602C23.3643 2.66602 29.3337 8.63535 29.3337 15.9993C29.3337 23.3633 23.3643 29.3327 16.0003 29.3327ZM10.667 17.3327C10.667 18.7472 11.2289 20.1037 12.2291 21.1039C13.2293 22.1041 14.5858 22.666 16.0003 22.666C17.4148 22.666 18.7714 22.1041 19.7716 21.1039C20.7718 20.1037 21.3337 18.7472 21.3337 17.3327H10.667ZM10.667 14.666C11.1974 14.666 11.7061 14.4553 12.0812 14.0802C12.4563 13.7052 12.667 13.1964 12.667 12.666C12.667 12.1356 12.4563 11.6269 12.0812 11.2518C11.7061 10.8767 11.1974 10.666 10.667 10.666C10.1366 10.666 9.62785 10.8767 9.25278 11.2518C8.87771 11.6269 8.66699 12.1356 8.66699 12.666C8.66699 13.1964 8.87771 13.7052 9.25278 14.0802C9.62785 14.4553 10.1366 14.666 10.667 14.666ZM21.3337 14.666C21.8641 14.666 22.3728 14.4553 22.7479 14.0802C23.1229 13.7052 23.3337 13.1964 23.3337 12.666C23.3337 12.1356 23.1229 11.6269 22.7479 11.2518C22.3728 10.8767 21.8641 10.666 21.3337 10.666C20.8032 10.666 20.2945 10.8767 19.9194 11.2518C19.5444 11.6269 19.3337 12.1356 19.3337 12.666C19.3337 13.1964 19.5444 13.7052 19.9194 14.0802C20.2945 14.4553 20.8032 14.666 21.3337 14.666Z' />
                  </svg>
                  Incentive for Buyers
                </BlurButton>
                <BlurButton className='w-full text-left mb-[16px]' type='button'>
                  <svg
                      className='fill-[#3F99FF] mr-[8px]'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M5.33301 19.6607C3.70236 18.5253 2.47664 16.8991 1.83424 15.0188C1.19184 13.1385 1.16629 11.1022 1.76131 9.20638C2.35634 7.31055 3.54088 5.65409 5.14252 4.4781C6.74417 3.30211 8.67933 2.66797 10.6663 2.66797C12.6534 2.66797 14.5885 3.30211 16.1902 4.4781C17.7918 5.65409 18.9763 7.31055 19.5714 9.20638C20.1664 11.1022 20.1408 13.1385 19.4984 15.0188C18.856 16.8991 17.6303 18.5253 15.9997 19.6607V28.0007C15.9997 28.3543 15.8592 28.6935 15.6091 28.9435C15.3591 29.1936 15.02 29.3341 14.6663 29.3341H6.66634C6.31272 29.3341 5.97358 29.1936 5.72353 28.9435C5.47348 28.6935 5.33301 28.3543 5.33301 28.0007V19.6607ZM10.6663 18.6674C12.4345 18.6674 14.1301 17.965 15.3804 16.7148C16.6306 15.4645 17.333 13.7688 17.333 12.0007C17.333 10.2326 16.6306 8.53692 15.3804 7.28667C14.1301 6.03643 12.4345 5.33405 10.6663 5.33405C8.89823 5.33405 7.20254 6.03643 5.9523 7.28667C4.70205 8.53692 3.99967 10.2326 3.99967 12.0007C3.99967 13.7688 4.70205 15.4645 5.9523 16.7148C7.20254 17.965 8.89823 18.6674 10.6663 18.6674ZM9.33301 24.0007V26.6674H11.9997V24.0007H9.33301ZM10.6663 16.0007C9.60548 16.0007 8.58806 15.5793 7.83791 14.8291C7.08777 14.079 6.66634 13.0616 6.66634 12.0007C6.66634 10.9399 7.08777 9.92244 7.83791 9.17229C8.58806 8.42215 9.60548 8.00072 10.6663 8.00072C11.7272 8.00072 12.7446 8.42215 13.4948 9.17229C14.2449 9.92244 14.6663 10.9399 14.6663 12.0007C14.6663 13.0616 14.2449 14.079 13.4948 14.8291C12.7446 15.5793 11.7272 16.0007 10.6663 16.0007ZM18.6663 22.6674V20.9447C19.9262 19.8204 20.9339 18.4422 21.6233 16.9007C22.3127 15.3592 22.6682 13.6893 22.6663 12.0007C22.6705 9.04817 21.582 6.1985 19.6103 4.00072H27.9997C28.3533 4.00072 28.6924 4.14119 28.9425 4.39124C29.1925 4.64129 29.333 4.98043 29.333 5.33405V21.3341C29.333 21.6877 29.1925 22.0268 28.9425 22.2769C28.6924 22.5269 28.3533 22.6674 27.9997 22.6674H18.6663ZM23.9997 9.33405V12.0007H26.6663V9.33405H23.9997Z' />
                  </svg>
                  Incentive for Sellers
                </BlurButton>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 order-3 md:order-2 flex items-end justify-center text-center'>
              <SimpleButton className='!px-[24px] md:mb-[55px]' type='button'
                            onClick={() => setOpenModal(true)}>
                Start Your Metaverse Journey Now
              </SimpleButton>
            </div>
            <div className='col-span-12 md:col-span-3 order-2 md:order-3'>
              <div className='-mb-[16px]'>
                <BlurButton className='w-full text-left mb-[16px]' type='button'>
                  <svg
                      className='fill-[#3F99FF] mr-[8px]'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M22.5998 15.9328C23.7293 14.8043 24.5502 13.4047 24.984 11.8681C25.4178 10.3315 25.4498 8.70932 25.0772 7.15677L28.4038 5.73011C28.5053 5.68662 28.6159 5.669 28.7259 5.67883C28.8358 5.68866 28.9416 5.72563 29.0337 5.78643C29.1258 5.84723 29.2014 5.92995 29.2537 6.02717C29.306 6.12439 29.3333 6.23306 29.3332 6.34344V25.3328L19.9998 29.3328L11.9998 25.3328L3.59584 28.9341C3.49439 28.9776 3.38373 28.9952 3.27379 28.9854C3.16385 28.9755 3.05808 28.9386 2.96595 28.8778C2.87383 28.817 2.79824 28.7343 2.74598 28.637C2.69371 28.5398 2.66641 28.4311 2.6665 28.3208V9.33277L6.8385 7.54477C6.54496 9.04554 6.62505 10.5955 7.07171 12.058C7.51837 13.5205 8.3179 14.8507 9.39984 15.9314L15.9998 22.5328L22.5998 15.9328ZM20.7145 14.0474L15.9998 18.7594L11.2852 14.0461C10.353 13.1137 9.71823 11.9258 9.46114 10.6326C9.20405 9.33948 9.33617 7.99913 9.84081 6.78105C10.3454 5.56298 11.1999 4.52189 12.2962 3.78943C13.3925 3.05696 14.6814 2.66602 15.9998 2.66602C17.3183 2.66602 18.6072 3.05696 19.7035 3.78943C20.7997 4.52189 21.6542 5.56298 22.1589 6.78105C22.6635 7.99913 22.7956 9.33948 22.5385 10.6326C22.2814 11.9258 21.6467 13.1137 20.7145 14.0461V14.0474Z' />
                  </svg>
                  Incentive for Launching Business
                </BlurButton>
                <BlurButton className='w-full text-left mb-[16px]' type='button'>
                  <svg
                      className='fill-[#3F99FF] mr-[8px]'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2.6665 6.66602L11.9998 2.66602L19.9998 6.66602L28.4038 3.06468C28.5053 3.02119 28.6159 3.00357 28.7259 3.01341C28.8358 3.02324 28.9416 3.06021 29.0337 3.12101C29.1258 3.18181 29.2014 3.26453 29.2537 3.36175C29.306 3.45896 29.3333 3.56764 29.3332 3.67802V25.3327L19.9998 29.3327L11.9998 25.3327L3.59584 28.934C3.49439 28.9775 3.38373 28.9951 3.27379 28.9853C3.16385 28.9755 3.05808 28.9385 2.96595 28.8777C2.87383 28.8169 2.79824 28.7342 2.74598 28.637C2.69371 28.5397 2.66641 28.4311 2.6665 28.3207V6.66602ZM7.99984 14.666V17.3327H10.6665V14.666H7.99984ZM13.3332 14.666V17.3327H15.9998V14.666H13.3332ZM21.3332 14.586L19.6838 12.9353L18.2692 14.3487L19.9185 15.9993L18.2692 17.6487L19.6825 19.0634L21.3332 17.414L22.9825 19.0634L24.3972 17.65L22.7478 15.9993L24.3972 14.35L22.9838 12.9353L21.3332 14.5847V14.586Z' />
                  </svg>
                  Incentives For Events
                </BlurButton>
                <BlurButton className='w-full text-left mb-[16px]' type='button'>
                  <svg
                      className='fill-[#3F99FF] mr-[8px]'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2.6665 6.66602L11.9998 2.66602L19.9998 6.66602L28.4038 3.06468C28.5053 3.02119 28.6159 3.00357 28.7259 3.01341C28.8358 3.02324 28.9416 3.06021 29.0337 3.12101C29.1258 3.18181 29.2014 3.26453 29.2537 3.36175C29.306 3.45896 29.3333 3.56764 29.3332 3.67802V25.3327L19.9998 29.3327L11.9998 25.3327L3.59584 28.934C3.49439 28.9775 3.38373 28.9951 3.27379 28.9853C3.16385 28.9755 3.05808 28.9385 2.96595 28.8777C2.87383 28.8169 2.79824 28.7342 2.74598 28.637C2.69371 28.5397 2.66641 28.4311 2.6665 28.3207V6.66602ZM7.99984 14.666V17.3327H10.6665V14.666H7.99984ZM13.3332 14.666V17.3327H15.9998V14.666H13.3332ZM21.3332 14.586L19.6838 12.9353L18.2692 14.3487L19.9185 15.9993L18.2692 17.6487L19.6825 19.0634L21.3332 17.414L22.9825 19.0634L24.3972 17.65L22.7478 15.9993L24.3972 14.35L22.9838 12.9353L21.3332 14.5847V14.586Z' />
                  </svg>
                  Incentive For Sending Visitors
                </BlurButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <ReserveLandModal onClose={() => setOpenModal(false)} />
      )}

      <div className='mx-[20px] lg:mx-[80px]'>
        <div className='grid grid-cols-4'>
          {_banners.map((el) => (
              <div
                  key={el.id}
                  className='relative group col-span-2 md:col-span-1 min-h-[200px] md:min-h-[345px] bg-no-repeat bg-cover bg-center md:mb-[160px]'
                  style={{
                    backgroundImage: `url(${el.image})`,
                  }}
              >
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/[.50]' />
                <div className='absolute top-[60px] md:top-[120px] left-0 right-0 p-[20px]'>
                  <div className='leading-tight font-black text-[14px] md:text-[24px]'>{el.title}</div>
                </div>
                <div className='z-[2] opacity-0 transition group-hover:opacity-100 absolute top-[100%] left-0 right-0 bg-[#262728] text-[14px] text-white/[.80] p-[16px]'>
                  {el.text}
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Fourth
