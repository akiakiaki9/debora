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
            title: 'Премиальные унитазы',
            subtitle: 'Лучшие технологии',
            description: 'Унитазы с системой микролифт, антибактериальным покрытием и бесшумным смывом. Подвесные и напольные модели премиум-класса.',
            image: 'https://ultrainterio.com/wp-content/uploads/2022/01/apartment-5346462_640.jpg',
            category: 'unitaz',
            badge: 'Топ продаж'
        },
        {
            id: 2,
            title: 'Лучшие ванны',
            subtitle: 'Чугун и акрил',
            description: 'Эксклюзивные ванны из Италии. Гидромассаж, эмалевое покрытие ручной работы, эргономичные формы для максимального комфорта.',
            image: 'https://usovi.ru/wp-content/uploads/2023/09/vanna_roca_belice_175x85_233550000_interier.jpg',
            category: 'vanna',
            badge: 'Премиум'
        },
        {
            id: 3,
            title: 'Дизайнерские раковины',
            subtitle: 'Керамика и камень',
            description: 'Раковины из природного камня и высококачественной керамики. Настольные, встраиваемые и подвесные модели для любого интерьера.',
            image: 'https://vitra.uz/cdn/shop/files/vitra-geo-7425b003-0012-03_1127x_f2f77ab3-1f94-4ea9-b49e-ae48c94ec419.jpg?v=1744611678&width=480',
            category: 'rakovina',
            badge: 'Хит сезона'
        },
        {
            id: 4,
            title: 'Смесители Grohe',
            subtitle: 'Германское качество',
            description: 'Профессиональные смесители с керамическим картриджем. Термостаты, сенсорное управление, защита от известковых отложений.',
            image: 'https://images.uzum.uz/d3lq2q3q345l7k05m8ng/original.jpg',
            category: 'smestitel',
            badge: 'Акция'
        },
        {
            id: 5,
            title: 'Зеркала с подсветкой',
            subtitle: 'LED технологии',
            description: 'Зеркала с мягкой LED подсветкой, антизапотевающим покрытием и сенсорным управлением. Создайте идеальный интерьер ванной.',
            image: 'https://static.insales-cdn.com/files/1/326/26378566/original/17-fresh-inspiring-bathroom-mirror-ideas-to-shake-up-your-morning-1-1676713043161.jpg',
            category: 'oyna',
            badge: 'Новинка'
        },
        {
            id: 6,
            title: 'Мебель для ванной',
            subtitle: 'Влагостойкие материалы',
            description: 'Тумбы, пеналы и шкафы из влагостойких материалов. LED подсветка, бесшумные доводчики, вместительные системы хранения.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfBAMdEhMibzbnfyiWEnoSAOjoMmVR5keng&s',
            category: 'raktumba',
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
            nextSlide();
        }
        if (touchStart - touchEnd < -100) {
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
                                            href={`/catalog/${slide.category}`}
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