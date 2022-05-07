import {Fragment, useEffect, useRef, useState} from 'react'
import {getSelectedAnnot, resetSelectedAnnot} from "app/AnnotsSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useOutletContext} from "react-router-dom"
import img1 from 'assets/img/image-120.png'
import img2 from 'assets/img/image-2.png'

import _map from 'assets/images/background/map.png'

import _sqTop from 'assets/img/land-units/square-top.svg'
import _sqBottom from 'assets/img/land-units/square-bottom.svg'

import FullScreenPopup from 'components/popups/FullScreen'
import FieldGroup from "../components/form/FieldGroup";
import Field from "../components/form/Field";
import Select from "../components/form/Select";
import {SimpleButton} from "../components/buttons";
import {useForm, Controller} from "react-hook-form";
import {setTransactionForm} from "../app/TransactionFormSlice";
import {Swiper, SwiperSlide} from "swiper/react";
import AsideVideoItem from "../components/aisde/VideoItem";
import {Navigation} from "swiper";
import PopularBrands from "../components/land/PopularBrands";
import Stores from "../components/land/Stores";


const BackButton = ({back, className}) => {
    return (
        <button className={`text-white text-[16px] relative py-[11px] pl-[50px] px-[33px] rounded-[50px] ${className}`}
                onClick={back}>
            <div className='flex items-center'>
                <svg className='absolute left-3' width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z"
                        fill="#3F99FF"/>
                </svg>

                Back to Comearth
            </div>
        </button>
    )
}

const _selectIndustryOptions = [
    {value: 'Ecommerce', label: 'Ecommerce'},
    {value: 'Option2', label: 'Option 2'},
    {value: 'Option3', label: 'Option 3'},
]

const _selectCountryOptions = [
    {value: 'Option1', label: 'Option 1'},
    {value: 'Option2', label: 'Option 2'},
    {value: 'Option3', label: 'Option 3'},
]

const Land = (props) => {
    const {register, control, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange'
    })
    const [animate, setAnimate] = useState(false)
    const navigate = useNavigate()
    const [reset] = useOutletContext()
    const land = useSelector(getSelectedAnnot)
    const dispatch = useDispatch()
    const sectionRef = useRef()
    const [enterYourDetailsIsOpened, setEnterYourDetailsIsOpened] = useState(false)
    const [selectIndustry, setSelectIndustry] = useState(_selectIndustryOptions[0])
    const [selectCountry, setSelectCountry] = useState(null)
    const onSubmit = data => {
        dispatch(setTransactionForm(data))
        navigate('/reserve-land')
    }

    // axios.get('https://e35df215-1476-4ed0-9a7b-a9053666b26c.mock.pstmn.io/metaverse/comearth')
    //     .then(data => {
    //         console.log(data)
    //     })

    useEffect(() => {
        setAnimate(true)
    }, [])

    function back() {
        const immediately = window.scrollY > window.outerHeight

        if (immediately) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })

            setTimeout(() => {
                setAnimate(false)
                reset()

                setTimeout(() => {
                    navigate('/')
                    dispatch(resetSelectedAnnot())
                }, 400)
            }, 1000)

            return
        }

        setAnimate(false)
        reset()

        setTimeout(() => {
            navigate('/')
            dispatch(resetSelectedAnnot())
        }, 400)
    }

    function scrollToStart() {
        sectionRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    const handleToggleEnterYourDetails = () => {
        setEnterYourDetailsIsOpened(!enterYourDetailsIsOpened)
    }

    return (
        <Fragment>
            {enterYourDetailsIsOpened && (
                <FullScreenPopup onClose={handleToggleEnterYourDetails}>
                    <h2 className='font-extrabold text-[24px] mb-[16px]'>Enter Your Details</h2>
                    <hr className='border-[#363738] my-[16px]'/>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup label='Email ID'>
                            <Field isError={errors.email}
                                   register={register("email", {required: true, pattern: /^\S+@\S+$/i})}
                                   type='email'
                                   placeholder='Enter Your Email Address Here'/>
                            <small className='text-red-400'>
                                {errors.email?.type === 'required' && "Email is required"}
                                {errors.email?.type === 'pattern' && "Email is invalid"}
                            </small>
                        </FieldGroup>
                        <SimpleButton type='submit' block>
                            Reserve Land Now
                        </SimpleButton>
                    </form>
                </FullScreenPopup>
            )}

            {/* Hero */}
            <div
                className={`absolute flex items-end top-0 transform translate-y-[35%] xs:translate-y-[40%] sm:translate-y-[60%] md:translate-y-[60%] lg:translate-y-[55%] 2xl:translate-y-[70%] w-full justify-center transition-[opacity] duration-[600ms] px-5 ${animate ? 'opacity-1' : 'opacity-0'}`}>
                <div className='w-full'>
                    <div className='text-center relative text-white mb-5'>
                        <div
                            className="hidden lg:block sm:max-w-[90rem] 2xl:max-w-[105rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
                            <div className='absolute top-0 transform translate-y-[-100%]'>
                                <BackButton className='bg-[#262728]' back={back}/>
                            </div>
                        </div>

                        <h1 className='text-[40px] lg:text-[72px] xs:leading-[1.2] lg:leading-[1.5] font-bold mb-[24px]'>{land.name} Land
                            of <span className='text-gradient'>Commerce</span></h1>
                        <div className='flex justify-center items-center mb-[24px]'>
                            <p className='max-w-[80vh] opacity-80 text-[14px]'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. </p>
                        </div>
                        <button onClick={handleToggleEnterYourDetails}
                                className='w-full md:w-auto text-center bg-[#3F99FF] text-[16px] py-[14px] px-[20px] rounded'>Reserve
                            Land Now
                        </button>
                    </div>
                </div>
            </div>
            {/* End Hero */}

            {/* Section */}
            <div ref={sectionRef}
                 className={`relative rounded-t-[16px] z-[20] bg-[#262728] min-h-[100vh] mb-[203px] 3xl:max-w-[120rem] max-w-[100rem] basis-full w-full mx-auto transition-[margin,opacity] duration-[600ms] ${animate ? 'mt-[-25vh] opacity-1' : 'mt-[-10vh] opacity-0'}`}>
                <button className='hidden lg:block absolute top-[-43px] left-[50%] -translate-x-1/2 translate-y-[-100%]'
                        onClick={scrollToStart}
                >
                    <svg className='animate-[bounce_2.5s_ease-in-out_infinite]' width="64" height="64"
                         viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="30" fill="black" fillOpacity="0.1" stroke="white" stroke-width="3"/>
                        <path d="M20 29L32 41L44 29" stroke="white" stroke-width="3" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>

                <div className='rounded-t-[16px] bg-[#2E2F30] pt-[23px] px-[15px] pb-[13px]'>
                    <svg width="36" height="9" viewBox="0 0 36 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="4.74658" cy="4.74988" rx="4.12988" ry="4.13269" fill="white"/>
                        <ellipse opacity="0.6" cx="18.1667" cy="4.74988" rx="4.12988" ry="4.13269" fill="white"/>
                        <ellipse opacity="0.3" cx="31.5907" cy="4.74988" rx="4.12988" ry="4.13269" fill="white"/>
                    </svg>
                </div>

                <div
                    className='bg-[url("assets/images/background/hero-1.png")] mb-[60px] lg:px-[128px] flex items-center bg-cover xl:h-[842px]'>
                    <div
                        className='text-center text-white xl:max-w-[562px] backdrop-blur-sm bg-gradient-to-b from-[#746897]/60 to-[#688697]/60'>
                        <div className='bg-[#1B2023]/50 text-[20px] py-[17px]'>
                            Alpha Launch Coming Soon
                        </div>

                        <div
                            className='px-[28px] pb-[79px] pt-[53px] bg-gradient-to-b from-[#D299FF]/40 to-[#58C3FF]/40'>
                            <div className="flex justify-center mb-[34px]">
                                <svg className='max-w-[280px] sm:max-w-full' width="343" height="60"
                                     viewBox="0 0 343 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M114.627 27.4361C117.225 24.3954 119.735 21.4566 122.241 18.5213C124.561 15.8039 126.875 13.0796 129.212 10.3798C129.627 9.89821 130.109 9.4377 130.643 9.10023C132.084 8.19679 133.627 8.73464 134.179 10.3447C134.401 10.995 134.478 11.7191 134.482 12.4117C134.499 24.5079 134.503 36.6041 134.471 48.7003C134.471 49.4842 134.26 50.3349 133.912 51.0344C133.536 51.7902 132.682 51.973 131.856 51.973C128.84 51.98 125.823 52.0082 122.807 51.9695C120.983 51.9449 120.122 51.0309 120.097 49.1291C120.062 46.3766 120.086 43.6241 120.083 40.8681C120.083 40.5588 120.083 40.2494 119.872 39.8663C119.552 40.2635 119.232 40.6607 118.909 41.0544C118.076 42.0739 117.281 43.132 116.392 44.0987C115.176 45.4205 113.91 45.4205 112.701 44.0811C111.681 42.9527 110.764 41.7329 109.801 40.5553C109.604 40.3127 109.403 40.0737 109.073 39.6729C109.048 40.151 109.02 40.4252 109.02 40.7029C109.02 43.4554 109.027 46.2079 109.013 48.9639C109.003 51.0907 108.145 51.9695 106.032 51.9836C103.22 52.0047 100.408 52.0047 97.5955 51.9836C95.4898 51.966 94.6145 51.0872 94.611 48.9604C94.6005 36.6884 94.5969 24.4165 94.6286 12.1445C94.6286 11.3852 94.836 10.5591 95.1735 9.88063C95.7746 8.66785 97.1702 8.30928 98.3302 9.02289C98.9419 9.39903 99.4938 9.91227 99.9648 10.4571C104.623 15.8356 109.259 21.2351 113.903 26.6276C114.11 26.8666 114.321 27.1022 114.617 27.4361H114.627Z"
                                        fill="white"/>
                                    <path
                                        d="M319.176 23.8514V22.8352C319.176 19.2155 319.172 15.5959 319.176 11.9762C319.179 9.54519 320.048 8.67978 322.476 8.66901C325.169 8.66183 327.862 8.66183 330.555 8.66901C332.99 8.67619 333.891 9.54879 333.891 11.9511C333.899 24.2177 333.899 36.4843 333.891 48.7509C333.891 51.1317 333.019 51.9827 330.624 51.9899C327.873 52.0007 325.119 52.0043 322.368 51.9899C320.038 51.9791 319.187 51.1209 319.179 48.7796C319.169 43.8134 319.179 38.8471 319.179 33.8809C319.179 33.529 319.179 33.1806 319.179 32.7677H310.263V33.8198C310.263 38.6676 310.263 43.5117 310.263 48.3595C310.263 48.8083 310.263 49.2608 310.216 49.7025C310.076 51.0168 309.265 51.9073 307.943 51.9324C304.593 51.9935 301.243 51.9899 297.892 51.9324C296.65 51.9109 295.925 51.1748 295.68 49.9574C295.594 49.5193 295.548 49.0669 295.548 48.6216C295.54 36.4448 295.54 24.268 295.548 12.0912C295.548 11.7033 295.573 11.3119 295.637 10.9313C295.874 9.53442 296.614 8.74442 298.036 8.7121C301.297 8.64387 304.557 8.63669 307.818 8.7121C309.387 8.7516 310.216 9.72833 310.234 11.3802C310.277 15.2081 310.281 19.0396 310.245 22.8675C310.238 23.6898 310.461 23.9376 311.29 23.9197C313.592 23.8658 315.897 23.9017 318.199 23.8981C318.49 23.8981 318.781 23.8658 319.179 23.8442L319.176 23.8514Z"
                                        fill="white"/>
                                    <path
                                        d="M233.346 46.7894C233.346 47.5565 233.364 48.3021 233.346 49.0442C233.285 51.0588 232.422 51.9586 230.425 51.9765C227.292 52.0088 224.155 52.0052 221.018 51.9765C218.972 51.9586 218.079 51.0588 218.072 48.9904C218.05 44.2729 218.061 39.5554 218.061 34.8378C218.061 27.4031 218.061 19.9683 218.061 12.5336C218.061 12.1142 218.057 11.6948 218.09 11.2789C218.208 9.77333 219.022 8.78394 220.509 8.79111C226.026 8.81621 231.565 8.31076 237.053 9.12091C244.721 10.2537 250.772 16.147 252.356 23.7825C253.453 29.0592 252.288 33.8449 249.381 38.2756C249.044 38.7918 248.994 39.1575 249.313 39.7059C250.772 42.2403 252.191 44.7963 253.607 47.3558C255.213 50.263 254.227 51.9622 250.915 51.9765C247.632 51.9944 244.348 51.9622 241.061 51.9908C239.634 52.0016 238.612 51.4245 237.913 50.1841C237.311 49.1195 236.605 48.1121 236.028 47.0367C235.684 46.3951 235.307 46.1656 234.615 46.4345C234.232 46.5851 233.82 46.6603 233.35 46.7858L233.346 46.7894ZM232.866 22.4992V34.612C235.017 34.4794 236.691 33.6155 237.748 31.8195C239.039 29.6292 238.949 27.3422 237.695 25.1734C236.662 23.3846 234.988 22.578 232.866 22.4992Z"
                                        fill="white"/>
                                    <path
                                        d="M139.485 30.3449C139.485 24.3603 139.485 18.3758 139.485 12.3912C139.485 11.9422 139.485 11.4896 139.539 11.0477C139.712 9.60727 140.477 8.85651 141.921 8.69486C142.305 8.65175 142.697 8.65894 143.085 8.65894C150.804 8.65894 158.528 8.65894 166.247 8.65894C166.664 8.65894 167.091 8.64816 167.501 8.70923C168.902 8.91398 169.732 9.75455 169.775 11.1735C169.832 13.2354 169.839 15.3045 169.775 17.3664C169.728 18.9325 168.787 19.8198 167.156 19.8378C163.208 19.8809 159.257 19.8845 155.305 19.8485C154.465 19.8414 154.098 20.0282 154.195 20.9226C154.267 21.6015 154.26 22.302 154.195 22.9845C154.124 23.764 154.45 23.9257 155.169 23.9185C158.88 23.8861 162.59 23.9005 166.301 23.9041C169.013 23.9041 169.803 24.7088 169.811 27.4532C169.811 28.2614 169.825 29.0697 169.8 29.8779C169.75 31.6848 168.92 32.5828 167.102 32.6726C165.669 32.7444 164.232 32.7013 162.795 32.7049C160.223 32.7049 157.647 32.7265 155.076 32.6942C154.425 32.687 154.181 32.8486 154.195 33.5419C154.239 35.6649 154.239 37.7914 154.195 39.9144C154.181 40.6293 154.404 40.8268 155.111 40.8232C158.883 40.7909 162.651 40.8053 166.423 40.8089C168.981 40.8125 169.807 41.6423 169.811 44.1963C169.814 45.8415 169.829 47.4867 169.8 49.1319C169.767 51.0286 168.873 51.9769 166.984 51.9805C158.754 52.0057 150.524 52.0057 142.295 51.9805C140.355 51.9733 139.507 51.025 139.493 48.9308C139.468 45.0692 139.485 41.2112 139.482 37.3496C139.482 35.0147 139.482 32.6798 139.482 30.3485L139.485 30.3449Z"
                                        fill="white"/>
                                    <path
                                        d="M31.3613 50.7943C26.0659 50.7427 21.2178 49.3569 17.1404 45.8494C13.1078 42.3797 11.0055 37.8681 10.2451 32.6722C8.89971 23.4839 13.1663 14.636 21.2556 10.2207C27.7587 6.67189 34.4373 6.55153 41.1331 9.77019C43.146 10.7365 43.5176 11.8953 42.5198 13.8795C41.3878 16.1318 40.2351 18.3705 39.0583 20.5988C38.174 22.2769 37.1865 22.6311 35.4489 21.847C33.0507 20.7604 30.6662 20.4784 28.268 21.792C25.3123 23.4117 23.7433 26.8194 24.225 30.5092C24.6448 33.7107 27.0086 36.4926 29.9918 37.1941C31.8911 37.6411 33.7457 37.3832 35.5453 36.6473C38.267 35.5401 39.1203 35.9424 40.063 38.7553C40.8166 41.0077 41.5873 43.2531 42.2927 45.5227C42.771 47.0667 42.3065 48.0536 40.8476 48.7448C37.8437 50.1616 34.6748 50.8287 31.3544 50.7909L31.3613 50.7943Z"
                                        fill="white"/>
                                    <mask id="path-6-inside-1_133_169" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M69.0188 50.7943C80.9871 50.7943 90.6894 41.092 90.6894 29.1237C90.6894 17.1554 80.9871 7.45312 69.0188 7.45312C57.0505 7.45312 47.3482 17.1554 47.3482 29.1237C47.3482 41.092 57.0505 50.7943 69.0188 50.7943ZM69.0177 44.7753C77.6615 44.7753 84.6687 37.7681 84.6687 29.1243C84.6687 20.4806 77.6615 13.4734 69.0177 13.4734C60.374 13.4734 53.3668 20.4806 53.3668 29.1243C53.3668 37.7681 60.374 44.7753 69.0177 44.7753Z"/>
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M69.0188 50.7943C80.9871 50.7943 90.6894 41.092 90.6894 29.1237C90.6894 17.1554 80.9871 7.45312 69.0188 7.45312C57.0505 7.45312 47.3482 17.1554 47.3482 29.1237C47.3482 41.092 57.0505 50.7943 69.0188 50.7943ZM69.0177 44.7753C77.6615 44.7753 84.6687 37.7681 84.6687 29.1243C84.6687 20.4806 77.6615 13.4734 69.0177 13.4734C60.374 13.4734 53.3668 20.4806 53.3668 29.1243C53.3668 37.7681 60.374 44.7753 69.0177 44.7753Z"
                                          fill="white"/>
                                    <path
                                        d="M58.6894 29.1237C58.6894 23.4189 63.314 18.7943 69.0188 18.7943V82.7943C98.6602 82.7943 122.689 58.7652 122.689 29.1237H58.6894ZM69.0188 39.4531C63.314 39.4531 58.6894 34.8285 58.6894 29.1237H122.689C122.689 -0.517735 98.6602 -24.5469 69.0188 -24.5469V39.4531ZM79.3482 29.1237C79.3482 34.8285 74.7236 39.4531 69.0188 39.4531V-24.5469C39.3773 -24.5469 15.3482 -0.517735 15.3482 29.1237H79.3482ZM69.0188 18.7943C74.7236 18.7943 79.3482 23.4189 79.3482 29.1237H15.3482C15.3482 58.7652 39.3773 82.7943 69.0188 82.7943V18.7943ZM52.6687 29.1243C52.6687 20.095 59.9884 12.7753 69.0177 12.7753V76.7753C95.3347 76.7753 116.669 55.4412 116.669 29.1243H52.6687ZM69.0177 45.4734C59.9884 45.4734 52.6687 38.1537 52.6687 29.1243H116.669C116.669 2.80744 95.3347 -18.5266 69.0177 -18.5266V45.4734ZM85.3668 29.1243C85.3668 38.1537 78.0471 45.4734 69.0177 45.4734V-18.5266C42.7008 -18.5266 21.3668 2.80744 21.3668 29.1243H85.3668ZM69.0177 12.7753C78.0471 12.7753 85.3668 20.095 85.3668 29.1243H21.3668C21.3668 55.4412 42.7008 76.7753 69.0177 76.7753V12.7753Z"
                                        fill="white" mask="url(#path-6-inside-1_133_169)"/>
                                    <path
                                        d="M64.8937 13.4688C67.1734 13.6029 72.2151 14.7121 73.5024 15.034C75.1117 15.4363 78.0921 16.612 78.4945 19.8304C78.8968 23.0489 79.2991 25.4627 80.506 27.0719C81.7129 28.6812 82.5175 31.8996 75.6783 30.6927C72.5415 29.9085 65.2011 28.7421 58.8714 34.2703C58.5395 34.5601 58.1728 34.8163 57.8648 35.1315C57.1839 35.8284 57.2406 36.6665 57.5746 38.3365C57.8964 39.9457 57.4405 40.0798 57.1723 39.9457"
                                        stroke="white" stroke-width="0.6"/>
                                    <path
                                        d="M53.3712 21.2967C54.9804 20.6262 61.2768 18.3027 63.2078 17.0153C65.6217 15.4061 71.254 15.0038 73.2655 18.6246C75.277 22.2453 75.6793 26.6707 72.8632 27.4753C70.8516 27.8776 67.6332 24.2569 59.9894 28.6822C56.771 30.6938 55.1617 32.7053 55.564 34.3145C55.8859 35.6019 55.6982 36.9965 55.564 37.5329"
                                        stroke="white" stroke-width="0.6"/>
                                    <path
                                        d="M84.1286 22.2438C83.324 22.512 81.7952 23.5312 82.1171 25.4622C82.5194 27.8761 85.7378 32.7037 80.9102 34.7153C78.094 35.5199 78.4963 33.106 71.6571 33.5083C66.025 33.5083 62.0018 33.9106 61.1972 38.336C60.7949 40.7498 60.7949 41.9568 59.9903 42.3591M64.4156 44.7729C63.2087 43.0296 61.7604 39.1406 65.6226 37.5314C68.0364 36.5256 71.2548 36.3245 73.2664 36.3245C76.4848 36.3245 77.2894 38.336 79.7032 38.336C81.6343 38.336 82.6535 38.336 82.9217 38.336M56.7719 23.4507C58.2343 21.9883 61.7566 19.197 65.0441 18.6998C65.6908 18.602 66.3537 18.6842 66.9611 18.927C67.9809 19.3347 68.6121 19.83 69.2434 19.83C70.048 19.83 72.8641 22.2438 70.048 23.853C67.2319 25.4622 66.4273 24.2553 63.6111 25.4622C60.795 26.6692 58.7835 28.2784 57.1742 27.8761C55.565 27.4738 54.7604 25.8645 56.7719 23.4507ZM66.8295 21.4392C66.6031 21.2128 65.1688 21.2385 63.8712 21.3204C62.8999 21.3817 61.8113 21.5787 61.354 22.4379C60.913 23.2662 61.1725 24.1295 62.0018 23.853C63.2087 23.4507 63.2087 23.853 64.8179 23.853C66.4272 23.853 67.2318 21.8415 66.8295 21.4392Z"
                                        stroke="white" stroke-width="0.6"/>
                                    <path
                                        d="M74.8749 41.9589C73.2657 42.6026 70.1813 43.3 68.8403 43.5682C66.0242 44.2066 65.6219 41.9589 66.4265 41.1546C67.2311 40.3502 67.2311 40.752 68.438 39.5451C69.6449 38.3382 70.8519 38.3382 74.8749 39.1428C80.1049 39.5451 76.8864 41.1543 74.8749 41.9589Z"
                                        stroke="white" stroke-width="0.6"/>
                                    <path
                                        d="M206.488 51.9953C205.258 51.9953 204.028 51.9813 202.798 51.9988C201.375 52.0199 200.37 51.4084 199.874 50.0659C199.66 49.486 199.35 49.2786 198.718 49.2857C195.498 49.3173 192.276 49.3138 189.053 49.2857C188.494 49.2822 188.202 49.4544 188.03 49.985C187.57 51.3944 186.554 52.0094 185.089 51.9988C182.716 51.9813 180.344 51.9988 177.972 51.9848C177.48 51.9848 176.967 51.9532 176.496 51.8196C175.1 51.426 174.464 50.2521 174.97 48.7796C175.494 47.2613 176.165 45.7923 176.805 44.3197C181.599 33.2596 186.399 22.203 191.207 11.1465C191.45 10.5877 191.741 10.0254 192.125 9.55793C193.112 8.35246 194.799 8.35949 195.787 9.57199C196.149 10.0183 196.433 10.549 196.665 11.0832C201.986 23.3171 207.297 35.5581 212.603 47.799C212.73 48.0943 212.842 48.3965 212.93 48.7058C213.447 50.5087 212.572 51.8337 210.699 51.9426C209.3 52.0234 207.891 51.9602 206.485 51.9602V51.9953H206.488ZM191.123 42.6117H196.795C195.843 40.3413 194.936 38.1904 193.952 35.8428C192.957 38.2256 192.061 40.3729 191.126 42.6117H191.123Z"
                                        fill="white"/>
                                    <path
                                        d="M267.602 19.8661C266.068 19.8661 264.643 19.8661 263.213 19.8661C259.992 19.8661 259.353 19.2197 259.353 15.9661C259.353 14.5297 259.324 13.0932 259.364 11.6604C259.421 9.55598 260.319 8.67257 262.434 8.66898C270.78 8.65461 279.126 8.65461 287.468 8.66898C289.608 8.66898 290.527 9.60626 290.553 11.7394C290.574 13.4128 290.571 15.0899 290.553 16.7634C290.531 18.9719 289.655 19.8338 287.421 19.8625C286.046 19.8804 284.667 19.9128 283.295 19.8481C282.491 19.8086 282.297 20.0744 282.3 20.8572C282.329 29.44 282.318 38.0263 282.318 46.6091C282.318 47.4782 282.336 48.3436 282.304 49.2127C282.236 51.0154 281.359 51.9419 279.575 51.9671C276.493 52.0101 273.412 52.0101 270.335 51.9671C268.543 51.9419 267.656 51.0334 267.62 49.2127C267.573 46.7312 267.598 44.2462 267.598 41.7647C267.598 34.8554 267.598 27.9461 267.598 21.0368C267.598 20.6848 267.598 20.3365 267.598 19.8661H267.602Z"
                                        fill="white"/>
                                </svg>
                            </div>

                            <p className='text-[20px] mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                            <button onClick={handleToggleEnterYourDetails}
                                    className='bg-[#3F99FF] py-[14px] block w-full text-center shadow rounded-[4px]'>Reserve
                                Land Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className='px-[20px] md:px-[58px]'>
                    <div className="mb-[97px]">
                        <h4 className='text-white text-[24px] md:text-[36px] font-bold mb-[24px]'>Ut enim ad minim</h4>
                        <p className='text-[#ffffff]/80 mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.</p>
                        <p className='text-[#ffffff]/80 mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. </p>
                    </div>

                    <div className='mb-[124px]'>
                        <h3 className='text-[32px] md:text-[52px] font-bold text-white mb-[32px]'>Land Overview</h3>
                        <div className="sm:grid sm:grid-cols-2 gap-[100px] md-[60px] md:mb-[140px]">
                            <img className='mb-[20px]' src={img1} alt="land overview"/>

                            <div>
                                <h4 className='text-white text-[24px] md:text-[36px] font-bold mb-[24px]'>Ut enim ad
                                    minim</h4>
                                <p className='text-[#ffffff]/80 mb-[20px]'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p className='text-[#ffffff]/80 mb-[24px]'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. </p>
                                <button onClick={handleToggleEnterYourDetails}
                                        className='bg-[#3F99FF] py-[14px] px-[20px] text-white shadow rounded-[4px] mb-[50px]'>Reserve
                                    Land Now
                                </button>
                            </div>
                        </div>

                        <h3 className='text-[32px] lg:text-[52px] leading-[1.2] font-bold text-white mb-[32px]'>We
                            connect Buyers and Sellers in <span className='text-gradient'>Metaverse</span></h3>
                        <div className="sm:grid sm:grid-cols-1 lg:grid-cols-2 mb-[140px]">
                            <img className='hidden lg:block' src={img2} alt="land overview"/>

                            <div>
                                <p className='text-[16px] lg:text-[20px] text-white/80 mb-[24px]'>We are growing at a
                                    exercitation ullamco laboris nisi ut sed do eiusmod tempor incididunt ut labore </p>
                                <div className="grid grid-cols-2 2xl:grid-cols-3 gap-[10px] md:gap-[20px] mb-[24px]">
                                    <div className="bg-[#363738] py-[28px] pl-[20px] md:min-w-[239px] rounded-[8px]">
                                        <div className="flex items-center gap-[12px]">
                                            <svg className='w-[24px] h-[24px] md:w-auto md:h-auto' width="36"
                                                 height="36" viewBox="0 0 36 36" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18 16.5C19.9891 16.5 21.8968 17.2902 23.3033 18.6967C24.7098 20.1032 25.5 22.0109 25.5 24V33H10.5V24C10.5 22.0109 11.2902 20.1032 12.6967 18.6967C14.1032 17.2902 16.0109 16.5 18 16.5ZM7.932 21.009C7.69329 21.8142 7.55227 22.6451 7.512 23.484L7.5 24V33H3V26.25C2.9997 24.9564 3.47704 23.7082 4.34045 22.7448C5.20386 21.7815 6.39255 21.1708 7.6785 21.03L7.9335 21.009H7.932ZM28.068 21.009C29.4029 21.0904 30.6564 21.6779 31.5729 22.6519C32.4894 23.6258 32.9998 24.9127 33 26.25V33H28.5V24C28.5 22.9605 28.35 21.957 28.068 21.009ZM8.25 12C9.24456 12 10.1984 12.3951 10.9017 13.0984C11.6049 13.8016 12 14.7554 12 15.75C12 16.7446 11.6049 17.6984 10.9017 18.4017C10.1984 19.1049 9.24456 19.5 8.25 19.5C7.25544 19.5 6.30161 19.1049 5.59835 18.4017C4.89509 17.6984 4.5 16.7446 4.5 15.75C4.5 14.7554 4.89509 13.8016 5.59835 13.0984C6.30161 12.3951 7.25544 12 8.25 12ZM27.75 12C28.7446 12 29.6984 12.3951 30.4017 13.0984C31.1049 13.8016 31.5 14.7554 31.5 15.75C31.5 16.7446 31.1049 17.6984 30.4017 18.4017C29.6984 19.1049 28.7446 19.5 27.75 19.5C26.7554 19.5 25.8016 19.1049 25.0984 18.4017C24.3951 17.6984 24 16.7446 24 15.75C24 14.7554 24.3951 13.8016 25.0984 13.0984C25.8016 12.3951 26.7554 12 27.75 12ZM18 3C19.5913 3 21.1174 3.63214 22.2426 4.75736C23.3679 5.88258 24 7.4087 24 9C24 10.5913 23.3679 12.1174 22.2426 13.2426C21.1174 14.3679 19.5913 15 18 15C16.4087 15 14.8826 14.3679 13.7574 13.2426C12.6321 12.1174 12 10.5913 12 9C12 7.4087 12.6321 5.88258 13.7574 4.75736C14.8826 3.63214 16.4087 3 18 3Z"
                                                    fill="url(#paint0_linear_133_257)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_133_257" x1="3" y1="18" x2="33"
                                                                    y2="18" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#D299FF"/>
                                                        <stop offset="1" stopColor="#58C3FF"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div>
                                                <span
                                                    className='block text-white text-[24px] lg:text-[36px] font-[900]'>90 B+</span>
                                                <span className='block text-[12px] md:text-[20px] text-white/80'>Total Users</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#363738] py-[28px] pl-[20px] md:min-w-[239px] rounded-[8px]">
                                        <div className="flex items-center gap-[12px]">
                                            <svg className='w-[24px] h-[24px] md:w-auto md:h-auto' width="36"
                                                 height="36" viewBox="0 0 36 36" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.085 24.8087C9.00218 23.3399 7.4411 21.2461 6.62793 18.8307C5.81476 16.4153 5.79173 13.8037 6.56218 11.3744C7.33263 8.94498 8.85653 6.82399 10.9131 5.31869C12.9697 3.81339 15.4521 3.00195 18.0007 3.00195C20.5493 3.00195 23.0318 3.81339 25.0884 5.31869C27.1449 6.82399 28.6688 8.94498 29.4393 11.3744C30.2097 13.8037 30.1867 16.4153 29.3735 18.8307C28.5604 21.2461 26.9993 23.3399 24.9165 24.8087L28.041 31.9487C28.0912 32.063 28.112 32.188 28.1017 32.3124C28.0913 32.4368 28.0501 32.5566 27.9817 32.6611C27.9133 32.7655 27.82 32.8512 27.7101 32.9104C27.6002 32.9696 27.4773 33.0005 27.3525 33.0002H8.64748C8.52286 33.0004 8.40015 32.9695 8.29045 32.9104C8.18075 32.8512 8.08752 32.7657 8.01918 32.6615C7.95084 32.5572 7.90955 32.4376 7.89904 32.3135C7.88853 32.1893 7.90913 32.0644 7.95898 31.9502L11.0835 24.8087H11.085ZM12.1785 16.4552C12.5048 17.7519 13.2547 18.9026 14.3093 19.7247C15.3639 20.5468 16.6628 20.9932 18 20.9932C19.3371 20.9932 20.636 20.5468 21.6906 19.7247C22.7452 18.9026 23.4952 17.7519 23.8215 16.4552L20.9115 15.7277C20.75 16.3778 20.3756 16.9551 19.848 17.3677C19.3203 17.7802 18.6698 18.0044 18 18.0044C17.3302 18.0044 16.6796 17.7802 16.152 17.3677C15.6244 16.9551 15.25 16.3778 15.0885 15.7277L12.1785 16.4552Z"
                                                    fill="url(#paint0_linear_133_271)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_133_271" x1="6.00073" y1="18.0011"
                                                                    x2="30.0007" y2="18.0011"
                                                                    gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#D299FF"/>
                                                        <stop offset="1" stopColor="#58C3FF"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div>
                                                <span
                                                    className='block text-white text-[24px] lg:text-[36px] font-[900]'>82 M+</span>
                                                <span className='block text-[12px] md:text-[20px] text-white/80'>Monthly Users</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#363738] py-[28px] pl-[20px] md:min-w-[239px] rounded-[8px]">
                                        <div className="flex items-center gap-[12px]">
                                            <svg className='w-[24px] h-[24px] md:w-auto md:h-auto' width="28"
                                                 height="31" viewBox="0 0 28 31" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1 25.0004H9.25V26.8754C9.25 27.9694 8.8154 29.0186 8.04182 29.7922C7.26823 30.5658 6.21902 31.0004 5.125 31.0004C4.03098 31.0004 2.98177 30.5658 2.20818 29.7922C1.4346 29.0186 1 27.9694 1 26.8754V25.0004ZM7 7.18036C10 7.18036 11.5 11.5004 11.5 14.5004C11.5 16.0004 10.75 17.5004 10 19.7504L9.25 22.0004H1C1 20.5004 0.25 18.2504 0.25 14.5004C0.25 10.7504 3.247 7.18036 7 7.18036ZM25.081 19.1474L24.7555 20.9939C24.5655 22.0714 23.9553 23.0293 23.0591 23.6569C22.1628 24.2845 21.054 24.5303 19.9765 24.3404C18.899 24.1504 17.9411 23.5402 17.3135 22.6439C16.6859 21.7477 16.44 20.6389 16.63 19.5614L16.957 17.7164L25.081 19.1474ZM22.267 0.557862C25.963 1.20886 28.294 5.24386 27.643 8.93686C26.992 12.6314 25.8625 14.7164 25.603 16.1939L17.4775 14.7614L17.1295 12.4154C16.7815 10.0694 16.3045 8.46136 16.564 6.98536C17.0845 4.03036 19.312 0.0373622 22.267 0.557862Z"
                                                    fill="url(#paint0_linear_133_266)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_133_266" x1="0.25" y1="15.756"
                                                                    x2="27.7518" y2="15.756"
                                                                    gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#D299FF"/>
                                                        <stop offset="1" stopColor="#58C3FF"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div>
                                                <span
                                                    className='block text-white text-[24px] lg:text-[36px] font-[900]'>16 M+</span>
                                                <span className='block text-[12px] md:text-[20px] text-white/80'>Daily Footfalls</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#363738] py-[28px] pl-[20px] md:min-w-[239px] rounded-[8px]">
                                        <div className="flex items-center gap-[12px]">
                                            <svg className='w-[24px] h-[24px] md:w-auto md:h-auto' width="30"
                                                 height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.96925e-07 4.5L10.5 0L19.5 4.5L28.9545 0.4485C29.0686 0.399576 29.1931 0.379754 29.3168 0.390814C29.4405 0.401874 29.5595 0.443469 29.6631 0.511867C29.7668 0.580266 29.8518 0.673326 29.9106 0.782697C29.9694 0.892068 30.0001 1.01433 30 1.1385V25.5L19.5 30L10.5 25.5L1.0455 29.5515C0.931371 29.6004 0.806879 29.6203 0.683199 29.6092C0.559518 29.5981 0.440519 29.5565 0.336881 29.4881C0.233243 29.4197 0.148209 29.3267 0.0894105 29.2173C0.0306123 29.1079 -0.000110184 28.9857 2.96925e-07 28.8615V4.5ZM19.5 26.646V7.764L19.4025 7.806L10.5 3.354V22.236L10.5975 22.194L19.5 26.646Z"
                                                    fill="url(#paint0_linear_133_280)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_133_280" x1="1.11759e-07" y1="15"
                                                                    x2="30" y2="15" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#D299FF"/>
                                                        <stop offset="1" stopColor="#58C3FF"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div>
                                                <span
                                                    className='block text-white text-[24px] lg:text-[36px] font-[900]'>295 <span
                                                    className='text-[20px] hidden md:block font-bold'>sq km</span></span>
                                                <span
                                                    className='block text-[12px] md:text-[20px] text-white/80'>Area</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#363738] py-[28px] pl-[20px] md:min-w-[239px] rounded-[8px]">
                                        <div className="flex items-center gap-[12px]">
                                            <svg className='w-[24px] h-[24px] md:w-auto md:h-auto' width="32"
                                                 height="32" viewBox="0 0 32 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.35 0.150391L29.1985 2.27289L31.3195 17.1229L17.5315 30.9109C17.2502 31.1921 16.8688 31.3501 16.471 31.3501C16.0733 31.3501 15.6918 31.1921 15.4105 30.9109L0.560518 16.0609C0.279311 15.7796 0.121338 15.3981 0.121338 15.0004C0.121338 14.6026 0.279311 14.2212 0.560518 13.9399L14.35 0.150391ZM18.592 12.8794C18.8706 13.1579 19.2014 13.3788 19.5654 13.5296C19.9294 13.6803 20.3196 13.7578 20.7135 13.7577C21.1075 13.7576 21.4976 13.68 21.8616 13.5291C22.2255 13.3783 22.5562 13.1573 22.8348 12.8786C23.1133 12.6 23.3342 12.2692 23.4849 11.9052C23.6356 11.5412 23.7132 11.1511 23.7131 10.7571C23.713 10.3631 23.6354 9.97303 23.4845 9.60907C23.3337 9.24511 23.1126 8.91442 22.834 8.63589C22.5554 8.35736 22.2246 8.13643 21.8606 7.98573C21.4966 7.83502 21.1065 7.75749 20.7125 7.75756C19.9168 7.7577 19.1538 8.07392 18.5913 8.63664C18.0287 9.19936 17.7128 9.9625 17.7129 10.7582C17.7131 11.5538 18.0293 12.3169 18.592 12.8794Z"
                                                    fill="url(#paint0_linear_133_288)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_133_288" x1="0.121338"
                                                                    y1="15.7502" x2="31.3195" y2="15.7502"
                                                                    gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#D299FF"/>
                                                        <stop offset="1" stopColor="#58C3FF"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div>
                                                <span
                                                    className='block text-white text-[24px] lg:text-[36px] font-[900]'>25+</span>
                                                <span
                                                    className='block text-[12px] md:text-[20px] text-white/80'>Brands</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#363738] py-[28px] pl-[20px] md:min-w-[239px] rounded-[8px]">
                                        <div className="flex items-center gap-[12px]">
                                            <svg className='w-[24px] h-[24px] md:w-auto md:h-auto' width="30"
                                                 height="28" viewBox="0 0 30 28" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M30 15.4985V26C30 26.3978 29.842 26.7794 29.5607 27.0607C29.2794 27.342 28.8978 27.5 28.5 27.5H16.5V15.4985H30ZM13.5 15.4985V27.5H1.5C1.10218 27.5 0.720644 27.342 0.43934 27.0607C0.158035 26.7794 0 26.3978 0 26V15.4985H13.5ZM13.5 0.5V12.4985H0V2C0 1.60218 0.158035 1.22064 0.43934 0.93934C0.720644 0.658035 1.10218 0.5 1.5 0.5H13.5ZM28.5 0.5C28.8978 0.5 29.2794 0.658035 29.5607 0.93934C29.842 1.22064 30 1.60218 30 2V12.4985H16.5V0.5H28.5Z"
                                                    fill="url(#paint0_linear_133_295)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_133_295" x1="1.11759e-07" y1="14"
                                                                    x2="30" y2="14" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#D299FF"/>
                                                        <stop offset="1" stopColor="#58C3FF"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div>
                                                <span
                                                    className='block text-white text-[24px] lg:text-[36px] font-[900]'>150k</span>
                                                <span className='block text-[12px] md:text-[20px] text-white/80'>Land Units</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleToggleEnterYourDetails}
                                        className='bg-[#3F99FF] py-[14px] px-[20px] text-white shadow rounded-[4px] mb-[50px]'>Reserve
                                    Land Now
                                </button>
                            </div>
                        </div>

                        <h3 className='text-[32px] lg:text-[52px] leading-[1.2] font-bold text-white mb-[32px]'>Popular <span
                            className='text-gradient'>Brands</span></h3>
                        <PopularBrands/>

                        <h3 className='text-[32px] lg:text-[52px] leading-[1.2] font-bold text-white mb-[32px]'>Featured <span
                            className='text-gradient'>Stores</span></h3>
                        <Stores/>
                    </div>
                </div>

                <div className='mb-[139px]'>
                    <div className='px-[20px] md:px-[58px]'>
                        <h5 className='text-white text-center text-[24px] md:text-[36px] font-[900] mb-[16px]'>{land.name}</h5>
                        <h5 className='text-white text-center text-[24px] md:text-[48px] font-[900] mb-[20px]'>{land.name} Land
                            of Commerce</h5>
                        <div className='flex justify-center mb-[30px]'>
                            <p className='text-white/80 text-[14px] max-w-[890px]'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="text-center">
                            <button onClick={handleToggleEnterYourDetails}
                                    className='bg-[#3F99FF] py-[14px] px-[20px] text-white shadow rounded-[4px] mb-[50px]'>Reserve
                                Land Now
                            </button>
                        </div>
                    </div>

                    <div className='relative'>
                        <img className='min-h-[730px]' src={_map} alt="Map"/>
                        <div
                            className='absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-[unset] md:translate-x-0  md:bottom-20 md:right-10'>
                            <div
                                className='border-sq-gradient max-w-[395px] rounded-[6px] text-white p-[20px] bg-[#161718]/80 backdrop-blur-sm mb-[8px]'>
                                <div className='grid grid-cols-2 gap-x-[50px] gap-y-[15px]'>
                                    <div>
                                        <div className='text-[32px] font-bold'>46878</div>
                                        <div className='text-[20px]'>Total Units Land</div>
                                    </div>
                                    <div className='flex justify-end items-center'>
                                        <svg width="69" height="70" viewBox="0 0 69 70" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M36.8093 65.2263L36.8317 60.5796L37.6952 60.4714C49.0771 59.0446 58.2142 49.8891 59.6124 38.5103L59.7187 37.6452L64.3593 37.6228L69 37.6004L69 35.3084L69 33.0165L64.3419 33.0165L59.684 33.0165L59.6295 32.6055C59.3534 30.521 58.9585 28.7522 58.4081 27.1346C56.737 22.2229 53.4773 17.8177 49.238 14.7418C48.4798 14.1917 46.2789 12.838 46.227 12.8899C46.2103 12.9067 46.7982 14.6033 47.5336 16.6604L48.8705 20.4004L49.5116 21.0727C53.4873 25.2417 55.5785 30.9753 55.1841 36.6256C54.9222 40.3783 53.808 43.7082 51.8039 46.7278C48.3692 51.9029 43.0577 55.1936 36.918 55.9503C35.6595 56.1054 33.0698 56.0836 31.8229 55.9073C29.9879 55.6478 28.4504 55.2441 26.862 54.6046C18.9737 51.4284 13.8173 43.8183 13.8173 35.3524C13.8173 30.0953 15.7336 25.2268 19.3684 21.25L20.1988 20.3416L21.5047 16.6778C22.2229 14.6628 22.7905 12.9939 22.7659 12.9693C22.7052 12.9086 21.7255 13.4591 20.7259 14.1155C15.5283 17.529 11.8051 22.6788 10.1433 28.7534C9.84679 29.8376 9.41301 32.1945 9.41301 32.722L9.41301 33.0165L4.7065 33.0165L-4.40615e-06 33.0165L-4.60666e-06 35.3092L-4.80716e-06 37.6019L4.66333 37.6019C7.22816 37.6019 9.32665 37.6321 9.32665 37.669C9.32665 38.5186 9.92823 41.4617 10.4049 42.9442C13.3971 52.25 21.232 58.9548 30.8028 60.4001C31.2688 60.4706 31.7764 60.5283 31.9308 60.5286L32.2115 60.5291L32.2115 65.2011L32.2115 69.873L34.4992 69.873L36.787 69.873L36.8093 65.2263ZM45.9424 32.8767C45.9424 32.7733 34.6109 0.97305 34.5471 0.897603C34.5174 0.862302 31.9225 8.04466 28.7806 16.8582C25.6388 25.6718 23.0823 32.8971 23.0995 32.9143C23.1229 32.9378 33.2976 26.6332 34.3314 25.9546C34.4911 25.8498 34.5997 25.8954 35.4541 26.4257C35.9742 26.7487 38.4207 28.2735 40.8905 29.8141C46.1015 33.0646 45.9424 32.9681 45.9424 32.8767Z"
                                                  fill="white"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className='text-[32px] font-bold'>8923 <span
                                            className='text-[20px] font-normal'>sq.m</span></div>
                                        <div className='text-[20px]'>Land Area</div>
                                    </div>
                                    <div>
                                        <div className='text-[32px] font-bold'>24523 <span
                                            className='text-[20px] font-normal'>sq.m</span></div>
                                        <div className='text-[20px]'>Water Area</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='border-sq-gradient max-w-[395px] rounded-[6px] text-white p-[20px] bg-[#161718]/80 backdrop-blur-sm'>
                                <div className='flex items-center justify-center gap-x-[4.5px]'>
                                    <svg width="87" height="19" viewBox="0 0 87 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M86.5 9.32121H1V0.824219V18.318" stroke="white" stroke-width="2"/>
                                    </svg>
                                    <span className='text-[24px] font-[900]'>13,650 sq. Km</span>
                                    <svg width="87" height="19" viewBox="0 0 87 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 9.32121H86V0.824219V18.318" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-[58px] pb-[67px]'>
                    <div className='flex justify-center flex-wrap mb-[32px]'>
                        <img src={_sqTop} alt="sq-top"/>
                        <div className="block w-full"></div>
                        <span className='text-[40px] text-white font-[900]'>13,650 sq. Km</span>
                        <div className="block w-full"></div>
                        <img src={_sqBottom} alt="sq-bottom"/>
                    </div>

                    <h5 className='text-white text-center text-[48px] font-[900] mb-[20px]'>{land.name} Land of
                        Commerce</h5>
                    <div className='flex justify-center mb-[30px]'>
                        <p className='text-white/80 text-[14px] max-w-[890px]'>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.</p>
                    </div>

                    <div className="text-center">
                        <button onClick={handleToggleEnterYourDetails}
                                className='bg-[#3F99FF] py-[14px] px-[20px] text-white shadow rounded-[4px] mb-[50px]'>Reserve
                            Land Now
                        </button>
                        <div className="block"></div>
                        <BackButton className='bg-[#363738]' back={back}/>
                    </div>
                </div>
            </div>
            {/* End Section */}
        </Fragment>
    )
}

export default Land