// catalog.jsx
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

// Словарь для перевода характеристик на русский
const specTranslations = {
    // Основные
    size: 'Размер',
    material: 'Материал',
    model: 'Модель',
    production: 'Производство',
    quality: 'Качество',
    
    // Для унитазов
    pTrap: 'Выпуск в пол',
    sTrap: 'Выпуск в стену',
    flushingSystem: 'Система смыва',
    coating: 'Покрытие',
    body: 'Тип корпуса',
    
    // Для ванн
    type: 'Тип',
    additionalOptions: 'Дополнительно',
    leg_colors: 'Цвета ножек',
    
    // Для раковин с тумбой
    sinkMaterial: 'Материал раковины',
    furnitureMaterial: 'Материал тумбы',
    width: 'Ширина',
    color: 'Цвет',
    
    // Для зеркал
    sizes: 'Размеры',
    mirror: 'Зеркало',
    cabinet: 'Тумба',
    basin: 'Раковина',
    colors: 'Цвета',
    
    // Для смесителей
    cartridge: 'Картридж',
    spoutHeight: 'Высота излива',
    projection: 'Вылет',
    functions: 'Функции',
    centreDistance: 'Межосевое расстояние',
    showerHoseLength: 'Длина шланга',
    
    // Для инсталляции
    tank: 'Бачок',
    set: 'Комплектация',
    
    // Общее
    color_1: 'Цвет 1',
    color_2: 'Цвет 2',
    color_3: 'Цвет 3',
    color_4: 'Цвет 4',
};

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
    'smestitel_dush': <FaShower />,
    'oyna': <GiMirrorMirror />,
    'default': <FiGrid />
};

// Функция для форматирования значения характеристики
const formatSpecValue = (key, value) => {
    // Если это массив
    if (Array.isArray(value)) {
        return value.join(', ');
    }
    
    // Если это объект с размерами (mirror, cabinet, basin)
    if (key === 'sizes' && value && typeof value === 'object') {
        return Object.entries(value)
            .map(([sizeKey, sizeValue]) => {
                const translations = {
                    mirror: 'Зеркало',
                    cabinet: 'Тумба',
                    basin: 'Раковина'
                };
                return `${translations[sizeKey] || sizeKey}: ${sizeValue}`;
            })
            .join(' • ');
    }
    
    // Если это объект с цветами
    if (key === 'colors' && value && typeof value === 'object') {
        return Object.values(value)
            .filter(v => typeof v === 'string')
            .join(', ');
    }
    
    // Если это объект с цветами ножек
    if (key === 'leg_colors' && value && typeof value === 'object') {
        return Object.values(value)
            .map(item => item.color)
            .join(', ');
    }
    
    // Если это объект с color_1, color_2 и т.д.
    if (key.startsWith('color_') && value) {
        return value;
    }
    
    // Обычные значения
    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
    }
    
    return String(value);
};

// Компонент для отображения характеристик
const ProductSpecs = memo(({ specs, viewMode }) => {
    if (!specs) return null;
    
    // Для списка показываем подробно
    if (viewMode === 'list') {
        // Специальная обработка для разных типов товаров
        const renderSpecs = () => {
            const elements = [];
            
            Object.entries(specs).forEach(([key, value]) => {
                // Пропускаем служебные поля
                if (key === 'id' || key === 'category') return;
                
                // Обработка sizes (для зеркал с тумбой)
                if (key === 'sizes' && value && typeof value === 'object') {
                    Object.entries(value).forEach(([sizeKey, sizeValue]) => {
                        const translations = {
                            mirror: 'Зеркало',
                            cabinet: 'Тумба',
                            basin: 'Раковина'
                        };
                        elements.push(
                            <div key={`${key}-${sizeKey}`} className="spec-item">
                                <span className="spec-label">{translations[sizeKey] || sizeKey}:</span>
                                <span className="spec-value">{sizeValue}</span>
                            </div>
                        );
                    });
                }
                // Обработка colors (для зеркал с тумбой)
                else if (key === 'colors' && value && typeof value === 'object') {
                    const colors = Object.values(value).filter(v => typeof v === 'string');
                    if (colors.length > 0) {
                        elements.push(
                            <div key={key} className="spec-item">
                                <span className="spec-label">Цвета:</span>
                                <span className="spec-value colors-list">
                                    {colors.map((color, idx) => (
                                        <span key={idx} className="color-tag">{color}</span>
                                    ))}
                                </span>
                            </div>
                        );
                    }
                }
                // Обработка leg_colors (для ванн)
                else if (key === 'leg_colors' && value && typeof value === 'object') {
                    const legColors = Object.values(value).map(item => item.color);
                    if (legColors.length > 0) {
                        elements.push(
                            <div key={key} className="spec-item">
                                <span className="spec-label">Цвета ножек:</span>
                                <span className="spec-value colors-list">
                                    {legColors.map((color, idx) => (
                                        <span key={idx} className="color-tag">{color}</span>
                                    ))}
                                </span>
                            </div>
                        );
                    }
                }
                // Обработка additionalOptions (для ванн)
                else if (key === 'additionalOptions' && Array.isArray(value)) {
                    elements.push(
                        <div key={key} className="spec-item">
                            <span className="spec-label">Дополнительно:</span>
                            <span className="spec-value">
                                {value.join(', ')}
                            </span>
                        </div>
                    );
                }
                // Обработка color_1, color_2 и т.д.
                else if (key.startsWith('color_') && value) {
                    // Пропускаем, так как обработали выше в colors
                    return;
                }
                // Обычные характеристики
                else if (value && typeof value !== 'object') {
                    elements.push(
                        <div key={key} className="spec-item">
                            <span className="spec-label">{specTranslations[key] || key}:</span>
                            <span className="spec-value">{value}</span>
                        </div>
                    );
                }
            });
            
            return elements;
        };
        
        return (
            <div className="product-specs-list">
                {renderSpecs()}
            </div>
        );
    }
    
    // Для сетки показываем в виде компактных пилюль
    const getGridSpecs = () => {
        const pills = [];
        
        // Приоритетные характеристики для разных категорий
        if (specs.sizes) {
            // Для зеркал с тумбой показываем размеры
            const sizes = specs.sizes;
            if (sizes.cabinet) pills.push(`Тумба: ${sizes.cabinet}`);
            if (sizes.mirror) pills.push(`Зеркало: ${sizes.mirror}`);
        } else if (specs.colors) {
            // Для товаров с цветами
            const colors = Object.values(specs.colors).filter(v => typeof v === 'string');
            if (colors.length > 0) pills.push(`${colors.length} цвета`);
        } else if (specs.leg_colors) {
            // Для ванн с цветными ножками
            const legColors = Object.values(specs.leg_colors).length;
            pills.push(`${legColors} цвета ножек`);
        } else if (specs.size) {
            // Основной размер
            pills.push(specs.size);
        } else if (specs.material) {
            // Материал
            pills.push(specs.material);
        } else if (specs.model) {
            // Модель
            pills.push(`Модель: ${specs.model}`);
        } else if (specs.type) {
            // Тип
            pills.push(specs.type);
        }
        
        // Добавляем еще пару характеристик
        Object.entries(specs).forEach(([key, value]) => {
            if (pills.length >= 3) return;
            if (['sizes', 'colors', 'size', 'material', 'model', 'leg_colors', 'type'].includes(key)) return;
            if (key.startsWith('color_')) return;
            if (typeof value === 'string' && value.length < 30 && !key.includes('image')) {
                pills.push(`${specTranslations[key] || key}: ${value}`);
            }
        });
        
        return pills.slice(0, 3);
    };
    
    if (viewMode === 'grid') {
        const gridSpecs = getGridSpecs();
        return (
            <div className="product-specs-grid">
                {gridSpecs.map((spec, index) => (
                    <div key={index} className="spec-pill" title={spec}>
                        {spec}
                    </div>
                ))}
            </div>
        );
    }
    
    return null;
});

ProductSpecs.displayName = 'ProductSpecs';

// Мемоизированная карточка товара для сетки с плавной сменой фото
const GridProductCard = memo(({ product, categoryName, onAddToCart, onMouseEnter, onMouseLeave, isHovered }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [currentImage, setCurrentImage] = useState(product.image);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Плавная смена изображения при наведении
    useEffect(() => {
        if (isHovered && product.image_1) {
            setIsTransitioning(true);
            // Небольшая задержка для плавности
            setTimeout(() => {
                setCurrentImage(product.image_1);
                setTimeout(() => setIsTransitioning(false), 50);
            }, 50);
        } else {
            if (currentImage !== product.image) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentImage(product.image);
                    setTimeout(() => setIsTransitioning(false), 50);
                }, 50);
            }
        }
    }, [isHovered, product.image, product.image_1]);

    // Подсчет количества изображений
    const imageCount = useMemo(() => {
        let count = 1; // основное фото
        if (product.image_1) count++;
        if (product.image_2) count++;
        if (product.image_3) count++;
        if (product.image_4) count++;
        return count;
    }, [product]);

    return (
        <div className="product-card-grid">
            <Link
                href={`/product/${product.id}`}
                className="product-card-link"
                prefetch={false}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
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
                        <>
                            <img
                                src={currentImage}
                                alt={product.name}
                                loading="lazy"
                                decoding="async"
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                                className={`product-img ${isTransitioning ? 'fade-out' : 'fade-in'}`}
                            />
                            {/* Второе изображение для кросс-фейда */}
                            {isHovered && product.image_1 && currentImage === product.image_1 && (
                                <img
                                    src={product.image}
                                    alt={`${product.name} основное`}
                                    className="product-img fade-out"
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />
                            )}
                        </>
                    )}
                    
                    {/* Бейджи */}
                    {product.oldPrice && (
                        <span className="product-badge sale">SALE</span>
                    )}
                    {!product.inStock && (
                        <span className="product-badge out">Под заказ</span>
                    )}
                    
                    {/* Индикатор количества фото */}
                    {imageCount > 1 && (
                        <span className="photo-indicator">
                            {Array.from({ length: imageCount }).map((_, idx) => (
                                <span 
                                    key={idx} 
                                    className={`photo-dot ${idx === 0 && !isHovered ? 'active' : ''} ${idx === 1 && isHovered ? 'active' : ''}`} 
                                />
                            ))}
                        </span>
                    )}
                </div>

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{categoryName}</p>
                    
                    {/* Характеристики */}
                    <ProductSpecs specs={product.specs} viewMode="grid" />
                    
                    <div className="product-price">
                        {product.oldPrice && (
                            <span className="old-price">
                                {product.oldPrice.toLocaleString()} сум
                            </span>
                        )}
                        <span className="current-price">
                            {product.price?.toLocaleString() || 'Цена по запросу'} {product.price && 'сум'}
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
                    
                    {/* Индикатор количества фото для списка */}
                    {Object.keys(product).filter(key => key.startsWith('image_')).length > 0 && (
                        <span className="photo-indicator list">
                            +{Object.keys(product).filter(key => key.startsWith('image_')).length}
                        </span>
                    )}
                </div>

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{categoryName}</p>
                    
                    {/* Подробные характеристики для списка */}
                    <ProductSpecs specs={product.specs} viewMode="list" />
                    
                    <div className="product-price">
                        {product.oldPrice && (
                            <span className="old-price">
                                {product.oldPrice.toLocaleString()} сум
                            </span>
                        )}
                        <span className="current-price">
                            {product.price?.toLocaleString() || 'Цена по запросу'} {product.price && 'сум'}
                        </span>
                    </div>
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

// Компонент пагинации
const Pagination = memo(({ currentPage, totalPages, onPageChange }) => {
    const pages = useMemo(() => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                range.push(i);
            }
        }

        range.forEach((i) => {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        });

        return rangeWithDots;
    }, [currentPage, totalPages]);

    return (
        <div className="pagination">
            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ‹
            </button>
            
            {pages.map((page, index) => (
                <button
                    key={index}
                    className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={page === '...'}
                >
                    {page}
                </button>
            ))}
            
            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                ›
            </button>
        </div>
    );
});

Pagination.displayName = 'Pagination';

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
    
    // Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(24);
    
    // Состояние для hover эффекта (храним id товара, на который наведен курсор)
    const [hoveredProductId, setHoveredProductId] = useState(null);

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

    // Сортировка и перемешивание
    const sortedAndShuffledProducts = useMemo(() => {
        let processed = [...filteredProducts];

        // Сначала сортируем
        switch (sortBy) {
            case 'price-asc':
                processed.sort((a, b) => (a.price || 0) - (b.price || 0));
                break;
            case 'price-desc':
                processed.sort((a, b) => (b.price || 0) - (a.price || 0));
                break;
            case 'name':
                processed.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // При сортировке по умолчанию - перемешиваем
                processed = processed.sort(() => Math.random() - 0.5);
                break;
        }

        return processed;
    }, [filteredProducts, sortBy]);

    // Пагинация
    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedAndShuffledProducts.slice(startIndex, endIndex);
    }, [sortedAndShuffledProducts, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedAndShuffledProducts.length / itemsPerPage);

    // Сброс страницы при изменении фильтров
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, inStockOnly, priceRange.min, priceRange.max, sortBy]);

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

    // Обработчики hover для смены изображения
    const handleMouseEnter = useCallback((productId) => {
        setHoveredProductId(productId);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredProductId(null);
    }, []);

    // Обработчик смены категории
    const handleCategoryChange = useCallback((slug) => {
        setSelectedCategory(slug);
        setShowFilters(false);
        setCurrentPage(1);

        const catalogSection = document.querySelector('.catalog-products');
        if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    // Обработчик смены страницы с плавным скроллом
    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);
        
        const productsSection = document.querySelector('.catalog-products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    // Обработчик сброса фильтров
    const handleResetFilters = useCallback(() => {
        setSelectedCategory('all');
        setPriceRange({ min: 0, max: 5000000 });
        setInStockOnly(false);
        setSortBy('default');
        setShowFilters(false);
        setCurrentPage(1);
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
                                Найдено {sortedAndShuffledProducts.length} товаров
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
                                    <option value="default">По умолчанию (перемешать)</option>
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
                            ) : paginatedProducts.length === 0 ? (
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
                                <>
                                    <div className={`products-${viewMode}`}>
                                        {paginatedProducts.map(product => (
                                            viewMode === 'grid' ? (
                                                <GridProductCard
                                                    key={product.id}
                                                    product={product}
                                                    categoryName={categoryMap[product.category]}
                                                    onAddToCart={handleAddToCart}
                                                    onMouseEnter={() => handleMouseEnter(product.id)}
                                                    onMouseLeave={handleMouseLeave}
                                                    isHovered={hoveredProductId === product.id}
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
                                    
                                    {/* Пагинация */}
                                    {totalPages > 1 && (
                                        <Pagination
                                            currentPage={currentPage}
                                            totalPages={totalPages}
                                            onPageChange={handlePageChange}
                                        />
                                    )}
                                </>
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