import {Fragment} from "react";

import _image from 'assets/images/background/hero-1.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import AsideVideoItem from './VideoItem'

const _videos = [
    {
        title: 'Learn about Continent #1',
        preview: _image
    },
    {
        title: 'Learn about Continent #2',
        preview: _image
    },
    {
        title: 'Learn about Continent #3',
        preview: _image
    },
    {
        title: 'Learn about Continent #4',
        preview: _image
    }
]

const AsideVideos = (props) => {
    const {videos} = props
    const settings = {
        spaceBetween: 12,
        slidesPerView: 1,
        modules: [Navigation],
        navigation: true
    }

    return (
        <Fragment>
            <div className='mb-[16px]'>
                <Swiper {...settings}>
                    {_videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <AsideVideoItem video={video}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    )
}

export default AsideVideos