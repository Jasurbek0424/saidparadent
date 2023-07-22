import Link from 'next/link';
import React from 'react';
import './Location.module.css'


const Location = () => {
    return (
        <section className='location'>
            <h1 className='location__titile'>
                Мы ждем вас
            </h1>
            <div className='location__info'>
                <div className='location__left'>
                    <Link href={`https://www.google.com/maps/place/41%C2%B022'30.0%22N+69%C2%B017'55.0%22E/@41.374997,69.298616,16z/data=!4m5!3m4!1s0x0:0xe5137b202ceea09c!8m2!3d41.374997!4d69.298616`}>
                        <iframe className='locat-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5987.916020117938!2d69.298616!3d41.374997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5137b202ceea09c!2zNDHCsDIyJzMwLjAiTiA2OcKwMTcnNTUuMCJF!5e0!3m2!1sru!2s!4v1667900244960!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy='no-referrer'
                            style={{
                                border: '0px',
                                // width: '100%'
                            }}
                        >
                        </iframe>
                    </Link>
                </div>
                <div className='location__right'>
                    <h1 className='location__right-titile'>
                        ЗАПОЛНИТЕ ФОРМУ
                        <span>для  записи на прием</span>
                    </h1>
                    <form className='location__form'>
                        <input type='text' placeholder='Введите своё имя: ' />
                        <input type='tel' placeholder='+998(——) ——— —— ——' />
                    </form>
                    <div className='location__address'>
                        <span>Юнус-Абад 14-квартал</span>
                        <span>
                            14-дом
                        </span>
                    </div>
                    <input className='send_form' type='submit' value='оставить заявку' />
                </div>
            </div >
        </section >
    );
};



export default Location;