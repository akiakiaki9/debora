'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FiMail,
    FiMapPin,
    FiClock,
    FiArrowUp,
    FiChevronRight,
    FiCode,
    FiGrid
} from 'react-icons/fi';
import { FaYoutube, FaInstagram, FaTelegram } from 'react-icons/fa';
import { GiBathtub } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";
import { FaShower, FaSink, FaWater } from 'react-icons/fa';
import { PiToilet } from "react-icons/pi";
import { MdKitchen, MdChair, MdShower } from 'react-icons/md';
import { categories } from '@/app/utils/data';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Маппинг иконок для категорий
    const categoryIcons = {
        'unitaz': <PiToilet />,
        'bide': <FaWater />,
        'chasha': <FaSink />,
        'rakovina': <FaSink />,
        'pisuar': <MdShower />,
        'chashogen': <MdKitchen />,
        'installation': <FiGrid />,
        'raktumba': <MdChair />,
        'vanna': <GiBathtub />,
        'smestitel': <FaShower />,
        'oyna': <GiMirrorMirror />,
    };

    // Берем только первые 6 категорий для футера (самые важные)
    const mainCategories = categories.slice(0, 6);

    const footerInfoLinks = [
        { name: 'О нас', slug: '/about' },
        { name: 'Контакты', slug: '/contacts' },
        { name: 'Корзина', slug: '/cart' },
        { name: 'Каталог', slug: '/catalog' },
    ];

    const footerSocialLinks = [
        { icon: <FaTelegram />, href: 'https://t.me/debora_ceramica', label: 'Telegram' },
        { icon: <FaInstagram />, href: 'https://instagram.com/debora_ceramica', label: 'Instagram' },
        { icon: <FaYoutube />, href: 'https://www.youtube.com/@debora_ceramica', label: 'YouTube' },
    ];

    const locations = [
        { name: 'Абу Сахий', address: '1 этаж, 10 магазин', phone: '+998941471116' },
        { name: 'Урикзор', address: '5 ряд, 27 магазин', phone: '+998977074046' },
        { name: 'Фархад', address: '1 этаж, 133 магазин', phone: '+998974008180' }
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
                                    width={100}
                                    height={100}
                                    className="footer-logo-image"
                                />
                                <h3 className="footer-brand-name">Debora Ceramica</h3>
                            </div>
                            <p className="footer-company-description">
                                Премиальная сантехника в Ташкенте.
                                Итальянские, немецкие и японские бренды.
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

                        {/* Категории (только основные) */}
                        <div className="footer-column">
                            <h3 className="footer-column-title">Категории</h3>
                            <ul className="footer-menu-list">
                                {mainCategories.map((cat) => (
                                    <li key={cat.id}>
                                        <Link href={`/catalog/${cat.slug}`} className="footer-menu-link">
                                            <span className="footer-category-icon">
                                                {categoryIcons[cat.slug] || <FiGrid />}
                                            </span>
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
                            <h3 className="footer-column-title">Наши магазины</h3>
                            <ul className="footer-contact-list">
                                {locations.map((loc, index) => (
                                    <li key={index} className="footer-contact-item">
                                        <div className="footer-contact-icon-wrapper">
                                            <FiMapPin className="footer-contact-icon" />
                                        </div>
                                        <div className="footer-contact-details">
                                            <span className="footer-contact-label">{loc.name}</span>
                                            <span className="footer-contact-address">{loc.address}</span>
                                            <a href={`tel:${loc.phone}`} className="footer-contact-phone">
                                                {loc.phone}
                                            </a>
                                        </div>
                                    </li>
                                ))}
                                <li className="footer-contact-item">
                                    <div className="footer-contact-icon-wrapper">
                                        <FiMail className="footer-contact-icon" />
                                    </div>
                                    <div className="footer-contact-details">
                                        <span className="footer-contact-label">Email:</span>
                                        <a href="mailto:Rasultoy1985@mail.ru">Rasultoy1985@mail.ru</a>
                                    </div>
                                </li>
                                <li className="footer-contact-item">
                                    <div className="footer-contact-icon-wrapper">
                                        <FiClock className="footer-contact-icon" />
                                    </div>
                                    <div className="footer-contact-details">
                                        <span className="footer-contact-label">Режим работы:</span>
                                        <span>Ежедневно: 9:00 - 18:00</span>
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
                            <span className="footer-payment-icon">Visa</span>
                            <span className="footer-payment-icon">UzCard</span>
                            <span className="footer-payment-icon">Humo</span>
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