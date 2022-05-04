// Components
import {SimpleCounter} from 'components/counters'

// Mocks
import _landUnit1Img from 'assets/img/land-units/1.svg'
import _landUnit2Img from 'assets/img/land-units/2.svg'
import _landUnit3Img from 'assets/img/land-units/3.svg'
const _landUnits = [
    _landUnit1Img,
    _landUnit2Img,
    _landUnit3Img,
    _landUnit1Img,
    _landUnit2Img,
    _landUnit3Img,
]
const LandUnit = (props) => {
  const {type, img, index, qty, onChange} = props

  return (
    <div className='flex flex-col bg-[#161718] rounded-lg pt-[8px] pb-[16px] px-[14px]'>
      <div className='mb-[8px] mx-auto'>
        <img src={_landUnits[index]} alt={type} />
      </div>
      <div className='text-[16px] text-white/[.80] text-center mb-[8px]'>{type}</div>
      <SimpleCounter onChange={onChange} value={qty} />
    </div>
  )
}

export default LandUnit
