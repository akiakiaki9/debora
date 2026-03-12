'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products } from '@/app/utils/data';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results.slice(0, 5)); // Показываем только 5 результатов
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
        }
    };

    const handleProductClick = (productId) => {
        router.push(`/product/${productId}`);
        setShowResults(false);
        setSearchQuery('');
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                {/* Верхний бар с контактами */}
                <div className="navbar-top">
                    <div className="container">
                        <div className="navbar-top-inner">
                            <div className="contact">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"
                                        stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <span>+998 99 878-39-49</span>
                            </div>
                            <div className="years">
                                <span>17 лет на рынке Ташкента</span>
                            </div>
                            <div className="social">
                                <span>Премиум сантехника</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Основной навбар */}
                <div className="navbar-main">
                    <div className="container">
                        <div className="navbar-main-inner">
                            {/* Логотип - круглый */}
                            <Link href="/" className="logo">
                                <div className="logo-image">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Debora Ceramica"
                                        width={60}
                                        height={60}
                                        priority
                                        className="rounded-logo"
                                    />
                                </div>
                            </Link>

                            {/* Десктоп меню */}
                            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                                <li><Link href="/">Главная</Link></li>
                                <li className="dropdown">
                                    <span>Каталог</span>
                                    <div className="dropdown-menu">
                                        {categories.map(cat => (
                                            <Link key={cat.slug} href={`/catalog/${cat.slug}`}>
                                                {cat.name}
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                                <li><Link href="/collections">Коллекции</Link></li>
                                <li><Link href="/about">О нас</Link></li>
                                <li><Link href="/contacts">Контакты</Link></li>
                            </ul>

                            {/* Поиск и корзина */}
                            <div className="nav-actions">
                                <div className="search-container">
                                    <form onSubmit={handleSearch} className="search">
                                        <input
                                            type="text"
                                            placeholder="Поиск..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onFocus={() => searchResults.length > 0 && setShowResults(true)}
                                        />
                                        <button type="submit" className="search-submit">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                                <path d="M21 21L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
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
                                                        <img src={product.image} alt={product.name} />
                                                    </div>
                                                    <div className="result-info">
                                                        <div className="result-name">{product.name}</div>
                                                        <div className="result-price">{product.price.toLocaleString()} сум</div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="search-results-footer">
                                                <button onClick={handleSearch} className="view-all">
                                                    Посмотреть все результаты
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button className="cart">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <circle cx="9" cy="21" r="2" fill="currentColor" />
                                        <circle cx="20" cy="21" r="2" fill="currentColor" />
                                        <path d="M1 1H5L7.5 15H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <span className="cart-count">3</span>
                                </button>

                                {/* Бургер меню */}
                                <button
                                    className={`burger ${isOpen ? 'active' : ''}`}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navbar-offset"></div>
        </>
    );
};

export default Navbar;