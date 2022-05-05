import {Fragment, useState} from "react";
import {SimpleButton} from "../buttons";

const AsideLeft = () => {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <button onClick={() => setOpen(true)} className='mr-[24px]'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 5.33301H4V7.99967H28V5.33301ZM20 14.6663H4V17.333H20V14.6663ZM28 23.9997H4V26.6663H28V23.9997Z" fill="white"/>
                </svg>
            </button>
            <aside className={`fixed top-0 left-0 w-full max-w-[480px] md:rounded-tr-[16px] h-full overflow-scroll bg-[#262728] p-[40px] transition duration-[1s] z-[10000000] transform -translate-x-[480px] ${open ? '!translate-x-0' : ''}`}>
                <div className="relative h-full">
                    <div className='flex items-center justify-between mb-[62px] gap-[60px]'>
                        <svg width="306" height="42" viewBox="0 0 306 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M98.6474 18.8414C101.097 15.9745 103.463 13.2036 105.826 10.4361C108.014 7.87406 110.195 5.30539 112.399 2.75993C112.79 2.30585 113.244 1.87167 113.748 1.55348C115.107 0.70168 116.562 1.20878 117.082 2.72678C117.291 3.33995 117.364 4.02272 117.367 4.67565C117.384 16.0805 117.387 27.4854 117.357 38.8903C117.357 39.6294 117.158 40.4315 116.83 41.0911C116.476 41.8036 115.67 41.976 114.891 41.976C112.048 41.9826 109.204 42.0091 106.36 41.9727C104.64 41.9495 103.828 41.0877 103.805 39.2946C103.771 36.6995 103.795 34.1043 103.791 31.5058C103.791 31.2141 103.791 30.9225 103.592 30.5612C103.291 30.9357 102.989 31.3102 102.684 31.6814C101.899 32.6426 101.15 33.6403 100.311 34.5517C99.1644 35.7979 97.9712 35.7979 96.8311 34.5352C95.8699 33.4712 95.0048 32.3211 94.0967 31.2108C93.9111 30.9821 93.7222 30.7567 93.4106 30.3789C93.3874 30.8296 93.3609 31.0882 93.3609 31.35C93.3609 33.9452 93.3675 36.5404 93.3543 39.1389C93.3443 41.1441 92.5356 41.9727 90.5436 41.9859C87.8921 42.0058 85.2406 42.0058 82.5891 41.9859C80.6037 41.9694 79.7784 41.1408 79.7751 39.1356C79.7652 27.565 79.7619 15.9944 79.7917 4.42376C79.7917 3.70785 79.9873 2.92896 80.3054 2.28928C80.8722 1.14581 82.188 0.807741 83.2818 1.48057C83.8585 1.83521 84.3788 2.31911 84.823 2.83284C89.2146 7.90389 93.5863 12.9948 97.9646 18.0791C98.1601 18.3045 98.359 18.5266 98.6374 18.8414H98.6474Z" fill="white"/>
                            <path d="M291.507 15.4616V14.5035C291.507 11.0907 291.504 7.67791 291.507 4.26513C291.51 1.97302 292.33 1.15706 294.619 1.14691C297.158 1.14014 299.697 1.14014 302.236 1.14691C304.532 1.15368 305.382 1.9764 305.382 4.24143C305.388 15.807 305.388 27.3725 305.382 38.938C305.382 41.1827 304.559 41.9852 302.301 41.9919C299.707 42.0021 297.11 42.0055 294.517 41.9919C292.32 41.9818 291.517 41.1726 291.51 38.9651C291.5 34.2827 291.51 29.6003 291.51 24.9179C291.51 24.5861 291.51 24.2577 291.51 23.8683H283.104V24.8603C283.104 29.431 283.104 33.9983 283.104 38.569C283.104 38.9922 283.104 39.4188 283.06 39.8352C282.928 41.0744 282.163 41.9141 280.917 41.9378C277.758 41.9953 274.599 41.9919 271.44 41.9378C270.269 41.9174 269.585 41.2234 269.354 40.0756C269.273 39.6626 269.229 39.236 269.229 38.8161C269.222 27.3353 269.222 15.8544 269.229 4.37347C269.229 4.00782 269.253 3.63878 269.314 3.2799C269.537 1.96286 270.235 1.21801 271.575 1.18754C274.65 1.12321 277.724 1.11644 280.798 1.18754C282.278 1.22478 283.06 2.14569 283.077 3.70311C283.117 7.31226 283.121 10.9248 283.087 14.5339C283.08 15.3093 283.29 15.5429 284.072 15.526C286.242 15.4752 288.416 15.509 290.586 15.5056C290.86 15.5056 291.135 15.4752 291.51 15.4549L291.507 15.4616Z" fill="white"/>
                            <path d="M210.582 37.0886C210.582 37.8119 210.599 38.5149 210.582 39.2146C210.524 41.114 209.71 41.9624 207.827 41.9793C204.873 42.0097 201.916 42.0063 198.958 41.9793C197.028 41.9624 196.187 41.114 196.18 39.1639C196.16 34.716 196.17 30.2681 196.17 25.8201C196.17 18.8103 196.17 11.8005 196.17 4.79062C196.17 4.39517 196.167 3.99973 196.197 3.60766C196.309 2.18812 197.076 1.25527 198.478 1.26203C203.68 1.28569 208.902 0.809131 214.077 1.57298C221.306 2.64102 227.011 8.19752 228.505 15.3966C229.539 20.3718 228.441 24.8839 225.7 29.0614C225.382 29.5481 225.335 29.8929 225.636 30.41C227.011 32.7996 228.35 35.2094 229.685 37.6226C231.199 40.3637 230.27 41.9658 227.147 41.9793C224.051 41.9962 220.955 41.9658 217.855 41.9928C216.51 42.003 215.547 41.4588 214.888 40.2894C214.32 39.2855 213.654 38.3358 213.11 37.3218C212.785 36.7168 212.431 36.5005 211.778 36.754C211.417 36.896 211.028 36.9669 210.585 37.0852L210.582 37.0886ZM210.129 14.1866V25.6072C212.157 25.4822 213.735 24.6676 214.732 22.9743C215.949 20.9092 215.865 18.7528 214.682 16.708C213.708 15.0215 212.13 14.261 210.129 14.1866Z" fill="white"/>
                            <path d="M122.085 21.584C122.085 15.9414 122.085 10.2989 122.085 4.65637C122.085 4.23301 122.085 3.80626 122.136 3.38968C122.298 2.03154 123.02 1.32369 124.381 1.17128C124.744 1.13064 125.113 1.13741 125.479 1.13741C132.757 1.13741 140.039 1.13741 147.317 1.13741C147.71 1.13741 148.113 1.12725 148.499 1.18483C149.82 1.37788 150.602 2.17041 150.643 3.50822C150.697 5.45228 150.704 7.40312 150.643 9.34719C150.599 10.8239 149.712 11.6604 148.174 11.6774C144.452 11.718 140.726 11.7214 137.001 11.6875C136.208 11.6807 135.863 11.8569 135.954 12.7002C136.022 13.3403 136.015 14.0007 135.954 14.6443C135.886 15.3792 136.195 15.5316 136.872 15.5248C140.371 15.4944 143.869 15.5079 147.368 15.5113C149.925 15.5113 150.67 16.27 150.677 18.8575C150.677 19.6196 150.69 20.3816 150.667 21.1437C150.619 22.8473 149.837 23.694 148.123 23.7786C146.772 23.8464 145.417 23.8057 144.062 23.8091C141.637 23.8091 139.209 23.8294 136.784 23.799C136.171 23.7922 135.941 23.9446 135.954 24.5983C135.995 26.5999 135.995 28.6049 135.954 30.6066C135.941 31.2806 136.151 31.4668 136.818 31.4635C140.374 31.433 143.927 31.4465 147.483 31.4499C149.895 31.4533 150.674 32.2357 150.677 34.6437C150.68 36.1949 150.694 37.7461 150.667 39.2973C150.636 41.0856 149.793 41.9797 148.011 41.9831C140.252 42.0068 132.493 42.0068 124.733 41.9831C122.905 41.9763 122.105 41.0822 122.092 39.1076C122.068 35.4667 122.085 31.8292 122.082 28.1884C122.082 25.9869 122.082 23.7854 122.082 21.5873L122.085 21.584Z" fill="white"/>
                            <path d="M20.1404 40.8641C15.1477 40.8155 10.5767 39.5089 6.73234 36.2019C2.93019 32.9305 0.948017 28.6767 0.231059 23.7777C-1.03741 15.1146 2.98534 6.77236 10.6123 2.60937C16.7438 -0.736587 23.0407 -0.850064 29.3538 2.18464C31.2517 3.0957 31.602 4.18832 30.6612 6.05907C29.5939 8.18272 28.5071 10.2934 27.3976 12.3943C26.5639 13.9765 25.6328 14.3105 23.9945 13.5713C21.7333 12.5467 19.4851 12.2809 17.2239 13.5194C14.4372 15.0465 12.9579 18.2595 13.4121 21.7384C13.8078 24.7569 16.0366 27.3798 18.8493 28.0412C20.64 28.4627 22.3886 28.2195 24.0853 27.5257C26.6514 26.4817 27.456 26.8611 28.3449 29.5132C29.0554 31.6368 29.7821 33.754 30.4471 35.8938C30.898 37.3496 30.4601 38.2801 29.0846 38.9318C26.2524 40.2676 23.2645 40.8966 20.1339 40.8609L20.1404 40.8641Z" fill="white"/>
                            <mask id="path-6-inside-1_133_872" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.6459 40.8641C66.9303 40.8641 76.078 31.7164 76.078 20.4321C76.078 9.14775 66.9303 0 55.6459 0C44.3616 0 35.2139 9.14775 35.2139 20.4321C35.2139 31.7164 44.3616 40.8641 55.6459 40.8641ZM55.6448 35.1891C63.7945 35.1891 70.4013 28.5824 70.4013 20.4326C70.4013 12.2828 63.7945 5.67609 55.6448 5.67609C47.495 5.67609 40.8883 12.2828 40.8883 20.4326C40.8883 28.5824 47.495 35.1891 55.6448 35.1891Z"/>
                            </mask>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.6459 40.8641C66.9303 40.8641 76.078 31.7164 76.078 20.4321C76.078 9.14775 66.9303 0 55.6459 0C44.3616 0 35.2139 9.14775 35.2139 20.4321C35.2139 31.7164 44.3616 40.8641 55.6459 40.8641ZM55.6448 35.1891C63.7945 35.1891 70.4013 28.5824 70.4013 20.4326C70.4013 12.2828 63.7945 5.67609 55.6448 5.67609C47.495 5.67609 40.8883 12.2828 40.8883 20.4326C40.8883 28.5824 47.495 35.1891 55.6448 35.1891Z" fill="white"/>
                            <path d="M44.078 20.4321C44.078 14.0433 49.2571 8.86414 55.6459 8.86414V72.8641C84.6034 72.8641 108.078 49.3895 108.078 20.4321H44.078ZM55.6459 32C49.2571 32 44.078 26.8209 44.078 20.4321H108.078C108.078 -8.52536 84.6034 -32 55.6459 -32V32ZM67.2139 20.4321C67.2139 26.8209 62.0347 32 55.6459 32V-32C26.6885 -32 3.21387 -8.52536 3.21387 20.4321H67.2139ZM55.6459 8.86414C62.0347 8.86414 67.2139 14.0433 67.2139 20.4321H3.21387C3.21387 49.3895 26.6885 72.8641 55.6459 72.8641V8.86414ZM38.4013 20.4326C38.4013 10.9093 46.1214 3.18908 55.6448 3.18908V67.1891C81.4677 67.1891 102.401 46.2555 102.401 20.4326H38.4013ZM55.6448 37.6761C46.1214 37.6761 38.4013 29.9559 38.4013 20.4326H102.401C102.401 -5.39032 81.4677 -26.3239 55.6448 -26.3239V37.6761ZM72.8883 20.4326C72.8883 29.9559 65.1681 37.6761 55.6448 37.6761V-26.3239C29.8219 -26.3239 8.88827 -5.39032 8.88827 20.4326H72.8883ZM55.6448 3.18908C65.1681 3.18908 72.8883 10.9093 72.8883 20.4326H8.88827C8.88827 46.2555 29.8219 67.1891 55.6448 67.1891V3.18908Z" fill="white" mask="url(#path-6-inside-1_133_872)"/>
                            <path d="M51.7555 5.67188C53.9049 5.79831 58.6584 6.84419 59.8722 7.14764C61.3894 7.52696 64.1996 8.63548 64.5789 11.67C64.9582 14.7045 65.3375 16.9804 66.4755 18.4976C67.6134 20.0149 68.372 23.0494 61.9237 21.9114C58.9709 21.1732 52.0671 20.0758 46.1056 25.2599C45.7731 25.5491 45.4045 25.8031 45.1022 26.1238C44.4878 26.7755 44.5441 27.5655 44.8546 29.1184C45.1581 30.6356 44.7282 30.7621 44.4753 30.6356" stroke="white" stroke-width="0.6"/>
                            <path d="M40.8909 13.0527C42.4081 12.4206 48.3447 10.2299 50.1654 9.01607C52.4413 7.49882 57.7516 7.1195 59.6482 10.5333C61.5448 13.9471 61.9241 18.1196 59.2689 18.8782C57.3723 19.2575 54.3378 15.8437 47.1309 20.0162C44.0964 21.9127 42.5791 23.8093 42.9584 25.3266C43.2619 26.5404 43.0849 27.8553 42.9584 28.3611" stroke="white" stroke-width="0.6"/>
                            <path d="M69.8892 13.9451C69.1306 14.1979 67.6892 15.1589 67.9926 16.9796C68.3719 19.2554 71.4064 23.8072 66.8547 25.7038C64.1995 26.4624 64.5788 24.1865 58.1305 24.5658C52.8202 24.5658 49.027 24.9451 48.2684 29.1176C47.889 31.3935 47.889 32.5314 47.1304 32.9107M51.3029 35.1866C50.1649 33.5429 48.7994 29.8762 52.4408 28.359C54.7167 27.4107 57.7512 27.221 59.6477 27.221C62.6822 27.221 63.4409 29.1176 65.7168 29.1176C67.5375 29.1176 68.4984 29.1176 68.7513 29.1176M44.096 15.083C45.4666 13.7124 48.7561 11.1038 51.8398 10.6122C52.4857 10.5093 53.1496 10.5917 53.7552 10.839C54.6861 11.2192 55.2704 11.6692 55.8547 11.6692C56.6133 11.6692 59.2685 13.9451 56.6133 15.4623C53.9581 16.9796 53.1995 15.8416 50.5443 16.9796C47.8891 18.1175 45.9926 19.6348 44.4753 19.2554C42.9581 18.8761 42.1994 17.3589 44.096 15.083ZM53.5787 13.1864C53.3702 12.9779 52.0742 12.9963 50.8737 13.0693C49.9022 13.1283 48.7975 13.3252 48.3781 14.2035C48.0167 14.9603 48.2702 15.7146 49.027 15.4623C50.1649 15.083 50.1649 15.4623 51.6822 15.4623C53.1994 15.4623 53.9581 13.5658 53.5787 13.1864Z" stroke="white" stroke-width="0.6"/>
                            <path d="M61.1657 32.5335C59.6485 33.1404 56.7404 33.7979 55.476 34.0508C52.8208 34.6527 52.4415 32.5335 53.2001 31.7751C53.9588 31.0168 53.9588 31.3956 55.0967 30.2576C56.2346 29.1197 57.3726 29.1197 61.1657 29.8783C66.0968 30.2576 63.0623 31.7749 61.1657 32.5335Z" stroke="white" stroke-width="0.6"/>
                            <path d="M185.258 41.997C184.099 41.997 182.939 41.9838 181.779 42.0004C180.437 42.0202 179.489 41.4437 179.022 40.1779C178.82 39.6311 178.528 39.4356 177.932 39.4422C174.897 39.4721 171.858 39.4688 168.82 39.4422C168.293 39.4389 168.018 39.6013 167.855 40.1017C167.421 41.4304 166.464 42.0103 165.082 42.0004C162.845 41.9838 160.608 42.0004 158.372 41.9871C157.908 41.9871 157.424 41.9573 156.98 41.8314C155.664 41.4602 155.065 40.3535 155.542 38.9651C156.036 37.5336 156.669 36.1485 157.272 34.7601C161.791 24.3321 166.318 13.9074 170.851 3.48278C171.079 2.95592 171.354 2.42574 171.716 1.98502C172.647 0.84845 174.237 0.855077 175.168 1.99828C175.51 2.41911 175.778 2.91947 175.997 3.42314C181.014 14.9579 186.021 26.4992 191.024 38.0406C191.143 38.3189 191.25 38.6039 191.332 38.8955C191.819 40.5954 190.994 41.8446 189.228 41.9473C187.909 42.0236 186.581 41.9639 185.255 41.9639V41.997H185.258ZM170.771 33.1497H176.119C175.222 31.0091 174.367 28.9811 173.439 26.7676C172.501 29.0143 171.656 31.0389 170.775 33.1497H170.771Z" fill="white"/>
                            <path d="M242.879 11.704C241.433 11.704 240.089 11.704 238.741 11.704C235.704 11.704 235.101 11.0946 235.101 8.02698C235.101 6.67263 235.074 5.31828 235.111 3.96731C235.166 1.98319 236.012 1.15026 238.006 1.14688C245.875 1.13333 253.744 1.13333 261.609 1.14688C263.627 1.14688 264.494 2.03059 264.518 4.0418C264.538 5.61962 264.535 7.20082 264.518 8.77864C264.497 10.861 263.671 11.6736 261.565 11.7007C260.269 11.7176 258.968 11.7481 257.675 11.6871C256.917 11.6499 256.734 11.9004 256.737 12.6385C256.764 20.7308 256.754 28.8264 256.754 36.9187C256.754 37.738 256.771 38.554 256.74 39.3734C256.676 41.0731 255.85 41.9467 254.167 41.9704C251.262 42.011 248.357 42.011 245.455 41.9704C243.766 41.9467 242.929 41.0901 242.896 39.3734C242.852 37.0338 242.875 34.6908 242.875 32.3511C242.875 25.8367 242.875 19.3223 242.875 12.8078C242.875 12.476 242.875 12.1476 242.875 11.704H242.879Z" fill="white"/>
                        </svg>
                        <button className='h-[48px]' onClick={() => setOpen(false)}>
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.7926 16.5L25.3917 8.90084C25.5419 8.72548 25.6204 8.49991 25.6115 8.26921C25.6026 8.03851 25.5069 7.81966 25.3437 7.65641C25.1804 7.49315 24.9616 7.39752 24.7309 7.3886C24.5002 7.37969 24.2746 7.45817 24.0992 7.60834L16.5001 15.2075L8.90089 7.59917C8.72828 7.42656 8.49417 7.32959 8.25006 7.32959C8.00595 7.32959 7.77184 7.42656 7.59922 7.59917C7.42661 7.77179 7.32964 8.0059 7.32964 8.25001C7.32964 8.49412 7.42661 8.72823 7.59922 8.90084L15.2076 16.5L7.59922 24.0992C7.50327 24.1814 7.42533 24.2825 7.37031 24.3962C7.31529 24.5099 7.28437 24.6338 7.27949 24.76C7.27462 24.8863 7.29589 25.0122 7.34197 25.1298C7.38806 25.2474 7.45796 25.3543 7.54729 25.4436C7.63663 25.5329 7.74346 25.6028 7.86109 25.6489C7.97873 25.695 8.10461 25.7163 8.23086 25.7114C8.3571 25.7065 8.48097 25.6756 8.5947 25.6206C8.70842 25.5656 8.80955 25.4876 8.89172 25.3917L16.5001 17.7925L24.0992 25.3917C24.2746 25.5418 24.5002 25.6203 24.7309 25.6114C24.9616 25.6025 25.1804 25.5069 25.3437 25.3436C25.5069 25.1804 25.6026 24.9615 25.6115 24.7308C25.6204 24.5001 25.5419 24.2745 25.3917 24.0992L17.7926 16.5Z"
                                    fill="white"/>
                            </svg>
                        </button>
                    </div>

                    <nav>
                        <a href="#" className='text-white text-[16px] md:text-[20px] hover:text-white/70 font-bold block border-b border-[#363738] py-[16px] md:py-[28px]'>Home</a>
                        <a href="#" className='text-white text-[16px] md:text-[20px] hover:text-white/70 font-bold block border-b border-[#363738] py-[16px] md:py-[28px]'>Whitepaper</a>
                        <a href="#" className='text-white text-[16px] md:text-[20px] hover:text-white/70 font-bold block border-b border-[#363738] py-[16px] md:py-[28px]'>NFTICALLY</a>
                        <a href="#" className='text-white text-[16px] md:text-[20px] hover:text-white/70 font-bold block border-b border-[#363738] py-[16px] md:py-[28px]'>Blog</a>
                        <a href="#" className='text-white text-[16px] md:text-[20px] hover:text-white/70 font-bold block border-b border-[#363738] py-[16px] md:py-[28px]'>Contact Us</a>
                    </nav>

                    <div className='absolute bottom-0 w-full'>
                        <SimpleButton block type='button'>Reserve Land Now</SimpleButton>
                    </div>
                </div>
            </aside>
        </Fragment>
    )
}

export default AsideLeft