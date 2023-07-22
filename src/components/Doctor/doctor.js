import React, { useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import { GrFormNext, GrFormPrevious, GrInstagram } from "react-icons/gr";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./doctor.module.css";
import Typography from '../Typography/typography';
import SectionButton from '../shared/buttons/section-title-button/sectionButton';

const Doctor = () => {
    const swiper = useSwiper();
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const slides = [
        { id: 1, source: '/img/Равшан.jpg', name: 'Саидалиев Равшан Абдурашидович', proffesion: 'Стоматолог ортопед, имплантолог', category: 'Высшия категория', stage: '25 лет', instagram: 'https://instagram.com/ravshansaydaliev?igshid=YmMyMTA2M2Y=', desc: '1992г - 1997г Ташкентский медицинский академия факультет стоматология. 1997-1998г Интернатура по направлению ортопедия на базе Республиканской стоматологии поликлиники.', },
        { id: 2, source: '/img/Мурод.jpg', name: 'Махмудов Муроджон Мухаммадович', proffesion: 'Стоматолог', category: 'Врач 1 - категория', stage: '5 лет', instagram: 'https://instagram.com/stom_9910?igshid=YmMyMTA2M2Y=', desc: 'С 2018г по настоящее время работает врачом, стоматологом общего профиля. Образование: 2011 - 2016г Самаркандский Государственный Медицинский Институт факультет "Стоматлогия". 2016 - 2018 г Самаркандский Государственный Медицинский институт клиническая ординатура - челюстно лицевой хирургии. ' },
        { id: 3, source: '/img/Sardor.jpg', name: 'Сайдалиев Сардоржон Сабиржанович', proffesion: 'Хирург Стоматолог', category: 'Ассистент', stage: '2 года', instagram: 'https://instagram.com/saydaliev_sardorjon?igshid=YmMyMTA2M2Y=', desc: 'Образование: Ташкентский Государственный Стоматологический Институт 3-курс', },
    ]

    return (
        <section className='doctors'>
            <div className='doctor__section-block'>
                <div className='doctor__section-title'>
                    <Typography name={'Врачи'} />
                    <SectionButton name={'все врачи'} />
                </div>

                <div className='doctors__buttons'>
                    <div className="doctors__button-prev" ref={navigationPrevRef}>
                        <GrFormPrevious />
                    </div>
                    <div className="doctors__button-next" ref={navigationNextRef}>
                        <GrFormNext />
                    </div>
                </div>
            </div>

            <Swiper
                onSwiper={swiper}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={25}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Autoplay, Navigation]}
                className="doctors__swiper"

                breakpoints={{
                    280: {
                      slidesPerView: 1,
                    },

                    768: {
                      slidesPerView: 2,
                    },

                    968: {
                      slidesPerView: 3,
                    },

                    1070: {
                      slidesPerView: 3,
                    },

                    1440: {
                      slidesPerView: 3,
                    },

                    1680: {
                      slidesPerView: 3,
                    },

                    1980: {
                      slidesPerView: 3,
                    },
                  }}
            >
                {slides.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className='doctors__card'>
                            <div className='doctors__card-img'>
                                <Image src={data.source} width={416} height={363} alt={'Стоматолог'} />
                            </div>
                            <p className='doctors__card-name'>{data.name}</p>
                            <p className='doctors__card-proffesion'>{data.proffesion}</p>
                            <p className='doctors__card-category'>{data.category}</p>
                            <p className='doctors__card-desc'>{data.desc}</p>
                            <div className='doctors__card-subinfo'>
                                <p className='doctors__card-stage'>Cтаж: {data.stage}</p>
                                <Link target={'_blank'} href={data.instagram} className='doctors__card-instagram'>
                                    <GrInstagram />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    );
}


export default Doctor;

