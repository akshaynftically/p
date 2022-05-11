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
    ...rest
  } = props

  return (
    <Fragment>
      {href && (
        <Link
          className={clsx(
            'group items-center justify-center font-semibold font-sans rounded-[4px] transition ease-in-out',
            {'inline-flex': !block},
            {'flex w-full': block},
            {
              'min-h-[40px] text-[12px] md:text-[14px] py-[5px] md:py-[10px] px-[15px] md:px-[24px]':
                size === 'sm',
            },
            {
              'min-h-[52px] text-[14px] md:text-[16px] py-[5px] md:py-[10px] px-[15px]':
                size === 'md',
            },
            {'': size === 'lg'},
            {'text-white bg-[#3F99FF] hover:bg-[#7A3FE4]': variant === 'primary'},
            {'': variant === 'secondary'},
            {'': variant === 'danger'},
            {'': variant === 'warning'},
            className
          )}
          to={href}
          {...rest}
        >
          {children}
        </Link>
      )}
      {type && (
        <button
          className={clsx(
            'group items-center justify-center font-semibold font-sans rounded-[4px] transition ease-in-out',
            {'inline-flex': !block},
            {'flex w-full': block},
            {'opacity-70': disabled},
            {
              'min-h-[40px] text-[12px] md:text-[14px] py-[5px] md:py-[10px] px-[15px] md:px-[24px]':
                size === 'sm',
            },
            {
              'min-h-[52px] text-[14px] md:text-[16px] py-[5px] md:py-[10px] px-[15px]':
                size === 'md',
            },
            {'': size === 'lg'},
            {'text-white bg-[#3F99FF]': variant === 'primary'},
            {'hover:bg-[#7A3FE4]': !disabled},
            {'': variant === 'secondary'},
            {'': variant === 'danger'},
            {'': variant === 'warning'},
            className
          )}
          disabled={disabled}
          type={type}
          {...rest}
        >
          {children}
        </button>
      )}
    </Fragment>
  )
}

export default Simple
