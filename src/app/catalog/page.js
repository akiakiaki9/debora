'use client'
import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';
import Link from 'next/link';
import {
    FiGrid,
    FiList,
    FiFilter,
    FiHeart,
    FiShoppingCart,
    FiX,
    FiBox,
} from 'react-icons/fi';
import { GiBathtub } from "react-icons/gi";
import { PiToilet } from "react-icons/pi";
import { GiMirrorMirror } from "react-icons/gi";
import { FaShower, FaSink, FaWater } from 'react-icons/fa';
import { MdKitchen, MdChair, MdShower } from 'react-icons/md';
import { useCart } from '@/app/context/CartContext';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import { products, categories } from '../utils/data';
import './catalog.css';
import PdfFloatingButton from '../components/pdf/Pdf';

// Маппинг иконок для категорий
const categoryIcons = {
    'unitaz': <PiToilet />,
    'bide': <FaWater />,
    'chasha': <FaSink />,
    'rakovina': <FaSink />,
    'pisuar': <MdShower />,
    'chashogen': <MdKitchen />,
    'installation': <FiBox />,
    'raktumba': <MdChair />,
    'vanna': <GiBathtub />,
    'smestitel': <FaShower />,
    'oyna': <GiMirrorMirror />,
    'default': <FiGrid />
};

// Мемоизированная карточка товара для сетки
const GridProductCard = memo(({ product, categoryName, onAddToCart }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div className="product-card-grid">
            <Link
                href={`/product/${product.id}`}
                className="product-card-link"
                prefetch={false}
            >
                <div className="product-image">
                    {!imageLoaded && !imageError && (
                        <div className="image-skeleton" />
                    )}
                    {imageError ? (
                        <div className="image-error">
                            <FiGrid size={32} />
                        </div>
                    ) : (
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            style={{ opacity: imageLoaded ? 1 : 0 }}
                        />
                    )}
                    {product.oldPrice && (
                        <span className="product-badge sale">SALE</span>
                    )}
                    {!product.inStock && (
                        <span className="product-badge out">Под заказ</span>
                    )}
                </div>

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{categoryName}</p>
                    <div className="product-price">
                        {product.oldPrice && (
                            <span className="old-price">
                                {product.oldPrice.toLocaleString()} сум
                            </span>
                        )}
                        <span className="current-price">
                            {product.price?.toLocaleString() || 'Цена по запросу'}
                        </span>
                    </div>
                </div>
            </Link>

            <div className="product-actions">
                <button
                    className="action-btn cart-btn"
                    aria-label="В корзину"
                    onClick={(e) => onAddToCart(e, product)}
                    disabled={!product.inStock}
                >
                    <FiShoppingCart />
                </button>
            </div>
        </div>
    );
});

GridProductCard.displayName = 'GridProductCard';

// Мемоизированная карточка товара для списка
const ListProductCard = memo(({ product, categoryName, onAddToCart }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div className="product-card-list">
            <Link
                href={`/product/${product.id}`}
                className="product-card-link"
                prefetch={false}
            >
                <div className="product-image">
                    {!imageLoaded && !imageError && (
                        <div className="image-skeleton" />
                    )}
                    {imageError ? (
                        <div className="image-error">
                            <FiGrid size={32} />
                        </div>
                    ) : (
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            style={{ opacity: imageLoaded ? 1 : 0 }}
                        />
                    )}
                    {product.oldPrice && (
                        <span className="product-badge sale">SALE</span>
                    )}
                    {!product.inStock && (
                        <span className="product-badge out">Под заказ</span>
                    )}
                </div>

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{categoryName}</p>
                    <div className="product-price">
                        {product.oldPrice && (
                            <span className="old-price">
                                {product.oldPrice.toLocaleString()} сум
                            </span>
                        )}
                        <span className="current-price">
                            {product.price?.toLocaleString() || 'Цена по запросу'}
                        </span>
                    </div>
                    <p className="product-description">
                        {product.specs && Object.entries(product.specs)
                            .slice(0, 3)
                            .map(([key, value]) => `${key}: ${value}`)
                            .join(' • ')}
                    </p>
                </div>
            </Link>

            {product.inStock && (
                <button
                    className="list-cart-btn"
                    onClick={(e) => onAddToCart(e, product)}
                >
                    <FiShoppingCart />
                    В корзину
                </button>
            )}
        </div>
    );
});

ListProductCard.displayName = 'ListProductCard';

// Красивая кнопка категории для главной страницы
const CategoryButton = memo(({ category, icon }) => {
    return (
        <Link href={`/catalog/${category.slug}`} className="category-button">
            <span className="category-button-icon">{icon}</span>
            <span className="category-button-name">{category.name}</span>
            <span className="category-button-count">
                {products.filter(p => p.category === category.slug).length}
            </span>
        </Link>
    );
});

CategoryButton.displayName = 'CategoryButton';

// Мемоизированная кнопка категории для фильтра
const CategoryFilterButton = memo(({ cat, isActive, onClick }) => {
    const icon = categoryIcons[cat.slug] || categoryIcons.default;

    return (
        <button
            className={`category-filter-btn ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className="category-icon">{icon}</span>
            <span className="category-name">{cat.name}</span>
            <span className="category-count">
                {products.filter(p => p.category === cat.slug).length}
            </span>
        </button>
    );
});

CategoryFilterButton.displayName = 'CategoryFilterButton';

export default function CatalogPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000000 });
    const [inStockOnly, setInStockOnly] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { addToCart } = useCart();

    // Категории с иконками и подсчетом
    const categoriesWithIcons = useMemo(() => {
        return categories.map(cat => ({
            ...cat,
            icon: categoryIcons[cat.slug] || categoryIcons.default,
            count: products.filter(p => p.category === cat.slug).length
        }));
    }, []);

    // Мемоизация маппинга категорий
    const categoryMap = useMemo(() => {
        return categories.reduce((acc, cat) => {
            acc[cat.slug] = cat.name;
            return acc;
        }, {});
    }, []);

    // Фильтрация товаров
    const filteredProducts = useMemo(() => {
        setIsLoading(true);

        const result = products.filter(product => {
            if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
            if (inStockOnly && !product.inStock) return false;
            if (product.price && (product.price < priceRange.min || product.price > priceRange.max)) return false;
            return true;
        });

        setTimeout(() => setIsLoading(false), 0);
        return result;
    }, [selectedCategory, inStockOnly, priceRange.min, priceRange.max]);

    // Сортировка
    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];

        switch (sortBy) {
            case 'price-asc':
                sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
                break;
            case 'price-desc':
                sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
                break;
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        return sorted;
    }, [filteredProducts, sortBy]);

    // Обработчик добавления в корзину
    const handleAddToCart = useCallback((e, product) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.detail > 1) return;

        addToCart(product);

        const btn = e.currentTarget;
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    }, [addToCart]);

    // Обработчик смены категории
    const handleCategoryChange = useCallback((slug) => {
        setSelectedCategory(slug);
        setShowFilters(false);

        const catalogSection = document.querySelector('.catalog-products');
        if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    // Обработчик сброса фильтров
    const handleResetFilters = useCallback(() => {
        setSelectedCategory('all');
        setPriceRange({ min: 0, max: 5000000 });
        setInStockOnly(false);
        setSortBy('default');
        setShowFilters(false);
    }, []);

    // Блокировка скролла при открытых фильтрах
    useEffect(() => {
        if (showFilters) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showFilters]);

    return (
        <>
            <Navbar />
            <PdfFloatingButton />
            <main className="catalog-page">
                <div className="container">
                    {/* Заголовок */}
                    <div className="catalog-header">
                        <div>
                            <h1 className="catalog-title">Каталог товаров</h1>
                            <p className="catalog-count">
                                Найдено {sortedProducts.length} товаров
                            </p>
                        </div>

                        <button
                            className="mobile-filter-btn"
                            onClick={() => setShowFilters(true)}
                            aria-label="Открыть фильтры"
                        >
                            <FiFilter />
                            Фильтры
                        </button>
                    </div>

                    {/* Красивые кнопки категорий перед каталогом */}
                    <div className="categories-showcase">
                        <h2 className="categories-showcase-title">Категории</h2>
                        <div className="categories-grid">
                            {categoriesWithIcons.map(category => (
                                <CategoryButton
                                    key={category.id}
                                    category={category}
                                    icon={category.icon}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="catalog-content">
                        {/* Фильтры - десктоп */}
                        <aside className={`catalog-filters ${showFilters ? 'mobile-show' : ''}`}>
                            <div className="filters-header">
                                <h3>Фильтры</h3>
                                <button
                                    className="close-filters"
                                    onClick={() => setShowFilters(false)}
                                    aria-label="Закрыть фильтры"
                                >
                                    <FiX />
                                </button>
                            </div>

                            {/* Категории */}
                            <div className="filter-section">
                                <h4 className="filter-title">Категории</h4>
                                <div className="category-list">
                                    <CategoryFilterButton
                                        cat={{ slug: 'all', name: 'Все товары' }}
                                        isActive={selectedCategory === 'all'}
                                        onClick={() => handleCategoryChange('all')}
                                    />
                                    {categoriesWithIcons.map(cat => (
                                        <CategoryFilterButton
                                            key={cat.slug}
                                            cat={cat}
                                            isActive={selectedCategory === cat.slug}
                                            onClick={() => handleCategoryChange(cat.slug)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Цена */}
                            <div className="filter-section">
                                <h4 className="filter-title">Цена</h4>
                                <div className="price-inputs">
                                    <div className="price-input">
                                        <label>От</label>
                                        <input
                                            type="number"
                                            value={priceRange.min}
                                            onChange={(e) => setPriceRange(prev => ({
                                                ...prev,
                                                min: Math.max(0, Number(e.target.value))
                                            }))}
                                            placeholder="0"
                                            min="0"
                                            max={priceRange.max}
                                        />
                                    </div>
                                    <div className="price-input">
                                        <label>До</label>
                                        <input
                                            type="number"
                                            value={priceRange.max}
                                            onChange={(e) => setPriceRange(prev => ({
                                                ...prev,
                                                max: Math.max(prev.min, Number(e.target.value))
                                            }))}
                                            placeholder="5000000"
                                            min={priceRange.min}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Наличие */}
                            <div className="filter-section">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={inStockOnly}
                                        onChange={(e) => setInStockOnly(e.target.checked)}
                                    />
                                    <span>Только в наличии</span>
                                </label>
                            </div>

                            {/* Сброс фильтров */}
                            <button
                                className="reset-filters"
                                onClick={handleResetFilters}
                            >
                                Сбросить фильтры
                            </button>
                        </aside>

                        {/* Товары */}
                        <div className="catalog-products">
                            {/* Сортировка и вид */}
                            <div className="products-toolbar">
                                <select
                                    className="sort-select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    aria-label="Сортировка"
                                >
                                    <option value="default">По умолчанию</option>
                                    <option value="price-asc">Цена: по возрастанию</option>
                                    <option value="price-desc">Цена: по убыванию</option>
                                    <option value="name">По названию</option>
                                </select>

                                <div className="view-toggle">
                                    <button
                                        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                        onClick={() => setViewMode('grid')}
                                        aria-label="Сетка"
                                    >
                                        <FiGrid />
                                    </button>
                                    <button
                                        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                        onClick={() => setViewMode('list')}
                                        aria-label="Список"
                                    >
                                        <FiList />
                                    </button>
                                </div>
                            </div>

                            {/* Сетка товаров */}
                            {isLoading ? (
                                <div className="products-loading">
                                    <div className="loading-spinner"></div>
                                </div>
                            ) : sortedProducts.length === 0 ? (
                                <div className="no-products">
                                    <p>Товары не найдены</p>
                                    <button
                                        className="reset-filters-btn"
                                        onClick={handleResetFilters}
                                    >
                                        Сбросить фильтры
                                    </button>
                                </div>
                            ) : (
                                <div className={`products-${viewMode}`}>
                                    {sortedProducts.map(product => (
                                        viewMode === 'grid' ? (
                                            <GridProductCard
                                                key={product.id}
                                                product={product}
                                                categoryName={categoryMap[product.category]}
                                                onAddToCart={handleAddToCart}
                                            />
                                        ) : (
                                            <ListProductCard
                                                key={product.id}
                                                product={product}
                                                categoryName={categoryMap[product.category]}
                                                onAddToCart={handleAddToCart}
                                            />
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Оверлей для мобильных фильтров */}
            {showFilters && (
                <div
                    className="filters-overlay"
                    onClick={() => setShowFilters(false)}
                />
            )}
        </>
    );
};