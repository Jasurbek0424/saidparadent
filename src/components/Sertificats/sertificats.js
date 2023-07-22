import Image from 'next/image'
import React from 'react'
import Typography from '../Typography/typography'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


let licenses = [

    { id: 1, source: '/img/licenses/licenses-1.jpg', width: 360, height: 350, alt: 'Cтоматология' },
    { id: 2, source: '/img/licenses/licenses-2.jpg', width: 360, height: 350, alt: 'Cтоматология' },
]

let whyUs = [
    {
        id: 1,
        source: '/img/why-us-1.png',
        width: 127, height: 74,
        alt: 'Cтоматология',
        title: 'ОТСУТСТВИЕ ОЧЕРЕДЕЙ',
        text: 'Принимаем всех пациентов в точно назначенное время'
    },
    {
        id: 2,
        source: '/img/why-us-2.png',
        width: 84, height: 84,
        alt: 'Cтоматология',
        title: 'ОТВЕЧАЕМ ЗА СВОЮ РАБОТУ',
        text: 'Предоставляем гарантию на все виды услуг'
    },
    {
        id: 3,
        source: '/img/why-us-3.png',
        width: 105, height: 105,
        alt: 'Cтоматология',
        title: 'ГАРАНТИРОВАННАЯ БЕЗОПАСНОСТЬ',
        text: 'Наша клиника строго придерживается всех требований санитарных норм. В работе используются одноразовые расходные материалы и 100% стерильный инструментарий'
    },
]

let sertificates = [
    { id: 1, source: '/img/sertificats/licenses-1.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 2, source: '/img/sertificats/licenses-2.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 3, source: '/img/sertificats/licenses-3.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 4, source: '/img/sertificats/licenses-4.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 5, source: '/img/sertificats/licenses-5.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 6, source: '/img/sertificats/licenses-6.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 7, source: '/img/sertificats/licenses-7.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 8, source: '/img/sertificats/licenses-10.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 9, source: '/img/sertificats/licenses-8.jpg', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 10, source: '/img/sertificats/licenses-11.png', width: 330, height: 270, alt: 'Cтоматология' },
    { id: 11, source: '/img/sertificats/licenses-9.jpg', width: 330, height: 270, alt: 'Cтоматология' },
]


const Sertificats = () => {
    return (
        <>
            <section className='whyUs'>
                <div className='whyUs-left'>
                    <Typography name={'почему мы?'} />
                    {whyUs.map((data, index) => (
                        <div key={index} className='whyUs__left-blocks'>
                            <Image src={data.source} width={data.width} height={data.height} alt={data.alt} />
                            <p className='whyUs__left-title'>{data.title}</p>
                            <p className='whyUs__left-text'>{data.text}</p>
                        </div>
                    ))}
                </div>
                <div className='whyUs-right'>
                    <Typography name={'Лицензии "ЦЕНТРА СТОМАТОЛОГИИ"'} />
                    <div className='whyUs__right-licenses'>
                        {licenses.map((data, index) => (
                            <Image key={index} src={data.source} width={data.width} height={data.height} alt={data.alt} />
                        ))}
                    </div>
                    <Typography name={'Cертификаты'} />
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {sertificates.map((data, index) => (
                                <SwiperSlide key={index} >
                                    <Image src={data.source} width={data.width} height={data.height} alt={data.alt} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sertificats