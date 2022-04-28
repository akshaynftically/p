import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'

const Button = (props) => {
  // size: sm | md | lg
  // variant: primary | secondary | danger | warning
  const {size = 'md', variant = 'primary', className = '', href, type, children, ...rest} = props

  return (
    <Fragment>
      {href && (
        <Link
          className={clsx(
            'group inline-flex items-center font-normal font-sans rounded-full transition ease-in-out',
            {'': size === 'sm'},
            {'text-[12px] md:text-[16px] py-[5px] md:py-[10px] px-[15px]': size === 'md'},
            {'': size === 'lg'},
            {'text-white/80 bg-[#262728] hover:bg-[#3F99FF]': variant === 'primary'},
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
        <button className={`btn btn-${size} btn-${variant} ${className}`} type={type} {...rest}>
          {children}
        </button>
      )}
    </Fragment>
  )
}

export default Button
