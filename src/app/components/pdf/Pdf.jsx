'use client'
import React, { useState, useEffect } from 'react';
import { FiBookOpen, FiX, FiEye, FiFileText } from 'react-icons/fi';
import { pdfFiles } from '@/app/utils/pdfData';
import './pdf.css';

// Карточка PDF для модального окна
const PdfModalCard = ({ pdf, onClose }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleOpenPdf = () => {
        window.open(pdf.filePath, '_blank');
        onClose();
    };

    return (
        <div
            className="pdf-modal-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="pdf-modal-card-image">
                <img
                    src={pdf.thumbnail || '/images/pdf-placeholder.jpg'}
                    alt={pdf.name}
                    loading="lazy"
                />
                <div className={`pdf-modal-card-overlay ${isHovered ? 'active' : ''}`}>
                    <button className="pdf-modal-view-btn" onClick={handleOpenPdf}>
                        <FiEye />
                        Открыть PDF
                    </button>
                </div>
                <div className="pdf-modal-badge">
                    <FiFileText />
                </div>
            </div>

            <div className="pdf-modal-card-content">
                <h4 className="pdf-modal-card-title">{pdf.name}</h4>

                <div className="pdf-modal-card-meta">
                    <span>{pdf.pageCount} стр.</span>
                    <span>•</span>
                    <span>{pdf.size}</span>
                </div>

                <button className="pdf-modal-view-btn" onClick={handleOpenPdf}>
                    <FiEye />
                    Открыть
                </button>
            </div>
        </div>
    );
};

// Модальное окно с PDF
const PdfModal = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');

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