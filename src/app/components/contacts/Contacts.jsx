'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FiPhone,
    FiMapPin,
    FiMail,
    FiClock,
    FiArrowRight,
    FiCheckCircle,
    FiAlertCircle
} from 'react-icons/fi';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
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

        // Имитация отправки формы
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

            // Скрыть уведомление через 5 секунд
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
            icon: <FiPhone />,
            title: 'Телефон',
            values: [
                { type: 'tel', value: '+998 99 878-39-49', label: '+998 99 878-39-49' },
                { type: 'tel', value: '+998 99 878-39-50', label: '+998 99 878-39-50' }
            ],
            note: 'Ежедневно с 9:00 до 20:00'
        },
        {
            id: 2,
            icon: <FiMapPin />,
            title: 'Адрес',
            values: [
                { type: 'text', value: 'г. Ташкент, ул. Амира Темура, 123', label: 'г. Ташкент, ул. Амира Темура, 123' }
            ],
            note: 'Ориентир: рядом с метро Амира Темура',
            link: {
                href: 'https://maps.google.com',
                text: 'Открыть в картах'
            }
        },
        {
            id: 3,
            icon: <FiMail />,
            title: 'Email',
            values: [
                { type: 'email', value: 'info@deboraceramica.uz', label: 'info@deboraceramica.uz' },
                { type: 'email', value: 'sales@deboraceramica.uz', label: 'sales@deboraceramica.uz' }
            ],
            note: 'Ответим в течение 2 часов'
        },
        {
            id: 4,
            icon: <FiClock />,
            title: 'Режим работы',
            values: [
                { type: 'text', value: 'Пн-Сб: 9:00 - 20:00', label: 'Пн-Сб: 9:00 - 20:00' },
                { type: 'text', value: 'Вс: 10:00 - 18:00', label: 'Вс: 10:00 - 18:00' }
            ],
            note: 'Без выходных'
        }
    ];

    const socials = [
        {
            id: 1,
            name: 'Telegram',
            icon: <FaTelegram />,
            link: 'https://t.me/deboraceramica',
            username: '@deboraceramica',
            color: 'telegram'
        },
        {
            id: 2,
            name: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://instagram.com/deboraceramica',
            username: '@deboraceramica',
            color: 'instagram'
        },
        {
            id: 3,
            name: 'Facebook',
            icon: <FaFacebook />,
            link: 'https://facebook.com/deboraceramica',
            username: '/deboraceramica',
            color: 'facebook'
        }
    ];

    return (
        <main className="contacts-page">
            {/* Hero секция */}
            <section className="contacts-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Свяжитесь с нами</span>
                        <h1 className="contacts-title">Контакты</h1>
                        <p className="contacts-subtitle">
                            Свяжитесь с нами любым удобным способом.
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
                                    <Link
                                        href={contact.link.href}
                                        target="_blank"
                                        className="info-link"
                                    >
                                        {contact.link.text}
                                        <FiArrowRight />
                                    </Link>
                                )}
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

            {/* Карта и форма */}
            <section className="contacts-map-form">
                <div className="container">
                    <div className="map-form-grid">
                        {/* Карта */}
                        <div className="map-wrapper">
                            <h2 className="map-title">Как нас найти</h2>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.112234567891!2d69.278945!3d41.311475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4b8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1234567890123!5m2!1sru!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Debora Ceramica на карте"
                                />
                            </div>
                        </div>

                        {/* Форма обратной связи */}
                        <div className="form-wrapper">
                            <div className="form-content">
                                <h2 className="form-title">Остались вопросы?</h2>
                                <p className="form-subtitle">
                                    Заполните форму и мы свяжемся с вами в ближайшее время
                                </p>

                                {formStatus.submitted && formStatus.success && (
                                    <div className="form-notification success">
                                        <FiCheckCircle />
                                        <span>{formStatus.message}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Ваше имя *"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Номер телефона *"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                            disabled={isSubmitting}
                                            pattern="[\+\d\s\(\)-]+"
                                        />
                                    </div>
                                    <div className="form-row">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <textarea
                                            name="message"
                                            placeholder="Ваш вопрос"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="form-textarea"
                                            rows="4"
                                            disabled={isSubmitting}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner"></span>
                                                Отправка...
                                            </>
                                        ) : (
                                            'Отправить сообщение'
                                        )}
                                    </button>
                                    <p className="form-privacy">
                                        Нажимая на кнопку, вы соглашаетесь с
                                        <Link href="/privacy" className="privacy-link"> политикой конфиденциальности</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Дополнительная информация */}
            <section className="contacts-extra">
                <div className="container">
                    <div className="extra-grid">
                        <div className="extra-item">
                            <h3>Реквизиты компании</h3>
                            <p>ООО "Debora Ceramica"</p>
                            <p>ИНН: 123456789</p>
                            <p>ОГРН: 1234567890123</p>
                        </div>
                        <div className="extra-item">
                            <h3>Для оптовых клиентов</h3>
                            <p>Специальные условия для дизайнеров и строительных компаний</p>
                            <a href="mailto:wholesale@deboraceramica.uz" className="extra-link">
                                wholesale@deboraceramica.uz
                            </a>
                        </div>
                        <div className="extra-item">
                            <h3>Сервисный центр</h3>
                            <p>Гарантийное и постгарантийное обслуживание</p>
                            <a href="tel:+998998783951" className="extra-link">
                                +998 99 878-39-51
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contacts;