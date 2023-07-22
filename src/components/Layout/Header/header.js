import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper";
import { SiInstagram } from "react-icons/si";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Header.module.css";

// import required modules
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../Navbar/navbar';

const data = [
    { id: 1, width: 1024, height: 474, source: '/img/header1.png', alt: 'Saidparadent Clinic' },
    { id: 2, width: 1024, height: 474, source: '/img/header1.png', alt: 'Saidparadent Clinic' },
    { id: 3, width: 1024, height: 474, source: '/img/header1.png', alt: 'Saidparadent Clinic' },
    { id: 4, width: 1024, height: 474, source: '/img/header1.png', alt: 'Saidparadent Clinic' }
]

function Header() {
    return (
        <>
            <Navbar />
            <header className='container header-swiper'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {data.map((data, idx) =>
                        <SwiperSlide key={idx}>
                            <Image width={data.width} height={data.height} src={data.source} alt={data.alt} />
                        </SwiperSlide>
                    )}
                </Swiper>

                <div className='headerRight'>
                    <div className='headerRight__item-1'>
                        <p className='tel'>
                            Позвоните
                        </p>
                        <div className='headerRight__item-number'>
                            <div>
                                <p className='tel-number'><Link href='tel:(71) 222 96 30'>(71) 222 96 30</Link></p>
                                <p className='tel-number'><Link href='tel:+998 (90) 8081450'>+998 (90) 8081450</Link></p>
                            </div>
                            <button className='header-button'>Заказать звонок</button>
                        </div>
                    </div>
                    <div className='headerRight__item-2'>
                        <p className='social-title'>Соцсети</p>
                        <p className='social-item'>
                            <Link href={'https://instagram.com/saidparadent?igshid=YmMyMTA2M2Y='}>
                                <SiInstagram /> Instagram
                            </Link>
                        </p>
                    </div>
                    <div className='headerRight__item-3'>
                        <p className='locations'>место положение</p>
                        <Link href={'/'} className='location-link'>Юнус-Абад 14 квартал, 14-дом Ташкент, Узбекистан</Link>
                    </div>
                    <div className='headerRight__item-4'>
                        <p className='weekend'>
                            Пн, Вт, Ср, Чт, Пт, Сб,
                            <span>Вс</span>
                        </p>
                        <p className='time'>09:00 - <span>19:00</span></p>
                    </div>
                </div>
            </header>
        </>

    );
}

export default Header;