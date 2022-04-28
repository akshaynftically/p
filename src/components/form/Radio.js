const Radio = (props) => {
  const {children, checked = false, ...rest} = props

  return (
    <label className='inline-flex items-center cursor-pointer fs-[14px] text-white'>
      <input className='hidden' type='radio' {...rest} />
      <span className='mr-[16px]'>
        {!checked && (
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM14 23C18.9706 23 23 18.9706 23 14C23 9.02944 18.9706 5 14 5C9.02944 5 5 9.02944 5 14C5 18.9706 9.02944 23 14 23Z'
              fill='white'
              fillOpacity='0.65'
            />
          </svg>
        )}
        {checked && (
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='14' cy='14' r='14' fill='#3F99FF' />
            <path
              d='M8 14L12 18L20 10'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
      </span>
      {children}
    </label>
  )
}

export default Radio
