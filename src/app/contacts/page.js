'use cliebt'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { FiPhone, FiMapPin, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import './contacts.css';

export const metadata = {
    title: 'Контакты | Debora Ceramica - Премиальная сантехника в Ташкенте',
    description: 'Свяжитесь с нами: +998 99 878-39-49, info@deboraceramica.uz, адрес: ул. Амира Темура, 123. Режим работы: Пн-Сб 9:00-20:00, Вс 10:00-18:00.',
    keywords: 'сантехника Ташкент контакты, Debora Ceramica адрес, магазин сантехники телефон, премиум сантехника Ташкент',
};

export default function ContactsPage() {
    return (
        <>
            <Navbar />
            <main className="contacts-page">
                {/* Hero секция */}
                <section className="contacts-hero">
                    <div className="container">
                        <h1 className="contacts-title">Контакты</h1>
                        <p className="contacts-subtitle">
                            Свяжитесь с нами любым удобным способом
                        </p>
                    </div>
                </section>

                {/* Контактная информация */}
                <section className="contacts-info">
                    <div className="container">
                        <div className="info-grid">
                            <div className="info-card">
                                <div className="info-icon">
                                    <FiPhone />
                                </div>
                                <h3 className="info-title">Телефон</h3>
                                <a href="tel:+998998783949" className="info-value">+998 99 878-39-49</a>
                                <a href="tel:+998998783950" className="info-value">+998 99 878-39-50</a>
                                <p className="info-note">Ежедневно с 9:00 до 20:00</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FiMapPin />
                                </div>
                                <h3 className="info-title">Адрес</h3>
                                <p className="info-value">г. Ташкент, ул. Амира Темура, 123</p>
                                <p className="info-note">Ориентир: рядом с метро Амира Темура</p>
                                <Link href="https://maps.google.com/?q=Ташкент+ул.+Амира+Темура+123" target="_blank" className="info-link">
                                    Открыть в картах
                                    <FiSend />
                                </Link>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FiMail />
                                </div>
                                <h3 className="info-title">Email</h3>
                                <a href="mailto:info@deboraceramica.uz" className="info-value">info@deboraceramica.uz</a>
                                <a href="mailto:sales@deboraceramica.uz" className="info-value">sales@deboraceramica.uz</a>
                                <p className="info-note">Напишите нам на почту</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FiClock />
                                </div>
                                <h3 className="info-title">Режим работы</h3>
                                <p className="info-value">Пн-Сб: 9:00 - 20:00</p>
                                <p className="info-value">Вс: 10:00 - 18:00</p>
                                <p className="info-note">Без выходных</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Социальные сети */}
                <section className="contacts-social">
                    <div className="container">
                        <h2 className="social-title">Мы в соцсетях</h2>
                        <div className="social-grid">
                            <a href="https://t.me/deboraceramica" target="_blank" rel="noopener noreferrer" className="social-card telegram">
                                <FaTelegram className="social-icon" />
                                <span className="social-name">Telegram</span>
                                <span className="social-link">@deboraceramica</span>
                            </a>
                            <a href="https://instagram.com/deboraceramica" target="_blank" rel="noopener noreferrer" className="social-card instagram">
                                <FaInstagram className="social-icon" />
                                <span className="social-name">Instagram</span>
                                <span className="social-link">@deboraceramica</span>
                            </a>
                            <a href="https://facebook.com/deboraceramica" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                                <FaFacebook className="social-icon" />
                                <span className="social-name">Facebook</span>
                                <span className="social-link">deboraceramica</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Карта */}
                <section className="contacts-map">
                    <div className="container">
                        <h2 className="map-title">Как нас найти</h2>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.112234567891!2d69.278945!3d41.311475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4b8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1234567890123!5m2!1sru!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Debora Ceramica на карте Ташкента"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}