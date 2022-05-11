import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'

const Blur = (props) => {
  // size: sm | md | lg
  const {size = 'md', className, href, type, children, ...rest} = props

  return (
    <Fragment>
      {href && (
        <Link
          className={clsx(
            'btn-blur group inline-flex items-center font-black font-sans border-[1px] border-[#D299FF] rounded-lg transition ease-in-out',
            {'min-h-[72px] text-[12px] md:text-[16px] py-[5px] md:py-[10px] px-[18px]': size === 'md'},
            {'': size === 'sm'},
            {'': size === 'lg'},
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
            'btn-blur group inline-flex items-center font-black font-sans border-[1px] border-[#D299FF] rounded-lg transition ease-in-out',
            {'min-h-[72px] text-[12px] md:text-[16px] py-[5px] md:py-[10px] px-[18px]': size === 'md'},
            {'': size === 'sm'},
            {'': size === 'lg'},
            className
          )}
          type={type}
          {...rest}
        >
          {children}
        </button>
      )}
    </Fragment>
  )
}

export default Blur
