'use client'
import React, { useState } from 'react';
import {
    FiPhone,
    FiMapPin,
    FiMail,
    FiClock,
    FiArrowRight,
    FiNavigation
} from 'react-icons/fi';
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
import './contacts.css';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const locations = [
        {
            id: 1,
            market: 'Абу Сахий',
            address: '1 этаж, 10 магазин',
            coordinates: '41.333122,69.311549',
            phone: '+998941471116',
            mapLink: 'https://maps.google.com/maps?q=41.333122,69.311549&ll=41.333122,69.311549&z=16'
        },
        {
            id: 2,
            market: 'Урикзор',
            address: '5 ряд, 27 магазин',
            coordinates: '41.237603,69.335270',
            phone: '+998977074046',
            mapLink: 'https://maps.google.com/maps?q=41.237603,69.335270&ll=41.237603,69.335270&z=16'
        },
        {
            id: 3,
            market: 'Фархад',
            address: '1 этаж, 133 магазин',
            coordinates: '41.356032,69.246443',
            phone: '+998974008180',
            mapLink: 'https://maps.google.com/maps?q=41.356032,69.246443&ll=41.356032,69.246443&z=16'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setFormStatus({
                submitted: true,
                success: true,
                message: 'Спасибо! Мы свяжемся с вами в ближайшее время.'
            });
            setIsSubmitting(false);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });

            setTimeout(() => {
                setFormStatus({
                    submitted: false,
                    success: false,
                    message: ''
                });
            }, 5000);
        }, 1500);
    };

    const contacts = [
        {
            id: 1,
            icon: <FiMail />,
            title: 'Email',
            values: [
                { type: 'email', value: 'Rasultoy1985@mail.ru', label: 'Rasultoy1985@mail.ru' }
            ],
            note: 'Напишите нам на почту'
        },
        {
            id: 2,
            icon: <FiClock />,
            title: 'Режим работы',
            values: [
                { type: 'text', value: 'Ежедневно: 9:00 - 18:00', label: 'Ежедневно: 9:00 - 18:00' }
            ],
            note: 'Без выходных'
        },
        {
            id: 3,
            icon: <FiPhone />,
            title: 'Общий отдел',
            values: [
                { type: 'tel', value: '+998941471116', label: '+998 94 147-11-16' },
                { type: 'tel', value: '+998998783950', label: '+998 99 878 39 50' },
                { type: 'tel', value: '+998977074046', label: '+998 97 707 40 46' },
            ],
            note: 'Для связи с менеджером'
        },
        {
            id: 4,
            icon: <FaTelegram />,
            title: 'Telegram',
            values: [
                { type: 'link', value: '@debora_ceramica', label: '@debora_ceramica' }
            ],
            note: 'Быстрая связь',
            link: {
                href: 'https://t.me/debora_ceramica',
                text: 'Перейти в Telegram'
            }
        }
    ];

    const socials = [
        {
            id: 1,
            name: 'Telegram',
            icon: <FaTelegram />,
            link: 'https://t.me/deboraceramica',
            username: '@debora_ceramica',
            color: 'telegram'
        },
        {
            id: 2,
            name: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://instagram.com/deboraceramica',
            username: '@debora_ceramica',
            color: 'instagram'
        },
        {
            id: 3,
            name: 'You Tube',
            icon: <FaYoutube />,
            link: 'https://www.youtube.com/@debora_ceramica',
            username: '/debora_ceramica',
            color: 'facebook'
        }
    ];

    return (
        <main className="contacts-page">
            {/* Hero секция */}
            <section className="contacts-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">3 магазина в Ташкенте</span>
                        <h1 className="contacts-title">Контакты</h1>
                        <p className="contacts-subtitle">
                            Найдите нас в Абу Сахий, Урикзоре или Фархаде.
                            Мы всегда рады помочь с выбором сантехники для вашего дома.
                        </p>
                    </div>
                </div>
                <div className="hero-decoration">
                    <div className="decoration-circle"></div>
                    <div className="decoration-circle"></div>
                </div>
            </section>

            {/* Контактная информация */}
            <section className="contacts-info">
                <div className="container">
                    <div className="info-grid">
                        {contacts.map((contact, index) => (
                            <div
                                key={contact.id}
                                className="info-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="info-icon-wrapper">
                                    <div className="info-icon">
                                        {contact.icon}
                                    </div>
                                </div>
                                <h3 className="info-title">{contact.title}</h3>
                                <div className="info-values">
                                    {contact.values.map((item, idx) => (
                                        item.type === 'tel' || item.type === 'email' ? (
                                            <a
                                                key={idx}
                                                href={`${item.type}:${item.value.replace(/\s/g, '')}`}
                                                className="info-value"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <span key={idx} className="info-value">
                                                {item.label}
                                            </span>
                                        )
                                    ))}
                                </div>
                                <p className="info-note">{contact.note}</p>
                                {contact.link && (
                                    <a
                                        href={contact.link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="info-link"
                                    >
                                        {contact.link.text}
                                        <FiArrowRight />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Локации магазинов */}
            <section className="locations-section">
                <div className="container">
                    <h2 className="section-title">Наши магазины</h2>
                    <div className="locations-grid">
                        {locations.map((loc) => (
                            <div key={loc.id} className="location-card">
                                <div className="location-header">
                                    <FiMapPin className="location-icon" />
                                    <h3 className="location-market">{loc.market}</h3>
                                </div>

                                <div className="location-body">
                                    <p className="location-address">
                                        <strong>Адрес:</strong> {loc.address}
                                    </p>
                                    <a href={`tel:${loc.phone}`} className="location-phone">
                                        <FiPhone className="location-phone-icon" />
                                        {loc.phone}
                                    </a>
                                </div>

                                <div className="location-footer">
                                    <a
                                        href={loc.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="location-map-link"
                                    >
                                        <FiNavigation />
                                        Открыть в картах
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Социальные сети */}
            <section className="contacts-social">
                <div className="container">
                    <h2 className="social-title">Мы в соцсетях</h2>
                    <p className="social-subtitle">
                        Подписывайтесь на наши соцсети, чтобы следить за новинками и акциями
                    </p>
                    <div className="social-grid">
                        {socials.map((social, index) => (
                            <a
                                key={social.id}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-card ${social.color}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="social-icon-wrapper">
                                    {social.icon}
                                </div>
                                <div className="social-info">
                                    <span className="social-name">{social.name}</span>
                                    <span className="social-link">{social.username}</span>
                                </div>
                                <div className="social-arrow">
                                    <FiArrowRight />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contacts;