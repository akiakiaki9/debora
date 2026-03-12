'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight, FiAward, FiShield, FiTruck } from 'react-icons/fi';
import './header.css';

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            id: 1,
            title: 'Чугунные ванны',
            subtitle: 'Премиум качество',
            description: 'Итальянские чугунные ванны с эмалевым покрытием. Ручная работа, 5 лет гарантии.',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&auto=format',
            category: 'vanna',
            badge: 'Хит продаж'
        },
        {
            id: 2,
            title: 'Унитазы Debora',
            subtitle: 'Подвесные и напольные',
            description: 'Японские системы смыва, микролифт, антибактериальное покрытие. Бесшумная работа.',
            image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1600&auto=format',
            category: 'unitaz',
            badge: 'Новинка'
        },
        {
            id: 3,
            title: 'Смесители Grohe',
            subtitle: 'Германское качество',
            description: 'Однорычажные, термостаты, с душем. Керамический картридж, пожизненная гарантия.',
            image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1600&auto=format',
            category: 'smestitel',
            badge: 'Акция'
        },
        {
            id: 4,
            title: 'Мебель для ванной',
            subtitle: '3-створчатые шкафы',
            description: 'Влагостойкие материалы, зеркала с LED подсветкой, системы хранения. Итальянский дизайн.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format',
            category: 'play3',
            badge: 'Премиум'
        }
    ];

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 800);
    }, [slides.length, isAnimating]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 800);
    }, [slides.length, isAnimating]);

    const goToSlide = useCallback((index) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 800);
    }, [currentSlide, isAnimating]);

    // Автоматическая смена слайдов
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimating) {
                nextSlide();
            }
        }, 6000);
        return () => clearInterval(timer);
    }, [nextSlide, isAnimating]);

    // Обработка свайпов для мобильных
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) {
            // Свайп влево
            nextSlide();
        }
        if (touchStart - touchEnd < -100) {
            // Свайп вправо
            prevSlide();
        }
    };

    return (
        <header className="header">
            {/* Карусель */}
            <div
                className="carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ zIndex: index === currentSlide ? 2 : 1 }}
                    >
                        {/* Фоновое изображение с параллакс эффектом */}
                        <div
                            className="slide-background"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
                            }}
                        >
                            <div className="overlay"></div>
                        </div>

                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-info">
                                    {slide.badge && (
                                        <span className="slide-badge">{slide.badge}</span>
                                    )}
                                    <span className="slide-subtitle">{slide.subtitle}</span>
                                    <h1 className="slide-title">{slide.title}</h1>
                                    <p className="slide-description">{slide.description}</p>
                                    <div className="slide-actions">
                                        <Link
                                            href={`/category/${slide.category}`}
                                            className="btn btn-primary"
                                            tabIndex={index === currentSlide ? 0 : -1}
                                        >
                                            Смотреть все
                                        </Link>
                                        <Link
                                            href="/catalog"
                                            className="btn btn-outline"
                                            tabIndex={index === currentSlide ? 0 : -1}
                                        >
                                            Каталог
                                        </Link>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <div className="image-wrapper">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Навигация карусели */}
                <button
                    className="carousel-nav carousel-prev"
                    onClick={prevSlide}
                    aria-label="Предыдущий слайд"
                    disabled={isAnimating}
                >
                    <FiChevronLeft />
                </button>
                <button
                    className="carousel-nav carousel-next"
                    onClick={nextSlide}
                    aria-label="Следующий слайд"
                    disabled={isAnimating}
                >
                    <FiChevronRight />
                </button>

                {/* Индикаторы */}
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Перейти к слайду ${index + 1}`}
                            disabled={isAnimating}
                        />
                    ))}
                </div>
            </div>

            {/* Преимущества */}
            <div className="benefits">
                <div className="container">
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <FiAward />
                            </div>
                            <div className="benefit-info">
                                <h3>Гарантия 5 лет</h3>
                                <p>На всю продукцию</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <FiTruck />
                            </div>
                            <div className="benefit-info">
                                <h3>Доставка по городу</h3>
                                <p>Бесплатно от 1 000 000 сум</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <FiShield />
                            </div>
                            <div className="benefit-info">
                                <h3>Официальная гарантия</h3>
                                <p>Сертифицированная продукция</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;