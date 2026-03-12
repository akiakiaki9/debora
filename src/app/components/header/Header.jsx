'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './header.css';

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Чугунные ванны',
            subtitle: 'Премиум качество',
            description: 'Итальянские чугунные ванны с эмалевым покрытием. Ручная работа, 5 лет гарантии.',
            price: 'от 2 450 000 сум',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&auto=format',
            category: 'vanna'
        },
        {
            id: 2,
            title: 'Унитазы Debora',
            subtitle: 'Подвесные и напольные',
            description: 'Японские системы смыва, микролифт, антибактериальное покрытие. Бесшумная работа.',
            price: 'от 850 000 сум',
            image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1600&auto=format',
            category: 'unitaz'
        },
        {
            id: 3,
            title: 'Смесители Grohe',
            subtitle: 'Германское качество',
            description: 'Однорычажные, термостаты, с душем. Керамический картридж, пожизненная гарантия.',
            price: 'от 450 000 сум',
            image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1600&auto=format',
            category: 'smestitel'
        },
        {
            id: 4,
            title: 'Мебель для ванной',
            subtitle: '3-створчатые шкафы',
            description: 'Влагостойкие материалы, зеркала с LED подсветкой, системы хранения. Итальянский дизайн.',
            price: 'от 1 250 000 сум',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format',
            category: 'play3'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <header className="header">
            {/* Карусель */}
            <div className="carousel">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        {/* Фоновое изображение с затемнением */}
                        <div
                            className="slide-background"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="overlay"></div>
                        </div>

                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-info">
                                    <span className="slide-subtitle">{slide.subtitle}</span>
                                    <h1 className="slide-title">{slide.title}</h1>
                                    <p className="slide-description">{slide.description}</p>
                                    <div className="slide-price">{slide.price}</div>
                                    <div className="slide-actions">
                                        <Link href={`/category/${slide.category}`} className="btn btn-primary">
                                            Смотреть все
                                        </Link>
                                        <Link href="/catalog" className="btn btn-outline">
                                            Каталог
                                        </Link>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <div className="image-wrapper">
                                        <img src={slide.image} alt={slide.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Навигация карусели */}
                <button className="carousel-nav carousel-prev" onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className="carousel-nav carousel-next" onClick={nextSlide}>
                    <FiChevronRight />
                </button>

                {/* Индикаторы */}
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;