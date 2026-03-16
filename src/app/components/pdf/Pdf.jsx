'use client'
import React, { useState, useEffect } from 'react';
import { FiBookOpen, FiX, FiEye, FiFileText, FiDownload } from 'react-icons/fi';
import { pdfFiles } from '@/app/utils/pdfData';
import './pdf.css';

// Карточка PDF для модального окна
const PdfModalCard = ({ pdf, onClose }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Функция для открытия PDF на мобильных устройствах
    const handleOpenPdf = () => {
        if (isMobile) {
            const pdfUrl = pdf.filePath;

            // Пробуем разные подходы для мобильных
            window.open(pdfUrl, '_blank', 'noopener,noreferrer');

            // Дополнительный метод через создание ссылки
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(pdf.filePath, '_blank');
        }
        onClose();
    };

    // Функция для скачивания PDF
    const handleDownloadPdf = (e) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = pdf.filePath;
        link.download = pdf.name + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Формируем URL для фото из интернета
    const getImageUrl = () => {
        if (imageError) return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR202VPZfMD9kdS4yqx2x8aeg6DYlFypnBNBA&s';

        // Если есть thumbnail из данных
        if (pdf.thumbnail) {
            // Проверяем, является ли это URL из интернета
            if (pdf.thumbnail.startsWith('http')) {
                return pdf.thumbnail;
            }
            return pdf.thumbnail;
        }

        // Если есть screenshot из данных
        if (pdf.screenshot) {
            if (pdf.screenshot.startsWith('http')) {
                return pdf.screenshot;
            }
            return pdf.screenshot;
        }

        // Дефолтное изображение из интернета
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR202VPZfMD9kdS4yqx2x8aeg6DYlFypnBNBA&s';
    };

    return (
        <div
            className="pdf-modal-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={isMobile ? handleOpenPdf : undefined}
        >
            <div className="pdf-modal-card-image">
                <img
                    src={getImageUrl()}
                    alt={pdf.name}
                    loading="lazy"
                    onError={() => setImageError(true)}
                />
                <div className={`pdf-modal-card-overlay ${(isHovered || isMobile) ? 'active' : ''}`}>
                    {isMobile ? (
                        <>
                            <button className="pdf-modal-view-btn" onClick={handleOpenPdf}>
                                <FiEye />
                                Открыть
                            </button>
                            <button className="pdf-modal-download-btn" onClick={handleDownloadPdf}>
                                <FiDownload />
                                Скачать
                            </button>
                        </>
                    ) : (
                        <button className="pdf-modal-view-btn" onClick={handleOpenPdf}>
                            <FiEye />
                            Открыть PDF
                        </button>
                    )}
                </div>
                <div className="pdf-modal-badge">
                    <FiFileText />
                </div>
            </div>

            <div className="pdf-modal-card-content">
                <h4 className="pdf-modal-card-title">{pdf.name}</h4>

                <div className="pdf-modal-card-meta">
                    <span>{pdf.pageCount || '—'} стр.</span>
                    <span>•</span>
                    <span>{pdf.size || '—'}</span>
                </div>

                <div className="pdf-modal-card-actions">
                    <button className="pdf-modal-view-btn" onClick={handleOpenPdf}>
                        <FiEye />
                        Открыть
                    </button>
                    <button className="pdf-modal-download-btn" onClick={handleDownloadPdf}>
                        <FiDownload />
                        Скачать
                    </button>
                </div>
            </div>
        </div>
    );
};

// Модальное окно с PDF
const PdfModal = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    // Блокировка скролла при открытом модальном окне
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Определяем мобильное устройство
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Фильтрация PDF по поиску
    const filteredPdfs = searchQuery
        ? pdfFiles.filter(pdf =>
            pdf.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : pdfFiles;

    if (!isOpen) return null;

    return (
        <div className="pdf-modal-overlay" onClick={onClose}>
            <div className="pdf-modal-container" onClick={e => e.stopPropagation()}>
                <div className="pdf-modal-header">
                    <div className="pdf-modal-title">
                        <FiBookOpen className="pdf-modal-title-icon" />
                        <h2>PDF Каталоги ({pdfFiles.length})</h2>
                    </div>
                    <button className="pdf-modal-close" onClick={onClose}>
                        <FiX />
                    </button>
                </div>

                <div className="pdf-modal-search">
                    <input
                        type="text"
                        placeholder="Поиск каталогов..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pdf-modal-search-input"
                    />
                </div>

                <div className="pdf-modal-grid">
                    {filteredPdfs.length === 0 ? (
                        <div className="pdf-modal-empty">
                            <p>Каталоги не найдены</p>
                        </div>
                    ) : (
                        filteredPdfs.map(pdf => (
                            <PdfModalCard key={pdf.id} pdf={pdf} onClose={onClose} />
                        ))
                    )}
                </div>

                <div className="pdf-modal-footer">
                    <button className="pdf-modal-close-btn" onClick={onClose}>
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
};

// Основной компонент - плавающая кнопка
const PdfFloatingButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                className="pdf-floating-btn"
                onClick={() => setIsModalOpen(true)}
                aria-label="Открыть PDF каталоги"
            >
                <FiBookOpen className="pdf-floating-icon" />
                <span className="pdf-floating-text">PDF Каталоги</span>
                <span className="pdf-floating-count">{pdfFiles.length}</span>
            </button>

            <PdfModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default PdfFloatingButton;