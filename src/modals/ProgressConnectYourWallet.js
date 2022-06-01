import { SimpleButton } from "components/buttons";
import {FullScreenPopup} from "components/popups";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const ProgressConnectYourWallet = ({onClose, title,loading=true, mainHeading,content,learn=null,view=null,learn_more_text = 'Learn More'}) => {

  return (
    <FullScreenPopup title={title} size='w-[520px]' onClose={onClose}>
      <div className="flex justify-center mb-[20px]">
        {
          loading && 
        <svg className='animate-spin' width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_133_1653)">
            <path d="M27.4999 7.67742C29.6281 7.67742 31.3534 5.95877 31.3534 3.83871C31.3534 1.71865 29.6281 0 27.4999 0C25.3717 0 23.6465 1.71865 23.6465 3.83871C23.6465 5.95877 25.3717 7.67742 27.4999 7.67742Z" fill="#3F99FF"/>
            <path d="M18.6507 9.69202C16.7331 10.6133 14.4301 9.80944 13.5053 7.89912C12.5804 5.9888 13.3874 3.69461 15.305 2.77332C17.2227 1.85203 19.5257 2.6559 20.4505 4.56622C21.3753 6.47654 20.5684 8.77073 18.6507 9.69202Z" fill="#3F99FF" fillOpacity="0.8"/>
            <path d="M11.9867 14.6458C12.9339 12.7473 12.1569 10.4433 10.2512 9.49967C8.34541 8.55603 6.03257 9.33006 5.0853 11.2285C4.13803 13.127 4.91504 15.431 6.8208 16.3746C8.72655 17.3183 11.0394 16.5443 11.9867 14.6458Z" fill="#3F99FF" fillOpacity="0.75"/>
            <path d="M7.61131 23.479C7.13983 25.5474 5.07257 26.839 2.99624 26.3693C0.919918 25.8996 -0.376653 23.8403 0.0948272 21.7719C0.566307 19.7035 2.63357 18.4119 4.70989 18.8816C6.78622 19.3512 8.08279 21.4106 7.61131 23.479Z" fill="#3F99FF" fillOpacity="0.7"/>
            <path d="M7.61131 32.5209C8.08279 34.5893 6.78622 36.6441 4.70989 37.1183C2.63357 37.5925 0.570841 36.2964 0.0948272 34.228C-0.376653 32.1596 0.919918 30.1048 2.99624 29.6306C5.07257 29.1609 7.1353 30.4525 7.61131 32.5209Z" fill="#3F99FF" fillOpacity="0.65"/>
            <path d="M11.5508 40.6727C12.8792 42.3301 12.6026 44.7463 10.9388 46.0695C9.27505 47.3927 6.84964 47.1172 5.52134 45.4598C4.19303 43.8024 4.46957 41.3863 6.13336 40.063C7.79714 38.7398 10.2225 39.0153 11.5508 40.6727Z" fill="#3F99FF" fillOpacity="0.6"/>
            <path d="M18.6507 46.3085C20.5684 47.2298 21.3753 49.524 20.4505 51.4343C19.5257 53.3446 17.2227 54.1485 15.305 53.2272C13.3874 52.3059 12.5804 50.0117 13.5053 48.1014C14.4301 46.1911 16.7331 45.3872 18.6507 46.3085Z" fill="#3F99FF" fillOpacity="0.55"/>
            <path d="M27.4999 55.9997C29.6281 55.9997 31.3534 54.281 31.3534 52.161C31.3534 50.0409 29.6281 48.3223 27.4999 48.3223C25.3717 48.3223 23.6465 50.0409 23.6465 52.161C23.6465 54.281 25.3717 55.9997 27.4999 55.9997Z" fill="#3F99FF" fillOpacity="0.5"/>
            <path opacity="0.4" d="M36.3539 46.3085C38.2715 45.3872 40.5745 46.1911 41.4993 48.1014C42.4242 50.0117 41.6172 52.3059 39.6996 53.2272C37.7819 54.1485 35.4789 53.3446 34.5541 51.4343C33.6293 49.524 34.4362 47.2298 36.3539 46.3085Z" fill="#3F99FF"/>
            <path d="M43.4491 40.6718C44.7774 39.0144 47.1983 38.7434 48.8666 40.0621C50.5304 41.3853 50.8024 43.8015 49.4786 45.4589C48.1503 47.1163 45.7295 47.3873 44.0611 46.0686C42.3974 44.7453 42.1253 42.3292 43.4491 40.6718Z" fill="#3F99FF" fillOpacity="0.35"/>
            <path d="M54.8427 34.4478C55.4372 32.4122 54.2625 30.2819 52.219 29.6897C50.1755 29.0975 48.037 30.2677 47.4426 32.3033C46.8481 34.339 48.0228 36.4693 50.0663 37.0615C52.1098 37.6537 54.2482 36.4835 54.8427 34.4478Z" fill="#3F99FF" fillOpacity="0.3"/>
            <path d="M47.3888 23.479C46.9173 21.4106 48.2139 19.3558 50.2902 18.8816C52.3665 18.4119 54.4292 19.7035 54.9053 21.7719C55.3767 23.8403 54.0802 25.8951 52.0038 26.3693C49.9275 26.8435 47.8648 25.5474 47.3888 23.479Z" fill="#3F99FF" fillOpacity="0.25"/>
            <path d="M47.7557 16.5471C49.7602 15.8349 50.8056 13.6387 50.0906 11.6419C49.3757 9.64504 47.1711 8.60365 45.1666 9.31587C43.1621 10.0281 42.1167 12.2242 42.8317 14.2211C43.5466 16.2179 45.7512 17.2593 47.7557 16.5471Z" fill="#3F99FF" fillOpacity="0.2"/>
            <path d="M36.3539 9.69202C34.4362 8.77073 33.6293 6.47654 34.5541 4.56622C35.4789 2.6559 37.7819 1.85203 39.6996 2.77332C41.6172 3.69461 42.4242 5.9888 41.4993 7.89912C40.5745 9.80944 38.2715 10.6133 36.3539 9.69202Z" fill="#3F99FF" fillOpacity="0.15"/>
          </g>
          <defs>
            <clipPath id="clip0_133_1653">
              <rect width="55" height="56" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        }
      </div>

      <p className='text-white/80 text-[14px] mb-[6px]'>{mainHeading}</p>
      <p className='text-white/80 text-[14px]'>{content}</p>
     <div className="flex justify-center mt-[1rem]">
       {
         learn &&  <a className='text-[#3F99FF] underline' href={learn} target="_blank" rel="noreferrer">{learn_more_text}</a>

       }
       {
         view && <div className='flex justify-center items-center text-[#3F99FF] text-[16px]'>
         <SimpleButton type='submit' className='mb-[27px]' href={view} target='_blank' >
       

           <span className='ml-[3px] '>View on Explorer</span>
              </SimpleButton>
          
       </div>
       }
            
       
          

   
     </div>

    </FullScreenPopup>
  )
}

export default ProgressConnectYourWallet
