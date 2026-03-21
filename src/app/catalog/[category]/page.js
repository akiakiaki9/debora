'use client'
import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    FiGrid,
    FiList,
    FiFilter,
    FiX,
    FiArrowLeft,
    FiChevronRight,
    FiBox,
    FiShoppingCart
} from 'react-icons/fi';
import { PiToilet } from "react-icons/pi";
import { GiBathtub } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";
import { FaShower, FaSink, FaWater } from 'react-icons/fa';
import { MdKitchen, MdChair, MdShower } from 'react-icons/md';
import { useCart } from '@/app/context/CartContext';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import { products, categories } from '@/app/utils/data';
import PdfButton from '@/app/components/pdf/Pdf';
import './category.css';

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

// Описания категорий для баннеров
const categoryDescriptions = {
    'unitaz': 'Премиальные унитазы с японскими системами смыва, микролифтом и антибактериальным покрытием. Подвесные и напольные модели.',
    'bide': 'Компактные и эргономичные биде. Напольные и подвесные модели. Идеальное дополнение к унитазу.',
    'chasha': 'Дизайнерские чаши для ванной. Оригинальные формы, премиальное покрытие, устойчивость к загрязнениям.',
    'rakovina': 'Раковины для столешницы различных размеров. Керамика высокого качества, глазурованное покрытие.',
    'pisuar': 'Современные писсуары с сенсорным смывом. Экономия воды, гигиеничность, стильный дизайн.',
    'chashogen': 'Эксклюзивные чашогены премиум-класса. Уникальный дизайн, высокое качество материалов.',
    'installation': 'Инсталляции для подвесной сантехники. Надежные металлические каркасы, скрытые бачки.',
    'raktumba': 'Готовые решения: раковина с тумбой. Влагостойкие материалы, вместительное хранение.',
    'vanna': 'Чугунные, акриловые и стальные ванны премиум-класса. Итальянское качество, эмалевое покрытие, гидромассаж.',
    'smestitel': 'Смесители для умывальников, биде и душа. Однорычажные, с керамическим картриджем, надежные.',
    'oyna': 'Зеркала с LED подсветкой, антизапотевание, с полками. Итальянский дизайн, премиум качество.'
};

// URL баннеров для категорий
const categoryBanners = {
    'unitaz': 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1200&auto=format',
    'bide': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format',
    'chasha': 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&auto=format',
    'rakovina': 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1200&auto=format',
    'pisuar': 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1200&auto=format',
    'chashogen': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&auto=format',
    'installation': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format',
    'raktumba': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format',
    'vanna': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format',
    'smestitel': 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1200&auto=format',
    'oyna': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&auto=format'
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
const GridProductCard = memo(({ product, onAddToCart, onMouseEnter, onMouseLeave, isHovered }) => {
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
                    <ProductSpecs specs={product.specs} viewMode="grid" />
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
const ListProductCard = memo(({ product, onAddToCart }) => {
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
                    <ProductSpecs specs={product.specs} viewMode="list" />
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
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({});
    const { addToCart } = useCart();

    const [hoveredProductId, setHoveredProductId] = useState(null);

    const categoryInfo = useMemo(() => {
        const found = categories.find(c => c.slug === category);
        if (!found) return null;

        return {
            ...found,
            icon: categoryIcons[found.slug] || categoryIcons.default,
            description: categoryDescriptions[found.slug] || `Товары категории ${found.name}`,
            banner: categoryBanners[found.slug] || categoryBanners['vanna']
        };
    }, [category]);

    const categoryProducts = useMemo(() => {
        return products.filter(p => p.category === category);
    }, [category]);

    const filterOptions = useMemo(() => {
        const options = {};

        categoryProducts.forEach(product => {
            if (product.specs) {
                Object.entries(product.specs).forEach(([key, value]) => {
                    if (!options[key]) {
                        options[key] = new Set();
                    }
                    if (typeof value === 'object') {
                        Object.entries(value).forEach(([subKey, subValue]) => {
                            const fullKey = `${key}_${subKey}`;
                            if (!options[fullKey]) {
                                options[fullKey] = new Set();
                            }
                            options[fullKey].add(String(subValue));
                        });
                    } else {
                        options[key].add(String(value));
                    }
                });
            }
        });

        const result = {};
        Object.keys(options).forEach(key => {
            result[key] = Array.from(options[key]).sort();
        });

        return result;
    }, [categoryProducts]);

    const filteredProducts = useMemo(() => {
        setIsLoading(true);

        const result = categoryProducts.filter(product => {
            if (Object.keys(filters).length === 0) return true;

            return Object.entries(filters).every(([filterKey, filterValues]) => {
                if (!filterValues || filterValues.length === 0) return true;

                const keyParts = filterKey.split('_');

                if (keyParts.length === 2) {
                    const [parentKey, childKey] = keyParts;
                    const specValue = product.specs?.[parentKey]?.[childKey];
                    return specValue && filterValues.includes(String(specValue));
                } else {
                    const specValue = product.specs?.[filterKey];
                    return specValue && filterValues.includes(String(specValue));
                }
            });
        });

        setTimeout(() => setIsLoading(false), 0);
        return result;
    }, [categoryProducts, filters]);

    const handleAddToCart = useCallback((e, product) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.detail > 1) return;
        if (!product.inStock) return;

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

    const handleFilterChange = useCallback((filterKey, value, checked) => {
        setFilters(prev => {
            const newFilters = { ...prev };

            if (checked) {
                if (!newFilters[filterKey]) {
                    newFilters[filterKey] = [value];
                } else {
                    newFilters[filterKey] = [...newFilters[filterKey], value];
                }
            } else {
                if (newFilters[filterKey]) {
                    newFilters[filterKey] = newFilters[filterKey].filter(v => v !== value);
                    if (newFilters[filterKey].length === 0) {
                        delete newFilters[filterKey];
                    }
                }
            }

            return newFilters;
        });
    }, []);

    const handleResetFilters = useCallback(() => {
        setFilters({});
        setShowFilters(false);
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

    const formatFilterLabel = useCallback((key) => {
        const labels = {
            'size': 'Размер',
            'model': 'Модель',
            'material': 'Материал',
            'color': 'Цвет',
            'type': 'Тип',
            'production': 'Производство',
            'quality': 'Качество',
            'body': 'Корпус',
            'coating': 'Покрытие',
            'flushingSystem': 'Система смыва',
            'installation': 'Установка',
            'mounting': 'Монтаж',
            'mechanism': 'Механизм',
            'cartridge': 'Картридж',
            'pTrap': 'Выпуск в пол',
            'sTrap': 'Выпуск в стену',
            'width': 'Ширина',
            'sinkMaterial': 'Материал раковины',
            'furnitureMaterial': 'Материал тумбы',
            'sizes_mirror': 'Размер зеркала',
            'sizes_cabinet': 'Размер тумбы',
            'sizes_basin': 'Размер раковины',
            'additionalOptions': 'Дополнительно',
            'leg_colors': 'Цвета ножек',
            'colors': 'Цвета',
            'tank': 'Бачок',
            'set': 'Комплектация',
            'spoutHeight': 'Высота излива',
            'projection': 'Вылет',
            'functions': 'Функции',
            'centreDistance': 'Межосевое расстояние',
            'showerHoseLength': 'Длина шланга'
        };

        return labels[key] || key;
    }, []);

    if (!categoryInfo) {
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
                    style={{ backgroundImage: `url(${categoryInfo.banner})` }}
                >
                    <div className="banner-overlay"></div>
                    <div className="container">
                        <div className="banner-content">
                            <div className="category-icon-large">
                                {categoryInfo.icon}
                            </div>
                            <h1 className="category-title">{categoryInfo.name}</h1>
                            <p className="category-description">{categoryInfo.description}</p>
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
                        <span>{categoryInfo.name}</span>
                    </div>

                    {/* Заголовок с фильтром для мобильных и кнопкой PDF */}
                    <div className="category-header">
                        <h2 className="category-subtitle">
                            {categoryInfo.name} в Ташкенте
                        </h2>

                        <div className="header-actions">
                            <PdfButton />
                            {/* <button
                                className="mobile-filter-btn"
                                onClick={() => setShowFilters(true)}
                                aria-label="Открыть фильтры"
                            >
                                <FiFilter />
                                Фильтры
                                {Object.keys(filters).length > 0 && (
                                    <span className="filter-count">{Object.keys(filters).length}</span>
                                )}
                            </button> */}
                        </div>
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

                            {Object.entries(filterOptions).map(([key, values]) => (
                                <div key={key} className="filter-section">
                                    <h4 className="filter-title">{formatFilterLabel(key)}</h4>
                                    <div className="filter-options">
                                        {values.map(value => (
                                            <label key={value} className="checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    checked={filters[key]?.includes(value) || false}
                                                    onChange={(e) => handleFilterChange(key, value, e.target.checked)}
                                                />
                                                <span>{value}</span>
                                                <span className="filter-value-count">
                                                    {categoryProducts.filter(p => {
                                                        const keyParts = key.split('_');
                                                        if (keyParts.length === 2) {
                                                            const [parentKey, childKey] = keyParts;
                                                            return p.specs?.[parentKey]?.[childKey] == value;
                                                        } else {
                                                            return p.specs?.[key] == value;
                                                        }
                                                    }).length}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {Object.keys(filters).length > 0 && (
                                <button
                                    className="reset-filters"
                                    onClick={handleResetFilters}
                                >
                                    Сбросить все фильтры
                                </button>
                            )}
                        </aside>

                        {/* Товары */}
                        <div className="category-products">
                            <div className="products-toolbar">
                                <div className="results-count">
                                    Найдено: <strong>{filteredProducts.length}</strong> товаров
                                    {Object.keys(filters).length > 0 && (
                                        <span className="active-filters">
                                            (фильтров: {Object.keys(filters).length})
                                        </span>
                                    )}
                                </div>

                                <div className="toolbar-right">
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

                            {isLoading ? (
                                <div className="products-loading">
                                    <div className="loading-spinner"></div>
                                </div>
                            ) : filteredProducts.length === 0 ? (
                                <div className="no-products">
                                    <p>В данной категории нет товаров, соответствующих фильтрам</p>
                                    <button
                                        className="reset-filters-btn"
                                        onClick={handleResetFilters}
                                    >
                                        Сбросить фильтры
                                    </button>
                                </div>
                            ) : (
                                <div className={`products-${viewMode}`}>
                                    {filteredProducts.map(product => (
                                        viewMode === 'grid' ? (
                                            <GridProductCard
                                                key={product.id}
                                                product={product}
                                                onAddToCart={handleAddToCart}
                                                onMouseEnter={() => handleMouseEnter(product.id)}
                                                onMouseLeave={handleMouseLeave}
                                                isHovered={hoveredProductId === product.id}
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

            {showFilters && (
                <div
                    className="filters-overlay"
                    onClick={() => setShowFilters(false)}
                />
            )}
        </>
    );
};