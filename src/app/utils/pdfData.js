export const pdfFiles = [
    {
        id: 1,
        name: 'Каталог унитазов 2024',
        fileName: 'full1(унитаз биде чаша раковины писуар чашоген инсталяция раковина с тумбой ванны).pdf',
        filePath: '/pdf/full1(унитаз биде чаша раковины писуар чашоген инсталяция раковина с тумбой ванны).pdf',
        categories: ['unitaz', 'bide', 'chasha', 'rakovina', 'pisuar', 'chashogen', 'installation', 'raktumba', 'vanna'],
        thumbnail: '/images/pdf-thumbnails/unitaz-pdf.jpg',
        pageCount: 45,
        size: '5.2 MB'
    },
    {
        id: 2,
        name: 'Ванны и аксессуары',
        fileName: 'full2(унитаз раковина инсталяция биде чаша писуар чашоген раковина с тумбой).pdf',
        filePath: '/pdf/full2(унитаз раковина инсталяция биде чаша писуар чашоген раковина с тумбой).pdf',
        categories: ['unitaz', 'rakovina', 'installation', 'bide', 'chasha', 'pisuar', 'chashogen', 'raktumba'],
        thumbnail: '/images/pdf-thumbnails/bath-pdf.jpg',
        pageCount: 32,
        size: '4.8 MB'
    },
    {
        id: 3,
        name: 'Смесители для ванной',
        fileName: 'full3(унитаз биде инсталяция чаша раковина).pdf',
        filePath: '/pdf/full3(унитаз биде инсталяция чаша раковина).pdf',
        categories: ['unitaz', 'bide', 'installation', 'chasha', 'rakovina'],
        thumbnail: '/images/pdf-thumbnails/faucet-pdf.jpg',
        pageCount: 28,
        size: '3.9 MB'
    },
    {
        id: 4,
        name: 'Зеркала и шкафы',
        fileName: 'ванны.pdf',
        filePath: '/pdf/ванны.pdf',
        categories: ['vanna'],
        thumbnail: '/images/pdf-thumbnails/mirror-pdf.jpg',
        pageCount: 36,
        size: '4.2 MB'
    },
    {
        id: 5,
        name: 'Раковины и чаши',
        fileName: 'зеркаластумбой.pdf',
        filePath: '/pdf/зеркаластумбой.pdf',
        categories: ['oyna', 'raktumba'],
        thumbnail: '/images/pdf-thumbnails/sink-pdf.jpg',
        pageCount: 41,
        size: '5.0 MB'
    },
    {
        id: 6,
        name: 'Инсталляции и писуары',
        fileName: 'зеркало1.pdf',
        filePath: '/pdf/зеркало1.pdf',
        categories: ['oyna'],
        thumbnail: '/images/pdf-thumbnails/installation-pdf.jpg',
        pageCount: 24,
        size: '3.5 MB'
    },
    {
        id: 7,
        name: 'Чашогены премиум',
        fileName: 'зеркало2.pdf',
        filePath: '/pdf/зеркало2.pdf',
        categories: ['oyna'],
        thumbnail: '/images/pdf-thumbnails/chashogen-pdf.jpg',
        pageCount: 18,
        size: '2.9 MB'
    },
    {
        id: 8,
        name: 'Элитная сантехника',
        fileName: 'зеркало3.pdf',
        filePath: '/pdf/зеркало3.pdf',
        categories: ['oyna'],
        thumbnail: '/images/pdf-thumbnails/elite-pdf.jpg',
        pageCount: 64,
        size: '7.1 MB'
    },
    {
        id: 9,
        name: 'Аксессуары для ванной',
        fileName: 'сместитель+душевые.pdf',
        filePath: '/pdf/сместитель+душевые.pdf',
        categories: ['smestitel'],
        thumbnail: '/images/pdf-thumbnails/accessories-pdf.jpg',
        pageCount: 22,
        size: '3.1 MB'
    },
    {
        id: 10,
        name: 'Полный каталог 2024',
        fileName: 'умныйунитаз+2инсталятор.pdf',
        filePath: '/pdf/умныйунитаз+2инсталятор.pdf',
        categories: ['unitaz', 'installation'],
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

// Словарь для перевода категорий
export const categoryNames = {
    'unitaz': 'Унитазы',
    'bide': 'Биде',
    'chasha': 'Чаши',
    'rakovina': 'Раковины',
    'pisuar': 'Писсуары',
    'chashogen': 'Чашогены',
    'installation': 'Инсталляции',
    'raktumba': 'Раковины с тумбой',
    'vanna': 'Ванны',
    'smestitel': 'Смесители',
    'oyna': 'Зеркала',
    'akksesuar': 'Аксессуары',
    'play3': 'Другое'
};