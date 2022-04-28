import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getSelectedLocation, resetSelectedLocation} from "../earth/LocationsSlice";
import {getAsideState, toggleAsideAction} from "./AsideSlice";

export function Aisde() {
    const location = useSelector(getSelectedLocation)
    const open = useSelector(getAsideState)
    const dispath = useDispatch()

    function toggleSidebar(state) {
        dispath(toggleAsideAction(state))
        dispath(resetSelectedLocation())
    }

    return (
        <>
            <button onClick={() => toggleSidebar(true)} className='flex items-center'>
                <span className='uppercase text-white mr-3 text-[14px]'>Menu</span>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 5.33325H28V7.99992H4V5.33325ZM12 14.6666H28V17.3333H12V14.6666ZM4 23.9999H28V26.6666H4V23.9999Z"
                        fill="white"/>
                </svg>
            </button>

            <aside
                className={`fixed top-0 right-0 w-[450px] rounded-tl-[16px] h-full bg-[#262728] p-[40px] transition duration-[1s] transform translate-x-[450px] ${open ? 'translate-x-0' : ''}`}>
                <div className="flex items-center text-white">
                    <button className='h-[48px]' onClick={() => toggleSidebar(false)}>
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.7926 16.5L25.3917 8.90084C25.5419 8.72548 25.6204 8.49991 25.6115 8.26921C25.6026 8.03851 25.5069 7.81966 25.3437 7.65641C25.1804 7.49315 24.9616 7.39752 24.7309 7.3886C24.5002 7.37969 24.2746 7.45817 24.0992 7.60834L16.5001 15.2075L8.90089 7.59917C8.72828 7.42656 8.49417 7.32959 8.25006 7.32959C8.00595 7.32959 7.77184 7.42656 7.59922 7.59917C7.42661 7.77179 7.32964 8.0059 7.32964 8.25001C7.32964 8.49412 7.42661 8.72823 7.59922 8.90084L15.2076 16.5L7.59922 24.0992C7.50327 24.1814 7.42533 24.2825 7.37031 24.3962C7.31529 24.5099 7.28437 24.6338 7.27949 24.76C7.27462 24.8863 7.29589 25.0122 7.34197 25.1298C7.38806 25.2474 7.45796 25.3543 7.54729 25.4436C7.63663 25.5329 7.74346 25.6028 7.86109 25.6489C7.97873 25.695 8.10461 25.7163 8.23086 25.7114C8.3571 25.7065 8.48097 25.6756 8.5947 25.6206C8.70842 25.5656 8.80955 25.4876 8.89172 25.3917L16.5001 17.7925L24.0992 25.3917C24.2746 25.5418 24.5002 25.6203 24.7309 25.6114C24.9616 25.6025 25.1804 25.5069 25.3437 25.3436C25.5069 25.1804 25.6026 24.9615 25.6115 24.7308C25.6204 24.5001 25.5419 24.2745 25.3917 24.0992L17.7926 16.5Z"
                                fill="white"/>
                        </svg>
                    </button>

                    {(location && !location.is_page) &&
                        <div className='text-[32px] ml-3'>{location.name}</div>
                    }
                </div>
            </aside>
        </>
    )
}