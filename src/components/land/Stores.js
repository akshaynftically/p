import {Fragment, useState} from 'react'
import {Navigation} from "swiper"
import {Swiper, SwiperSlide} from 'swiper/react'

import _storyImg1 from 'assets/img/stories/story-1.png'
import _storyImg2 from 'assets/img/stories/story-2.png'
import _storyImg3 from 'assets/img/stories/story-3.png'
import _storyImg4 from 'assets/img/stories/story-4.png'
import _storyImg5 from 'assets/img/stories/story-5.png'

const _stores = [
    _storyImg1,
    _storyImg2,
    _storyImg3,
    _storyImg4,
    _storyImg5,
]

const Stores = () => {
    const [loadMore, setLoadMore] = useState(false)
    const storesSwiperSettings = {
        spaceBetween: 12,
        modules: [Navigation],
        navigation: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            }
        }
    }

    const load = () => {
        setLoadMore(true)
    }

    return (
        <Fragment>
            <div className='block sm:hidden mb-[32px]'>
                <Swiper {...storesSwiperSettings}>
                    {_stores.map((store, index) => (
                        <SwiperSlide key={index}>
                            <img className='mr-4 mb-6' src={store} alt="Brand"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='hidden sm:grid grid-cols-5 gap-[10px] mb-[32px]'>
                <img src={_storyImg1} alt="Story"/>
                <img src={_storyImg2} alt="Story"/>
                <img src={_storyImg3} alt="Story"/>
                <img src={_storyImg4} alt="Story"/>
                <img src={_storyImg5} alt="Story"/>

                <img src={_storyImg1} alt="Story"/>
                <img src={_storyImg2} alt="Story"/>
                <img src={_storyImg3} alt="Story"/>
                <img src={_storyImg4} alt="Story"/>
                <img src={_storyImg5} alt="Story"/>

                {loadMore && (
                    <>
                        <img src={_storyImg1} alt="Story"/>
                        <img src={_storyImg2} alt="Story"/>
                        <img src={_storyImg3} alt="Story"/>
                        <img src={_storyImg4} alt="Story"/>
                        <img src={_storyImg5} alt="Story"/>
                    </>
                )}
            </div>
            <div className="text-center">
                {!loadMore && (
                    <button
                        onClick={load}
                        className='text-white bg-[#363738] text-[16px] relative py-[11px] pl-[80px] pr-[52px] rounded-[50px]'>
                        <div className='flex items-center'>
                            <svg className='absolute left-[24px]' width="20" height="20" viewBox="0 0 20 20"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.537 17.567C14.7224 19.1393 12.401 20.0033 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 12.136 19.33 14.116 18.19 15.74L15 10H18C17.9998 8.15621 17.3628 6.36906 16.1967 4.94089C15.0305 3.51272 13.4069 2.53119 11.6003 2.16236C9.79381 1.79352 7.91533 2.06002 6.28268 2.91677C4.65002 3.77351 3.36342 5.16791 2.64052 6.86408C1.91762 8.56025 1.80281 10.4541 2.31549 12.2251C2.82818 13.9962 3.93689 15.5358 5.45408 16.5836C6.97127 17.6313 8.80379 18.1228 10.6416 17.9749C12.4795 17.827 14.2099 17.0488 15.54 15.772L16.537 17.567Z"
                                    fill="#3F99FF"/>
                            </svg>

                            Show More
                        </div>
                    </button>
                )}
            </div>
        </Fragment>
    )
}

export default Stores