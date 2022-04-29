// Components
import {Simple} from 'components/counters'

const LandUnit = (props) => {
  const {title, img, count} = props

  return (
    <div className='flex flex-col bg-[#161718] rounded-lg pt-[8px] pb-[16px] px-[14px]'>
      <div className='mb-[8px] mx-auto'>
        <img src={img} alt={title} />
      </div>
      <div className='text-[16px] text-white/[.80] text-center mb-[8px]'>{title}</div>
      <Simple value={count} />
    </div>
  )
}

export default LandUnit
