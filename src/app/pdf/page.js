'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
    FiBookOpen,
    FiEye,
    FiFileText,
    FiDownload,
    FiSearch,
    FiChevronRight,
    FiAward,
    FiStar,
    FiGrid
} from 'react-icons/fi';
import { pdfFiles, categoryNames, getCategoriesFromPdfs } from '../utils/pdfData';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './pdf.css';

// Маппинг изображений для категорий (из catalog.jsx)
const categoryImages = {
    'unitaz': 'https://ultrainterio.com/wp-content/uploads/2022/01/apartment-5346462_640.jpg',
    'bide': 'https://www.oli-world.com/image_temp/960X600_618X535_crop_190522034156852.jpg',
    'chasha': 'https://cdn.basicdecor.ru/files/media/app_pictures/dde/196290/w350/vannaya-zagorodnoe-bungalo-dvoih-foto-15.webp',
    'rakovina': 'https://vitra.uz/cdn/shop/files/vitra-geo-7425b003-0012-03_1127x_f2f77ab3-1f94-4ea9-b49e-ae48c94ec419.jpg?v=1744611678&width=480',
    'pisuar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6KkTWS1DRX29F3zfHOkBVcPm8ozwS12IKg&s',
    'chashogen': 'https://www.jabrasanitary.com/image/cache/catalog/jabra/product/532/asian_squat_toilet-800x800.jpg',
    'installation': 'https://shop.kerama-marazzi.ru/upload/iblock/307/017wrmzxyf7b86mk7uo4lpo13jc0ahg5/INST.PRO.WC.jpg',
    'raktumba': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfBAMdEhMibzbnfyiWEnoSAOjoMmVR5keng&s',
    'vanna': 'https://usovi.ru/wp-content/uploads/2023/09/vanna_roca_belice_175x85_233550000_interier.jpg',
    'smestitel': 'https://images.uzum.uz/d3lq2q3q345l7k05m8ng/original.jpg',
    'oyna': 'https://static.insales-cdn.com/files/1/326/26378566/original/17-fresh-inspiring-bathroom-mirror-ideas-to-shake-up-your-morning-1-1676713043161.jpg',
    'akksesuar': 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&auto=format',
    'play3': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&auto=format',
    'default': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format'
};

// Функция для получения изображения на основе категорий файла
const getImageForPdf = (pdf) => {
    // Приоритет категорий для отображения
    const priorityOrder = [
        'unitaz', 'vanna', 'smestitel', 'oyna', 'rakovina',
        'chasha', 'installation', 'pisuar', 'chashogen',
        'raktumba', 'bide', 'akksesuar', 'play3'
    ];

    // Находим первую приоритетную категорию из списка
    for (const cat of priorityOrder) {
        if (pdf.categories.includes(cat)) {
            return categoryImages[cat] || categoryImages.default;
        }
    }

    return categoryImages.default;
};

// Карточка PDF с премиум анимацией
const PdfCard = ({ pdf }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        setImageUrl(getImageForPdf(pdf));
    }, [pdf]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleOpenPdf = () => {
        window.open(pdf.filePath, '_blank');
    };

    const handleDownloadPdf = (e) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = pdf.filePath;
        link.download = pdf.name + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Форматируем категории для отображения
    const displayCategories = pdf.categories
        .map(cat => categoryNames[cat] || cat)
        .slice(0, 3)
        .join(' • ');

    const additionalCount = pdf.categories.length > 3 ? ` +${pdf.categories.length - 3}` : '';

    return (
        <div
            className={`pdf-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="pdf-card-image">
                {!imageError ? (
                    <img
                        src={imageUrl}
                        alt={pdf.name}
                        loading="lazy"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="pdf-image-fallback">
                        <FiGrid size={40} />
                    </div>
                )}
                <div className={`pdf-card-overlay ${isHovered ? 'active' : ''}`}>
                    <button className="pdf-view-btn" onClick={handleOpenPdf}>
                        <FiEye />
                        Открыть
                    </button>
                    <button className="pdf-download-btn" onClick={handleDownloadPdf}>
                        <FiDownload />
                        Скачать
                    </button>
                </div>
                <div className="pdf-badge">
                    <FiFileText />
                </div>
            </div>

            <div className="pdf-card-content">
                <h3 className="pdf-card-title">{pdf.name}</h3>
                <div className="pdf-card-categories">
                    <span className="categories-label">
                        {displayCategories}
                        {additionalCount}
                    </span>
                </div>
                <div className="pdf-card-meta">
                    <span>{pdf.pageCount} стр.</span>
                    <span>•</span>
                    <span>{pdf.size}</span>
                </div>
                <div className="pdf-card-actions">
                    <button className="pdf-view-btn" onClick={handleOpenPdf}>
                        <FiEye />
                        Открыть
                    </button>
                    <button className="pdf-download-btn" onClick={handleDownloadPdf}>
                        <FiDownload />
                        Скачать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function PdfCatalogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Получаем уникальные категории из pdfFiles
    const categories = useMemo(() => {
        const cats = getCategoriesFromPdfs();
        return ['all', ...cats];
    }, []);

    // Фильтрация PDF по поиску и категории
    const filteredPdfs = useMemo(() => {
        return pdfFiles.filter(pdf => {
            const matchesSearch = pdf.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || pdf.categories.includes(selectedCategory);
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Статистика
    const stats = useMemo(() => {
        return {
            total: pdfFiles.length,
            categories: categories.length - 1,
            totalPages: pdfFiles.reduce((acc, pdf) => acc + pdf.pageCount, 0)
        };
    }, []);

    return (
        <>
            <Navbar />
            <main className="pdf-page">
                {/* Hero секция с анимацией */}
                <section className={`pdf-hero ${isVisible ? 'visible' : ''}`}>
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-icon">
                                <FiBookOpen />
                            </div>
                            <h1 className="hero-title">PDF Каталоги</h1>
                            <p className="hero-description">
                                Скачайте или просмотрите онлайн наши каталоги с сантехникой.
                                Актуальные коллекции, размеры и характеристики.
                            </p>

                            {/* Статистика с анимацией */}
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">{stats.total}</span>
                                    <span className="stat-label">каталогов</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">{stats.categories}</span>
                                    <span className="stat-label">категорий</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">{stats.totalPages}+</span>
                                    <span className="stat-label">страниц</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-decoration">
                        <div className="decoration-circle"></div>
                        <div className="decoration-circle"></div>
                        <div className="decoration-circle"></div>
                    </div>
                </section>

                <div className="container">
                    {/* Хлебные крошки */}
                    <div className="breadcrumbs">
                        <Link href="/">Главная</Link>
                        <FiChevronRight className="breadcrumb-icon" />
                        <Link href="/catalog">Каталог</Link>
                        <FiChevronRight className="breadcrumb-icon" />
                        <span>PDF Каталоги</span>
                    </div>

                    {/* Поиск и фильтры */}
                    <div className="pdf-controls">
                        <div className="search-wrapper">
                            <FiSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Поиск каталогов..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="category-filters">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`category-filter ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat === 'all' ? 'Все' : categoryNames[cat] || cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Результаты поиска */}
                    <div className="results-info">
                        <p>
                            Найдено <strong>{filteredPdfs.length}</strong> каталогов
                            {searchQuery && <span> по запросу «{searchQuery}»</span>}
                            {selectedCategory !== 'all' && (
                                <span> в категории «{categoryNames[selectedCategory] || selectedCategory}»</span>
                            )}
                        </p>
                    </div>

                    {/* Сетка PDF с анимацией */}
                    {filteredPdfs.length === 0 ? (
                        <div className="no-results">
                            <FiBookOpen className="no-results-icon" />
                            <h3>Каталоги не найдены</h3>
                            <p>Попробуйте изменить параметры поиска</p>
                            <button
                                className="reset-btn"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                            >
                                Сбросить фильтры
                            </button>
                        </div>
                    ) : (
                        <div className="pdf-grid">
                            {filteredPdfs.map((pdf, index) => (
                                <div
                                    key={pdf.id}
                                    className="pdf-grid-item"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <PdfCard pdf={pdf} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Информационный блок с преимуществами */}
                    <div className="pdf-info">
                        <h2>О каталогах</h2>
                        <p>
                            В наших PDF каталогах вы найдете полную информацию о всей продукции:
                            технические характеристики, размеры, материалы, цвета и варианты исполнения.
                            Каталоги регулярно обновляются, добавляются новые коллекции.
                        </p>
                        <div className="info-features">
                            <div className="feature">
                                <FiEye className="feature-icon" />
                                <span>Просмотр онлайн</span>
                            </div>
                            <div className="feature">
                                <FiDownload className="feature-icon" />
                                <span>Скачивание бесплатно</span>
                            </div>
                            <div className="feature">
                                <FiFileText className="feature-icon" />
                                <span>Актуальная информация</span>
                            </div>
                            <div className="feature">
                                <FiAward className="feature-icon" />
                                <span>Премиум качество</span>
                            </div>
                        </div>
                    </div>

                    {/* Блок с популярными категориями */}
                    <div className="popular-categories">
                        <h3>Популярные категории</h3>
                        <div className="popular-grid">
                            {categories.slice(1, 7).map(cat => (
                                <button
                                    key={cat}
                                    className="popular-category"
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    <div className="popular-icon">
                                        <FiStar />
                                    </div>
                                    <span>{categoryNames[cat] || cat}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}