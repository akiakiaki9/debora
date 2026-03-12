// Navbar.jsx - без изменений, тот же самый
'use client'
import React, { useState, useEffect, useRef } from 'react';
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
    FiChevronDown
} from 'react-icons/fi';
import { products } from '@/app/utils/data';
import { useCart } from '@/app/context/CartContext';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const searchRef = useRef(null);
    const dropdownRef = useRef(null);
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
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const categories = [
        { name: 'Унитазы', slug: 'unitaz' },
        { name: 'Ванны', slug: 'vanna' },
        { name: 'Смесители', slug: 'smestitel' },
        { name: 'Аксессуары', slug: 'akksesuar' },
        { name: 'Зеркала', slug: 'oyna' },
        { name: 'Шкафы', slug: 'play3' },
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
    };

    // Обработчики для дропдауна с задержкой
    const handleMouseEnter = () => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
            setDropdownTimeout(null);
        }
        setActiveDropdown(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveDropdown(false);
        }, 300);
        setDropdownTimeout(timeout);
    };

    return (
        <>
            {/* Верхний бар - скрыт на мобильных устройствах */}
            <div className="navbar-top">
                <div className="container">
                    <div className="navbar-top-inner">
                        <div className="contact-info">
                            <FiPhone className="icon" />
                            <a href="tel:+998998783949" className="phone-link">
                                +998 99 878-39-49
                            </a>
                        </div>
                        <div className="years-badge">
                            <FiClock className="icon" />
                            <span>17 лет на рынке Ташкента</span>
                        </div>
                        <div className="premium-badge">
                            <FiAward className="icon" />
                            <span>Премиум сантехника</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основной навбар - фиксированный */}
            <nav className={`navbar-main ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar-main-inner">
                        {/* Логотип */}
                        <Link href="/" className="logo" onClick={closeMenu}>
                            <div className="logo-wrapper">
                                <Image
                                    src="/images/logo.png"
                                    alt="Debora Ceramica"
                                    width={60}
                                    height={60}
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
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={dropdownRef}
                            >
                                <span className="dropdown-trigger">
                                    Каталог
                                    <FiChevronDown className="dropdown-arrow" />
                                </span>
                                <div className={`dropdown-menu ${activeDropdown ? 'show' : ''}`}>
                                    {categories.map(cat => (
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

                            {/* Мобильный поиск */}
                            <li className="nav-item mobile-search">
                                <form onSubmit={handleSearch} className="mobile-search-form">
                                    <input
                                        type="text"
                                        placeholder="Поиск товаров..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="mobile-search-input"
                                    />
                                    <button type="submit" className="mobile-search-button">
                                        <FiSearch />
                                    </button>
                                </form>
                            </li>
                        </ul>

                        {/* Поиск и корзина */}
                        <div className="nav-actions">
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

            {/* Оффсет для фиксированного навбара */}
            <div className="navbar-offset" />
        </>
    );
};

export default Navbar;