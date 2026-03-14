'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    FiSearch,
    FiShoppingCart,
    FiMenu,
    FiX,
    FiPhone,
    FiClock,
    FiAward,
    FiChevronDown,
} from 'react-icons/fi';
import { products, categories } from '@/app/utils/data';
import { useCart } from '@/app/context/CartContext';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [activePhones, setActivePhones] = useState(false);
    const [showPhonesModal, setShowPhonesModal] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const [phonesTimeout, setPhonesTimeout] = useState(null);
    const searchRef = useRef(null);
    const dropdownRef = useRef(null);
    const phonesRef = useRef(null);
    const menuRef = useRef(null);
    const router = useRouter();
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Закрытие поиска при клике вне
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Закрытие модалки при клике вне
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showPhonesModal && !event.target.closest('.phones-modal-content') && !event.target.closest('.mobile-phone-icon-btn')) {
                setShowPhonesModal(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showPhonesModal]);

    // Закрытие меню при ресайзе
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (isOpen || showPhonesModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, showPhonesModal]);

    // Используем категории из data.js
    const categoriesList = useMemo(() => {
        // Если в data.js уже есть slug и name, используем как есть
        // Если структура другая, делаем маппинг
        return categories.map(cat => ({
            name: cat.name,
            slug: cat.slug
        }));
    }, []);

    const phones = [
        { name: 'Абу Сахий', number: '+998941471116', formatted: '+998 94 147-11-16' },
        { name: 'Урикзор', number: '+998977074046', formatted: '+998 97 707-40-46' },
        { name: 'Фархад', number: '+998974008180', formatted: '+998 97 400-81-80' },
    ];

    // Поиск по товарам
    useEffect(() => {
        if (searchQuery.length > 1) {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results.slice(0, 5));
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
            setShowResults(false);
            setSearchQuery('');
            setIsOpen(false);
        }
    };

    const handleProductClick = (productId) => {
        router.push(`/product/${productId}`);
        setShowResults(false);
        setSearchQuery('');
        setIsOpen(false);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(false);
        setActivePhones(false);
    };

    // Обработчики для дропдауна с задержкой
    const handleMouseEnter = (setter) => {
        return () => {
            if (dropdownTimeout) {
                clearTimeout(dropdownTimeout);
                setDropdownTimeout(null);
            }
            if (phonesTimeout) {
                clearTimeout(phonesTimeout);
                setPhonesTimeout(null);
            }
            setter(true);
        };
    };

    const handleMouseLeave = (setter, timeoutSetter) => {
        return () => {
            const timeout = setTimeout(() => {
                setter(false);
            }, 300);
            timeoutSetter(timeout);
        };
    };

    return (
        <>
            {/* Верхний бар - скрыт на мобильных устройствах */}
            <div className="navbar-top">
                <div className="container">
                    <div className="navbar-top-inner">
                        <div className="contact-info">
                            <FiPhone className="icon" />
                            <a href="tel:+998941471116" className="phone-link">
                                +998 94 147-11-16
                            </a>
                        </div>
                        <div className="years-badge">
                            <FiClock className="icon" />
                            <span>9:00 - 18:00 ежедневно</span>
                        </div>
                        <div className="premium-badge">
                            <FiAward className="icon" />
                            <span>3 магазина в Ташкенте</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основной навбар - фиксированный */}
            <nav className={`navbar-main ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar-main-inner">
                        {/* Логотип - УВЕЛИЧЕН */}
                        <Link href="/" className="logo" onClick={closeMenu}>
                            <div className="logo-wrapper">
                                <Image
                                    src="/images/logo.png"
                                    alt="Debora Ceramica"
                                    width={70}
                                    height={70}
                                    priority
                                    className="logo-image"
                                />
                            </div>
                            <span className="logo-text">Debora Ceramica</span>
                        </Link>

                        {/* Десктоп меню */}
                        <ul className={`nav-menu ${isOpen ? 'active' : ''}`} ref={menuRef}>
                            <li className="nav-item">
                                <Link href="/" onClick={closeMenu}>
                                    Главная
                                </Link>
                            </li>
                            <li
                                className={`nav-item dropdown ${activeDropdown ? 'active' : ''}`}
                                onMouseEnter={handleMouseEnter(setActiveDropdown)}
                                onMouseLeave={handleMouseLeave(setActiveDropdown, setDropdownTimeout)}
                                ref={dropdownRef}
                            >
                                <Link href="/catalog" className="dropdown-trigger" onClick={closeMenu}>
                                    Каталог
                                    <FiChevronDown className="dropdown-arrow" />
                                </Link>
                                <div className={`dropdown-menu ${activeDropdown ? 'show' : ''}`}>
                                    {categoriesList.map(cat => (
                                        <Link
                                            key={cat.slug}
                                            href={`/catalog/${cat.slug}`}
                                            className="dropdown-item"
                                            onClick={closeMenu}
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" onClick={closeMenu}>
                                    О нас
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contacts" onClick={closeMenu}>
                                    Контакты
                                </Link>
                            </li>
                        </ul>

                        {/* Поиск и корзина */}
                        <div className="nav-actions">
                            {/* Телефоны - десктоп версия */}
                            <div
                                className="phones-wrapper desktop-only"
                                onMouseEnter={handleMouseEnter(setActivePhones)}
                                onMouseLeave={handleMouseLeave(setActivePhones, setPhonesTimeout)}
                                ref={phonesRef}
                            >
                                <button className="phones-trigger">
                                    <FiPhone className="phones-icon" />
                                    <span className="phones-text">Контакты</span>
                                    <FiChevronDown className={`phones-arrow ${activePhones ? 'active' : ''}`} />
                                </button>
                                <div className={`phones-dropdown ${activePhones ? 'show' : ''}`}>
                                    {phones.map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${phone.number}`}
                                            className="phone-item"
                                        >
                                            <span className="phone-name">{phone.name}</span>
                                            <span className="phone-number">{phone.formatted}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Иконка телефона для мобильных */}
                            <button
                                className="mobile-phone-icon-btn"
                                onClick={() => setShowPhonesModal(true)}
                                aria-label="Позвонить"
                            >
                                <FiPhone />
                            </button>

                            <div className="search-wrapper" ref={searchRef}>
                                <form onSubmit={handleSearch} className="search-form">
                                    <input
                                        type="text"
                                        placeholder="Поиск..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onFocus={() => searchResults.length > 0 && setShowResults(true)}
                                        className="search-input"
                                    />
                                    <button type="submit" className="search-button" aria-label="Поиск">
                                        <FiSearch />
                                    </button>
                                </form>

                                {/* Результаты поиска */}
                                {showResults && searchResults.length > 0 && (
                                    <div className="search-results">
                                        {searchResults.map(product => (
                                            <div
                                                key={product.id}
                                                className="search-result-item"
                                                onClick={() => handleProductClick(product.id)}
                                            >
                                                <div className="result-image">
                                                    <img src={product.image} alt={product.name} loading="lazy" />
                                                </div>
                                                <div className="result-info">
                                                    <div className="result-name">{product.name}</div>
                                                    <div className="result-price">
                                                        {product.price.toLocaleString()} сум
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="search-results-footer">
                                            <button onClick={handleSearch} className="view-all-button">
                                                Все результаты ({searchResults.length})
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/cart" className={`cart-button ${isOpen ? 'mobile-hidden' : ''}`} aria-label="Корзина">
                                <FiShoppingCart />
                                {cartCount > 0 && (
                                    <span className="cart-badge">{cartCount}</span>
                                )}
                            </Link>

                            {/* Бургер меню */}
                            <button
                                className={`burger-button ${isOpen ? 'active' : ''}`}
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Меню"
                                aria-expanded={isOpen}
                            >
                                {isOpen ? <FiX /> : <FiMenu />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Модальное окно с телефонами для мобильных */}
            {showPhonesModal && (
                <div className="phones-modal-overlay" onClick={() => setShowPhonesModal(false)}>
                    <div className="phones-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="phones-modal-header">
                            <FiPhone className="phones-modal-icon" />
                            <h3 className="phones-modal-title">Наши магазины</h3>
                            <button
                                className="phones-modal-close"
                                onClick={() => setShowPhonesModal(false)}
                            >
                                <FiX />
                            </button>
                        </div>
                        <div className="phones-modal-body">
                            {phones.map((phone, index) => (
                                <a
                                    key={index}
                                    href={`tel:${phone.number}`}
                                    className="phones-modal-item"
                                    onClick={() => setShowPhonesModal(false)}
                                >
                                    <span className="phones-modal-name">{phone.name}</span>
                                    <span className="phones-modal-number">{phone.formatted}</span>
                                </a>
                            ))}
                        </div>
                        <div className="phones-modal-footer">
                            <button
                                className="phones-modal-btn"
                                onClick={() => setShowPhonesModal(false)}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Оффсет для фиксированного навбара */}
            <div className="navbar-offset" />
        </>
    );
};

export default Navbar;