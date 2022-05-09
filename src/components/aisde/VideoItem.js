const AsideVideoItem = (props) => {
    const {video} = props

    return (
        <div className='relative overflow-hidden rounded-[8px]'>
            <img src={video.preview} className='h-[234px]' alt="Video preview"/>
            <div className='absolute bg-black/40 text-white font-bold text-[14px] w-full h-full top-0 left-0 flex items-center justify-center'>
                <div className='text-center'>
                    <button className='mb-[14px]'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="28" fill="#3F99FF"/>
                            <g filter="url(#filter0_d_133_562)">
                                <path d="M42 28L21 40.1244L21 15.8756L42 28Z" fill="white"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_133_562" x="17" y="15.876" width="29" height="32.248" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_133_562"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_133_562" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </button>

                    <div>
                        {video.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideVideoItem