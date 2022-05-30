import { Link } from 'react-router-dom'
import {SimpleButton} from '../components/buttons'

const Failed = () => {
  return (
    <fragment>
      <div className='py-[120px] sm:max-w-[90rem] 2xl:max-w-[105rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-[80px] text-white'>
        <div className='relative max-w-[439px] lg:mt-[5rem] lg:ml-[15rem]'>
          <div className='flex justify-center'>
            <svg
              className='mb-[12px]'
              width='192'
              height='189'
              viewBox='0 0 192 189'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='85.5615' cy='86.1904' r='81.3623' fill='#525252' fillOpacity='0.5' />
              <path
                d='M176.04 50.6138C179.89 50.6138 183.01 47.4933 183.01 43.6438C183.01 39.7944 179.89 36.6738 176.04 36.6738C172.191 36.6738 169.07 39.7944 169.07 43.6438C169.07 47.4933 172.191 50.6138 176.04 50.6138Z'
                fill='#F98661'
                fillOpacity='0.5'
              />
              <path
                d='M187.24 25.4145C189.869 25.4145 192 23.2834 192 20.6545C192 18.0257 189.869 15.8945 187.24 15.8945C184.612 15.8945 182.48 18.0257 182.48 20.6545C182.48 23.2834 184.612 25.4145 187.24 25.4145Z'
                fill='#F98661'
                fillOpacity='0.5'
              />
              <path
                d='M13.924 17.68C18.8062 17.68 22.764 13.7222 22.764 8.84001C22.764 3.95781 18.8062 0 13.924 0C9.04179 0 5.08398 3.95781 5.08398 8.84001C5.08398 13.7222 9.04179 17.68 13.924 17.68Z'
                fill='#F98661'
                fillOpacity='0.5'
              />
              <path
                d='M124.809 42.1465H81V25.1465H138.427C138.532 25.1465 138.638 25.1465 138.743 25.1465C147.716 25.363 155 32.9427 155 42.1465H135.999'
                fill='#676767'
              />
              <g filter='url(#filter0_d_133_1533)'>
                <path
                  d='M140 25.1465C136.594 25.3601 133.402 26.7488 131.167 29.0988C130.954 29.3125 130.741 29.5261 130.528 29.8466C128.506 32.1966 127.016 35.2944 127.016 38.6058V138.376C127.016 147.669 119.567 155.146 110.308 155.146H29V37.8581C29.2128 34.4398 30.4899 31.342 32.7248 29.0988C35.1726 26.642 38.4717 25.1465 42.1965 25.1465H124.036H139.574C139.681 25.1465 139.787 25.1465 140 25.1465Z'
                  fill='url(#paint0_linear_133_1533)'
                />
              </g>
              <path
                d='M74.6734 142.146H96.0087C96.0087 145.74 97.4874 149.016 99.811 151.342C102.135 153.773 105.409 155.146 109 155.146H12.9913C9.40019 155.146 6.12597 153.667 3.80233 151.342C1.47868 149.016 0 145.74 0 142.146H63.1609C63.1609 142.146 74.8847 142.252 74.6734 142.146Z'
                fill='#686868'
              />
              <path
                d='M162.989 134.526L152.877 124.415C152.033 123.57 152.033 122.194 152.877 121.35C153.722 120.506 155.098 120.506 155.942 121.35L166.053 131.461C166.898 132.306 166.898 133.682 166.053 134.526C165.209 135.37 163.833 135.37 162.989 134.526Z'
                fill='#F98661'
                fillOpacity='0.5'
              />
              <g filter='url(#filter1_d_133_1533)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M108.995 70.6057C109.869 72.0169 110.978 73.2769 112.254 74.3353C112.316 74.3958 112.379 74.4568 112.441 74.5183C114.856 76.8802 118 79.9552 118 84.1633C118 88.3395 114.904 91.3683 112.405 93.8122C112.321 93.895 112.237 93.9771 112.154 94.0585C110.86 95.1169 109.768 96.3769 108.894 97.7881C108.458 99.5185 108.323 101.299 108.491 103.063C108.491 103.236 108.492 103.409 108.492 103.583C108.499 107.165 108.506 111.129 105.702 113.933C102.762 116.856 98.5456 116.789 94.816 116.722C93.052 116.554 91.2712 116.688 89.5408 117.125C88.1296 117.998 86.8696 119.107 85.8112 120.384C85.7533 120.444 85.695 120.504 85.6363 120.564C83.2741 122.995 80.2129 126.146 76 126.146C71.703 126.146 68.6207 122.918 66.1404 120.321L66.1048 120.283C65.0464 118.99 63.7864 117.898 62.3752 117.024C60.6448 116.604 58.864 116.453 57.1 116.621C56.9269 116.621 56.7528 116.621 56.5779 116.622C52.9832 116.628 49.0332 116.636 46.2136 113.832C43.3564 110.991 43.4327 106.974 43.5017 103.341C43.5041 103.214 43.5065 103.088 43.5088 102.962C43.6768 101.198 43.5424 99.4177 43.1056 97.6873C42.232 96.2761 41.1232 95.0161 39.8464 93.9577L39.8096 93.9231C37.2777 91.5422 34 88.46 34 84.1465C34 79.9535 37.0971 76.924 39.5957 74.4799C39.68 74.3974 39.7636 74.3156 39.8464 74.2345C41.14 73.1761 42.232 71.9161 43.1056 70.5049C43.5424 68.7745 43.6768 66.9937 43.5088 65.2297C43.5088 65.0575 43.5085 64.8841 43.5081 64.7099C43.5014 61.1284 43.494 57.1637 46.2976 54.3601C49.2376 51.4369 53.4544 51.5041 57.184 51.5713C58.948 51.7393 60.7288 51.6049 62.4592 51.1681C63.8704 50.2945 65.1304 49.1857 66.1888 47.9089C66.2546 47.8412 66.321 47.7728 66.3879 47.7039C68.746 45.2759 71.7852 42.1465 76 42.1465C80.2115 42.1465 83.2493 45.271 85.699 47.7907C85.7705 47.8642 85.8415 47.9373 85.912 48.0097C86.9704 49.3033 88.2304 50.3953 89.6416 51.2689C91.372 51.7057 93.1528 51.8401 94.9168 51.6721C95.0899 51.6721 95.264 51.6718 95.4389 51.6714C99.0335 51.6647 102.984 51.6573 105.803 54.4609C108.736 57.3934 108.66 61.5962 108.593 65.302L108.592 65.3305C108.424 67.0945 108.558 68.8753 108.995 70.6057Z'
                  fill='url(#paint1_linear_133_1533)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M92.0013 67.6208C90.6344 66.254 88.4184 66.254 87.0515 67.6208L75.7378 78.9345L64.4241 67.6208C63.0573 66.254 60.8412 66.254 59.4744 67.6208C58.1075 68.9877 58.1075 71.2037 59.4744 72.5706L70.7881 83.8843L59.4744 95.198C58.1075 96.5648 58.1075 98.7809 59.4744 100.148C60.8412 101.515 63.0573 101.515 64.4241 100.148L75.7378 88.834L87.0515 100.148C88.4184 101.515 90.6344 101.515 92.0013 100.148C93.3681 98.7809 93.3681 96.5648 92.0013 95.198L80.6876 83.8843L92.0013 72.5706C93.3681 71.2037 93.3681 68.9877 92.0013 67.6208Z'
                  fill='white'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_133_1533'
                  x='7'
                  y='14.1465'
                  width='155'
                  height='174'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='11' />
                  <feGaussianBlur stdDeviation='11' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_133_1533'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_133_1533'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filter1_d_133_1533'
                  x='27'
                  y='39.1465'
                  width='98'
                  height='98'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='3.5' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_133_1533'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_133_1533'
                    result='shape'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_133_1533'
                  x1='84.4638'
                  y1='22.1395'
                  x2='84.4638'
                  y2='156.548'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C1C1C1' />
                  <stop offset='0.9964' stopColor='#8D8D8D' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_133_1533'
                  x1='76'
                  y1='42.1465'
                  x2='76.7636'
                  y2='122.328'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FF957D' />
                  <stop offset='1' stopColor='#BE311D' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className='font-[900] text-[36px] mb-[24px]'>Transaction Failed</h2>

          <p className='mb-[20px]'>Your transaction couldn’t be completed.</p>
          <p className='mb-[32px]'>
            You can retry your payment.{' '}
            <a className='text-[#3F99FF] underline' rel="noreferrer" href={process.to.REACT_APP_FAILED_LEARN_MORE}>
              Learn More
            </a>
          </p>

          <SimpleButton className='max-w-[439px] w-full' href='/reserve-land'>
            Retry Now
          </SimpleButton>
        </div>
      </div>
    </fragment>
  )
}

export default Failed
