'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    FiShoppingCart,
    FiTrash2,
    FiArrowLeft,
    FiPlus,
    FiMinus,
    FiCreditCard,
    FiTruck,
    FiClock,
    FiCheckCircle,
    FiX,
    FiPhone
} from 'react-icons/fi';
import { useCart } from '@/app/context/CartContext';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import './cart.css';

export default function CartPage() {
    const router = useRouter();
    const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
    const [showModal, setShowModal] = useState(false);

    const subtotal = getTotalPrice();
    const shipping = subtotal > 1000000 ? 0 : 150000;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        setShowModal(true);
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
                        <h1 className="cart-title">Корзина</h1>
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
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            loading="lazy"
                                        />
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

                                        <div className="cart-item-price">
                                            {item.price.toLocaleString()} сум
                                        </div>

                                        <div className="cart-item-actions">
                                            <div className="quantity-control">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="quantity-btn"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <FiMinus />
                                                </button>
                                                <span className="quantity-value">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="quantity-btn"
                                                >
                                                    <FiPlus />
                                                </button>
                                            </div>

                                            <div className="cart-item-total">
                                                Итого: <span>{(item.price * item.quantity).toLocaleString()} сум</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Боковая панель с итогами */}
                        <div className="cart-sidebar">
                            <div className="cart-summary">
                                <h2 className="summary-title">Ваш заказ</h2>

                                <div className="summary-row">
                                    <span>Товары ({cartItems.length})</span>
                                    <span>{subtotal.toLocaleString()} сум</span>
                                </div>

                                <div className="summary-row">
                                    <span>Доставка</span>
                                    <span className={shipping === 0 ? 'free-shipping' : ''}>
                                        {shipping === 0 ? 'Бесплатно' : `${shipping.toLocaleString()} сум`}
                                    </span>
                                </div>

                                <div className="summary-total">
                                    <span>Итого</span>
                                    <span>{total.toLocaleString()} сум</span>
                                </div>

                                {shipping > 0 && (
                                    <div className="shipping-hint">
                                        <FiTruck />
                                        <span>
                                            Бесплатная доставка при заказе от 1 000 000 сум
                                        </span>
                                    </div>
                                )}

                                {/* Кнопка оформления */}
                                <button
                                    onClick={handleCheckout}
                                    className="btn btn-primary checkout-btn"
                                >
                                    <FiCreditCard />
                                    Оформить заказ
                                </button>

                                {/* Преимущества */}
                                <div className="cart-benefits">
                                    <div className="benefit-item">
                                        <FiTruck className="benefit-icon" />
                                        <div className="benefit-text">
                                            <strong>Бесплатная доставка</strong>
                                            <span>от 1 000 000 сум</span>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <FiClock className="benefit-icon" />
                                        <div className="benefit-text">
                                            <strong>Доставка за 24 часа</strong>
                                            <span>по Ташкенту</span>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <FiPhone className="benefit-icon" />
                                        <div className="benefit-text">
                                            <strong>Позвоните нам</strong>
                                            <span>+998 99 878-39-49</span>
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

            {/* Модальное окно - просто номер телефона */}
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
                                {cartItems.map(item => (
                                    <div key={item.id} className="modal-order-item">
                                        <span className="modal-item-name">{item.name}</span>
                                        <span className="modal-item-quantity">{item.quantity} шт.</span>
                                        <span className="modal-item-price">
                                            {(item.price * item.quantity).toLocaleString()} сум
                                        </span>
                                    </div>
                                ))}
                                <div className="modal-order-total">
                                    <strong>Итого:</strong>
                                    <strong>{total.toLocaleString()} сум</strong>
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
}