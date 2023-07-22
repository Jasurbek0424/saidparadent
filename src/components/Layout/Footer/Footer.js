import React from 'react';
import './Footer.module.css'


const Footer = () => {

    const clinic = [
        { id: 1, title: 'О клиниках', str1: 'Врачи', str2: 'Новости', str3: 'Акции', str4: 'Галерея', str5: 'Отзывы', str6: 'Лечение зубов по ДМС', str7: 'Лечение в рассрочку', str8: 'Официальная информация' },
        { id: 4, title: 'Протезирование', str1: 'Ортопедия', str2: 'Компониры', str3: 'Имплантация', str4: 'Чистка зубов', str5: 'Лазерное отбеливание зубов', str6: 'Реставрация зубов', str7: 'Виниры', str8: 'Брекеты' }
    ]
    const clinic2 = [
        { id: 1, title: 'Терапия', str1: 'Лечение без сверления', str2: 'Детская стоматология', str3: 'Лечение под наркозом', str4: 'Плазмолифтинг' },
        { id: 2, title: 'Хирургия', str1: 'Имплантация', str2: 'Удаление зубов' }
    ]

    return (
        <footer>
            <div className='footer__info'>
                <div className='container foot__items'>


                    {clinic.map((el) => (
                        <div key={el.id}>
                            <h2 className='foot__info-title'>{el.title}</h2>
                            <p>{el.str1}</p>
                            <p>{el.str2}</p>
                            <p>{el.str3}</p>
                            <p>{el.str4}</p>
                            <p>{el.str5}</p>
                            <p>{el.str6}</p>
                            <p>{el.str7}</p>
                            <p>{el.str8}</p>
                        </div>
                    ))}

                    <div className='foot__item'>

                        {clinic2.map((el) => (
                            <div key={el.id}>
                                <h2 className='foot__info-title'>{el.title}</h2>
                                <p>{el.str1}</p>
                                <p>{el.str2}</p>
                                <p>{el.str3}</p>
                                <p>{el.str4}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className='autors'>
                <div className='container'>
                    <div className='autors__info'>
                        <p>Autors:</p>
                        <p>Mirzaaliyev Begzod</p>
                        <p>Xakimbekov Jasurbek</p>
                        <p>Davron Raimjonov</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};



export default Footer;