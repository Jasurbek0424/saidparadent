import React, { useState } from 'react';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image'

import './Service.module.css'



const Service = () => {
    const images = [
        { id: 1, image: '/img/oldman.svg', width: 10, height: 10, alt: 'Oldman', class: 'img-oldman', title: 'Мне больше 50 лет ', str1: 'Записаться на диагностику', str2: 'Лечение для пожелых' },
        { id: 2, image: '/img/woman.svg', width: 10, height: 10, alt: 'Woman', class: 'img-woman', title: 'Будущая мать', str1: 'Лечение беременных' },
        { id: 3, image: '/img/child.svg', width: 10, height: 10, alt: 'Child', class: 'img-child', title: 'У ребенка болит зуб', str1: 'Детский осмотр', str2: 'Лечение без сверления' }
    ]
    const des_est = [
        { id: 1, title: 'Десны', str1: 'Кровоточивость десен', str2: ' Боль в области десен' },
        { id: 2, title: 'Красота', str1: 'Отбелование зубов ', str2: 'Отсутсвует зуб', str3: 'Откололся зуб', str4: ' Неправильный прикус', str5: ' Желтый налет на зубах', str6: 'Профилактический осмотр' }
    ]
    const gig_tooth = [
        { id: 1, title: 'Гигиена и отбеливание', str1: 'Налет на зубах', str2: ' Запах изо рта', str3: ' Желтый налет на зубах' },
        { id: 2, title: 'Зубы', str1: 'Кариес', str2: 'Острая зубная боль', str3: 'Чувствительность зубов', str4: ' Подвижность зуба', str5: 'Cлетела пломба', str6: 'Развалился зуб' }
    ]



    const accord = [
        { id: 1, title: 'Мне больше 50 лет ', str1: 'Записаться на диагностику', str2: 'Лечение для пожелых' },
        { id: 2, title: 'Будущая мать', str1: 'Лечение беременных' },
        { id: 3, title: 'У ребенка болит зуб', str1: 'Детский осмотр', str2: 'Лечение без сверления' },
        { id: 4, title: 'Десны', str1: 'Кровоточивость десен', str2: ' Боль в области десен' },
        { id: 5, title: 'Красота', str1: 'Отбелование зубов ', str2: 'Отсутсвует зуб', str3: 'Откололся зуб', str4: ' Неправильный прикус', str5: ' Желтый налет на зубах', str6: 'Профилактический осмотр' },
        { id: 6, title: 'Гигиена и отбеливание', str1: 'Налет на зубах', str2: ' Запах изо рта', str3: ' Желтый налет на зубах' },
        { id: 7, title: 'Зубы', str1: 'Кариес', str2: 'Острая зубная боль', str3: 'Чувствительность зубов', str4: ' Подвижность зуба', str5: 'Cлетела пломба', str6: 'Развалился зуб' }
    ]


    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <section>
            <div className='service__nav'>
                <div className='service__nav-top'>
                    <h2 className='service__title'>
                        Что вас беспокоит?
                    </h2>
                    <Link href='/' className='service__all'>
                        Все услуги <BsFillGrid3X3GapFill className='service__icon' /> <TfiArrowCircleRight className='service__icon' />
                    </Link>
                </div>
                <div className='service__nav-info'>
                    <span className='service__action'>Cкидки  % </span>
                    <Link href='/' className='service__price'>Цены</Link>
                </div>
            </div>

            <div className='service__info'>
                <div className='left'>
                    {images.map((data) => {
                        return <div key={data.id} className='left__info'>
                            <Image className={data.class} src={data.image} alt={data.alt} width={data.width} height={data.height} key={data.id} layout='responsive'  />
                            <div className='left-info'>
                                <h2>{data.title}</h2>
                                <p>{data.str1}</p>
                                <p>{data.str2}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className='center'>
                    {des_est.map((el) => {
                        return <div key={el.id} className='left-info'>
                            <h2>{el.title}</h2>
                            <p>{el.str1}</p>
                            <p>{el.str2}</p>
                            <p>{el.str3}</p>
                            <p>{el.str4}</p>
                            <p>{el.str5}</p>
                            <p>{el.str6}</p>
                        </div>
                    })}
                </div>
                <div className='right'>
                {gig_tooth.map((el) => {
                        return <div key={el.id} className='left-info'>
                            <h2>{el.title}</h2>
                            <p>{el.str1}</p>
                            <p>{el.str2}</p>
                            <p>{el.str3}</p>
                            <p>{el.str4}</p>
                            <p>{el.str5}</p>
                            <p>{el.str6}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className='service__accordion'>
                {accord.map((el, i) => (
                    <div key={el.id} className='accord__item'>
                        <div className='accord__title' onClick={() => toggle(i)}>

                            <h2>{el.title}</h2>
                            <span>{selected === i ? '-' : '+'}</span>

                        </div>
                        <div className={selected === i ? 'accord__str' : 'accord__content'}>
                            <p>{el.str1}</p>
                            <p>{el.str2}</p>
                            <p>{el.str3}</p>
                            <p>{el.str4}</p>
                            <p>{el.str5}</p>
                            <p>{el.str6}</p>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};



export default Service;