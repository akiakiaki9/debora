// context/CartContext.jsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Загружаем корзину из localStorage при монтировании
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error('Error loading cart:', error);
        } finally {
            setIsInitialized(true);
        }
    }, []);

    // Сохраняем корзину в localStorage при каждом изменении
    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem('cart', JSON.stringify(cartItems));
            } catch (error) {
                console.error('Error saving cart:', error);
            }
        }
    }, [cartItems, isInitialized]);

    const addToCart = (product) => {
        setCartItems(prev => {
            // Проверяем, есть ли уже такой товар в корзине
            const existingItem = prev.find(item => item.id === product.id);

            if (existingItem) {
                // Если товар уже есть, увеличиваем количество
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            } else {
                // Если товара нет, добавляем новый с quantity = 1
                return [...prev, { ...product, quantity: 1 }];
            }
        });

        // Диспатчим событие для обновления UI
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('cartUpdated'));
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const clearCart = () => {
        setCartItems([]);
        window.dispatchEvent(new Event('cartUpdated'));
    };

    // Вычисляем общее количество товаров
    const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

    const value = {
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInitialized
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}