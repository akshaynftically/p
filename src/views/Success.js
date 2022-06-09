import {useDispatch, useSelector} from "react-redux";
import {clearTransactionForm, getTransactionForm} from "../app/TransactionFormSlice";
import {Fragment, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
import ReferalLink from 'components/cards/ReferalLink'
import { providers } from "ethers";
import Moment from 'react-moment';

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

const Failed = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const transactionForm = useSelector(getTransactionForm)
    console.log(transactionForm)
    const order=JSON.parse(localStorage.getItem('order'))
    const auth=JSON.parse(localStorage.getItem('auth'))
    const discount=JSON.parse(localStorage.getItem('discount'))
    useEffect(() => {
        if (!transactionForm) {
            navigate('/reserve-land')
        }

        // dispatch(clearTransactionForm())
        // localStorage.removeItem('order')
    // console.log(transactionForm)

    }, [dispatch, navigate, transactionForm])

    useEffect(() => {
       return ()=>{
        dispatch(clearTransactionForm())
        localStorage.removeItem('order')
       }

    }, [])

    const getTotal = () => {
        let total = transactionForm.basket.reduce((sum, cur) => {
            return sum += cur.perItemPrice * cur.qty
        }, 0)

        return total
    }

    const total = () => {
        let total = getTotal()

        if (transactionForm.discount) {
            total = total - ((total * transactionForm.discount) / 100)
        }

        return total
    }

    return (
        <Fragment>
            {transactionForm && (
                <div className='py-[180px] sm:max-w-[90rem] 2xl:max-w-[70rem] basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-[80px] text-white'>
                    <div className="flex justify-center lg:justify-start mb-[35px]">
                        <svg width="192" height="189" viewBox="0 0 192 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="85.5615" cy="87.0439" r="81.3623" fill="#3F99FF" fillOpacity="0.5"/>
                            <path d="M176.04 51.4693C179.89 51.4693 183.01 48.3487 183.01 44.4993C183.01 40.6499 179.89 37.5293 176.04 37.5293C172.191 37.5293 169.07 40.6499 169.07 44.4993C169.07 48.3487 172.191 51.4693 176.04 51.4693Z" fill="#5EE2A2" fillOpacity="0.5"/>
                            <path d="M187.24 26.269C189.869 26.269 192 24.1379 192 21.509C192 18.8801 189.869 16.749 187.24 16.749C184.612 16.749 182.48 18.8801 182.48 21.509C182.48 24.1379 184.612 26.269 187.24 26.269Z" fill="#5EE2A2" fillOpacity="0.5"/>
                            <path d="M13.924 18.5345C18.8062 18.5345 22.764 14.5767 22.764 9.6945C22.764 4.8123 18.8062 0.854492 13.924 0.854492C9.04179 0.854492 5.08398 4.8123 5.08398 9.6945C5.08398 14.5767 9.04179 18.5345 13.924 18.5345Z" fill="#5EE2A2" fillOpacity="0.5"/>
                            <path d="M124.809 43H81V26H138.427C138.532 26 138.638 26 138.743 26C147.716 26.2166 155 33.7962 155 43H135.999" fill="#0D415F"/>
                            <g filter="url(#filter0_d_133_1454)">
                                <path d="M140 26C136.594 26.2136 133.402 27.6023 131.167 29.9523C130.954 30.166 130.741 30.3796 130.528 30.7001C128.506 33.0501 127.016 36.1479 127.016 39.4593V139.229C127.016 148.523 119.567 156 110.308 156H29V38.7116C29.2128 35.2933 30.4899 32.1956 32.7248 29.9523C35.1726 27.4955 38.4717 26 42.1965 26H124.036H139.574C139.681 26 139.787 26 140 26Z" fill="url(#paint0_linear_133_1454)"/>
                            </g>
                            <path d="M74.6734 143H96.0087C96.0087 146.593 97.4874 149.87 99.8111 152.195C102.135 154.626 105.409 156 109 156H12.9913C9.40019 156 6.12597 154.52 3.80233 152.195C1.47868 149.87 0 146.593 0 143H63.1609C63.1609 143 74.8847 143.106 74.6734 143Z" fill="#6F8FE4"/>
                            <path d="M162.989 135.381L152.877 125.27C152.033 124.426 152.033 123.05 152.877 122.206C153.722 121.361 155.098 121.361 155.942 122.206L166.053 132.317C166.898 133.161 166.898 134.537 166.053 135.381C165.209 136.226 163.833 136.226 162.989 135.381Z" fill="#5EE2A2" fillOpacity="0.5"/>
                            <g filter="url(#filter1_d_133_1454)">
                                <g filter="url(#filter2_d_133_1454)">
                                    <path d="M102.728 79.6544L71.4188 108.673L46.9824 84.9998L92.037 60.5635L102.728 79.6544Z" fill="white"/>
                                </g>
                                <path d="M112.254 75.1888C110.978 74.1304 109.869 72.8704 108.995 71.4592C108.558 69.7288 108.424 67.948 108.592 66.184C108.659 62.4712 108.743 58.2544 105.803 55.3144C102.846 52.3744 98.6464 52.5256 94.9168 52.5256C93.1528 52.6936 91.372 52.5592 89.6416 52.1224C88.2304 51.2488 86.9704 50.1568 85.912 48.8632C83.4256 46.3096 80.3344 43 76 43C71.6656 43 68.5744 46.3096 66.1888 48.7624C65.1304 50.0392 63.8704 51.148 62.4592 52.0216C60.7288 52.4584 58.948 52.5928 57.184 52.4248C53.4544 52.3576 49.2376 52.2904 46.2976 55.2136C43.3576 58.1536 43.5088 62.3704 43.5088 66.0832C43.6768 67.8472 43.5424 69.628 43.1056 71.3584C42.232 72.7696 41.14 74.0296 39.8464 75.088C37.3096 77.5744 34 80.6656 34 85C34 89.3344 37.3096 92.4256 39.8464 94.8112C41.1232 95.8696 42.232 97.1296 43.1056 98.5408C43.5424 100.271 43.6768 102.052 43.5088 103.816C43.4416 107.546 43.2568 111.746 46.2136 114.686C49.1704 117.626 53.3704 117.474 57.1 117.474C58.864 117.306 60.6448 117.458 62.3752 117.878C63.7864 118.751 65.0464 119.843 66.1048 121.137C68.5912 123.741 71.6824 127 76 127C80.3176 127 83.4256 123.69 85.8112 121.238C86.8696 119.961 88.1296 118.852 89.5408 117.978C91.2712 117.542 93.052 117.407 94.816 117.575C98.5456 117.642 102.762 117.71 105.702 114.786C108.642 111.846 108.491 107.63 108.491 103.917C108.323 102.153 108.458 100.372 108.894 98.6416C109.768 97.2304 110.86 95.9704 112.154 94.912C114.69 92.4256 118 89.3344 118 85.0168C118 80.6992 114.69 77.5744 112.254 75.1888ZM94.5304 79.2376L74.824 98.9608C73.9672 99.8008 72.8248 100.254 71.632 100.254C70.6072 100.254 69.616 99.9016 68.8096 99.2632L57.856 90.5104C55.9072 88.948 55.588 86.1088 57.1504 84.16C58.7128 82.2112 61.552 81.892 63.5008 83.4544L71.296 89.704L88.1296 72.8704C89.8936 71.1064 92.7664 71.1064 94.5304 72.8704C96.2944 74.6176 96.2944 77.4736 94.5304 79.2376Z" fill="url(#paint1_linear_133_1454)"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_133_1454" x="7" y="15" width="155" height="174" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="11"/>
                                    <feGaussianBlur stdDeviation="11"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_133_1454"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_133_1454" result="shape"/>
                                </filter>
                                <filter id="filter1_d_133_1454" x="27" y="40" width="98" height="98" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="3.5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_133_1454"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_133_1454" result="shape"/>
                                </filter>
                                <filter id="filter2_d_133_1454" x="42.9824" y="60.5635" width="63.7461" height="56.1094" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_133_1454"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_133_1454" result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_133_1454" x1="84.4638" y1="22.993" x2="84.4638" y2="157.401" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#D299FF"/>
                                    <stop offset="0.9964" stopColor="#58C3FF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_133_1454" x1="76" y1="43" x2="76.7636" y2="123.182" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#72F3B4"/>
                                    <stop offset="1" stopColor="#16A25E"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <h2 className='font-[900] text-[24px] lg:text-[36px] mb-[8px]'>Congratulations!</h2>
                    <h5 className='text-[16px] lg:text-[32px] mb-[20px]'>You now own a real estate in COMEARTH</h5>
                    <div className=''>
                        <button onClick={()=>{     dispatch(clearTransactionForm());
                            
                            localStorage.removeItem('order'); navigate('/reserve-land?user_id='+auth.id)}} className='bg-[#3F99FF] mt-[6px] mb-[30px] md:mt-0 block w-full md:w-auto px-[50px] py-[10px] rounded-l-[4px] md:rounded-l-0 rounded-r-[4px] text-[14px]'>
                            <Link to={'/reserve-land?user_id='+auth.id}>Buy More</Link>
                        </button>
                    </div>
                    <ReferalLink />

                    <div className="bg-[#262728] px-[32px] py-[24px] rounded-[8px] mb-[24px]">
                        <div className="border-b border-[#363738] pb-[8px] mb-[16px]">
                            <h5 className='text-[20px] font-bold'>Invoice Details</h5>
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-[14px]'>
                            <div>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Order Number</div>
                                <div>{order.id}</div>
                            </div>
                            <div>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Order Date</div>
                                <div><Moment format="D MMM YYYY">{order.created_at}</Moment></div>
                            </div>
                            {/* <div>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Order Date</div>
                                <div>15th May, 2022</div>
                            </div>
                            <div>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Order Date</div>
                                <div>15th May, 2022</div>
                            </div> */}
                        </div>
                    </div>

                    {/* <div className="bg-[#262728] px-[32px] py-[24px] rounded-[8px] mb-[24px]">
                        <div className="border-b border-[#363738] pb-[8px] mb-[16px]">
                            <h5 className='text-[20px] font-bold'>Customer Details</h5>
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-[14px]'>
                            <div>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Customer Name</div>
                                <div>{transactionForm.name}</div>
                            </div>
                            <div className='max-w-[200px]'>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Email Address</div>
                                <div className='break-words'>{transactionForm.email}</div>
                            </div>
                            <div>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Company name</div>
                                <div>{transactionForm.company || 'N/A'}</div>
                            </div>
                            <div>
                                <div className='text-left font-normal text-white/60 mb-[4px]'>Country</div>
                                 <div>{transactionForm.country.label}</div> 
                            </div>
                        </div>
                    </div> */}

                    <div className="bg-[#262728] px-[32px] py-[24px] rounded-[8px] mb-[24px]">
                        <div className="border-b border-[#363738] pb-[8px]">
                            <h5 className='text-[20px] font-bold'>Order Details</h5>
                        </div>

                        <table className="table-fixed w-full">
                            <tbody>
                            {transactionForm.basket.map((item, index) => (
                                item.qty ? <tr className='border-b border-[#363738]' key={index}>
                                    <td className='text-wrap pb-[8px] pt-[22px]'>{item.qty}  Parcel(s) - {item.type} Size</td>
                                    <td className='text-right pb-[8px] pt-[22px]'>
                                        <div className="flex items-center justify-end">
                                            {/* <svg className='mr-[3px]' width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.3254 4.79649C12.024 4.6189 11.6322 4.6189 11.3008 4.79649L8.95018 6.15801L7.35303 7.04598L5.00246 8.40748C4.70111 8.58508 4.30935 8.58508 3.97786 8.40748L2.10947 7.34196C1.80812 7.16435 1.59717 6.83876 1.59717 6.4836V4.38212C1.59717 4.02693 1.77799 3.70135 2.10947 3.52376L3.94773 2.48782C4.24908 2.31023 4.64084 2.31023 4.97232 2.48782L6.8106 3.52376C7.11191 3.70135 7.3229 4.02693 7.3229 4.38212V5.74362L8.92006 4.82609V3.46456C8.92006 3.10939 8.73925 2.78381 8.40775 2.60622L5.00246 0.652724C4.70111 0.475134 4.30935 0.475134 3.97786 0.652724L0.5123 2.60622C0.180812 2.78381 0 3.10939 0 3.46456V7.40114C0 7.7563 0.180812 8.08189 0.5123 8.25949L3.97786 10.213C4.27921 10.3906 4.67097 10.3906 5.00246 10.213L7.35303 8.88106L8.95018 7.96352L11.3008 6.63159C11.6021 6.45399 11.9939 6.45399 12.3254 6.63159L14.1636 7.66755C14.4649 7.8451 14.6759 8.17069 14.6759 8.5259V10.6274C14.6759 10.9825 14.4951 11.3081 14.1636 11.4857L12.3254 12.5513C12.024 12.7289 11.6322 12.7289 11.3008 12.5513L9.46248 11.5153C9.16112 11.3377 8.95018 11.0122 8.95018 10.6569V9.29545L7.35303 10.213V11.5745C7.35303 11.9297 7.53383 12.2553 7.86533 12.4329L11.3309 14.3863C11.6322 14.5639 12.024 14.5639 12.3555 14.3863L15.821 12.4329C16.1224 12.2553 16.3333 11.9297 16.3333 11.5745V7.63793C16.3333 7.28277 16.1525 6.95718 15.821 6.77958L12.3254 4.79649Z" fill="#7A3FE4"/>
                                            </svg> */}
                                        <img src={_tokenIcons[localStorage.getItem('token_logo')]} className='mr-[3px]'/>

                                            <span>{(item.perItemPrice * item.qty).toFixed(5)}</span>
                                        </div>
                                    </td>
                                </tr> : ''
                            ))}
                            {discount && (
                                <tr className='border-b border-[#363738]'>
                                    <td className='text-wrap pb-[8px] pt-[22px]'>Discount</td>
                                    <td className='text-right pb-[8px] pt-[22px]'>
                                        <div className="flex items-center justify-end">
                                            
                                            <span> {discount}%</span>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                            <tfoot>
                            <tr>
                                <td className='text-wrap text-[20px] text-white/80 pb-[8px] pt-[22px]'>Grand Total</td>
                                <td className='text-right pb-[8px] pt-[22px]'>
                                    <div className="flex items-center justify-end">
                                       
                                        <img src={_tokenIcons[localStorage.getItem('token_logo')]} className='mr-[3px]'/>
                                        <span className='text-[20px]'>{(total()).toFixed(5)}</span>
                                    </div>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>

                    <p className='text-white/80 mb-9'>Thank you for your purchase. Your parcel(s) have been reserved.</p>

                    {/* <p className='text-white/80'>
                    You will receive details of this purchase on your email also. In case, you are not able to find it, please make sure to check your spam folder too. 
                        <a className='text-[#3F99FF] underline ml-1' rel="noreferrer" target='_blank' href={process.env.REACT_APP_SUCCESS_LEARN_MORE}>Learn More</a>
                    </p> */}
                </div>
            )}
        </Fragment>
    )
}

export default Failed