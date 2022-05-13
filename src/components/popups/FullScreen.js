import {Fragment, useEffect} from 'react'
import clsx from 'clsx'

const FullScreen = (props) => {
  const {title, fullscreen = false, size = 'w-[560px]', className, children, onClose, onBack, ...rest} = props

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={`fixed top-0 left-0 ${fullscreen ? 'md:flex' : 'flex'} items-center w-full h-full overflow-y-auto z-30`}>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-40 bg-black/50' onClick={onClose} />
      <div className={clsx('relative z-50  max-w-full md:py-[20px] mx-auto')}>
        <div
          className={clsx(
            `relative bg-[#262728] text-white ${fullscreen ? 'md:rounded-lg' : 'rounded-lg'} px-[24px] py-[20px]`,
            size,
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
          {title && (
            <Fragment>
              <h2 className='font-extrabold text-[24px] mb-[16px]'>
                <div className="flex items-center">
                  {onBack && (
                      <button onClick={onBack} className='mr-[8px]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3065 10.8429H21V13.1571H7.3065L13.341 19.3638L11.7502 21L3 12L11.7502 3L13.341 4.63615L7.3065 10.8429Z" fill="white"/>
                        </svg>
                      </button>
                  )}

                  {title}
                </div>
              </h2>
              <hr className='border-[#363738] my-[16px]' />
            </Fragment>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default FullScreen
