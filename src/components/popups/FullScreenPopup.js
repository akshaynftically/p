import clsx from 'clsx'

const FullScreenPopup = (props) => {
  const {className, children, onClose, ...rest} = props

  return (
    <div className='fixed top-0 left-0 flex items-center w-full h-full overflow-y-auto z-30'>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-40 bg-black/50' onClick={onClose} />
      <div className='relative z-50 w-[560px] max-w-full py-[20px] mx-auto'>
        <div
          className={clsx(
            'relative bg-[#262728] text-white rounded-lg px-[32px] py-[20px] md:py-[30px]',
            className
          )}
          {...rest}
        >
          <span className='absolute top-[20px] right-[20px]' role='button' onClick={onClose}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 14.1146L22.6 7.51465L24.4853 9.39998L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.39998 24.4853L7.51465 22.6L14.1146 16L7.51465 9.39998L9.39998 7.51465L16 14.1146Z'
                fill='white'
                fillOpacity='0.65'
              />
            </svg>
          </span>
          {children}
        </div>
      </div>
    </div>
  )
}

export default FullScreenPopup
