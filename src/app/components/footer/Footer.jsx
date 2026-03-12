'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiArrowUp,
    FiChevronRight,
    FiCode
} from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const footerCategories = [
        { name: 'Унитазы', slug: 'unitaz' },
        { name: 'Ванны', slug: 'vanna' },
        { name: 'Смесители', slug: 'smestitel' },
        { name: 'Аксессуары', slug: 'akksesuar' },
        { name: 'Зеркала', slug: 'oyna' },
        { name: 'Шкафы', slug: 'play3' },
    ];

    const footerInfoLinks = [
        { name: 'О нас', slug: '/about' },
        { name: 'Доставка и оплата', slug: '/delivery' },
        { name: 'Гарантия', slug: '/warranty' },
        { name: 'Контакты', slug: '/contacts' },
        { name: 'Корзина', slug: '/cart' },
    ];

    const footerSocialLinks = [
        { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
        { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
        { icon: <FaTelegram />, href: 'https://telegram.org', label: 'Telegram' },
        { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
    ];

    return (
        <footer className="site-footer">
            {/* Декоративная волна сверху */}
            <div className="footer-wave-decoration">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="var(--navy-dark)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>

            {/* Основной футер */}
            <div className="footer-main-content">
                <div className="footer-container">
                    <div className="footer-columns">
                        {/* О компании */}
                        <div className="footer-column footer-about">
                            <div className="footer-logo-block">
                                <Image
                                    src="/images/logo.png"
                                    alt="Debora Ceramica"
                                    width={120}
                                    height={120}
                                    className="footer-logo-image"
                                />
                                <h3 className="footer-brand-name">Debora Ceramica</h3>
                            </div>
                            <p className="footer-company-description">
                                Премиальная сантехника в Ташкенте с 2006 года.
                                Только лучшие итальянские, немецкие и японские бренды.
                            </p>
                            <div className="footer-social-links">
                                {footerSocialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-item"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Категории */}
                        <div className="footer-column">
                            <h3 className="footer-column-title">Категории</h3>
                            <ul className="footer-menu-list">
                                {footerCategories.map((cat) => (
                                    <li key={cat.slug}>
                                        <Link href={`/catalog/${cat.slug}`} className="footer-menu-link">
                                            <FiChevronRight className="footer-link-icon" />
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Информация */}
                        <div className="footer-column">
                            <h3 className="footer-column-title">Информация</h3>
                            <ul className="footer-menu-list">
                                {footerInfoLinks.map((link) => (
                                    <li key={link.slug}>
                                        <Link href={link.slug} className="footer-menu-link">
                                            <FiChevronRight className="footer-link-icon" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Контакты */}
                        <div className="footer-column">
                            <h3 className="footer-column-title">Контакты</h3>
                            <ul className="footer-contact-list">
                                <li className="footer-contact-item">
                                    <div className="footer-contact-icon-wrapper">
                                        <FiMapPin className="footer-contact-icon" />
                                    </div>
                                    <div className="footer-contact-details">
                                        <span className="footer-contact-label">Адрес:</span>
                                        <span>г. Ташкент, ул. Амира Темура, 123</span>
                                    </div>
                                </li>
                                <li className="footer-contact-item">
                                    <div className="footer-contact-icon-wrapper">
                                        <FiPhone className="footer-contact-icon" />
                                    </div>
                                    <div className="footer-contact-details">
                                        <span className="footer-contact-label">Телефоны:</span>
                                        <div className="footer-contact-phones">
                                            <a href="tel:+998998783949">+998 99 878-39-49</a>
                                            <a href="tel:+998998783950">+998 99 878-39-50</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="footer-contact-item">
                                    <div className="footer-contact-icon-wrapper">
                                        <FiMail className="footer-contact-icon" />
                                    </div>
                                    <div className="footer-contact-details">
                                        <span className="footer-contact-label">Email:</span>
                                        <a href="mailto:info@deboraceramica.uz">info@deboraceramica.uz</a>
                                    </div>
                                </li>
                                <li className="footer-contact-item">
                                    <div className="footer-contact-icon-wrapper">
                                        <FiClock className="footer-contact-icon" />
                                    </div>
                                    <div className="footer-contact-details">
                                        <span className="footer-contact-label">Режим работы:</span>
                                        <span>Пн-Сб: 9:00 - 20:00<br />Вс: 10:00 - 18:00</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Нижний бар */}
            <div className="footer-bottom-bar">
                <div className="footer-container">
                    <div className="footer-bottom-content">
                        <div className="footer-copyright">
                            © {currentYear} Debora Ceramica. Все права защищены.
                        </div>
                        <div className="footer-payment-methods">
                            <span className="footer-payment-icon" title="Visa">Visa</span>
                            <span className="footer-payment-icon" title="MasterCard">MasterCard</span>
                            <span className="footer-payment-icon" title="UzCard">UzCard</span>
                            <span className="footer-payment-icon" title="Humo">Humo</span>
                        </div>
                        <div className="footer-developer">
                            <FiCode className="footer-developer-icon" />
                            <span>Разработчик: </span>
                            <a
                                href="https://akbarsoft.uz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-developer-link"
                            >
                                Akbar Soft
                            </a>
                        </div>
                        <button
                            className="footer-scroll-top"
                            onClick={scrollToTop}
                            aria-label="Наверх"
                        >
                            <FiArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;