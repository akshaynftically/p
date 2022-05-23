import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'

const Simple = (props) => {
  // size: sm | md | lg
  // variant: primary | secondary | danger | warning
  
  const {
    size = 'md',
    variant = 'primary',
    className = '',
    block,
    href,
    type,
    children,
    disabled,
    onClick,
    ...rest
  } = props


  return (
    <Fragment>
      {href && (
        <a
          className={clsx(
            'group items-center justify-center font-semibold font-sans rounded-[4px] transition ease-in-out',
            {'inline-flex': !block},
            {'flex w-full': block},
            {'min-h-[40px] text-[14px] md:text-[16px] py-[5px] md:py-[10px] px-[15px]': size === 'sm'},
            {
              'min-h-[52px] text-[14px] md:text-[16px] py-[5px] md:py-[10px] px-[15px]':
                size === 'md',
            },
            {'': size === 'lg'},
            {'text-white bg-[#3F99FF] hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]': variant === 'primary'},
            {'': variant === 'secondary'},
            {'': variant === 'danger'},
            {'text-white bg-[#FF5A26] hover:bg-[#FF6B3D]': variant === 'warning'},
            className
          )}
          href={href}
          {...rest}
        >
          {children}
        </a>
      )}
      {type && (
        <button
          className={clsx(
            'group items-center justify-center font-semibold font-sans rounded-[4px] transition ease-in-out',
            {'inline-flex': !block},
            {'flex w-full': block},
            {'opacity-70': disabled},
            {'min-h-[40px] text-[14px] md:text-[16px] py-[5px] md:py-[10px] px-[15px]': size === 'sm'},
            {
              'min-h-[52px] text-[14px] md:text-[16px] py-[5px] md:py-[10px] px-[15px]':
                size === 'md',
            },
            {'': size === 'lg'},
            {'text-white bg-[#3F99FF]': variant === 'primary'},
            {'hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]': !disabled},
            {'': variant === 'secondary'},
            {'': variant === 'danger'},
            {'text-white bg-[#FF5A26] hover:bg-[#FF6B3D]': variant === 'warning'},
            className
          )}
          disabled={disabled}
          type={type}
          onClick={onClick}
          {...rest}
        >
          {children}
        </button>
      )}
    </Fragment>
  )
}

export default Simple
