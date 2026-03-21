'use client'
import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';
import Link from 'next/link';
import {
    FiGrid,
    FiList,
    FiFilter,
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
import PdfButton from '../components/pdf/Pdf';

// Словарь для перевода характеристик на русский
const specTranslations = {
    size: 'Размер',
    material: 'Материал',
    model: 'Модель',
    production: 'Производство',
    quality: 'Качество',
    pTrap: 'Выпуск в пол',
    sTrap: 'Выпуск в стену',
    flushingSystem: 'Система смыва',
    coating: 'Покрытие',
    body: 'Тип корпуса',
    type: 'Тип',
    additionalOptions: 'Дополнительно',
    leg_colors: 'Цвета ножек',
    sinkMaterial: 'Материал раковины',
    furnitureMaterial: 'Материал тумбы',
    width: 'Ширина',
    color: 'Цвет',
    sizes: 'Размеры',
    mirror: 'Зеркало',
    cabinet: 'Тумба',
    basin: 'Раковина',
    colors: 'Цвета',
    cartridge: 'Картридж',
    spoutHeight: 'Высота излива',
    projection: 'Вылет',
    functions: 'Функции',
    centreDistance: 'Межосевое расстояние',
    showerHoseLength: 'Длина шланга',
    tank: 'Бачок',
    set: 'Комплектация',
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

// URL изображений для категорий
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
    'default': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format'
};

// Функция для форматирования значения характеристики
const formatSpecValue = (key, value) => {
    if (Array.isArray(value)) {
        return value.join(', ');
    }

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

    if (key === 'colors' && value && typeof value === 'object') {
        return Object.values(value)
            .filter(v => typeof v === 'string')
            .join(', ');
    }

    if (key === 'leg_colors' && value && typeof value === 'object') {
        return Object.values(value)
            .map(item => item.color)
            .join(', ');
    }

    if (key.startsWith('color_') && value) {
        return value;
    }

    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
    }

    return String(value);
};

// Компонент для отображения характеристик
const ProductSpecs = memo(({ specs, viewMode }) => {
    if (!specs) return null;

    if (viewMode === 'list') {
        const renderSpecs = () => {
            const elements = [];

            Object.entries(specs).forEach(([key, value]) => {
                if (key === 'id' || key === 'category') return;

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
                else if (key.startsWith('color_') && value) {
                    return;
                }
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

    const getGridSpecs = () => {
        const pills = [];

        if (specs.sizes) {
            const sizes = specs.sizes;
            if (sizes.cabinet) pills.push(`Тумба: ${sizes.cabinet}`);
            if (sizes.mirror) pills.push(`Зеркало: ${sizes.mirror}`);
        } else if (specs.colors) {
            const colors = Object.values(specs.colors).filter(v => typeof v === 'string');
            if (colors.length > 0) pills.push(`${colors.length} цвета`);
        } else if (specs.leg_colors) {
            const legColors = Object.values(specs.leg_colors).length;
            pills.push(`${legColors} цвета ножек`);
        } else if (specs.size) {
            pills.push(specs.size);
        } else if (specs.material) {
            pills.push(specs.material);
        } else if (specs.model) {
            pills.push(`Модель: ${specs.model}`);
        } else if (specs.type) {
            pills.push(specs.type);
        }

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

// Улучшенный компонент изображения с обработкой вертикальных фото
const ProductImage = memo(({ product, isHovered, onMouseEnter, onMouseLeave }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [currentImage, setCurrentImage] = useState(product.image);
    const [imageOrientation, setImageOrientation] = useState('landscape');

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            if (img.height > img.width * 1.2) {
                setImageOrientation('portrait');
            } else if (img.width > img.height * 1.2) {
                setImageOrientation('landscape');
            } else {
                setImageOrientation('square');
            }
        };
        img.src = currentImage;
    }, [currentImage]);

    useEffect(() => {
        if (isHovered && product.image_1) {
            setCurrentImage(product.image_1);
        } else {
            setCurrentImage(product.image);
        }
    }, [isHovered, product.image, product.image_1]);

    const imageCount = useMemo(() => {
        let count = 1;
        if (product.image_1) count++;
        if (product.image_2) count++;
        if (product.image_3) count++;
        if (product.image_4) count++;
        return count;
    }, [product]);

    const handleImageError = () => {
        setImageError(true);
        setCurrentImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR202VPZfMD9kdS4yqx2x8aeg6DYlFypnBNBA&s');
    };

    return (
        <div
            className={`product-image-container ${imageOrientation}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {!imageLoaded && !imageError && (
                <div className="image-skeleton" />
            )}
            {imageError ? (
                <div className="image-error">
                    <FiGrid size={32} />
                </div>
            ) : (
                <img
                    src={currentImage}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setImageLoaded(true)}
                    onError={handleImageError}
                    className={`product-img ${imageLoaded ? 'loaded' : 'loading'} ${imageOrientation}`}
                />
            )}

            {product.oldPrice && (
                <span className="product-badge sale">SALE</span>
            )}
            {!product.inStock && (
                <span className="product-badge out">Под заказ</span>
            )}

            {imageCount > 1 && (
                <div className="photo-indicator">
                    {Array.from({ length: imageCount }).map((_, idx) => (
                        <span
                            key={idx}
                            className={`photo-dot ${idx === 0 && !isHovered ? 'active' : ''} ${idx === 1 && isHovered ? 'active' : ''}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});

ProductImage.displayName = 'ProductImage';

// Мемоизированная карточка товара для сетки (синяя с золотом)
const GridProductCard = memo(({ product, categoryName, onAddToCart, onMouseEnter, onMouseLeave, isHovered }) => {
    return (
        <div className="product-card-grid">
            <Link
                href={`/product/${product.id}`}
                className="product-card-link"
                prefetch={false}
            >
                <ProductImage
                    product={product}
                    isHovered={isHovered}
                    onMouseEnter={() => onMouseEnter(product.id)}
                    onMouseLeave={onMouseLeave}
                />

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{categoryName}</p>

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

// Мемоизированная карточка товара для списка (синяя с золотом)
const ListProductCard = memo(({ product, categoryName, onAddToCart }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [imageOrientation, setImageOrientation] = useState('landscape');

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            if (img.height > img.width * 1.2) {
                setImageOrientation('portrait');
            } else if (img.width > img.height * 1.2) {
                setImageOrientation('landscape');
            } else {
                setImageOrientation('square');
            }
        };
        img.src = product.image;
    }, [product.image]);

    return (
        <div className="product-card-list">
            <Link
                href={`/product/${product.id}`}
                className="product-card-link"
                prefetch={false}
            >
                <div className={`product-image-container ${imageOrientation}`}>
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
                            className={`product-img ${imageLoaded ? 'loaded' : 'loading'} ${imageOrientation}`}
                        />
                    )}
                    {product.oldPrice && (
                        <span className="product-badge sale">SALE</span>
                    )}
                    {!product.inStock && (
                        <span className="product-badge out">Под заказ</span>
                    )}

                    {Object.keys(product).filter(key => key.startsWith('image_')).length > 0 && (
                        <span className="photo-indicator list">
                            +{Object.keys(product).filter(key => key.startsWith('image_')).length}
                        </span>
                    )}
                </div>

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{categoryName}</p>

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

// Красивая кнопка категории
const CategoryButton = memo(({ category, icon }) => {
    const [imageError, setImageError] = useState(false);
    const imageUrl = categoryImages[category.slug] || categoryImages.default;

    return (
        <Link href={`/catalog/${category.slug}`} className="category-button">
            <span className="category-button-icon">{icon}</span>
            <span className="category-button-name">{category.name}</span>
            <span className="category-button-count">
                {products.filter(p => p.category === category.slug).length}
            </span>
            {!imageError && (
                <div className="category-button-bg">
                    <img
                        src={imageUrl}
                        alt=""
                        onError={() => setImageError(true)}
                    />
                </div>
            )}
        </Link>
    );
});

CategoryButton.displayName = 'CategoryButton';

// Кнопка категории для фильтра
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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(24);

    const [hoveredProductId, setHoveredProductId] = useState(null);

    const categoriesWithIcons = useMemo(() => {
        return categories.map(cat => ({
            ...cat,
            icon: categoryIcons[cat.slug] || categoryIcons.default,
            count: products.filter(p => p.category === cat.slug).length
        }));
    }, []);

    const categoryMap = useMemo(() => {
        return categories.reduce((acc, cat) => {
            acc[cat.slug] = cat.name;
            return acc;
        }, {});
    }, []);

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

    const sortedAndShuffledProducts = useMemo(() => {
        let processed = [...filteredProducts];

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
                processed = processed.sort(() => Math.random() - 0.5);
                break;
        }

        return processed;
    }, [filteredProducts, sortBy]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedAndShuffledProducts.slice(startIndex, endIndex);
    }, [sortedAndShuffledProducts, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedAndShuffledProducts.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, inStockOnly, priceRange.min, priceRange.max, sortBy]);

    const handleAddToCart = useCallback((e, product) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.detail > 1) return;

        addToCart(product);

        const btn = e.currentTarget;
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    }, [addToCart]);

    const handleMouseEnter = useCallback((productId) => {
        setHoveredProductId(productId);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredProductId(null);
    }, []);

    const handleCategoryChange = useCallback((slug) => {
        setSelectedCategory(slug);
        setShowFilters(false);
        setCurrentPage(1);

        const catalogSection = document.querySelector('.catalog-products');
        if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);

        const productsSection = document.querySelector('.catalog-products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const handleResetFilters = useCallback(() => {
        setSelectedCategory('all');
        setPriceRange({ min: 0, max: 5000000 });
        setInStockOnly(false);
        setSortBy('default');
        setShowFilters(false);
        setCurrentPage(1);
    }, []);

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
            <main className="catalog-page">
                <div className="container">
                    <div className="catalog-header">
                        <div>
                            <h1 className="catalog-title">Каталог товаров</h1>
                            <p className="catalog-count">
                                Найдено {sortedAndShuffledProducts.length} товаров
                            </p>
                        </div>

                        {/* <div className="header-actions">
                            <PdfButton />
                            <button
                                className="mobile-filter-btn"
                                onClick={() => setShowFilters(true)}
                                aria-label="Открыть фильтры"
                            >
                                <FiFilter />
                                Фильтры
                            </button>
                        </div> */}
                    </div>

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

                            <button
                                className="reset-filters"
                                onClick={handleResetFilters}
                            >
                                Сбросить фильтры
                            </button>
                        </aside>

                        <div className="catalog-products">
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

            {showFilters && (
                <div
                    className="filters-overlay"
                    onClick={() => setShowFilters(false)}
                />
            )}
        </>
    );
}