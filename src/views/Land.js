import {Fragment, useEffect, useRef, useState} from 'react'
import {getSelectedAnnot, resetSelectedAnnot} from "app/AnnotsSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useOutletContext} from "react-router-dom"

const BackButton = ({back, className}) => {
    return (
        <button className={`text-white text-[16px] relative py-[11px] pl-[50px] px-[33px] rounded-[50px] ${className}`}
                onClick={back}>
            <div className='flex items-center'>
                <svg className='absolute left-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z" fill="#3F99FF"/>
                </svg>

                Back to Comearth
            </div>
        </button>
    )
}

const Land = (props) => {
    const [animate, setAnimate] = useState(false)
    const navigate = useNavigate()
    const [reset] = useOutletContext()
    const land = useSelector(getSelectedAnnot)
    const dispatch = useDispatch()
    const sectionRef = useRef()

    useEffect(() => {
        setAnimate(true)

        document.addEventListener('keydown', evt => {
            if (evt.keyCode === 27) back()
        })
    }, [])

    function back () {
        const immediately = window.scrollY > window.outerHeight

        if (!immediately) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }

        setAnimate(false)
        reset()

        setTimeout (() => {
            navigate('/')
            dispatch(resetSelectedAnnot())
        }, immediately ? 0 : 400)
    }

    function scrollToStart () {
        sectionRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <Fragment>
            {/* Hero */}
            <div className={`absolute flex items-end top-0 w-full justify-center h-[48vh] transition-[opacity] duration-[600ms] ${animate ? 'opacity-1' : 'opacity-0'}`}>
                <div className='w-full'>
                    <div className='max-w-[100rem] flex flex-wrap basis-full items-center w-full mx-auto py-5'>
                        <BackButton className='bg-[#262728]' back={back}/>
                    </div>

                    <div className='text-center text-white mb-5'>
                        <h1 className='text-[72px] font-bold mb-[24px]'>{land.name} Land of <span className='text-gradient'>Commerce</span></h1>
                        <div className='flex justify-center items-center mb-[24px]'>
                            <p className='max-w-[80vh] opacity-80 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                        <button className='bg-[#3F99FF] text-[16px] py-[14px] px-[20px] rounded'>Reserve Land Now</button>
                    </div>
                </div>
            </div>
            {/* End Hero */}

            {/* Section */}
            <div ref={sectionRef} className={`relative rounded-t-[16px] z-[40] bg-[#262728] min-h-[100vh] mb-[203px] 3xl:max-w-[120rem] max-w-[100rem] basis-full w-full mx-auto transition-[margin,opacity] duration-[600ms] ${animate ? 'mt-[-25vh] opacity-1' : 'mt-[-10vh] opacity-0'}`}>
                <button className='absolute top-[-43px] left-[50%] -translate-x-1/2 translate-y-[-100%]'
                        onClick={scrollToStart}
                >
                    <svg className='animate-[bounce_2.5s_ease-in-out_infinite]' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="30" fill="black" fill-opacity="0.1" stroke="white" stroke-width="3"/>
                        <path d="M20 29L32 41L44 29" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                <div className='rounded-t-[16px] bg-[#2E2F30] pt-[23px] px-[15px] pb-[13px]'>
                    <svg width="36" height="9" viewBox="0 0 36 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="4.74658" cy="4.74988" rx="4.12988" ry="4.13269" fill="white"/>
                        <ellipse opacity="0.6" cx="18.1667" cy="4.74988" rx="4.12988" ry="4.13269" fill="white"/>
                        <ellipse opacity="0.3" cx="31.5907" cy="4.74988" rx="4.12988" ry="4.13269" fill="white"/>
                    </svg>
                </div>

                <div className='bg-[url("assets/images/background/hero-1.png")] lg:px-[128px] flex items-center bg-cover xl:h-[842px]'>
                    <div className='text-center text-white xl:max-w-[562px] backdrop-blur-sm bg-gradient-to-b from-[#746897]/60 to-[#688697]/60'>
                        <div className='bg-[#1B2023]/50 text-[20px] py-[17px]'>
                            Alpha Launch Coming Soon
                        </div>

                        <div className='px-[28px] pb-[79px] pt-[53px] bg-gradient-to-b from-[#D299FF]/40 to-[#58C3FF]/40'>
                            <div className="flex justify-center mb-[34px]">
                                <svg width="343" height="60" viewBox="0 0 343 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M114.627 27.4361C117.225 24.3954 119.735 21.4566 122.241 18.5213C124.561 15.8039 126.875 13.0796 129.212 10.3798C129.627 9.89821 130.109 9.4377 130.643 9.10023C132.084 8.19679 133.627 8.73464 134.179 10.3447C134.401 10.995 134.478 11.7191 134.482 12.4117C134.499 24.5079 134.503 36.6041 134.471 48.7003C134.471 49.4842 134.26 50.3349 133.912 51.0344C133.536 51.7902 132.682 51.973 131.856 51.973C128.84 51.98 125.823 52.0082 122.807 51.9695C120.983 51.9449 120.122 51.0309 120.097 49.1291C120.062 46.3766 120.086 43.6241 120.083 40.8681C120.083 40.5588 120.083 40.2494 119.872 39.8663C119.552 40.2635 119.232 40.6607 118.909 41.0544C118.076 42.0739 117.281 43.132 116.392 44.0987C115.176 45.4205 113.91 45.4205 112.701 44.0811C111.681 42.9527 110.764 41.7329 109.801 40.5553C109.604 40.3127 109.403 40.0737 109.073 39.6729C109.048 40.151 109.02 40.4252 109.02 40.7029C109.02 43.4554 109.027 46.2079 109.013 48.9639C109.003 51.0907 108.145 51.9695 106.032 51.9836C103.22 52.0047 100.408 52.0047 97.5955 51.9836C95.4898 51.966 94.6145 51.0872 94.611 48.9604C94.6005 36.6884 94.5969 24.4165 94.6286 12.1445C94.6286 11.3852 94.836 10.5591 95.1735 9.88063C95.7746 8.66785 97.1702 8.30928 98.3302 9.02289C98.9419 9.39903 99.4938 9.91227 99.9648 10.4571C104.623 15.8356 109.259 21.2351 113.903 26.6276C114.11 26.8666 114.321 27.1022 114.617 27.4361H114.627Z" fill="white"/>
                                    <path d="M319.176 23.8514V22.8352C319.176 19.2155 319.172 15.5959 319.176 11.9762C319.179 9.54519 320.048 8.67978 322.476 8.66901C325.169 8.66183 327.862 8.66183 330.555 8.66901C332.99 8.67619 333.891 9.54879 333.891 11.9511C333.899 24.2177 333.899 36.4843 333.891 48.7509C333.891 51.1317 333.019 51.9827 330.624 51.9899C327.873 52.0007 325.119 52.0043 322.368 51.9899C320.038 51.9791 319.187 51.1209 319.179 48.7796C319.169 43.8134 319.179 38.8471 319.179 33.8809C319.179 33.529 319.179 33.1806 319.179 32.7677H310.263V33.8198C310.263 38.6676 310.263 43.5117 310.263 48.3595C310.263 48.8083 310.263 49.2608 310.216 49.7025C310.076 51.0168 309.265 51.9073 307.943 51.9324C304.593 51.9935 301.243 51.9899 297.892 51.9324C296.65 51.9109 295.925 51.1748 295.68 49.9574C295.594 49.5193 295.548 49.0669 295.548 48.6216C295.54 36.4448 295.54 24.268 295.548 12.0912C295.548 11.7033 295.573 11.3119 295.637 10.9313C295.874 9.53442 296.614 8.74442 298.036 8.7121C301.297 8.64387 304.557 8.63669 307.818 8.7121C309.387 8.7516 310.216 9.72833 310.234 11.3802C310.277 15.2081 310.281 19.0396 310.245 22.8675C310.238 23.6898 310.461 23.9376 311.29 23.9197C313.592 23.8658 315.897 23.9017 318.199 23.8981C318.49 23.8981 318.781 23.8658 319.179 23.8442L319.176 23.8514Z" fill="white"/>
                                    <path d="M233.346 46.7894C233.346 47.5565 233.364 48.3021 233.346 49.0442C233.285 51.0588 232.422 51.9586 230.425 51.9765C227.292 52.0088 224.155 52.0052 221.018 51.9765C218.972 51.9586 218.079 51.0588 218.072 48.9904C218.05 44.2729 218.061 39.5554 218.061 34.8378C218.061 27.4031 218.061 19.9683 218.061 12.5336C218.061 12.1142 218.057 11.6948 218.09 11.2789C218.208 9.77333 219.022 8.78394 220.509 8.79111C226.026 8.81621 231.565 8.31076 237.053 9.12091C244.721 10.2537 250.772 16.147 252.356 23.7825C253.453 29.0592 252.288 33.8449 249.381 38.2756C249.044 38.7918 248.994 39.1575 249.313 39.7059C250.772 42.2403 252.191 44.7963 253.607 47.3558C255.213 50.263 254.227 51.9622 250.915 51.9765C247.632 51.9944 244.348 51.9622 241.061 51.9908C239.634 52.0016 238.612 51.4245 237.913 50.1841C237.311 49.1195 236.605 48.1121 236.028 47.0367C235.684 46.3951 235.307 46.1656 234.615 46.4345C234.232 46.5851 233.82 46.6603 233.35 46.7858L233.346 46.7894ZM232.866 22.4992V34.612C235.017 34.4794 236.691 33.6155 237.748 31.8195C239.039 29.6292 238.949 27.3422 237.695 25.1734C236.662 23.3846 234.988 22.578 232.866 22.4992Z" fill="white"/>
                                    <path d="M139.485 30.3449C139.485 24.3603 139.485 18.3758 139.485 12.3912C139.485 11.9422 139.485 11.4896 139.539 11.0477C139.712 9.60727 140.477 8.85651 141.921 8.69486C142.305 8.65175 142.697 8.65894 143.085 8.65894C150.804 8.65894 158.528 8.65894 166.247 8.65894C166.664 8.65894 167.091 8.64816 167.501 8.70923C168.902 8.91398 169.732 9.75455 169.775 11.1735C169.832 13.2354 169.839 15.3045 169.775 17.3664C169.728 18.9325 168.787 19.8198 167.156 19.8378C163.208 19.8809 159.257 19.8845 155.305 19.8485C154.465 19.8414 154.098 20.0282 154.195 20.9226C154.267 21.6015 154.26 22.302 154.195 22.9845C154.124 23.764 154.45 23.9257 155.169 23.9185C158.88 23.8861 162.59 23.9005 166.301 23.9041C169.013 23.9041 169.803 24.7088 169.811 27.4532C169.811 28.2614 169.825 29.0697 169.8 29.8779C169.75 31.6848 168.92 32.5828 167.102 32.6726C165.669 32.7444 164.232 32.7013 162.795 32.7049C160.223 32.7049 157.647 32.7265 155.076 32.6942C154.425 32.687 154.181 32.8486 154.195 33.5419C154.239 35.6649 154.239 37.7914 154.195 39.9144C154.181 40.6293 154.404 40.8268 155.111 40.8232C158.883 40.7909 162.651 40.8053 166.423 40.8089C168.981 40.8125 169.807 41.6423 169.811 44.1963C169.814 45.8415 169.829 47.4867 169.8 49.1319C169.767 51.0286 168.873 51.9769 166.984 51.9805C158.754 52.0057 150.524 52.0057 142.295 51.9805C140.355 51.9733 139.507 51.025 139.493 48.9308C139.468 45.0692 139.485 41.2112 139.482 37.3496C139.482 35.0147 139.482 32.6798 139.482 30.3485L139.485 30.3449Z" fill="white"/>
                                    <path d="M31.3613 50.7943C26.0659 50.7427 21.2178 49.3569 17.1404 45.8494C13.1078 42.3797 11.0055 37.8681 10.2451 32.6722C8.89971 23.4839 13.1663 14.636 21.2556 10.2207C27.7587 6.67189 34.4373 6.55153 41.1331 9.77019C43.146 10.7365 43.5176 11.8953 42.5198 13.8795C41.3878 16.1318 40.2351 18.3705 39.0583 20.5988C38.174 22.2769 37.1865 22.6311 35.4489 21.847C33.0507 20.7604 30.6662 20.4784 28.268 21.792C25.3123 23.4117 23.7433 26.8194 24.225 30.5092C24.6448 33.7107 27.0086 36.4926 29.9918 37.1941C31.8911 37.6411 33.7457 37.3832 35.5453 36.6473C38.267 35.5401 39.1203 35.9424 40.063 38.7553C40.8166 41.0077 41.5873 43.2531 42.2927 45.5227C42.771 47.0667 42.3065 48.0536 40.8476 48.7448C37.8437 50.1616 34.6748 50.8287 31.3544 50.7909L31.3613 50.7943Z" fill="white"/>
                                    <mask id="path-6-inside-1_133_169" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M69.0188 50.7943C80.9871 50.7943 90.6894 41.092 90.6894 29.1237C90.6894 17.1554 80.9871 7.45312 69.0188 7.45312C57.0505 7.45312 47.3482 17.1554 47.3482 29.1237C47.3482 41.092 57.0505 50.7943 69.0188 50.7943ZM69.0177 44.7753C77.6615 44.7753 84.6687 37.7681 84.6687 29.1243C84.6687 20.4806 77.6615 13.4734 69.0177 13.4734C60.374 13.4734 53.3668 20.4806 53.3668 29.1243C53.3668 37.7681 60.374 44.7753 69.0177 44.7753Z"/>
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.0188 50.7943C80.9871 50.7943 90.6894 41.092 90.6894 29.1237C90.6894 17.1554 80.9871 7.45312 69.0188 7.45312C57.0505 7.45312 47.3482 17.1554 47.3482 29.1237C47.3482 41.092 57.0505 50.7943 69.0188 50.7943ZM69.0177 44.7753C77.6615 44.7753 84.6687 37.7681 84.6687 29.1243C84.6687 20.4806 77.6615 13.4734 69.0177 13.4734C60.374 13.4734 53.3668 20.4806 53.3668 29.1243C53.3668 37.7681 60.374 44.7753 69.0177 44.7753Z" fill="white"/>
                                    <path d="M58.6894 29.1237C58.6894 23.4189 63.314 18.7943 69.0188 18.7943V82.7943C98.6602 82.7943 122.689 58.7652 122.689 29.1237H58.6894ZM69.0188 39.4531C63.314 39.4531 58.6894 34.8285 58.6894 29.1237H122.689C122.689 -0.517735 98.6602 -24.5469 69.0188 -24.5469V39.4531ZM79.3482 29.1237C79.3482 34.8285 74.7236 39.4531 69.0188 39.4531V-24.5469C39.3773 -24.5469 15.3482 -0.517735 15.3482 29.1237H79.3482ZM69.0188 18.7943C74.7236 18.7943 79.3482 23.4189 79.3482 29.1237H15.3482C15.3482 58.7652 39.3773 82.7943 69.0188 82.7943V18.7943ZM52.6687 29.1243C52.6687 20.095 59.9884 12.7753 69.0177 12.7753V76.7753C95.3347 76.7753 116.669 55.4412 116.669 29.1243H52.6687ZM69.0177 45.4734C59.9884 45.4734 52.6687 38.1537 52.6687 29.1243H116.669C116.669 2.80744 95.3347 -18.5266 69.0177 -18.5266V45.4734ZM85.3668 29.1243C85.3668 38.1537 78.0471 45.4734 69.0177 45.4734V-18.5266C42.7008 -18.5266 21.3668 2.80744 21.3668 29.1243H85.3668ZM69.0177 12.7753C78.0471 12.7753 85.3668 20.095 85.3668 29.1243H21.3668C21.3668 55.4412 42.7008 76.7753 69.0177 76.7753V12.7753Z" fill="white" mask="url(#path-6-inside-1_133_169)"/>
                                    <path d="M64.8937 13.4688C67.1734 13.6029 72.2151 14.7121 73.5024 15.034C75.1117 15.4363 78.0921 16.612 78.4945 19.8304C78.8968 23.0489 79.2991 25.4627 80.506 27.0719C81.7129 28.6812 82.5175 31.8996 75.6783 30.6927C72.5415 29.9085 65.2011 28.7421 58.8714 34.2703C58.5395 34.5601 58.1728 34.8163 57.8648 35.1315C57.1839 35.8284 57.2406 36.6665 57.5746 38.3365C57.8964 39.9457 57.4405 40.0798 57.1723 39.9457" stroke="white" stroke-width="0.6"/>
                                    <path d="M53.3712 21.2967C54.9804 20.6262 61.2768 18.3027 63.2078 17.0153C65.6217 15.4061 71.254 15.0038 73.2655 18.6246C75.277 22.2453 75.6793 26.6707 72.8632 27.4753C70.8516 27.8776 67.6332 24.2569 59.9894 28.6822C56.771 30.6938 55.1617 32.7053 55.564 34.3145C55.8859 35.6019 55.6982 36.9965 55.564 37.5329" stroke="white" stroke-width="0.6"/>
                                    <path d="M84.1286 22.2438C83.324 22.512 81.7952 23.5312 82.1171 25.4622C82.5194 27.8761 85.7378 32.7037 80.9102 34.7153C78.094 35.5199 78.4963 33.106 71.6571 33.5083C66.025 33.5083 62.0018 33.9106 61.1972 38.336C60.7949 40.7498 60.7949 41.9568 59.9903 42.3591M64.4156 44.7729C63.2087 43.0296 61.7604 39.1406 65.6226 37.5314C68.0364 36.5256 71.2548 36.3245 73.2664 36.3245C76.4848 36.3245 77.2894 38.336 79.7032 38.336C81.6343 38.336 82.6535 38.336 82.9217 38.336M56.7719 23.4507C58.2343 21.9883 61.7566 19.197 65.0441 18.6998C65.6908 18.602 66.3537 18.6842 66.9611 18.927C67.9809 19.3347 68.6121 19.83 69.2434 19.83C70.048 19.83 72.8641 22.2438 70.048 23.853C67.2319 25.4622 66.4273 24.2553 63.6111 25.4622C60.795 26.6692 58.7835 28.2784 57.1742 27.8761C55.565 27.4738 54.7604 25.8645 56.7719 23.4507ZM66.8295 21.4392C66.6031 21.2128 65.1688 21.2385 63.8712 21.3204C62.8999 21.3817 61.8113 21.5787 61.354 22.4379C60.913 23.2662 61.1725 24.1295 62.0018 23.853C63.2087 23.4507 63.2087 23.853 64.8179 23.853C66.4272 23.853 67.2318 21.8415 66.8295 21.4392Z" stroke="white" stroke-width="0.6"/>
                                    <path d="M74.8749 41.9589C73.2657 42.6026 70.1813 43.3 68.8403 43.5682C66.0242 44.2066 65.6219 41.9589 66.4265 41.1546C67.2311 40.3502 67.2311 40.752 68.438 39.5451C69.6449 38.3382 70.8519 38.3382 74.8749 39.1428C80.1049 39.5451 76.8864 41.1543 74.8749 41.9589Z" stroke="white" stroke-width="0.6"/>
                                    <path d="M206.488 51.9953C205.258 51.9953 204.028 51.9813 202.798 51.9988C201.375 52.0199 200.37 51.4084 199.874 50.0659C199.66 49.486 199.35 49.2786 198.718 49.2857C195.498 49.3173 192.276 49.3138 189.053 49.2857C188.494 49.2822 188.202 49.4544 188.03 49.985C187.57 51.3944 186.554 52.0094 185.089 51.9988C182.716 51.9813 180.344 51.9988 177.972 51.9848C177.48 51.9848 176.967 51.9532 176.496 51.8196C175.1 51.426 174.464 50.2521 174.97 48.7796C175.494 47.2613 176.165 45.7923 176.805 44.3197C181.599 33.2596 186.399 22.203 191.207 11.1465C191.45 10.5877 191.741 10.0254 192.125 9.55793C193.112 8.35246 194.799 8.35949 195.787 9.57199C196.149 10.0183 196.433 10.549 196.665 11.0832C201.986 23.3171 207.297 35.5581 212.603 47.799C212.73 48.0943 212.842 48.3965 212.93 48.7058C213.447 50.5087 212.572 51.8337 210.699 51.9426C209.3 52.0234 207.891 51.9602 206.485 51.9602V51.9953H206.488ZM191.123 42.6117H196.795C195.843 40.3413 194.936 38.1904 193.952 35.8428C192.957 38.2256 192.061 40.3729 191.126 42.6117H191.123Z" fill="white"/>
                                    <path d="M267.602 19.8661C266.068 19.8661 264.643 19.8661 263.213 19.8661C259.992 19.8661 259.353 19.2197 259.353 15.9661C259.353 14.5297 259.324 13.0932 259.364 11.6604C259.421 9.55598 260.319 8.67257 262.434 8.66898C270.78 8.65461 279.126 8.65461 287.468 8.66898C289.608 8.66898 290.527 9.60626 290.553 11.7394C290.574 13.4128 290.571 15.0899 290.553 16.7634C290.531 18.9719 289.655 19.8338 287.421 19.8625C286.046 19.8804 284.667 19.9128 283.295 19.8481C282.491 19.8086 282.297 20.0744 282.3 20.8572C282.329 29.44 282.318 38.0263 282.318 46.6091C282.318 47.4782 282.336 48.3436 282.304 49.2127C282.236 51.0154 281.359 51.9419 279.575 51.9671C276.493 52.0101 273.412 52.0101 270.335 51.9671C268.543 51.9419 267.656 51.0334 267.62 49.2127C267.573 46.7312 267.598 44.2462 267.598 41.7647C267.598 34.8554 267.598 27.9461 267.598 21.0368C267.598 20.6848 267.598 20.3365 267.598 19.8661H267.602Z" fill="white"/>
                                </svg>
                            </div>

                            <p className='text-[20px] mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                            <button className='bg-[#3F99FF] py-[14px] block w-full text-center shadow rounded-[4px]'>Reserve Land Now</button>
                        </div>
                    </div>
                </div>

                <div className='px-[58px] py-[67px]'>
                    <div className="mb-[97px]">
                        <h4 className='text-white text-[36px] font-bold mb-[24px]'>Ut enim ad minim</h4>
                        <p className='text-[#ffffff]/80 mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className='text-[#ffffff]/80 mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>

                    <div className="text-center">
                        <button className='bg-[#3F99FF] py-[14px] px-[20px] text-white shadow rounded-[4px] mb-[50px]'>Reserve Land Now</button>
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