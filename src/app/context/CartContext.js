'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // Загрузка корзины из localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsed = JSON.parse(savedCart);
                setCartItems(parsed);
            } catch (error) {
                console.error('Ошибка загрузки корзины:', error);
            }
        }
    }, []);

    // Обновление localStorage и счетчика при изменении корзины
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(count);
    }, [cartItems]);

    // Добавление товара
    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);

            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            }];
        });

        // Показываем уведомление
        if (typeof window !== 'undefined') {
            const notification = document.createElement('div');
            notification.className = 'cart-notification';
            notification.textContent = 'Товар добавлен в корзину';
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 2000);
        }
    };

    // Удаление товара
    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    // Обновление количества
    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Очистка корзины
    const clearCart = () => {
        if (window.confirm('Очистить корзину?')) {
            setCartItems([]);
        }
    };

    // Получение общей суммы
    const getTotalPrice = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            cartCount,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};