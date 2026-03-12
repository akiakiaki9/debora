'use client'
import { useRouter } from 'next/navigation'; // Измененный импорт
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar/Navbar';
import { products } from '@/app/utils/data';
import Link from 'next/link';
import './product.css';

export default function ProductPage() {
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    // Получаем id из URL
    useEffect(() => {
        // В App Router нужно получить id через window.location или useParams
        const pathParts = window.location.pathname.split('/');
        const idFromPath = pathParts[pathParts.length - 1];

        if (idFromPath) {
            const found = products.find(p => p.id === parseInt(idFromPath));
            setProduct(found);
        }
    }, []);

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

    const images = [1, 2, 3, 4].map(i => product.image);

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
                        <Link href={`/catalog/${product.category}`}>
                            {product.category === 'unitaz' && 'Унитазы'}
                            {product.category === 'vanna' && 'Ванны'}
                            {product.category === 'smestitel' && 'Смесители'}
                            {product.category === 'akksesuar' && 'Аксессуары'}
                            {product.category === 'oyna' && 'Зеркала'}
                            {product.category === 'play3' && 'Шкафы'}
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
                                {product.oldPrice && <span className="sale">SALE</span>}
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
                                    <span className="label">Артикул:</span>
                                    <span className="value">DC-{product.id}23</span>
                                </div>
                                <div className="meta-item">
                                    <span className="label">Наличие:</span>
                                    <span className={`stock ${product.inStock ? 'in' : 'out'}`}>
                                        {product.inStock ? 'В наличии' : 'Под заказ'}
                                    </span>
                                </div>
                            </div>

                            <div className="product-price">
                                {product.oldPrice && (
                                    <div className="old">
                                        <span className="old-price">{product.oldPrice.toLocaleString()} сум</span>
                                        <span className="discount">-{Math.round((1 - product.price / product.oldPrice) * 100)}%</span>
                                    </div>
                                )}
                                <div className="current">
                                    <span className="price">{product.price.toLocaleString()}</span>
                                    <span className="currency">сум</span>
                                </div>
                            </div>

                            <div className="product-description">
                                <h3>Описание</h3>
                                <p>{product.description}</p>
                                <ul>
                                    <li>✓ Премиум качество</li>
                                    <li>✓ Итальянский дизайн</li>
                                    <li>✓ 5 лет гарантии</li>
                                    <li>✓ Бесплатная доставка</li>
                                </ul>
                            </div>

                            <div className="product-actions">
                                <div className="quantity">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="qty-btn"
                                    >-</button>
                                    <span className="qty-value">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="qty-btn"
                                    >+</button>
                                </div>

                                <button className="btn btn-primary add-to-cart">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <circle cx="9" cy="21" r="2" fill="currentColor" />
                                        <circle cx="20" cy="21" r="2" fill="currentColor" />
                                        <path d="M1 1H5L7.5 15H19" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    Добавить в корзину
                                </button>

                                <button className="favorite">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                            stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>

                            <div className="delivery-info">
                                <div className="info-block">
                                    <h4>Доставка</h4>
                                    <p>Бесплатно по Ташкенту от 1 000 000 сум</p>
                                </div>
                                <div className="info-block">
                                    <h4>Оплата</h4>
                                    <p>Наличные, карта, рассрочка</p>
                                </div>
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
                                        </div>
                                        <h4>{item.name}</h4>
                                        <p className="related-price">{item.price.toLocaleString()} сум</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}