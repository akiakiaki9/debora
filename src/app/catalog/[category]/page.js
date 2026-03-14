'use client'
import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    FiGrid,
    FiList,
    FiFilter,
    FiShoppingCart,
    FiX,
    FiArrowLeft,
    FiChevronRight,
    FiBox
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
import './category.css';

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

// Мемоизированная карточка товара для сетки
const GridProductCard = memo(({ product }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Получаем основные характеристики для отображения
    const mainSpecs = useMemo(() => {
        if (!product.specs) return [];

        // Приоритетные поля для каждой категории
        const priorityFields = {
            'unitaz': ['size', 'model', 'flushingSystem'],
            'bide': ['size', 'model', 'installation'],
            'chasha': ['size', 'model', 'type'],
            'rakovina': ['size', 'model', 'mounting'],
            'pisuar': ['size', 'model', 'mechanism'],
            'chashogen': ['size', 'model', 'color'],
            'installation': ['size', 'model', 'type'],
            'raktumba': ['width', 'sinkMaterial', 'furnitureMaterial'],
            'vanna': ['size', 'material'],
            'smestitel': ['model', 'type', 'cartridge'],
            'oyna': ['model', 'sizes']
        };

        const category = product.category;
        const fields = priorityFields[category] || ['size', 'model'];

        return fields
            .map(field => {
                const value = product.specs[field];
                if (!value) return null;

                // Форматируем значение для отображения
                if (typeof value === 'object') {
                    if (field === 'sizes') {
                        return `Зеркало: ${value.mirror || ''}`;
                    }
                    return JSON.stringify(value).slice(0, 30);
                }
                return `${field}: ${value}`;
            })
            .filter(Boolean)
            .slice(0, 2);
    }, [product]);

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
                    {!product.inStock && (
                        <span className="product-badge out">Под заказ</span>
                    )}
                </div>

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-specs">
                        {mainSpecs.map((spec, index) => (
                            <span key={index} className="product-spec">{spec}</span>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
});

GridProductCard.displayName = 'GridProductCard';

// Мемоизированная карточка товара для списка
const ListProductCard = memo(({ product }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Форматируем все характеристики для отображения в списке
    const allSpecs = useMemo(() => {
        if (!product.specs) return [];

        return Object.entries(product.specs)
            .map(([key, value]) => {
                if (typeof value === 'object') {
                    if (key === 'sizes') {
                        return Object.entries(value)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(' • ');
                    }
                    return `${key}: ${JSON.stringify(value)}`;
                }
                return `${key}: ${value}`;
            })
            .slice(0, 4);
    }, [product]);

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
                    {!product.inStock && (
                        <span className="product-badge out">Под заказ</span>
                    )}
                </div>

                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-specs-list">
                        {allSpecs.map((spec, index) => (
                            <div key={index} className="product-spec-item">
                                {spec}
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
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

    // Находим информацию о категории из импортированных данных
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

    // Мемоизируем товары категории
    const categoryProducts = useMemo(() => {
        return products.filter(p => p.category === category);
    }, [category]);

    // Извлекаем все уникальные значения характеристик для фильтрации
    const filterOptions = useMemo(() => {
        const options = {};

        categoryProducts.forEach(product => {
            if (product.specs) {
                Object.entries(product.specs).forEach(([key, value]) => {
                    if (!options[key]) {
                        options[key] = new Set();
                    }
                    // Добавляем значение в Set (уникальные значения)
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

        // Конвертируем Set в массив и сортируем
        const result = {};
        Object.keys(options).forEach(key => {
            result[key] = Array.from(options[key]).sort();
        });

        return result;
    }, [categoryProducts]);

    // Применяем фильтры
    const filteredProducts = useMemo(() => {
        setIsLoading(true);

        const result = categoryProducts.filter(product => {
            // Если фильтры пустые - показываем все
            if (Object.keys(filters).length === 0) return true;

            // Проверяем каждый активный фильтр
            return Object.entries(filters).every(([filterKey, filterValues]) => {
                if (!filterValues || filterValues.length === 0) return true;

                // Разбираем ключ фильтра (может быть составным для вложенных объектов)
                const keyParts = filterKey.split('_');

                if (keyParts.length === 2) {
                    // Вложенное свойство (например, sizes_mirror)
                    const [parentKey, childKey] = keyParts;
                    const specValue = product.specs?.[parentKey]?.[childKey];
                    return specValue && filterValues.includes(String(specValue));
                } else {
                    // Простое свойство
                    const specValue = product.specs?.[filterKey];
                    return specValue && filterValues.includes(String(specValue));
                }
            });
        });

        setTimeout(() => setIsLoading(false), 0);
        return result;
    }, [categoryProducts, filters]);

    // Обработчик изменения фильтра
    const handleFilterChange = useCallback((filterKey, value, checked) => {
        setFilters(prev => {
            const newFilters = { ...prev };

            if (checked) {
                // Добавляем значение
                if (!newFilters[filterKey]) {
                    newFilters[filterKey] = [value];
                } else {
                    newFilters[filterKey] = [...newFilters[filterKey], value];
                }
            } else {
                // Удаляем значение
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

    // Обработчик сброса всех фильтров
    const handleResetFilters = useCallback(() => {
        setFilters({});
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

    // Форматирование названия фильтра для отображения
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
            'pTrap': 'Выпуск (P-ловушка)',
            'sTrap': 'Выпуск (S-ловушка)',
            'width': 'Ширина',
            'sinkMaterial': 'Материал раковины',
            'furnitureMaterial': 'Материал мебели',
            'sizes_mirror': 'Размер зеркала',
            'sizes_cabinet': 'Размер тумбы',
            'sizes_basin': 'Размер раковины'
        };

        return labels[key] || key;
    }, []);

    // Если категория не найдена
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

                    {/* Заголовок с фильтром для мобильных */}
                    <div className="category-header">
                        <h2 className="category-subtitle">
                            {categoryInfo.name} в Ташкенте
                        </h2>

                        <button
                            className="mobile-filter-btn"
                            onClick={() => setShowFilters(true)}
                            aria-label="Открыть фильтры"
                        >
                            <FiFilter />
                            Фильтры
                            {Object.keys(filters).length > 0 && (
                                <span className="filter-count">{Object.keys(filters).length}</span>
                            )}
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

                            {/* Динамические фильтры на основе характеристик */}
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

                            {/* Сброс фильтров */}
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
                            {/* Сортировка и вид */}
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

                            {/* Сетка товаров */}
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
                                            />
                                        ) : (
                                            <ListProductCard
                                                key={product.id}
                                                product={product}
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