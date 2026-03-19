'use client'
import React from 'react';
import Link from 'next/link';
import { FiBookOpen } from 'react-icons/fi';
import { pdfFiles } from '@/app/utils/pdfData';
import './pdf.css';

const PdfButton = ({ className, showText = true, showCount = true, children }) => {
    return (
        <Link href="/pdf" className={`pdf-button ${className || ''}`}>
            {children || (
                <>
                    <FiBookOpen className="pdf-button-icon" />
                    {showText && <span className="pdf-button-text">PDF Каталоги</span>}
                    {showCount && <span className="pdf-button-count">{pdfFiles.length}</span>}
                    <span className="btn-glow"></span>
                    <span className="btn-shine"></span>
                    <span className="btn-sparkle"></span>
                </>
            )}
        </Link>
    );
};

export default PdfButton;