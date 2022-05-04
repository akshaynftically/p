import clsx from 'clsx'

const Field = (props) => {
  const {type = 'text', className, isError, register, ...rest} = props

  return (
    <input
      autoComplete='off'
      className={clsx(
        'w-full rounded-md bg-[#363738] text-white/[.65] text-[10px] md:text-[12px] py-[10px] md:py-[12px] px-[20px]',
        className,
          `${isError ? '!border-red-400' : ''}`
      )}
      type={type}
      {...rest}
      {...register}
    />
  )
}

export default Field
