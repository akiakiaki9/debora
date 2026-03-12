'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";

import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* О компании */}
                        <div className="footer-col">
                            <div className="footer-logo">
                                <Image
                                    src="/images/logo.png"
                                    alt="Debora Ceramica"
                                    width={150}
                                    height={150}
                                    className="footer-logo-img"
                                />
                            </div>
                            <p className="footer-description">
                                Премиальная сантехника в Ташкенте с 2006 года.
                                Только лучшие итальянские, немецкие и японские бренды.
                            </p>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FiFacebook />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FiInstagram />
                                </a>
                                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <RiTelegram2Fill />
                                </a>
                            </div>
                        </div>

                        {/* Категории */}
                        <div className="footer-col">
                            <h3 className="footer-title">Категории</h3>
                            <ul className="footer-links">
                                <li><Link href="/catalog/unitaz">Унитазы</Link></li>
                                <li><Link href="/catalog/vanna">Ванны</Link></li>
                                <li><Link href="/catalog/smestitel">Смесители</Link></li>
                                <li><Link href="/catalog/akksesuar">Аксессуары</Link></li>
                                <li><Link href="/catalog/oyna">Зеркала</Link></li>
                                <li><Link href="/catalog/play3">Шкафы</Link></li>
                            </ul>
                        </div>

                        {/* Информация */}
                        <div className="footer-col">
                            <h3 className="footer-title">Информация</h3>
                            <ul className="footer-links">
                                <li><Link href="/about">О нас</Link></li>
                                <li><Link href="/delivery">Доставка и оплата</Link></li>
                                <li><Link href="/warranty">Гарантия</Link></li>
                                <li><Link href="/contacts">Контакты</Link></li>
                                <li><Link href="/cart">Корзина</Link></li>
                            </ul>
                        </div>

                        {/* Контакты */}
                        <div className="footer-col">
                            <h3 className="footer-title">Контакты</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FiMapPin className="contact-icon" />
                                    <span>г. Ташкент, ул. Амира Темура, 123</span>
                                </li>
                                <li>
                                    <FiPhone className="contact-icon" />
                                    <div className="contact-phones">
                                        <a href="tel:+998998783949">+998 99 878-39-49</a>
                                        <a href="tel:+998998783950">+998 99 878-39-50</a>
                                    </div>
                                </li>
                                <li>
                                    <FiMail className="contact-icon" />
                                    <a href="mailto:info@deboraceramica.uz">info@deboraceramica.uz</a>
                                </li>
                                <li>
                                    <FiClock className="contact-icon" />
                                    <span>Пн-Сб: 9:00 - 20:00<br />Вс: 10:00 - 18:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Нижний бар */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            © {currentYear} Debora Ceramica. Все права защищены.
                        </div>
                        <div className="payment-methods">
                            <span className="payment-icon">Visa</span>
                            <span className="payment-icon">MasterCard</span>
                            <span className="payment-icon">UzCard</span>
                            <span className="payment-icon">Humo</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;