import {Link} from 'react-router-dom'
// Components
import {WalletListItem} from 'components/lists'
import {FullScreenPopup} from 'components/popups'

// Mockups
import { _walletIcons } from 'lib/constants/walletIcons'
import { getWalletProvider } from 'lib/walletProviders'
import apiRepository from 'lib/apiRepository'


const ConnectYourWallet = ({onClose, onSelect, startTransactionFlow}) => {

  //handler for logging into wallet and handle transactions
  const handleWalletConnect = async(walletTitle) => {
    await new apiRepository().createOrUpdateUser()
    let provider = await getWalletProvider(walletTitle)
    let connected = new CustomEvent('wallet:connected',{detail : { provider : provider}})
    document.dispatchEvent(connected);
  }

  return (
    <FullScreenPopup title='Connect Your Wallet' size='w-full sm:w-[520px]' onClose={onClose}>
      <div className='text-[14px] text-white/[.80] mb-[10px]'>
        By connecting a wallet, you agree to NFTICALLY’s{' '}
        <a className='font-bold text-[#3E97FC] hover:underline' rel='noreferrer' href='//www.nftically.com/terms' target="_blank">
          Terms of Service
        </a>{' '}
        and{' '}
        <a className='font-bold text-[#3E97FC] hover:underline' rel='noreferrer' href='//www.nftically.com/privacy-policy' target="_blank">
          Privacy Policy that
        </a>{' '}
        you have read and understand.
      </div>
      <div className='text-[14px] text-white/[.80] mb-[24px]'>
        If changinh wallet, please change the account in browser extension or app first.
      </div>

      <div className='bg-[#363738] rounded-lg mb-[18px]'>
        <div>
          {_walletIcons.map((el) => (
            <WalletListItem key={el.id} {...el} onClick={handleWalletConnect} />
          ))}
        </div>
        {/* <div className='flex items-center justify-center min-h-[54px] py-[10px] px-[20px]'>
          <Link className='text-[16px] text-[#3F99FF] hover:underline' to='/'>
            Show More Options
          </Link>
        </div> */}
      </div>

      <div className='px-[10px]'>
        <a className='flex items-center text-[14px] text-[#3F99FF] hover:underline' rel='noreferrer' target='_blank' href={process.env.REACT_APP_LEARN_HOW_TO_RESERVE_LAND}>
          <span className='mr-[5px]'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0013 18.3327C5.3988 18.3327 1.66797 14.6018 1.66797 9.99935C1.66797 5.39685 5.3988 1.66602 10.0013 1.66602C14.6038 1.66602 18.3346 5.39685 18.3346 9.99935C18.3346 14.6018 14.6038 18.3327 10.0013 18.3327ZM10.0013 16.666C11.7694 16.666 13.4651 15.9636 14.7153 14.7134C15.9656 13.4632 16.668 11.7675 16.668 9.99935C16.668 8.23124 15.9656 6.53555 14.7153 5.2853C13.4651 4.03506 11.7694 3.33268 10.0013 3.33268C8.23319 3.33268 6.5375 4.03506 5.28726 5.2853C4.03701 6.53555 3.33464 8.23124 3.33464 9.99935C3.33464 11.7675 4.03701 13.4632 5.28726 14.7134C6.5375 15.9636 8.23319 16.666 10.0013 16.666ZM9.16797 5.83268H10.8346V7.49935H9.16797V5.83268ZM9.16797 9.16601H10.8346V14.166H9.16797V9.16601Z'
                fill='#B5B5C3'
              />
            </svg>
          </span>
          Learn how to reserve land
        </a>
      </div>
    </FullScreenPopup>
  )
}

export default ConnectYourWallet
