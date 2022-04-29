const WalletItem = (props) => {
  const {title, icon} = props

  return (
    <div className='flex items-center border-solid border-b-[1px] border-b-white/[.15] py-[10px] px-[20px]'>
      {icon && (
        <span className='flex items-center justify-end w-[45px] h-[40px] text-right mr-[20px]'>
          <img className='max-h-full' src={icon} alt={title} />
        </span>
      )}
      <div className='text-[16px] text-white'>{title}</div>
      <span className='ml-auto'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.1727 12.0007L8.22266 7.05072L9.63666 5.63672L16.0007 12.0007L9.63666 18.3647L8.22266 16.9507L13.1727 12.0007Z'
            fill='white'
            fillOpacity='0.5'
          />
        </svg>
      </span>
    </div>
  )
}

export default WalletItem
