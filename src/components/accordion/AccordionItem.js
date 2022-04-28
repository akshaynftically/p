import clsx from 'clsx'

const AccordionItem = (props) => {
  const {title, children, isOpened = false, onClick, className} = props

  return (
    <div
      className={clsx(
        'border-solid border-b-[1px] border-b-[#363738] py-[6px] mb-[16px]',
        className
      )}
    >
      <div className='flex justify-between'>
        <div className='text-white text-[14px]'>{title}</div>
        <span className='cursor-pointer' onClick={onClick}>
          {!isOpened && (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z'
                fill='white'
                fillOpacity='0.65'
              />
            </svg>
          )}
          {isOpened && (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11 11H13H17V13H13H11H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z'
                fill='white'
                fillOpacity='0.65'
              />
            </svg>
          )}
        </span>
      </div>
      <div className={clsx({hidden: !isOpened})}>
        <div className='text-white/[.65] text-[14px] py-[10px] pr-[20px]'>{children}</div>
      </div>
    </div>
  )
}

export default AccordionItem
