import clsx from 'clsx'

const FieldGroup = (props) => {
  const {label, className, children,required=false} = props

  return (
    <div className={clsx('mb-[16px] md:mb-[24px]', className)}>
      {label && <label className='block text-[14px] text-white/[.80] mb-[6px]'>{label} {required && <span style={{color:'red'}}>*</span>}:</label>}
      {children}
    </div>
  )
}

export default FieldGroup
