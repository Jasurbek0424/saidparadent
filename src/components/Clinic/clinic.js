import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./clinic.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Typography from '../Typography/typography';
import SectionButton from '../shared/buttons/section-title-button/sectionButton';
import Image from 'next/image';

const Clinic = () => {
    const clinic = [
        { id: 1, source: '/img/clinic/1.jpg', height: 498, width: 840, height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 2, source: '/img/clinic/2.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 3, source: '/img/clinic/3.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 4, source: '/img/clinic/4.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 5, source: '/img/clinic/5.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 6, source: '/img/clinic/6.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 7, source: '/img/clinic/7.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 8, source: '/img/clinic/8.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 9, source: '/img/clinic/9.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
        { id: 10, source: '/img/clinic/10.jpg', height: 498, width: 840, alt: 'Клиника стоматологии в Ташкенте' },
    ]
    return (
        <section id="clinic">
            <div className='clinic'>
                <div className='doctor__section-title'>
                    <Typography name={'Стоматология'} />
                </div>
                <div className='clinic__blog'>
                    <div className='clinic__swiper'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="clinic__swiper"
                        >
                            {clinic.map((data) => (
                                <SwiperSlide key={data.id} >
                                    <Image src={data.source} width={data.width} height={data.height} alt={data.alt} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className='clinic__blog-info'>
                        <div className='clinic__blog-info-title'>
                            <div className='clinic__blog-info-text'>
                                <h1>25</h1>
                                <p>лет работы</p>
                            </div>
                            <div className='clinic__blog-info-text'>
                                <h1>5</h1>
                                <p>лет гарантии на лечение</p>
                            </div>
                            <div className='clinic__blog-info-text'>
                                <h1>40 000</h1>
                                <p>успешных  имплантаций</p>
                            </div>
                        </div>

                        <h6>клиника</h6>
                        <div className='clinic__blog-buttons'>
                            <SectionButton name={'город Ташкент'} />
                            <SectionButton name={'Юнусабад квартал-14'} />
                            <SectionButton name={'снаружи'} />
                            <SectionButton name={'внутри'} />
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Clinic
