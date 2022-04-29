import clsx from 'clsx'

const Field = (props) => {
  const {type = 'text', className, ...rest} = props

  return (
    <input
      className={clsx(
        'w-full rounded-md bg-[#363738] text-white/[.65] text-[10px] md:text-[12px] py-[10px] md:py-[12px] px-[20px]',
        className
      )}
      type={type}
      {...rest}
    />
  )
}

export default Field
