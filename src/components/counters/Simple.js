import {useEffect, useState} from 'react'
import clsx from 'clsx'

const Simple = (props) => {
  const {value, onChange, disableCounter=false} = props
  const [currentValue, setCurrentValue] = useState(disableCounter?0:value)
  function change (val) {
    if(!disableCounter){
      setCurrentValue(val)
      onChange(val)
    }
  }

  useEffect(() => {
      setCurrentValue(value)
  }, [value])

  return (
    <div className='flex items-center justify-items-stretch'>
      <span
        className={clsx(
          'inline-flex w-[24px] h-[24px] rounded-full mr-[10px]',
          {'bg-[#363738]': currentValue < 1},
          {'bg-[#3F99FF]': currentValue >= 1}
        )}
        onClick={() => change(currentValue === 0 ? 0 : currentValue - 1)}
        role='button'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='m-auto'
        >
          <path
            d='M7.33301 7.33301H8.66634H12.6663V8.66634H8.66634H7.33301H3.33301V7.33301H7.33301Z'
            fill='white'
          />
        </svg>
      </span>
      <div className='grow font-extrabold text-[24px] text-white text-center'>{currentValue}</div>
      <span
        className='inline-flex w-[24px] h-[24px] bg-[#3F99FF] rounded-full ml-[10px]'
        onClick={() => change(currentValue + 1)}
        role='button'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='m-auto'
        >
          <path
            d='M7.33301 7.33301V3.33301H8.66634V7.33301H12.6663V8.66634H8.66634V12.6663H7.33301V8.66634H3.33301V7.33301H7.33301Z'
            fill='white'
          />
        </svg>
      </span>
    </div>
  )
}

export default Simple
