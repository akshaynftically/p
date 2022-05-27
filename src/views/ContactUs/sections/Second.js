import {Fragment} from 'react'

const Second = () => {
  return (
    <Fragment>
      <div className='pb-[25px] mx-[20px] lg:mx-[80px] mt-[20px] lg:mt-[80px] lg:mt-0'>
        <div className='bg-[#161718] pt-[50px] md:pt-[80px] mb-[40px] relative'>
          <div>
            <h2 className='leading-tight font-extrabold text-[32px] lg:text-[52px] mb-[40px]'>Get in Touch</h2>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-[20px] md:gap-x-[54px]'>
          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative overflow-hidden pseudo-border-gradient-1 px-[16px] lg:px-[20px] pb-[20px] lg:pb-[44px] pt-[20px] lg:pt-[24px] rounded-[8px]'>
            <div className='absolute top-[1px] left-0 h-full w-full bg-[#363A3D]'></div>

            <div className='text-[14px] lg:text-[16px] relative flex flex-col lg:items-center justify-center w-full h-full lg:text-center z-[4]'>
              <svg className='mb-[16px] lg:mb-[24px]' width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1065_504)">
                  <path d="M32.0004 3.16138C27.3343 3.16682 22.8609 5.00041 19.5614 8.25995C16.262 11.5195 14.4059 15.9388 14.4004 20.5485C14.3948 24.3155 15.6404 27.9803 17.946 30.9807C17.946 30.9807 18.426 31.6051 18.5044 31.6952L32.0004 47.4194L45.5028 31.6873C45.5732 31.6035 46.0548 30.9807 46.0548 30.9807L46.0564 30.976C48.3609 27.9769 49.6059 24.3138 49.6004 20.5485C49.5949 15.9388 47.7388 11.5195 44.4394 8.25995C41.14 5.00041 36.6665 3.16682 32.0004 3.16138V3.16138ZM32.0004 26.8711C30.7346 26.8711 29.4972 26.5002 28.4448 25.8055C27.3923 25.1108 26.572 24.1233 26.0876 22.968C25.6032 21.8127 25.4764 20.5415 25.7234 19.315C25.9703 18.0885 26.5799 16.962 27.4749 16.0777C28.37 15.1935 29.5103 14.5913 30.7518 14.3474C31.9933 14.1034 33.2801 14.2286 34.4496 14.7072C35.619 15.1857 36.6186 15.9961 37.3218 17.0358C38.025 18.0756 38.4004 19.298 38.4004 20.5485C38.3983 22.2247 37.7233 23.8316 36.5235 25.0169C35.3238 26.2022 33.6971 26.869 32.0004 26.8711V26.8711Z" fill="white" fill-opacity="0.65"/>
                </g>
                <path d="M63.5 48.7741C63.5 49.1127 63.3503 49.4853 62.9794 49.8946C62.6058 50.3068 62.0314 50.7284 61.2498 51.1457C59.6875 51.9797 57.3939 52.7463 54.5173 53.3958C48.7722 54.6931 40.8109 55.5 32 55.5C23.1891 55.5 15.2278 54.6931 9.48271 53.3958C6.60613 52.7463 4.3125 51.9797 2.7502 51.1457C1.96864 50.7284 1.39416 50.3068 1.02063 49.8946C0.649702 49.4853 0.5 49.1127 0.5 48.7741C0.5 48.4356 0.649702 48.063 1.02063 47.6536C1.39416 47.2415 1.96864 46.8199 2.7502 46.4026C4.3125 45.5686 6.60613 44.802 9.48271 44.1525C15.2278 42.8552 23.1891 42.0483 32 42.0483C40.8109 42.0483 48.7722 42.8552 54.5173 44.1525C57.3939 44.802 59.6875 45.5686 61.2498 46.4026C62.0314 46.8199 62.6058 47.2415 62.9794 47.6536C63.3503 48.063 63.5 48.4356 63.5 48.7741Z" stroke="url(#paint0_linear_1065_504)" stroke-opacity="0.65"/>
                <path d="M56.1856 46.9677C56.1856 47.1767 56.0914 47.426 55.8184 47.719C55.543 48.0144 55.1124 48.3235 54.5154 48.6334C53.3225 49.2525 51.5635 49.825 49.3481 50.3114C44.9255 51.2823 38.7917 51.887 31.9999 51.887C25.2081 51.887 19.0743 51.2823 14.6517 50.3114C12.4363 49.825 10.6774 49.2525 9.48447 48.6334C8.88742 48.3235 8.45688 48.0144 8.18149 47.719C7.90844 47.426 7.81421 47.1767 7.81421 46.9677C7.81421 46.7587 7.90844 46.5094 8.18149 46.2164C8.45688 45.921 8.88742 45.6119 9.48447 45.302C10.6774 44.6829 12.4363 44.1104 14.6517 43.624C19.0743 42.6531 25.2081 42.0483 31.9999 42.0483C38.7917 42.0483 44.9255 42.6531 49.3481 43.624C51.5635 44.1104 53.3225 44.6829 54.5154 45.302C55.1124 45.6119 55.543 45.921 55.8184 46.2164C56.0914 46.5094 56.1856 46.7587 56.1856 46.9677Z" stroke="url(#paint1_linear_1065_504)" stroke-opacity="0.65"/>
                <defs>
                  <linearGradient id="paint0_linear_1065_504" x1="32" y1="41.5483" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.618664" stop-color="white" stop-opacity="0.129069"/>
                    <stop offset="1" stop-color="white"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_1065_504" x1="31.9999" y1="41.5483" x2="31.9999" y2="52.387" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.618664" stop-color="white" stop-opacity="0.129069"/>
                    <stop offset="1" stop-color="white"/>
                  </linearGradient>
                  <clipPath id="clip0_1065_504">
                    <rect width="51.2" height="50.5806" fill="white" transform="translate(6.40039)"/>
                  </clipPath>
                </defs>
              </svg>

              <div className='mb-[12px] lg:mb-[24px]' >Location</div>

              <p>3790 El Camino Real Unit #590 Palo Alto, CA 94306</p>
            </div>
          </div>
          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative overflow-hidden pseudo-border-gradient-1 px-[16px] lg:px-[20px] pb-[20px] lg:pb-[44px] pt-[20px] lg:pt-[24px] rounded-[8px]'>
            <div className='absolute top-[1px] left-0 h-full w-full bg-[#363A3D]'></div>

            <div className='text-[14px] lg:text-[16px] relative flex flex-col lg:items-center justify-center w-full h-full lg:text-center z-[4]'>
              <svg className='mb-[16px] lg:mb-[24px]' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.6667 25.6644H51.3334C51.3334 13.6944 42.2964 4.66675 30.3101 4.66675V9.33342C39.7881 9.33342 46.6667 16.2004 46.6667 25.6644Z" fill="white" fill-opacity="0.65"/>
                <path d="M30.3333 18.6667C35.2403 18.6667 37.3333 20.7597 37.3333 25.6667H41.9999C41.9999 18.1417 37.8583 14 30.3333 14V18.6667ZM38.3179 31.367C37.8696 30.9595 37.2804 30.7421 36.6748 30.7609C36.0692 30.7796 35.4946 31.0329 35.0723 31.4673L29.4886 37.2097C28.1446 36.953 25.4426 36.1107 22.6613 33.3363C19.8799 30.5527 19.0376 27.8437 18.7879 26.509L24.5256 20.923C24.9606 20.501 25.2142 19.9262 25.233 19.3205C25.2517 18.7147 25.034 18.1254 24.6259 17.6773L16.0043 8.19699C15.596 7.74749 15.0286 7.47483 14.4226 7.43693C13.8166 7.39902 13.2197 7.59886 12.7586 7.99399L7.69526 12.3363C7.29185 12.7412 7.05107 13.28 7.01859 13.8507C6.98359 14.434 6.31626 28.252 17.0309 38.9713C26.3783 48.3163 38.0869 49 41.3116 49C41.7829 49 42.0723 48.986 42.1493 48.9813C42.7198 48.9494 43.2584 48.7075 43.6613 48.3023L48.0013 43.2367C48.3967 42.7759 48.5969 42.1791 48.5594 41.5731C48.522 40.9671 48.2498 40.3995 47.8006 39.991L38.3179 31.367Z" fill="white" fill-opacity="0.65"/>
              </svg>

              <div className='mb-[12px] lg:mb-[24px]'>Call Us on</div>

              <div className='flex items-center w-full border border-[#ffffff] rounded-[4px] py-[10px] px-[16px]'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6666 9.16592H18.3333C18.3333 4.89091 15.1058 1.66675 10.825 1.66675V3.33341C14.21 3.33341 16.6666 5.78591 16.6666 9.16592Z" fill="white" fill-opacity="0.65"/>
                  <path d="M10.8333 6.66678C12.5858 6.66678 13.3333 7.41428 13.3333 9.16678H15C15 6.47928 13.5208 5.00012 10.8333 5.00012V6.66678ZM13.685 11.2026C13.5249 11.0571 13.3144 10.9795 13.0982 10.9861C12.8819 10.9928 12.6767 11.0833 12.5258 11.2385L10.5317 13.2893C10.0517 13.1976 9.08666 12.8968 8.09332 11.906C7.09999 10.9118 6.79916 9.94428 6.70999 9.46762L8.75916 7.47262C8.9145 7.32189 9.0051 7.11664 9.01179 6.90029C9.01848 6.68394 8.94073 6.47348 8.79499 6.31345L5.71582 2.92762C5.57003 2.76708 5.36739 2.6697 5.15095 2.65617C4.93451 2.64263 4.72132 2.714 4.55666 2.85512L2.74832 4.40595C2.60425 4.55055 2.51826 4.74299 2.50666 4.94678C2.49416 5.15512 2.25582 10.0901 6.08249 13.9185C9.42082 17.2559 13.6025 17.5001 14.7542 17.5001C14.9225 17.5001 15.0258 17.4951 15.0533 17.4935C15.2571 17.482 15.4494 17.3957 15.5933 17.2509L17.1433 15.4418C17.2845 15.2772 17.3561 15.0641 17.3427 14.8477C17.3293 14.6312 17.2321 14.4285 17.0717 14.2826L13.685 11.2026Z" fill="white" fill-opacity="0.65"/>
                </svg>

                <div className='mx-auto'>+1  650 924 9325</div>
              </div>
            </div>
          </div>
          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative overflow-hidden pseudo-border-gradient-1 px-[16px] lg:px-[20px] pb-[20px] lg:pb-[44px] pt-[20px] lg:pt-[24px] rounded-[8px]'>
            <div className='absolute top-[1px] left-0 h-full w-full bg-[#363A3D]'></div>

            <div className='text-[14px] lg:text-[16px] relative flex flex-col lg:items-center justify-center w-full h-full lg:text-center z-[4]'>
              <svg className='mb-[16px] lg:mb-[24px]' width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.3334 0.333252H7.66675C5.81023 0.333252 4.02976 1.07075 2.717 2.3835C1.40425 3.69626 0.666748 5.47674 0.666748 7.33325V30.6666C0.666748 32.5231 1.40425 34.3036 2.717 35.6163C4.02976 36.9291 5.81023 37.6666 7.66675 37.6666H40.3334C42.1899 37.6666 43.9704 36.9291 45.2832 35.6163C46.5959 34.3036 47.3334 32.5231 47.3334 30.6666V7.33325C47.3334 5.47674 46.5959 3.69626 45.2832 2.3835C43.9704 1.07075 42.1899 0.333252 40.3334 0.333252ZM40.3334 4.99992L25.1667 15.4299C24.812 15.6347 24.4097 15.7425 24.0001 15.7425C23.5905 15.7425 23.1881 15.6347 22.8334 15.4299L7.66675 4.99992H40.3334Z" fill="white" fill-opacity="0.65"/>
              </svg>


              <div className='mb-[12px] lg:mb-[24px]'>E-mail</div>

              <div className='flex items-center w-full border border-[#ffffff] rounded-[4px] py-[10px] px-[16px]'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8334 3.33325H4.16675C3.50371 3.33325 2.86782 3.59664 2.39898 4.06549C1.93014 4.53433 1.66675 5.17021 1.66675 5.83325V14.1666C1.66675 14.8296 1.93014 15.4655 2.39898 15.9344C2.86782 16.4032 3.50371 16.6666 4.16675 16.6666H15.8334C16.4965 16.6666 17.1323 16.4032 17.6012 15.9344C18.07 15.4655 18.3334 14.8296 18.3334 14.1666V5.83325C18.3334 5.17021 18.07 4.53433 17.6012 4.06549C17.1323 3.59664 16.4965 3.33325 15.8334 3.33325ZM15.8334 4.99992L10.4167 8.72492C10.2901 8.79806 10.1464 8.83656 10.0001 8.83656C9.8538 8.83656 9.7101 8.79806 9.58342 8.72492L4.16675 4.99992H15.8334Z" fill="white" fill-opacity="0.65"/>
                </svg>

                <div className='mx-auto'>hello@comearth.world</div>
              </div>
            </div>
          </div>
          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative overflow-hidden pseudo-border-gradient-1 px-[16px] lg:px-[20px] pb-[20px] lg:pb-[44px] pt-[20px] lg:pt-[24px] rounded-[8px]'>
            <div className='absolute top-[1px] left-0 h-full w-full bg-[#363A3D]'></div>

            <div className='text-[14px] lg:text-[16px] relative flex flex-col lg:items-center justify-center w-full h-full lg:text-center z-[4]'>
              <svg className='mb-[16px] lg:mb-[24px]' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1065_3399)">
                  <path d="M47.4062 10.4814C43.8362 8.87135 40.0096 7.68135 36.0079 7.00469C35.9723 6.99784 35.9354 7.00225 35.9023 7.0173C35.8693 7.03235 35.8418 7.0573 35.8236 7.08869C35.3336 7.94969 34.7876 9.07202 34.4049 9.95869C30.1608 9.32457 25.846 9.32457 21.6019 9.95869C21.1757 8.97603 20.695 8.01788 20.1622 7.08869C20.1442 7.05691 20.1169 7.0314 20.0839 7.01556C20.051 6.99972 20.014 6.9943 19.9779 7.00002C15.9786 7.67669 12.1519 8.86669 8.57957 10.479C8.54883 10.4919 8.52278 10.5139 8.5049 10.542C1.24357 21.217 -0.746766 31.6284 0.230901 41.909C0.233621 41.9342 0.241437 41.9586 0.253872 41.9806C0.266308 42.0027 0.283102 42.022 0.303234 42.0374C4.54148 45.123 9.26869 47.4736 14.2869 48.9907C14.3219 49.0015 14.3593 49.0014 14.3943 48.9906C14.4292 48.9798 14.4601 48.9587 14.4829 48.93C15.5628 47.4859 16.5197 45.9537 17.3436 44.3497C17.355 44.3278 17.3616 44.3036 17.3629 44.2789C17.3642 44.2542 17.3602 44.2295 17.3511 44.2065C17.342 44.1835 17.3281 44.1627 17.3103 44.1456C17.2925 44.1284 17.2712 44.1152 17.2479 44.107C15.7406 43.5394 14.2801 42.8544 12.8799 42.0584C12.8547 42.044 12.8335 42.0236 12.8182 41.999C12.8029 41.9745 12.7939 41.9465 12.792 41.9175C12.7902 41.8886 12.7955 41.8597 12.8076 41.8334C12.8197 41.8071 12.8381 41.7841 12.8612 41.7667C13.1552 41.5497 13.4492 41.3234 13.7292 41.097C13.7544 41.0767 13.7848 41.0637 13.8169 41.0596C13.8491 41.0555 13.8817 41.0604 13.9112 41.0737C23.0742 45.1897 32.9979 45.1897 42.0536 41.0737C42.0832 41.0596 42.1162 41.054 42.1488 41.0578C42.1813 41.0615 42.2122 41.0743 42.2379 41.0947C42.5179 41.3234 42.8096 41.5497 43.1059 41.7667C43.1292 41.7838 43.148 41.8064 43.1605 41.8325C43.1729 41.8586 43.1787 41.8874 43.1773 41.9163C43.1759 41.9452 43.1674 41.9733 43.1525 41.9981C43.1376 42.0229 43.1168 42.0436 43.0919 42.0584C41.6966 42.861 40.2452 43.54 38.7216 44.1047C38.6982 44.1132 38.6769 44.1266 38.659 44.144C38.6412 44.1614 38.6273 44.1823 38.6183 44.2055C38.6092 44.2287 38.6052 44.2536 38.6065 44.2784C38.6078 44.3033 38.6145 44.3276 38.6259 44.3497C39.4659 45.9527 40.4272 47.4787 41.4842 48.9277C41.5062 48.9574 41.5368 48.9797 41.5719 48.9913C41.607 49.003 41.6448 49.0036 41.6802 48.993C46.7071 47.4802 51.442 45.1285 55.6849 42.0374C55.7056 42.0229 55.723 42.0042 55.7359 41.9824C55.7487 41.9607 55.7568 41.9365 55.7596 41.9114C56.9262 30.0254 53.8042 19.698 47.4786 10.5467C47.4631 10.5169 47.4374 10.4938 47.4062 10.4814ZM18.7132 35.6487C15.9552 35.6487 13.6802 33.1544 13.6802 30.0954C13.6802 27.034 15.9109 24.542 18.7132 24.542C21.5366 24.542 23.7906 27.055 23.7462 30.0954C23.7462 33.1567 21.5156 35.6487 18.7132 35.6487ZM37.3216 35.6487C34.5612 35.6487 32.2886 33.1544 32.2886 30.0954C32.2886 27.034 34.5169 24.542 37.3216 24.542C40.1449 24.542 42.3989 27.055 42.3546 30.0954C42.3546 33.1567 40.1472 35.6487 37.3216 35.6487Z" fill="white" fill-opacity="0.65"/>
                </g>
                <defs>
                  <clipPath id="clip0_1065_3399">
                    <rect width="56" height="56" fill="white"/>
                  </clipPath>
                </defs>
              </svg>



              <div className='mb-[12px] lg:mb-[24px]'>Join Us on our Discord Channel</div>

              <a href='#' className='block w-full' target='_blank'>
                <div className='flex items-center w-full border border-[#ffffff] rounded-[4px] py-[10px] px-[16px]'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39667 9.16797C8.89667 9.16797 9.30167 9.54297 9.2925 10.0013C9.2925 10.4596 8.8975 10.8346 8.39667 10.8346C7.905 10.8346 7.5 10.4596 7.5 10.0013C7.5 9.54297 7.89583 9.16797 8.39667 9.16797ZM11.6033 9.16797C12.1042 9.16797 12.5 9.54297 12.5 10.0013C12.5 10.4596 12.1042 10.8346 11.6033 10.8346C11.1117 10.8346 10.7075 10.4596 10.7075 10.0013C10.7075 9.54297 11.1025 9.16797 11.6033 9.16797ZM15.7425 1.66797C16.7117 1.66797 17.5 2.47297 17.5 3.47047V19.168L15.6575 17.5055L14.62 16.5255L13.5225 15.4838L13.9775 17.103H4.2575C3.28833 17.103 2.5 16.298 2.5 15.3005V3.47047C2.5 2.47297 3.28833 1.66797 4.2575 1.66797H15.7425ZM12.4342 13.0955C14.3283 13.0346 15.0575 11.7655 15.0575 11.7655C15.0575 8.94797 13.8225 6.6638 13.8225 6.6638C12.5892 5.71964 11.4142 5.74547 11.4142 5.74547L11.2942 5.88547C12.7517 6.34047 13.4283 6.99714 13.4283 6.99714C12.6326 6.54879 11.7555 6.26325 10.8483 6.15714C10.2729 6.09214 9.69161 6.09774 9.1175 6.1738C9.06583 6.1738 9.0225 6.18297 8.97167 6.1913C8.67167 6.21797 7.9425 6.3313 7.02583 6.74297C6.70917 6.8913 6.52 6.99714 6.52 6.99714C6.52 6.99714 7.23167 6.30547 8.77417 5.85047L8.68833 5.74547C8.68833 5.74547 7.51417 5.71964 6.28 6.66463C6.28 6.66463 5.04583 8.94797 5.04583 11.7655C5.04583 11.7655 5.76583 13.0338 7.66 13.0955C7.66 13.0955 7.97667 12.7021 8.235 12.3696C7.14583 12.0363 6.735 11.3363 6.735 11.3363C6.735 11.3363 6.82 11.398 6.97417 11.4855C6.9825 11.4938 6.99083 11.503 7.00833 11.5113C7.03417 11.5296 7.06 11.538 7.08583 11.5555C7.3 11.678 7.51417 11.7738 7.71083 11.853C8.0625 11.993 8.4825 12.133 8.97167 12.2296C9.70443 12.3733 10.4578 12.3761 11.1917 12.238C11.6191 12.1617 12.0361 12.0355 12.4342 11.8621C12.7342 11.748 13.0683 11.5813 13.42 11.3455C13.42 11.3455 12.9917 12.063 11.8683 12.3871C12.1258 12.7196 12.4342 13.0955 12.4342 13.0955Z" fill="white" fill-opacity="0.8"/>
                  </svg>

                  <div className='mx-auto'>Join Discord Now</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Second