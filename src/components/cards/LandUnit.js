// Components
import {SimpleCounter} from 'components/counters'

// Mocks
import _landUnit1Img from 'assets/img/land-units/1.svg'
import _landUnit2Img from 'assets/img/land-units/2.svg'
import _landUnit3Img from 'assets/img/land-units/3.svg'
import _landUnit4Img from 'assets/img/land-units/4.svg'
import _landUnit5Img from 'assets/img/land-units/5.svg'
import _landUnit6Img from 'assets/img/land-units/6.svg'

const _landUnits = [
    _landUnit1Img,
    _landUnit2Img,
    _landUnit3Img,
    _landUnit4Img,
    _landUnit5Img,
    _landUnit6Img,
]
const LandUnit = (props) => {
  const {type, img, index, qty, onChange,disableCounter} = props

  return (
    <div className='flex bg-[#161718] items-center rounded-lg pt-[8px] pb-[16px] px-[14px] mb-[4px]'>
      <div className='mr-[20px]'>
        <img src={_landUnits[index]} alt={type} />
      </div>
      <div className='text-[16px] text-white/[.80] text-center mb-[8px]'>size: <span className='lg:text-[24px]'>{type}</span></div>
      <SimpleCounter onChange={onChange} value={qty} />
    </div>
  )
}

export default LandUnit
