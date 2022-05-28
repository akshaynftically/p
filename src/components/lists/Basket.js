import {Fragment, useEffect, useState} from 'react'

// Components
import BasketListItem from './BasketItem'
import {Field, FieldGroup} from "../form";
import {SimpleButton} from "../buttons";

const Basket = (props) => {
  const {items, discountCode, setDiscountCode,discountPercentage,tokenLogo} = props
  const [discount, setDiscount] = useState(false)

  const totalDiscount = () => {

    let total = items.reduce((sum, cur, i) => {
      return sum += cur.perItemPrice * cur.qty * (discountPercentage[i]/100000 )
    }, 0)


    return total
  }

  const total = () => {
    let total = items.reduce((sum, cur, i) => {
      return sum += cur.perItemPrice * cur.qty * ( (100000 - discountPercentage[i])/100000 )
    }, 0)
    // total = total - ((total * discountPercentage) / 100)

    return total
  }

  const discountRender = () => {
    return (
      <>
      {


        !discount
            ? <>
              {/* <FieldGroup className='mb-[24px]' label='Have a Promo Code?'>
                <div className="relative">
                  <Field value={_discountCode} onChange={e => _setDiscountCode(e.target.value)} className='pr-[210px]' placeholder='Enter Your Promo Code Here' />
                  <SimpleButton
                      disabled={!_discountCode.length}
                      className='disabled:opacity-80 mt-3 md:mt-0 w-full md:absolute top-0 right-0 md:w-[190px] min-h-[37px] md:min-h-full md:rounded-l-none'
                      type='button'
                      onClick={addCode}
                  >
                    Apply Code Now
                  </SimpleButton>
                </div>
              </FieldGroup> */}
            </>
        : null
      }
       <>
            {/* <div className='text-[14px] text-white/80 mb-[10px]'>Promo Code</div>
            <div className="flex items-center justify-between mb-[26px]">
              <span className='text-white/80 text-[16px] uppercase'>{discountCode}</span>
              <button type='button' className='flex items-center text-[16px] text-[#3F99FF] font-bold'>
                <span className='mr-[12px] underline' onClick={removeCode}>Remove Code</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 2V0H15V2H20V4H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V4H0V2H5ZM4 4V18H16V4H4ZM7 7H9V15H7V7ZM11 7H13V15H11V7Z" fill="#3F99FF"/>
                </svg>
              </button>
            </div> */}

    {
      discountPercentage[0] != 0 && <>
 <div className="flex items-center justify-between border-b border-[#363738] pb-[8px] mb-[24px]">
           <span className='text-white/80 text-[16px]'>Discount</span>
           <div  className='flex items-center'>
             {/* <svg
                 className='mr-1'
                 width='17'
                 height='15'
                 viewBox='0 0 17 15'
                 fill='none'
                 xmlns='http://www.w3.org/2000/svg'
             >
               <path
                   d='M12.8849 4.79649C12.5836 4.6189 12.1918 4.6189 11.8603 4.79649L9.50975 6.15801L7.9126 7.04598L5.56203 8.40748C5.26068 8.58508 4.86892 8.58508 4.53743 8.40748L2.66904 7.34196C2.36769 7.16435 2.15674 6.83876 2.15674 6.4836V4.38212C2.15674 4.02693 2.33756 3.70135 2.66904 3.52376L4.5073 2.48782C4.80865 2.31023 5.20041 2.31023 5.53189 2.48782L7.37017 3.52376C7.67148 3.70135 7.88247 4.02693 7.88247 4.38212V5.74362L9.47963 4.82609V3.46456C9.47963 3.10939 9.29882 2.78381 8.96733 2.60622L5.56203 0.652724C5.26068 0.475134 4.86892 0.475134 4.53743 0.652724L1.07187 2.60622C0.740382 2.78381 0.55957 3.10939 0.55957 3.46456V7.40114C0.55957 7.7563 0.740382 8.08189 1.07187 8.25949L4.53743 10.213C4.83878 10.3906 5.23054 10.3906 5.56203 10.213L7.9126 8.88106L9.50975 7.96352L11.8603 6.63159C12.1617 6.45399 12.5534 6.45399 12.8849 6.63159L14.7231 7.66755C15.0245 7.8451 15.2354 8.17069 15.2354 8.5259V10.6274C15.2354 10.9825 15.0546 11.3081 14.7231 11.4857L12.8849 12.5513C12.5836 12.7289 12.1918 12.7289 11.8603 12.5513L10.0221 11.5153C9.72069 11.3377 9.50975 11.0122 9.50975 10.6569V9.29545L7.9126 10.213V11.5745C7.9126 11.9297 8.09341 12.2553 8.4249 12.4329L11.8904 14.3863C12.1918 14.5639 12.5836 14.5639 12.9151 14.3863L16.3806 12.4329C16.682 12.2553 16.8929 11.9297 16.8929 11.5745V7.63793C16.8929 7.28277 16.7121 6.95718 16.3806 6.77958L12.8849 4.79649Z'
                   fill='#7A3FE4'
               />
             </svg> */}

             {(discountPercentage[0]/1000).toFixed(2)} %
           </div>
          </div>
      </> 
    }     
          </>
      </>
    )
  }

  return (
    <Fragment>
      {items.map((el) => (
          el.qty ? <BasketListItem key={el.id} {...el} tokenLogo={tokenLogo} /> : ''
      ))}

      {discountRender()}

      <div className='flex text-[20px]'>
        <div className='text-white/[.80]'>Grand Total</div>
        <div className='flex items-center font-semibold text-white ml-auto'>
                    <span className='mr-[5px]'>
          <img src={_tokenIcons[tokenLogo.logo]}/>

                      {/* <svg
                          width='17'
                          height='14'
                          viewBox='0 0 17 14'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                            d='M12.3254 4.27696C12.024 4.09937 11.6322 4.09937 11.3008 4.27696L8.95018 5.63848L7.35303 6.52645L5.00246 7.88795C4.70111 8.06555 4.30935 8.06555 3.97786 7.88795L2.10947 6.82243C1.80812 6.64482 1.59717 6.31923 1.59717 5.96407V3.86258C1.59717 3.5074 1.77799 3.18182 2.10947 3.00423L3.94773 1.96829C4.24908 1.7907 4.64084 1.7907 4.97232 1.96829L6.8106 3.00423C7.11191 3.18182 7.3229 3.5074 7.3229 3.86258V5.22409L8.92006 4.30656V2.94503C8.92006 2.58985 8.73925 2.26427 8.40775 2.08668L5.00246 0.133192C4.70111 -0.0443975 4.30935 -0.0443975 3.97786 0.133192L0.5123 2.08668C0.180812 2.26427 0 2.58985 0 2.94503V6.88161C0 7.23677 0.180812 7.56236 0.5123 7.73996L3.97786 9.69345C4.27921 9.87106 4.67097 9.87106 5.00246 9.69345L7.35303 8.36153L8.95018 7.44399L11.3008 6.11206C11.6021 5.93446 11.9939 5.93446 12.3254 6.11206L14.1636 7.14802C14.4649 7.32557 14.6759 7.65116 14.6759 8.00637V10.1078C14.6759 10.463 14.4951 10.7886 14.1636 10.9662L12.3254 12.0317C12.024 12.2093 11.6322 12.2093 11.3008 12.0317L9.46248 10.9958C9.16112 10.8182 8.95018 10.4926 8.95018 10.1374V8.77592L7.35303 9.69345V11.055C7.35303 11.4102 7.53383 11.7358 7.86533 11.9134L11.3309 13.8668C11.6322 14.0444 12.024 14.0444 12.3555 13.8668L15.821 11.9134C16.1224 11.7358 16.3333 11.4102 16.3333 11.055V7.1184C16.3333 6.76324 16.1525 6.43765 15.821 6.26005L12.3254 4.27696Z'
                            fill='#7A3FE4'
                        />
                      </svg> */}
                    </span>
          {total().toFixed(5)}
        </div>
      </div>
    </Fragment>
  )
}

export default Basket
const _tokenIcons = {
  'token_logo0': require('assets/img/tokens/token_logo0.png'),
  'token_logo1': require('assets/img/tokens/token_logo1.png'),
  'token_logo2': require('assets/img/tokens/token_logo2.png'),
  'token_logo3': require('assets/img/tokens/token_logo3.png'),
  'token_logo4': require('assets/img/tokens/token_logo4.png'),
  'token_logo5': require('assets/img/tokens/token_logo5.png'),
  'token_logo6': require('assets/img/tokens/token_logo6.png'),
  'token_logo7': require('assets/img/tokens/token_logo7.png'),
  'token_logo8': require('assets/img/tokens/token_logo8.png'),
  'token_logo9': require('assets/img/tokens/token_logo9.png'),
  'token_logo10': require('assets/img/tokens/token_logo10.png'),
  'token_logo11': require('assets/img/tokens/token_logo11.png'),
  'token_logo12': require('assets/img/tokens/token_logo12.png'),
}
