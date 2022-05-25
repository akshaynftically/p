// Sources
import _imgEarth from 'assets/img/earth-sm.png'
import _bgAbstract1 from 'assets/img/370x400/1.jpg'
import _bgAbstract2 from 'assets/img/370x400/2.jpg'
import _bgVideo from '../../../assets/videos/neon-ring.mp4'
import NewsLetterModal from '../../../modals/NewsLetterModal'
import {useState} from 'react'

const Third = () => {
  const [modal, setModal] = useState(false)

  return (
    <div>
      <div className='hidden translate-y-[-60%] z-[10] lg:flex rounded-[8px] relative items-center justify-between h-[72px] max-w-[932px] mx-auto w-full bg-blue-500 pseudo-border-gradient-1 pl-[32px] pr-[24px]'>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[#BCDCF5]/20 to-[#BCDCF5]/0'></div>

        <h6 className='text-[16px] font-[JamGrotesque] drop-shadow z-[2]'>Learn from Web3 experts on your favorite platform </h6>

        <div className='flex items-center z-[2]'>
          <a href='https://discord.gg/comearth' target='_blank' className='hover:bg-[#3F99FF] hover:border-[#3F99FF] transition h-[40px] flex items-center pl-[10px] pr-[18px] rounded-[4px] border border-white text-[14px] mr-[20px]'>
            <svg className='mr-[8px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.39667 9.16797C8.89667 9.16797 9.30167 9.54297 9.2925 10.0013C9.2925 10.4596 8.8975 10.8346 8.39667 10.8346C7.905 10.8346 7.5 10.4596 7.5 10.0013C7.5 9.54297 7.89583 9.16797 8.39667 9.16797ZM11.6033 9.16797C12.1042 9.16797 12.5 9.54297 12.5 10.0013C12.5 10.4596 12.1042 10.8346 11.6033 10.8346C11.1117 10.8346 10.7075 10.4596 10.7075 10.0013C10.7075 9.54297 11.1025 9.16797 11.6033 9.16797ZM15.7425 1.66797C16.7117 1.66797 17.5 2.47297 17.5 3.47047V19.168L15.6575 17.5055L14.62 16.5255L13.5225 15.4838L13.9775 17.103H4.2575C3.28833 17.103 2.5 16.298 2.5 15.3005V3.47047C2.5 2.47297 3.28833 1.66797 4.2575 1.66797H15.7425ZM12.4342 13.0955C14.3283 13.0346 15.0575 11.7655 15.0575 11.7655C15.0575 8.94797 13.8225 6.6638 13.8225 6.6638C12.5892 5.71964 11.4142 5.74547 11.4142 5.74547L11.2942 5.88547C12.7517 6.34047 13.4283 6.99714 13.4283 6.99714C12.6326 6.54879 11.7555 6.26325 10.8483 6.15714C10.2729 6.09214 9.69161 6.09774 9.1175 6.1738C9.06583 6.1738 9.0225 6.18297 8.97167 6.1913C8.67167 6.21797 7.9425 6.3313 7.02583 6.74297C6.70917 6.8913 6.52 6.99714 6.52 6.99714C6.52 6.99714 7.23167 6.30547 8.77417 5.85047L8.68833 5.74547C8.68833 5.74547 7.51417 5.71963 6.28 6.66463C6.28 6.66463 5.04583 8.94797 5.04583 11.7655C5.04583 11.7655 5.76583 13.0338 7.66 13.0955C7.66 13.0955 7.97667 12.7021 8.235 12.3696C7.14583 12.0363 6.735 11.3363 6.735 11.3363C6.735 11.3363 6.82 11.398 6.97417 11.4855C6.9825 11.4938 6.99083 11.503 7.00833 11.5113C7.03417 11.5296 7.06 11.538 7.08583 11.5555C7.3 11.678 7.51417 11.7738 7.71083 11.853C8.0625 11.993 8.4825 12.133 8.97167 12.2296C9.70443 12.3733 10.4578 12.3761 11.1917 12.238C11.6191 12.1617 12.0361 12.0355 12.4342 11.8621C12.7342 11.748 13.0683 11.5813 13.42 11.3455C13.42 11.3455 12.9917 12.063 11.8683 12.3871C12.1258 12.7196 12.4342 13.0955 12.4342 13.0955Z" fill="white" fill-opacity="0.8"/>
            </svg>
            Discord
          </a>
          <button onClick={() => setModal(true)} className='hover:bg-[#3F99FF] hover:border-[#3F99FF] transition h-[40px] flex items-center pl-[10px] pr-[18px] rounded-[4px] border border-white text-[14px] mr-[20px]'>
            <svg className='mr-[8px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.49984 2.5H17.4998C17.7208 2.5 17.9328 2.5878 18.0891 2.74408C18.2454 2.90036 18.3332 3.11232 18.3332 3.33333V16.6667C18.3332 16.8877 18.2454 17.0996 18.0891 17.2559C17.9328 17.4122 17.7208 17.5 17.4998 17.5H2.49984C2.27882 17.5 2.06686 17.4122 1.91058 17.2559C1.7543 17.0996 1.6665 16.8877 1.6665 16.6667V3.33333C1.6665 3.11232 1.7543 2.90036 1.91058 2.74408C2.06686 2.5878 2.27882 2.5 2.49984 2.5ZM10.0498 9.73583L4.7065 5.19833L3.62734 6.46833L10.0607 11.9308L16.3782 6.46417L15.2882 5.20333L10.0507 9.73583H10.0498Z" fill="white"/>
            </svg>
            Newsletter
          </button>
          <a href='https://twitter.com/comearthHQ' target='_blank' className='hover:bg-[#3F99FF] hover:border-[#3F99FF] transition h-[40px] flex items-center pl-[10px] pr-[18px] rounded-[4px] border border-white text-[14px]'>
            <svg className='mr-[8px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.4687 4.71192C17.8325 4.99334 17.1579 5.17815 16.4671 5.26026C17.1952 4.82479 17.7402 4.13944 18.0004 3.33192C17.3171 3.73859 16.5679 4.02359 15.7871 4.17776C14.7086 3.02386 12.989 2.7395 11.5965 3.4848C10.204 4.23011 9.48677 5.81871 9.84874 7.35609C7.04626 7.21563 4.4352 5.89192 2.66541 3.71442C2.35565 4.24647 2.19287 4.85128 2.19374 5.46692C2.19374 6.67526 2.80874 7.74276 3.74374 8.36776C3.19042 8.35034 2.64927 8.20091 2.16541 7.93192V7.97526C2.16575 9.63445 3.33501 11.0637 4.96124 11.3928C4.44759 11.532 3.909 11.5525 3.38624 11.4528C3.84218 12.8729 5.15079 13.8459 6.64208 13.8736C5.18203 15.0203 3.32603 15.5395 1.48291 15.3169C3.07599 16.3414 4.93049 16.8854 6.82458 16.8836C13.2354 16.8836 16.7412 11.5728 16.7412 6.96692C16.7412 6.81692 16.7371 6.66526 16.7304 6.51692C17.4128 6.02373 18.0017 5.41277 18.4696 4.71276L18.4687 4.71192Z" fill="white" fill-opacity="0.65"/>
            </svg>
            Twitter
          </a>
        </div>
      </div>
      <div className='bg-[#161718] lg:py-[100px] relative lg:overflow-hidden'>
        <div className='hidden lg:block bg-gradient-to-b from-[#161718] to-[#161718]/0 h-[110px] transform translate-y-[70px] absolute top-0 z-[1] left-0 w-full'></div>
        <div className='absolute bottom-0 left-0 bg-center md:bg-top md:transform bg-cover md:bg-contain 4xl:bg-cover translate-y-[140px] md:translate-y-[70px] w-full bg-no-repeat h-full bg-[url("assets/img/bg/7.png")]'></div>
        <video className='hidden lg:block absolute top-0 left-0 w-full h-[80%] transform translate-y-[100px] scale-x-[1.3] md:translate-y-[70px]' autoPlay="autoplay" loop muted>
          <source src={_bgVideo} type="video/mp4"/>
        </video>

        <div className='mx-[20px] lg:mx-[80px] relative z-[4]'>
          <h2 className='leading-tight font-extrabold lg:text-center text-[32px] lg:text-[52px] mb-[40px] lg:mb-[200px] '>
            COMEARTH - <span className='text-gradient'>Metaverse</span> with a
            <br />
            Purpose
          </h2>

          <div className='grid grid-cols-10 '>
            <div className='col-span-7 md:col-span-3 mb-[12px] md:mb-0'>
              <div
                className='relative min-h-[220px] md:min-h-[400px] bg-no-repeat bg-cover bg-center'
                style={{
                  backgroundImage: `url(${_bgAbstract1})`,
                }}
              >
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/[.50]' />
                <div className='relative z-[1] py-[16px]'>
                  <h4 className='font-[JamGrotesque] px-[20px] text-white text-[24px] lg:text-[32px] mb-[7px]'>Brands & Creators</h4>
                  <div className='bg-gradient-to-r h-[1px] w-full from-[#D299FF] to-[#58C3FF] mb-[30px]'></div>

                  <p className='font-[JamGrotesque] text-[18px] lg:text-[24px] px-[24px] mb-[14px]'>Create memorable immersive experiences for  fans & consumers</p>
                  <ul className='text-[14px] pl-[40px] pr-[24px] list-disc'>
                    <li className='mb-2 lg:mb-[10px]'>Get started in minutes via templates</li>
                    <li className='mb-2 lg:mb-[10px]'>Create instant 3D products from 2D images</li>
                    <li className='mb-2 lg:mb-[10px]'>Use Key E-Commerce Features</li>
                    <li>Ship through Integrated Logistics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='hidden col-span-4 md:flex justify-center'>
              <img className='inline-block max-w-full translate-y-1/4 relative z-[2]' src={_imgEarth} alt='Earth' />
            </div>
            <div className='col-span-7 col-start-4 md:col-span-3'>
              <div
                className='relative min-h-[220px] md:min-h-[400px] bg-no-repeat bg-cover bg-center'
                style={{
                  backgroundImage: `url(${_bgAbstract2})`,
                }}
              >
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/[.50]' />
                <div className='relative z-[1] py-[16px]'>
                  <h4 className='font-[JamGrotesque] px-[20px] text-white text-[24px] lg:text-[32px] mb-[7px]'>Buyers</h4>
                  <div className='bg-gradient-to-r h-[1px] w-full from-[#D299FF] to-[#58C3FF] mb-[30px]'></div>

                  <p className='font-[JamGrotesque] text-[18px] lg:text-[24px] px-[24px] mb-[14px]'>Discover the best global products, events, and services in one Metaverse</p>
                  <ul className='text-[14px] pl-[40px] pr-[24px] list-disc'>
                    <li className='mb-2 lg:mb-[10px]'>Use social login and fiat payments</li>
                    <li className='mb-2 lg:mb-[10px]'>Hangout and have fun with friends and family</li>
                    <li className='mb-2 lg:mb-[10px]'>Promote sustainable products & services</li>
                    <li>Get the speed and convenience of Web2 E-Commerce</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {modal && (
        <NewsLetterModal onClose={() => setModal(false)} />
      )}
    </div>
  )
}

export default Third
