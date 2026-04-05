import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { FiPhone, FiMapPin, FiMail, FiClock, FiNavigation } from 'react-icons/fi';
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import './contacts.css';

export const metadata = {
    title: 'Контакты | Debora Ceramica - Премиальная сантехника в Ташкенте',
    description: '3 магазина в Ташкенте: Абу Сахий, Урикзор, Фархад. Телефоны, адреса, режим работы 9:00-18:00.',
    keywords: 'сантехника Ташкент контакты, магазины сантехники, Debora Ceramica адрес',
};

export default function ContactsPage() {
    const locations = [
        {
            id: 1,
            market: 'Globalstroy',
            address: 'Катта дархон, дом 15',
            coordinates: '41.333109,69.311588',
            phone: '+998941471116',
            mapLink: 'https://maps.google.com/maps?q=41.333109,69.311588&ll=41.333109,69.311588&z=16'
        },
        {
            id: 2,
            market: "Qo'yliq qurilish bozori",
            address: 'Туёна 4А',
            coordinates: '41.237603,69.335270',
            phone: '+998977074046',
            mapLink: 'https://maps.google.com/maps?q=41.237603,69.335270&ll=41.237603,69.335270&z=16'
        },
        {
            id: 3,
            market: 'Jomi bozori',
            address: 'Уста Ширин 125',
            coordinates: '41.356032,69.246443',
            phone: '+998974008180',
            mapLink: 'https://maps.google.com/maps?q=41.356032,69.246443&ll=41.356032,69.246443&z=16'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="contacts-page">
                {/* Hero секция */}
                <section className="contacts-hero">
                    <div className="container">
                        <h1 className="contacts-title">Контакты</h1>
                        <p className="contacts-subtitle">
                            3 магазина в Ташкенте для вашего удобства
                        </p>
                    </div>
                </section>

                {/* Контактная информация */}
                <section className="contacts-info">
                    <div className="container">
                        <div className="info-grid">
                            <div className="info-card">
                                <div className="info-icon">
                                    <FiMail />
                                </div>
                                <h3 className="info-title">Email</h3>
                                <a href="mailto:Rasultoy1985@mail.ru" className="info-value">
                                    Rasultoy1985@mail.ru
                                </a>
                                <p className="info-note">Напишите нам на почту</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FiClock />
                                </div>
                                <h3 className="info-title">Режим работы</h3>
                                <p className="info-value">Ежедневно</p>
                                <p className="info-value">9:00 - 20:00</p>
                                <p className="info-note">С Выходными</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FiPhone />
                                </div>
                                <h3 className="info-title">Общий отдел</h3>
                                <a href="tel:+998981102255" className="info-value">+998 98 110-22-55</a>
                                <a href="tel:+998915452255" className="info-value">+998 91 545-22-55</a>
                                <p className="info-note">Для связи с менеджером</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FaInstagram />
                                </div>
                                <h3 className="info-title">Instagram</h3>
                                <a href="https://www.instagram.com/master_gold_plumbing?igsh=MW9tbDJlZHN6aHU2" target="_blank" rel="noopener noreferrer" className="info-value">
                                    @master_gold_plumbing
                                </a>
                                <p className="info-note">Быстрая связь</p>
                            </div>
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
                                        <Link
                                            href={loc.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="location-map-link"
                                        >
                                            <FiNavigation />
                                            Открыть в картах
                                        </Link>
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
                        <div className="social-grid">
                            <a href="https://t.me/debora_ceramic" target="_blank" rel="noopener noreferrer" className="social-card telegram">
                                <FaInstagram className="social-icon" />
                                <span className="social-name">Instagram</span>
                                <span className="social-link">@master_gold_plumbing</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};