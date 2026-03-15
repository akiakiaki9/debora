export const pdfFiles = [
    {
        id: 1,
        name: 'Каталог унитазов 2024',
        fileName: 'unitaz-catalog-2024.pdf',
        filePath: '/pdf/1.pdf',
        categories: ['unitaz', 'bide'],
        thumbnail: '/images/pdf-thumbnails/unitaz-pdf.jpg',
        pageCount: 45,
        size: '5.2 MB'
    },
    {
        id: 2,
        name: 'Ванны и аксессуары',
        fileName: 'bath-collection.pdf',
        filePath: '/pdf/2.pdf',
        categories: ['vanna', 'akksesuar'], 
        thumbnail: '/images/pdf-thumbnails/bath-pdf.jpg',
        pageCount: 32,
        size: '4.8 MB'
    },
    {
        id: 3,
        name: 'Смесители для ванной',
        fileName: 'faucet-catalog.pdf',
        filePath: '/pdf/3.pdf',
        categories: ['smestitel'],
        thumbnail: '/images/pdf-thumbnails/faucet-pdf.jpg',
        pageCount: 28,
        size: '3.9 MB'
    },
    {
        id: 4,
        name: 'Зеркала и шкафы',
        fileName: 'mirror-furniture.pdf',
        filePath: '/pdf/4.pdf',
        categories: ['oyna', 'play3', 'raktumba'],
        thumbnail: '/images/pdf-thumbnails/mirror-pdf.jpg',
        pageCount: 36,
        size: '4.2 MB'
    },
    {
        id: 5,
        name: 'Раковины и чаши',
        fileName: 'sink-bowl.pdf',
        filePath: '/pdf/5.pdf',
        categories: ['rakovina', 'chasha'],
        thumbnail: '/images/pdf-thumbnails/sink-pdf.jpg',
        pageCount: 41,
        size: '5.0 MB'
    },
    {
        id: 6,
        name: 'Инсталляции и писуары',
        fileName: 'installation-urinal.pdf',
        filePath: '/pdf/6.pdf',
        categories: ['installation', 'pisuar'],
        thumbnail: '/images/pdf-thumbnails/installation-pdf.jpg',
        pageCount: 24,
        size: '3.5 MB'
    },
    {
        id: 7,
        name: 'Чашогены премиум',
        fileName: 'chashogen-premium.pdf',
        filePath: '/pdf/7.pdf',
        categories: ['chashogen'],
        thumbnail: '/images/pdf-thumbnails/chashogen-pdf.jpg',
        pageCount: 18,
        size: '2.9 MB'
    },
    {
        id: 8,
        name: 'Элитная сантехника',
        fileName: 'elite-collection.pdf',
        filePath: '/pdf/8.pdf',
        categories: ['unitaz', 'vanna', 'smestitel', 'rakovina'],
        thumbnail: '/images/pdf-thumbnails/elite-pdf.jpg',
        pageCount: 64,
        size: '7.1 MB'
    },
    {
        id: 9,
        name: 'Аксессуары для ванной',
        fileName: 'bath-accessories.pdf',
        filePath: '/pdf/9.pdf',
        categories: ['akksesuar', 'oyna'],
        thumbnail: '/images/pdf-thumbnails/accessories-pdf.jpg',
        pageCount: 22,
        size: '3.1 MB'
    },
    {
        id: 10,
        name: 'Полный каталог 2024',
        fileName: 'full-catalog-2024.pdf',
        filePath: '/pdf/10.pdf',
        categories: ['unitaz', 'bide', 'chasha', 'rakovina', 'pisuar', 'chashogen', 'installation', 'raktumba', 'vanna', 'smestitel', 'oyna', 'play3'], // Все категории
        thumbnail: '/images/pdf-thumbnails/full-catalog.jpg',
        pageCount: 256,
        size: '18.5 MB'
    }
];

// Функция для получения PDF по категории
export const getPdfsByCategory = (categorySlug) => {
    if (!categorySlug || categorySlug === 'all') {
        return pdfFiles;
    }
    return pdfFiles.filter(pdf =>
        pdf.categories.includes(categorySlug)
    );
};

// Функция для получения уникальных категорий из PDF
export const getCategoriesFromPdfs = () => {
    const categoriesSet = new Set();
    pdfFiles.forEach(pdf => {
        pdf.categories.forEach(cat => categoriesSet.add(cat));
    });
    return Array.from(categoriesSet);
};