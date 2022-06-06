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
  const {type, img, index, qty, onChange,disableCounter, perItemPriceUSD} = props

  return (
    <div className='flex bg-[#161718] w-full items-center rounded-lg pt-[8px] pb-[16px] px-[14px] mb-[8px]'>
      <div className='mr-[20px]'>
        <img src={_landUnits[index]} alt={type} />
      </div>
       <div className='w-full'>
         <div className='flex items-center'>
           <div className='text-[16px] text-white/[.80] text-center'>Size: <span className='lg:text-[24px]'>{type}</span></div>
           <div className='hidden xl:block bg-gradient-to-r from-[#D299FF] to-[#58C3FF] py-[3px] px-[14px] mx-auto text-[12px] text-[#363738] rounded-full'>Unlocked Units: 20,000</div>
           <SimpleCounter onChange={onChange} value={qty} disableCounter={disableCounter}/>
         </div>
         <div className='mb-[11px] mt-[15px] border-t border-[#363738]' />
         <div className='flex justify-between'>
           <span>Price: <span className='font-bold text-[14px]'>${perItemPriceUSD.toLocaleString()}</span></span>
           <span>Total: <span className='font-bold text-[14px]'>${(perItemPriceUSD * qty).toLocaleString()}</span></span>
         </div>
       </div>
    </div>
  )
}

export default LandUnit
