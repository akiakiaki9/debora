'use client'
import React, { memo } from 'react';
import Link from 'next/link';
import {
    FiArrowRight,
    FiBox,
    FiGrid,
} from 'react-icons/fi';
import { GiBathtub } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";
import { FaShower, FaSink, FaWater } from 'react-icons/fa';
import { PiToilet } from "react-icons/pi";
import { MdKitchen, MdChair, MdShower } from 'react-icons/md';
import { products, categories } from '@/app/utils/data';
import './catalog.css';

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

// Красивая карточка категории с фото
const CategoryCard = memo(({ category }) => {
    const icon = categoryIcons[category.slug] || categoryIcons.default;
    const imageUrl = categoryImages[category.slug] || categoryImages.default;
    const productCount = products.filter(p => p.category === category.slug).length;

    return (
        <Link href={`/catalog/${category.slug}`} className="category-card">
            <div className="category-card-image">
                <img src={imageUrl} alt={category.name} loading="lazy" />
                <div className="category-card-overlay">
                    <span className="category-card-icon">{icon}</span>
                </div>
            </div>
            <div className="category-card-content">
                <h3 className="category-card-title">{category.name}</h3>
                <p className="category-card-count">{productCount} товаров</p>
                <span className="category-card-link">
                    Перейти
                    <FiArrowRight className="category-card-arrow" />
                </span>
            </div>
        </Link>
    );
});

CategoryCard.displayName = 'CategoryCard';

const CatalogPreview = () => {
    return (
        <section className="catalog-preview">
            <div className="container">
                {/* Заголовок секции */}
                <div className="section-header">
                    <div>
                        <span className="section-subtitle">Категории</span>
                        <h2 className="section-title">Выберите категорию</h2>
                    </div>
                </div>

                {/* Сетка категорий с фото */}
                <div className="categories-grid-premium">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>

                {/* Общая кнопка каталога */}
                <div className="catalog-button-wrapper">
                    <Link href="/catalog" className="catalog-main-btn" prefetch={false}>
                        <span>Перейти в полный каталог</span>
                        <FiArrowRight className="btn-icon" />
                    </Link>
                </div>

                {/* Баннер */}
                <div className="premium-banner">
                    <div className="banner-content">
                        <h3>Премиум сантехника для вашего дома</h3>
                        <p>Итальянские, немецкие и японские бренды. 17 лет на рынке Ташкента.</p>
                        <Link href="/catalog" className="banner-btn" prefetch={false}>
                            Перейти в каталог
                            <FiArrowRight />
                        </Link>
                    </div>
                    <div className="banner-stats">
                        <div className="stat-item">
                            <span className="stat-number">17+</span>
                            <span className="stat-label">лет на рынке</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5000+</span>
                            <span className="stat-label">довольных клиентов</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">брендов</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(CatalogPreview);