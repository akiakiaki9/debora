'use client'
import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    FiGrid,
    FiList,
    FiFilter,
    FiHeart,
    FiShoppingCart,
    FiX,
    FiArrowLeft,
    FiChevronRight
} from 'react-icons/fi';
import { PiToilet } from "react-icons/pi";
import { GiBathtub } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";
import { FaShower } from 'react-icons/fa';
import { useCart } from '@/app/context/CartContext';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import { products } from '@/app/utils/data';
import './category.css';

// Мемоизированная карточка товара для сетки
const GridProductCard = memo(({ product, onAddToCart }) => {
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
                    <div className="product-price">
                        {product.oldPrice && (
                            <span className="old-price">
                                {product.oldPrice.toLocaleString()} сум
                            </span>
                        )}
                        <span className="current-price">
                            {product.price.toLocaleString()} сум
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
const ListProductCard = memo(({ product, onAddToCart }) => {
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
                    <div className="product-price">
                        {product.oldPrice && (
                            <span className="old-price">
                                {product.oldPrice.toLocaleString()} сум
                            </span>
                        )}
                        <span className="current-price">
                            {product.price.toLocaleString()} сум
                        </span>
                    </div>
                    <p className="product-description">{product.description}</p>
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

export default function CategoryPage() {
    const params = useParams();
    const category = params.category;
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('default');
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000000 });
    const [inStockOnly, setInStockOnly] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { addToCart } = useCart();

    // Информация о категории - мемоизируем
    const categoryInfo = useMemo(() => ({
        unitaz: {
            name: 'Унитазы',
            icon: <PiToilet />,
            description: 'Премиальные унитазы с японскими системами смыва, микролифтом и антибактериальным покрытием. Подвесные и напольные модели.',
            banner: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1200&auto=format'
        },
        vanna: {
            name: 'Ванны',
            icon: <GiBathtub />,
            description: 'Чугунные, акриловые и стальные ванны премиум-класса. Итальянское качество, эмалевое покрытие, гидромассаж.',
            banner: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format'
        },
        smestitel: {
            name: 'Смесители',
            icon: <FaShower />,
            description: 'Германские смесители Grohe, Hansgrohe. Однорычажные, термостаты, с душем. Керамический картридж, пожизненная гарантия.',
            banner: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1200&auto=format'
        },
        akksesuar: {
            name: 'Аксессуары',
            icon: <FiGrid />,
            description: 'Аксессуары для ванной комнаты: держатели, полотенцесушители, крючки, мыльницы. Хромированное покрытие, нержавеющая сталь.',
            banner: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&auto=format'
        },
        oyna: {
            name: 'Зеркала',
            icon: <GiMirrorMirror />,
            description: 'Зеркала с LED подсветкой, антизапотевание, с полками. Итальянский дизайн, премиум качество.',
            banner: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&auto=format'
        },
        play3: {
            name: 'Шкафы',
            icon: <FiGrid />,
            description: 'Влагостойкие шкафы для ванной. 3-створчатые пеналы, тумбы под раковину, системы хранения.',
            banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format'
        }
    }), []);

    const currentCategory = categoryInfo[category] || {
        name: 'Категория',
        icon: <FiGrid />,
        description: 'Товары данной категории',
        banner: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format'
    };

    // Мемоизируем товары категории
    const categoryProducts = useMemo(() => {
        return products.filter(p => p.category === category);
    }, [category]);

    // Фильтрация с debounce
    const filteredProducts = useMemo(() => {
        setIsLoading(true);

        const result = categoryProducts.filter(product => {
            if (inStockOnly && !product.inStock) return false;
            if (product.price < priceRange.min || product.price > priceRange.max) return false;
            return true;
        });

        setTimeout(() => setIsLoading(false), 0);
        return result;
    }, [categoryProducts, inStockOnly, priceRange.min, priceRange.max]);

    // Сортировка
    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];

        switch (sortBy) {
            case 'price-asc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.price - a.price);
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

    // Обработчик сброса фильтров
    const handleResetFilters = useCallback(() => {
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

    // Если категория не найдена
    if (!categoryInfo[category]) {
        return (
            <>
                <Navbar />
                <main className="category-page">
                    <div className="container">
                        <div className="category-not-found">
                            <h1>Категория не найдена</h1>
                            <p>Извините, запрошенная категория не существует</p>
                            <Link href="/catalog" className="btn btn-primary">
                                <FiArrowLeft />
                                Вернуться в каталог
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="category-page">
                {/* Баннер категории */}
                <div
                    className="category-banner"
                    style={{ backgroundImage: `url(${currentCategory.banner})` }}
                >
                    <div className="banner-overlay"></div>
                    <div className="container">
                        <div className="banner-content">
                            <div className="category-icon-large">
                                {currentCategory.icon}
                            </div>
                            <h1 className="category-title">{currentCategory.name}</h1>
                            <p className="category-description">{currentCategory.description}</p>
                            <div className="category-stats">
                                <span className="stat">
                                    Товаров: <strong>{categoryProducts.length}</strong>
                                </span>
                                <span className="stat">
                                    В наличии: <strong>{categoryProducts.filter(p => p.inStock).length}</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* Хлебные крошки */}
                    <div className="breadcrumbs">
                        <Link href="/">Главная</Link>
                        <FiChevronRight className="breadcrumb-icon" />
                        <Link href="/catalog">Каталог</Link>
                        <FiChevronRight className="breadcrumb-icon" />
                        <span>{currentCategory.name}</span>
                    </div>

                    {/* Заголовок с фильтром для мобильных */}
                    <div className="category-header">
                        <h2 className="category-subtitle">
                            {currentCategory.name} в Ташкенте
                        </h2>

                        <button
                            className="mobile-filter-btn"
                            onClick={() => setShowFilters(true)}
                            aria-label="Открыть фильтры"
                        >
                            <FiFilter />
                            Фильтры
                        </button>
                    </div>

                    <div className="category-content">
                        {/* Фильтры */}
                        <aside className={`category-filters ${showFilters ? 'mobile-show' : ''}`}>
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
                        <div className="category-products">
                            {/* Сортировка и вид */}
                            <div className="products-toolbar">
                                <div className="results-count">
                                    Найдено: <strong>{sortedProducts.length}</strong> товаров
                                </div>

                                <div className="toolbar-right">
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
                            </div>

                            {/* Сетка товаров */}
                            {isLoading ? (
                                <div className="products-loading">
                                    <div className="loading-spinner"></div>
                                </div>
                            ) : sortedProducts.length === 0 ? (
                                <div className="no-products">
                                    <p>В данной категории нет товаров</p>
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
                                                onAddToCart={handleAddToCart}
                                            />
                                        ) : (
                                            <ListProductCard
                                                key={product.id}
                                                product={product}
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
}