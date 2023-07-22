import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './navbar.module.css'

const showPrice = () => {
    return (
        <div>
            <h1>Modalka</h1>
        </div>
    )
}



const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <nav className='nav__bar container'>
                <Link href='/'><Image className='logotype' src={'/logos.png'} width={75} height={75} alt='Logotip' /></Link>
                <label htmlFor="menu" className='nav__bar-label'></label>
                <input type="checkbox" name="" id="menu"></input>
                <ul className='nav__list'>
                    <label htmlFor="menu" className='nav__list-label'></label>
                    <li><Link className='nav__link' href='clinic'> Пациентам</Link></li>
                    <li><Link className='nav__link' href='/'>О клинике</Link></li>
                    <li><Link className='nav__link' href='/'>Услуги</Link></li>
                    <li><Link className='nav__link' href='/'>Наши работы</Link></li>
                    <li><Link onClick={() => setModalOpen(modalOpen = !modalOpen)} className={`nav__link ${modalOpen && 'active'}`} href='/'>Цены</Link></li>
                    <li><button type='submit' className='nav__btn'>оставить заявку</button></li>
                </ul>
                {modalOpen && (
                    <div className='shoping-cart'>
                        {showPrice()}
                    </div>
                )}

            </nav>
        </>
    );
};



export default Navbar;