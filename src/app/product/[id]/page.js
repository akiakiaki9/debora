'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import Navbar from '@/app/components/navbar/Navbar';
import { products, categories } from '@/app/utils/data';
import Link from 'next/link';
import {
    FiShoppingCart,
    FiTruck,
    FiCreditCard,
    FiShield,
    FiCheckCircle,
    FiChevronRight,
    FiBox,
    FiCpu,
    FiPackage
} from 'react-icons/fi';
import './product.css';

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState('specs');
    const [selectedOptions, setSelectedOptions] = useState({});

    // Получаем id из params
    useEffect(() => {
        if (params?.id) {
            const found = products.find(p => p.id === parseInt(params.id));
            setProduct(found);
        }
    }, [params]);

    // Функция для рекурсивного форматирования любого типа данных
    const formatValue = (value) => {
        if (value === null || value === undefined) return '—';

        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                return value.join(', ');
            }
            // Для объектов показываем вложенные свойства
            return Object.entries(value)
                .map(([k, v]) => {
                    const formattedKey = formatLabel(k);
                    const formattedValue = formatValue(v);
                    return `${formattedKey}: ${formattedValue}`;
                })
                .join(' • ');
        }

        return String(value);
    };

    // Форматирование названий полей
    const formatLabel = (key) => {
        const labels = {
            // Основные
            'id': 'ID',
            'name': 'Название',
            'category': 'Категория',
            'image': 'Изображение',
            'inStock': 'Наличие',
            'specs': 'Характеристики',

            // Размеры
            'size': 'Размер',
            'sizes': 'Размеры',
            'width': 'Ширина',
            'height': 'Высота',
            'depth': 'Глубина',
            'length': 'Длина',
            'pTrap': 'Выпуск (P)',
            'sTrap': 'Выпуск (S)',
            'spoutHeight': 'Высота излива',
            'projection': 'Вылет',
            'centreDistance': 'Межосевое расстояние',
            'showerHoseLength': 'Длина шланга',

            // Материалы
            'material': 'Материал',
            'sinkMaterial': 'Материал раковины',
            'furnitureMaterial': 'Материал мебели',
            'body': 'Корпус',
            'coating': 'Покрытие',

            // Модели и производство
            'model': 'Модель',
            'type': 'Тип',
            'production': 'Производство',
            'furnitureProduction': 'Производство мебели',
            'quality': 'Качество',
            'brand': 'Бренд',

            // Цвета
            'color': 'Цвет',
            'colors': 'Цвета',

            // Системы
            'flushingSystem': 'Система смыва',
            'mechanism': 'Механизм',
            'cartridge': 'Картридж',
            'functions': 'Функции',
            'installation': 'Установка',
            'mounting': 'Монтаж',
            'drain': 'Слив',
            'waterIntake': 'Забор воды',
            'tank': 'Бачок',
            'set': 'Комплектация',

            // Дополнительно
            'additionalOptions': 'Дополнительные опции',
            'options': 'Опции',
            'features': 'Особенности',
            'warranty': 'Гарантия',
            'country': 'Страна',

            // Для вложенных объектов
            'mirror': 'Зеркало',
            'cabinet': 'Тумба',
            'basin': 'Раковина',
            'size_1': 'Размер 1',
            'size_2': 'Размер 2',
            'size_3': 'Размер 3',
            'size_4': 'Размер 4',
            'size_5': 'Размер 5',
            'size_6': 'Размер 6',
            'color_1': 'Цвет 1',
            'color_2': 'Цвет 2',
            'color_3': 'Цвет 3',
            'color_4': 'Цвет 4',
        };

        return labels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
    };

    // Получаем все характеристики товара (рекурсивно)
    const getAllSpecs = useMemo(() => {
        if (!product?.specs) return [];

        const specs = [];

        const extractSpecs = (obj, prefix = '') => {
            if (!obj || typeof obj !== 'object') return;

            Object.entries(obj).forEach(([key, value]) => {
                const fullKey = prefix ? `${prefix}_${key}` : key;

                if (value && typeof value === 'object' && !Array.isArray(value)) {
                    // Если это объект с размерами или цветами, показываем как группу
                    if (key === 'sizes' || key === 'colors' || key === 'additionalOptions') {
                        specs.push({
                            key: fullKey,
                            label: formatLabel(key),
                            value: value,
                            type: 'group'
                        });
                    } else {
                        // Рекурсивно обрабатываем вложенные объекты
                        extractSpecs(value, fullKey);
                    }
                } else if (Array.isArray(value)) {
                    specs.push({
                        key: fullKey,
                        label: formatLabel(key),
                        value: value,
                        type: 'array'
                    });
                } else {
                    specs.push({
                        key: fullKey,
                        label: formatLabel(key),
                        value: value,
                        type: 'simple'
                    });
                }
            });
        };

        extractSpecs(product.specs);
        return specs;
    }, [product]);

    // Основные характеристики для выделения
    const mainSpecs = useMemo(() => {
        if (!product?.specs) return [];

        // Приоритетные поля для каждой категории
        const priorityFields = {
            'unitaz': ['model', 'size', 'material', 'flushingSystem'],
            'bide': ['model', 'size', 'material', 'installation'],
            'chasha': ['model', 'size', 'type', 'material'],
            'rakovina': ['model', 'size', 'material', 'type'],
            'pisuar': ['model', 'size', 'material', 'mechanism'],
            'chashogen': ['model', 'size', 'color'],
            'installation': ['model', 'size', 'material', 'type'],
            'raktumba': ['width', 'sinkMaterial', 'furnitureMaterial'],
            'vanna': ['model', 'type', 'size', 'material'],
            'smestitel': ['model', 'type', 'cartridge', 'spoutHeight'],
            'oyna': ['model', 'sizes'],
        };

        const fields = priorityFields[product.category] || ['model', 'size', 'material'];

        return getAllSpecs
            .filter(spec => fields.includes(spec.key))
            .slice(0, 4);
    }, [getAllSpecs, product]);

    // Получаем название категории
    const categoryName = useMemo(() => {
        if (!product?.category) return '';
        const category = categories.find(c => c.slug === product.category);
        return category?.name || product.category;
    }, [product]);

    // Обработчик выбора опций
    const handleOptionSelect = (optionKey, value) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionKey]: value
        }));
    };

    // Рендер значения в зависимости от типа
    const renderValue = (value, type = 'simple') => {
        if (type === 'array') {
            return (
                <div className="spec-array">
                    {value.map((item, idx) => (
                        <span key={idx} className="spec-array-item">
                            <FiCheckCircle className="spec-array-icon" />
                            {item}
                        </span>
                    ))}
                </div>
            );
        }

        if (type === 'group') {
            return (
                <div className="spec-group">
                    {Object.entries(value).map(([k, v]) => (
                        <div key={k} className="spec-group-item">
                            <span className="spec-group-label">{formatLabel(k)}:</span>
                            <span className="spec-group-value">{formatValue(v)}</span>
                        </div>
                    ))}
                </div>
            );
        }

        return <span className="spec-value-text">{formatValue(value)}</span>;
    };

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="not-found">
                    <div className="container">
                        <h2>Товар не найден</h2>
                        <p>Возможно, товар был удален или перемещен</p>
                        <button onClick={() => router.push('/')} className="btn btn-primary">
                            На главную
                        </button>
                    </div>
                </div>
            </>
        );
    }

    // Создаем массив изображений (пока используем одно изображение)
    const images = [product.image, product.image, product.image, product.image];

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <>
            <Navbar />
            <main className="product-main">
                <div className="container">
                    {/* Хлебные крошки */}
                    <div className="breadcrumb">
                        <Link href="/">Главная</Link>
                        <FiChevronRight className="breadcrumb-icon" />
                        <Link href="/catalog">Каталог</Link>
                        <FiChevronRight className="breadcrumb-icon" />
                        <Link href={`/catalog/${product.category}`}>
                            {categoryName}
                        </Link>
                        <FiChevronRight className="breadcrumb-icon" />
                        <span>{product.name}</span>
                    </div>

                    {/* Карточка товара */}
                    <div className="product-card">
                        {/* Галерея */}
                        <div className="product-gallery">
                            <div className="main-image">
                                <img src={images[activeImage]} alt={product.name} />
                                {!product.inStock && (
                                    <span className="product-badge out">Под заказ</span>
                                )}
                            </div>
                            <div className="image-thumbnails">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        className={`thumb ${activeImage === index ? 'active' : ''}`}
                                        onClick={() => setActiveImage(index)}
                                    >
                                        <img src={img} alt={`${product.name} ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Информация */}
                        <div className="product-details">
                            <h1 className="product-name">{product.name}</h1>

                            <div className="product-meta">
                                <div className="meta-item">
                                    <span className="label">Категория:</span>
                                    <span className="value">{categoryName}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="label">Наличие:</span>
                                    <span className={`stock ${product.inStock ? 'in' : 'out'}`}>
                                        {product.inStock ? 'В наличии' : 'Под заказ'}
                                    </span>
                                </div>
                            </div>

                            {/* Основные характеристики */}
                            {mainSpecs.length > 0 && (
                                <div className="product-highlights">
                                    {mainSpecs.map((spec, index) => (
                                        <div key={index} className="highlight-item">
                                            <FiCheckCircle className="highlight-icon" />
                                            <div className="highlight-content">
                                                <span className="highlight-label">{spec.label}:</span>
                                                <span className="highlight-value">
                                                    {formatValue(spec.value)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Дополнительные опции (для выбора) */}
                            {product.specs?.additionalOptions && (
                                <div className="product-options">
                                    <h3 className="options-title">Дополнительные опции</h3>
                                    <div className="options-grid">
                                        {product.specs.additionalOptions.map((option, index) => (
                                            <label key={index} className="option-label">
                                                <input
                                                    type="checkbox"
                                                    className="option-checkbox"
                                                    onChange={(e) => handleOptionSelect(`option_${index}`, e.target.checked)}
                                                />
                                                <span className="option-text">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Табы с подробной информацией */}
                            <div className="product-tabs">
                                <div className="tabs-header">
                                    <button
                                        className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('specs')}
                                    >
                                        <FiPackage className="tab-icon" />
                                        Характеристики
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('description')}
                                    >
                                        <FiBox className="tab-icon" />
                                        Описание
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'delivery' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('delivery')}
                                    >
                                        <FiTruck className="tab-icon" />
                                        Доставка
                                    </button>
                                </div>

                                <div className="tab-content">
                                    {activeTab === 'specs' && (
                                        <div className="specs-container">
                                            {getAllSpecs.map((spec, index) => (
                                                <div key={index} className="spec-block">
                                                    <div className="spec-block-label">
                                                        <FiCpu className="spec-block-icon" />
                                                        {spec.label}
                                                    </div>
                                                    <div className="spec-block-value">
                                                        {renderValue(spec.value, spec.type)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'description' && (
                                        <div className="description-content">
                                            <p className="description-text">
                                                {product.description || 'Описание отсутствует'}
                                            </p>
                                            <div className="features-grid">
                                                <div className="feature-card">
                                                    <FiCheckCircle className="feature-icon" />
                                                    <span>Премиум качество</span>
                                                </div>
                                                <div className="feature-card">
                                                    <FiCheckCircle className="feature-icon" />
                                                    <span>Итальянский дизайн</span>
                                                </div>
                                                <div className="feature-card">
                                                    <FiCheckCircle className="feature-icon" />
                                                    <span>5 лет гарантии</span>
                                                </div>
                                                <div className="feature-card">
                                                    <FiCheckCircle className="feature-icon" />
                                                    <span>Бесплатная доставка</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'delivery' && (
                                        <div className="delivery-content">
                                            <div className="delivery-block">
                                                <FiTruck className="delivery-icon" />
                                                <div>
                                                    <h4>Доставка по Ташкенту</h4>
                                                    <p>Бесплатно при заказе от 1 000 000 сум</p>
                                                    <p className="small">Доставка в день заказа при наличии</p>
                                                </div>
                                            </div>
                                            <div className="delivery-block">
                                                <FiCreditCard className="delivery-icon" />
                                                <div>
                                                    <h4>Способы оплаты</h4>
                                                    <p>Наличные, карта, рассрочка, безналичный расчет</p>
                                                </div>
                                            </div>
                                            <div className="delivery-block">
                                                <FiShield className="delivery-icon" />
                                                <div>
                                                    <h4>Гарантия качества</h4>
                                                    <p>Официальная гарантия 5 лет на всю продукцию</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Действия с товаром */}
                            <div className="product-actions">
                                <div className="quantity">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="qty-btn"
                                        disabled={!product.inStock}
                                    >-</button>
                                    <span className="qty-value">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="qty-btn"
                                        disabled={!product.inStock}
                                    >+</button>
                                </div>

                                <button
                                    className="btn btn-primary add-to-cart"
                                    disabled={!product.inStock}
                                >
                                    <FiShoppingCart />
                                    {product.inStock ? 'Добавить в корзину' : 'Под заказ'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Похожие товары */}
                    {relatedProducts.length > 0 && (
                        <div className="related">
                            <h2 className="section-title">Похожие товары</h2>
                            <div className="related-grid">
                                {relatedProducts.map(item => (
                                    <Link href={`/product/${item.id}`} key={item.id} className="related-item">
                                        <div className="related-image">
                                            <img src={item.image} alt={item.name} />
                                            {!item.inStock && (
                                                <span className="related-badge">Под заказ</span>
                                            )}
                                        </div>
                                        <div className="related-info">
                                            <h4>{item.name}</h4>
                                            <div className="related-specs">
                                                {item.specs?.model && (
                                                    <span className="related-spec">Модель: {item.specs.model}</span>
                                                )}
                                                {item.specs?.size && (
                                                    <span className="related-spec">{item.specs.size}</span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};