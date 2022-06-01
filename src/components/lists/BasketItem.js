const BasketItem = (props) => {
  const {qty, type, perItemPrice,tokenLogo} = props

  return (
    <div className='flex border-solid border-b-[1px] border-b-[#363738] text-[16px] pb-[10px] mb-[22px]'>
      <div className='text-white/[.80]'>
        {qty} Parcel(s) - {type} Size
      </div>
      <div className='flex items-center text-white ml-auto'>
        <span className='mr-[5px]'>
          <img src={_tokenIcons[tokenLogo.logo]}/>
          {/* <svg
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
        </span>
        {(qty * perItemPrice).toFixed(5)}
      </div>
    </div>
  )
}

export default BasketItem


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
