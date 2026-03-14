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
    FiCheckCircle
} from 'react-icons/fi';
import './product.css';

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState('specs');

    // Получаем id из params
    useEffect(() => {
        if (params?.id) {
            const found = products.find(p => p.id === parseInt(params.id));
            setProduct(found);
        }
    }, [params]);

    // Форматирование характеристик для отображения
    const formattedSpecs = useMemo(() => {
        if (!product?.specs) return [];

        const formatValue = (key, value) => {
            if (typeof value === 'object') {
                if (key === 'sizes') {
                    return Object.entries(value)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(' • ');
                }
                return JSON.stringify(value);
            }
            return value;
        };

        const specLabels = {
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
            'spoutHeight': 'Высота излива',
            'projection': 'Вылет',
            'functions': 'Функции',
            'centreDistance': 'Межосевое расстояние',
            'showerHoseLength': 'Длина шланга'
        };

        return Object.entries(product.specs).map(([key, value]) => ({
            label: specLabels[key] || key,
            value: formatValue(key, value)
        }));
    }, [product]);

    // Получаем название категории
    const categoryName = useMemo(() => {
        if (!product?.category) return '';
        const category = categories.find(c => c.slug === product.category);
        return category?.name || product.category;
    }, [product]);

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
                        <span>/</span>
                        <Link href="/catalog">Каталог</Link>
                        <span>/</span>
                        <Link href={`/catalog/${product.category}`}>
                            {categoryName}
                        </Link>
                        <span>/</span>
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
                            <div className="product-highlights">
                                {formattedSpecs.slice(0, 4).map((spec, index) => (
                                    <div key={index} className="highlight-item">
                                        <FiCheckCircle className="highlight-icon" />
                                        <div className="highlight-content">
                                            <span className="highlight-label">{spec.label}:</span>
                                            <span className="highlight-value">{spec.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Табы с подробной информацией */}
                            <div className="product-tabs">
                                <div className="tabs-header">
                                    <button
                                        className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('specs')}
                                    >
                                        Характеристики
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('description')}
                                    >
                                        Описание
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'delivery' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('delivery')}
                                    >
                                        Доставка
                                    </button>
                                </div>

                                <div className="tab-content">
                                    {activeTab === 'specs' && (
                                        <div className="specs-grid">
                                            {formattedSpecs.map((spec, index) => (
                                                <div key={index} className="spec-row">
                                                    <span className="spec-label">{spec.label}</span>
                                                    <span className="spec-value">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'description' && (
                                        <div className="description-content">
                                            <p>{product.description || 'Описание отсутствует'}</p>
                                            <ul className="features-list">
                                                <li>✓ Премиум качество материалов</li>
                                                <li>✓ Итальянский дизайн</li>
                                                <li>✓ 5 лет гарантии</li>
                                                <li>✓ Бесплатная доставка по Ташкенту</li>
                                                <li>✓ Профессиональная установка</li>
                                            </ul>
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
                                        <h4>{item.name}</h4>
                                        <div className="related-specs">
                                            {item.specs?.model && (
                                                <span className="related-spec">Модель: {item.specs.model}</span>
                                            )}
                                            {item.specs?.size && (
                                                <span className="related-spec">{item.specs.size}</span>
                                            )}
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