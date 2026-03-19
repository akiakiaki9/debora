'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    FiShoppingCart,
    FiTrash2,
    FiArrowLeft,
    FiTruck,
    FiClock,
    FiX,
    FiPhone,
    FiBox
} from 'react-icons/fi';
import { useCart } from '@/app/context/CartContext';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import './cart.css';

export default function CartPage() {
    const router = useRouter();
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [showModal, setShowModal] = useState(false);

    // Так как цен нет, просто считаем количество товаров
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleCheckout = () => {
        setShowModal(true);
    };

    // Получаем основные характеристики товара для отображения
    const getMainSpec = (product) => {
        if (!product.specs) return null;

        // Приоритетные поля для каждой категории
        const priorityFields = {
            'unitaz': product.specs.model || product.specs.size,
            'bide': product.specs.model || product.specs.size,
            'chasha': product.specs.type || product.specs.model,
            'rakovina': product.specs.model || product.specs.size,
            'pisuar': product.specs.model || product.specs.mechanism,
            'chashogen': product.specs.model || product.specs.color,
            'installation': product.specs.model || product.specs.size,
            'raktumba': product.specs.width || product.specs.furnitureMaterial,
            'vanna': product.specs.type || product.specs.size,
            'smestitel': product.specs.model || product.specs.type,
            'oyna': product.specs.model || 'Зеркало'
        };

        const spec = priorityFields[product.category];
        if (typeof spec === 'object') {
            return Object.values(spec).join(' • ');
        }
        return spec || 'Сантехника';
    };

    if (cartItems.length === 0) {
        return (
            <>
                <Navbar />
                <main className="cart-page">
                    <div className="container">
                        <div className="empty-cart">
                            <div className="empty-cart-icon">
                                <FiShoppingCart />
                            </div>
                            <h1 className="empty-cart-title">Корзина пуста</h1>
                            <p className="empty-cart-text">
                                Добавьте товары в корзину, чтобы оформить заказ
                            </p>
                            <button
                                onClick={() => router.push('/catalog')}
                                className="btn btn-primary"
                            >
                                <FiArrowLeft />
                                Перейти в каталог
                            </button>
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
            <main className="cart-page">
                <div className="container">
                    {/* Заголовок */}
                    <div className="cart-header">
                        <h1 className="cart-title">
                            Корзина
                            <span className="cart-count">{totalItems} товара</span>
                        </h1>
                        <button
                            onClick={clearCart}
                            className="clear-cart-btn"
                        >
                            <FiTrash2 />
                            Очистить корзину
                        </button>
                    </div>

                    <div className="cart-content">
                        {/* Список товаров */}
                        <div className="cart-items">
                            {cartItems.map((item) => {
                                const mainSpec = getMainSpec(item);

                                return (
                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-image">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                loading="lazy"
                                            />
                                            {!item.inStock && (
                                                <span className="cart-item-badge">Под заказ</span>
                                            )}
                                        </div>

                                        <div className="cart-item-info">
                                            <div className="cart-item-header">
                                                <Link
                                                    href={`/product/${item.id}`}
                                                    className="cart-item-title"
                                                >
                                                    {item.name}
                                                </Link>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="cart-item-remove"
                                                    aria-label="Удалить"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            </div>

                                            {mainSpec && (
                                                <div className="cart-item-spec">
                                                    <FiBox className="cart-item-spec-icon" />
                                                    <span>{mainSpec}</span>
                                                </div>
                                            )}

                                            <div className="cart-item-actions">
                                                {/* Вместо контролов количества просто показываем количество */}
                                                <div className="cart-item-quantity">
                                                    <span className="quantity-label">Количество:</span>
                                                    <span className="quantity-value">{item.quantity} шт.</span>
                                                </div>

                                                <div className="cart-item-status">
                                                    {item.inStock ? (
                                                        <span className="status-in">В наличии</span>
                                                    ) : (
                                                        <span className="status-out">Под заказ (3-5 дней)</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Боковая панель */}
                        <div className="cart-sidebar">
                            <div className="cart-summary">
                                <h2 className="summary-title">Ваш заказ</h2>

                                <div className="summary-row">
                                    <span>Товары ({cartItems.length})</span>
                                    <span>{cartItems.length} позиций</span>
                                </div>

                                <div className="summary-row">
                                    <span>Общее количество</span>
                                    <span>{totalItems} шт.</span>
                                </div>

                                <div className="summary-total">
                                    <span>Итого товаров</span>
                                    <span>{totalItems} шт.</span>
                                </div>

                                {/* Информация о наличии */}
                                <div className="stock-info">
                                    <FiClock className="stock-info-icon" />
                                    <div className="stock-info-text">
                                        <strong>Товары под заказ:</strong>
                                        <span>
                                            {cartItems.filter(i => !i.inStock).length} позиций
                                        </span>
                                    </div>
                                </div>

                                {/* Кнопка оформления */}
                                <button
                                    onClick={handleCheckout}
                                    className="btn btn-primary checkout-btn"
                                >
                                    <FiPhone />
                                    Позвонить для заказа
                                </button>

                                {/* Преимущества */}
                                <div className="cart-benefits">
                                    <div className="benefit-item">
                                        <FiTruck className="benefit-icon" />
                                        <div className="benefit-text">
                                            <strong>Доставка по городу</strong>
                                            <span>от 2 часов</span>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <FiClock className="benefit-icon" />
                                        <div className="benefit-text">
                                            <strong>Под заказ</strong>
                                            <span>3-5 дней</span>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <FiPhone className="benefit-icon" />
                                        <div className="benefit-text">
                                            <strong>Позвоните нам</strong>
                                            <span>+998 94 147-11-16</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/catalog" className="continue-shopping">
                                    <FiArrowLeft />
                                    Продолжить покупки
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Модальное окно */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={() => setShowModal(false)}
                        >
                            <FiX />
                        </button>

                        <div className="modal-header">
                            <FiPhone className="modal-icon" />
                            <h2 className="modal-title">Позвоните нам!</h2>
                        </div>

                        <div className="modal-body">
                            <p className="modal-text">
                                Позвоните по номеру ниже и назовите этот заказ.
                                Мы всё оформим за 5 минут!
                            </p>

                            {/* Список товаров */}
                            <div className="modal-order-list">
                                <h3>Ваш заказ:</h3>
                                {cartItems.map(item => {
                                    const mainSpec = getMainSpec(item);

                                    return (
                                        <div key={item.id} className="modal-order-item">
                                            <div className="modal-item-info">
                                                <span className="modal-item-name">{item.name}</span>
                                                {mainSpec && (
                                                    <span className="modal-item-spec">{mainSpec}</span>
                                                )}
                                            </div>
                                            <div className="modal-item-details">
                                                <span className="modal-item-quantity">{item.quantity} шт.</span>
                                                <span className={`modal-item-status ${item.inStock ? 'in-stock' : 'preorder'}`}>
                                                    {item.inStock ? '✓ В наличии' : '⌛ Под заказ'}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="modal-order-total">
                                    <strong>Всего товаров:</strong>
                                    <strong>{totalItems} шт.</strong>
                                </div>
                            </div>

                            {/* Номер телефона */}
                            <div className="modal-phone-number">
                                <a href="tel:+998998783949" className="modal-phone-link">
                                    +998 99 878-39-49
                                </a>
                                <p className="modal-phone-hint">
                                    Нажмите на номер, чтобы позвонить
                                </p>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                className="modal-btn modal-btn-secondary"
                                onClick={() => setShowModal(false)}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};