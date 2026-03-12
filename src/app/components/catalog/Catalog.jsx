'use client'
import React, { useState, useMemo, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FiArrowRight,
    FiHeart,
    FiShoppingCart,
    FiBox,
    FiGrid,
} from 'react-icons/fi';
import { GiBathtub } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";
import { FaShower } from 'react-icons/fa';
import { PiToilet } from "react-icons/pi";
import { products } from '@/app/utils/data';
import { useCart } from '@/app/context/CartContext';
import './catalog.css';

// Мемоизированная карточка товара для предотвращения лишних ререндеров
const ProductCard = memo(({ product, categoryName, onAddToCart }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div className="product-card-wrapper">
            <Link
                href={`/product/${product.id}`}
                className="product-card"
                prefetch={false}
            >
                <div className="product-image">
                    {!imageLoaded && !imageError && (
                        <div className="image-skeleton" />
                    )}
                    {imageError ? (
                        <div className="image-error">
                            <FiBox size={32} />
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
                >
                    <FiShoppingCart />
                </button>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

// Мемоизированная кнопка категории
const CategoryButton = memo(({ cat, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`category-pill ${isActive ? 'active' : ''}`}
            aria-pressed={isActive}
        >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
            {isActive && cat.slug !== 'all' && (
                <span className="category-count">
                    {products.filter(p => p.category === cat.slug).length}
                </span>
            )}
        </button>
    );
});

CategoryButton.displayName = 'CategoryButton';

const CatalogPreview = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { addToCart } = useCart();

    // Категории с react-icons - мемоизируем чтобы не создавать при каждом рендере
    const categories = useMemo(() => [
        { slug: 'all', name: 'Все товары', icon: <FiGrid /> },
        { slug: 'unitaz', name: 'Унитазы', icon: <PiToilet /> },
        { slug: 'vanna', name: 'Ванны', icon: <GiBathtub /> },
        { slug: 'smestitel', name: 'Смесители', icon: <FaShower /> },
        { slug: 'akksesuar', name: 'Аксессуары', icon: <FiBox /> },
        { slug: 'oyna', name: 'Зеркала', icon: <GiMirrorMirror /> },
        { slug: 'play3', name: 'Шкафы', icon: <FiGrid /> },
    ], []);

    // Мемоизируем отфильтрованные товары
    const filteredProducts = useMemo(() => {
        return selectedCategory === 'all'
            ? products
            : products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    // Берем первые 8 товаров
    const previewProducts = useMemo(() => {
        return filteredProducts.slice(0, 8);
    }, [filteredProducts]);

    // Мемоизируем маппинг категорий для быстрого доступа
    const categoryMap = useMemo(() => {
        return categories.reduce((acc, cat) => {
            acc[cat.slug] = cat.name;
            return acc;
        }, {});
    }, [categories]);

    // Обработчик добавления в корзину с debounce для предотвращения множественных кликов
    const handleAddToCart = useCallback((e, product) => {
        e.preventDefault();
        e.stopPropagation();

        // Добавляем небольшую задержку чтобы предотвратить множественные клики
        if (e.detail > 1) return;

        addToCart(product);

        // Визуальная обратная связь
        const btn = e.currentTarget;
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    }, [addToCart]);

    // Обработчик смены категории
    const handleCategoryChange = useCallback((slug) => {
        setSelectedCategory(slug);
        // Плавный скролл к началу секции
        const section = document.querySelector('.catalog-preview');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <section className="catalog-preview">
            <div className="container">
                {/* Заголовок секции */}
                <div className="section-header">
                    <div>
                        <span className="section-subtitle">Наш ассортимент</span>
                        <h2 className="section-title">Популярные товары</h2>
                    </div>
                    <Link
                        href="/catalog"
                        className="view-all-btn"
                        prefetch={false}
                    >
                        Смотреть все
                        <FiArrowRight className="btn-icon" />
                    </Link>
                </div>

                {/* Категории с иконками */}
                <div className="categories-row">
                    {categories.map((cat) => (
                        <CategoryButton
                            key={cat.slug}
                            cat={cat}
                            isActive={selectedCategory === cat.slug}
                            onClick={() => handleCategoryChange(cat.slug)}
                        />
                    ))}
                </div>

                {/* Сетка товаров */}
                <div className="products-grid">
                    {previewProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            categoryName={categoryMap[product.category]}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>

                {/* Кнопка "Показать еще" */}
                {filteredProducts.length > 8 && (
                    <div className="show-more">
                        <Link
                            href={`/catalog${selectedCategory !== 'all' ? `/${selectedCategory}` : ''}`}
                            className="show-more-btn"
                            prefetch={false}
                        >
                            Показать еще {filteredProducts.length - 8} товаров
                            <FiArrowRight />
                        </Link>
                    </div>
                )}

                {/* Баннер */}
                <div className="premium-banner">
                    <div className="banner-content">
                        <h3>Премиум сантехника для вашего дома</h3>
                        <p>Итальянские, немецкие и японские бренды. 17 лет на рынке Ташкента.</p>
                        <Link href="/catalog" className="banner-btn" prefetch={false}>
                            Перейти в каталог
                            <FiArrowRight />
                        </Link>
                    </div>
                    <div className="banner-stats">
                        <div className="stat-item">
                            <span className="stat-number">17+</span>
                            <span className="stat-label">лет на рынке</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5000+</span>
                            <span className="stat-label">довольных клиентов</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">брендов</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(CatalogPreview);