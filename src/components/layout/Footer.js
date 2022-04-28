import React, {useState} from 'react'

export function Footer () {
    return (
        <div className='absolute w-full left-0 bottom-0'>
            <footer className='text-[12px] border-t border-[rgba(225,225,225,.1)] text-gray-400 max-w-[100rem] flex flex-wrap basis-full items-center w-full mx-auto py-5'>
                <div>
                    <span className='uppercase'>Nftcally</span> 2022  |  All Rights Reserved
                </div>


                <nav className='ml-auto'>
                    <ul className='flex'>
                        <li className='mr-8'>
                            <a href="/">Community Guidelines</a>
                        </li>
                        <li className='mr-8'>
                            <a href="/">Risk Policy</a>
                        </li>
                        <li className='mr-8'>
                            <a href="/">Terms</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}