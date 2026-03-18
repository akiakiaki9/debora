export const categories = [
    // САНИТАРНАЯ КЕРАМИКА (основное)
    { id: 1, name: 'Унитазы', slug: 'unitaz' },              // Самый популярный товар
    { id: 2, name: 'Ванны', slug: 'vanna' },                 // Второй по важности
    { id: 3, name: 'Раковины', slug: 'rakovina' },           // Обязательный элемент
    { id: 4, name: 'Смесители', slug: 'smestitel' },         // Идут вместе с раковинами/ваннами
    { id: 5, name: 'Душевые сместители', slug: 'smestitel_dush' },

    // МЕБЕЛЬ ДЛЯ ВАННОЙ
    { id: 6, name: 'Раковина с тумбой', slug: 'raktumba' },  // Готовое решение
    { id: 7, name: 'Зеркало с тумбой', slug: 'oyna' },       // Важный аксессуар

    // ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ
    { id: 8, name: 'Биде', slug: 'bide' },                   // Для комфорта
    { id: 9, name: 'Чаши', slug: 'chasha' },                 // Дизайнерские решения
    { id: 10, name: 'Инсталляция', slug: 'installation' },   // Для подвесной сантехники
    { id: 11, name: 'Писуар', slug: 'pisuar' },              // Для общественных мест
    { id: 12, name: 'Чашоген', slug: 'chashogen' },          // Специфический товар
];

export const products = [
    // УНИТАЗЫ
    {
        id: 1, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/1.png',
        image_1: '/images/data/toilet/1.1.png',
        inStock: true,
        specs: {
            size: "535x360x355 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "2311R",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Tornado"
        }
    },
    {
        id: 2, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/2.png',
        inStock: true,
        specs: {
            size: "535x360x355 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "2312R",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Tornado"
        }
    },
    {
        id: 3, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/3.png',
        image_1: '/images/data/toilet/3.1.png',
        inStock: true,
        specs: {
            size: "530x360x360 mm",
            pTrap: "180 mm",
            sTrap: "150-250 mm",
            material: "Керамика",
            model: "M1002",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 4, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/4.png',
        image_1: '/images/data/toilet/4.1.png',
        image_2: '/images/data/toilet/4.2.png',
        inStock: true,
        specs: {
            size: "660x380x845 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "M6007",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 5, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/5.png',
        image_1: '/images/data/toilet/5.1.png',
        image_2: '/images/data/toilet/5.2.png',
        inStock: true,
        specs: {
            size: "700x385x840 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "M6008",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 6, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/6.png',
        image_1: '/images/data/toilet/7.1.png',
        image_2: '/images/data/toilet/7.2.png',
        inStock: true,
        specs: {
            size: "700x370x760 mm",
            pTrap: "180 mm",
            sTrap: "100/250 mm",
            material: "Керамика",
            model: "M2210",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown",
            type: "CASERTA SERIES"
        }
    },
    {
        id: 7, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/7.png',
        image_1: '/images/data/toilet/7.1.png',
        image_2: '/images/data/toilet/7.2.png',
        inStock: true,
        specs: {
            size: "670x370x750 mm",
            pTrap: "180 mm Roughing-in",
            sTrap: "150/250 mm",
            material: "Керамика",
            model: "M2211",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown Rimless",
            type: "CASERTA SERIES"
        }
    },
    {
        id: 8, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/8.png',
        image_1: '/images/data/toilet/8.1.png',
        image_2: '/images/data/toilet/8.2.png',
        inStock: true,
        specs: {
            size: "480x370x370 mm",
            material: "Керамика",
            model: "M1002",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Rimless Flushing",
            type: "Lnven tiveness"
        }
    },
    {
        id: 9, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/9.png',
        image_1: '/images/data/toilet/9.1.png',
        image_2: '/images/data/toilet/9.2.png',
        inStock: true,
        specs: {
            size: "510x350x360 mm",
            material: "Керамика",
            model: "M1007",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            type: "Brilliance"
        }
    },
    {
        id: 10, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/10.png',
        image_1: '/images/data/toilet/10.1.png',
        inStock: true,
        specs: {
            size: "550x360x350 mm",
            material: "Керамика",
            model: "M1101",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown Rimless"
        }
    },
    {
        id: 11, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/11.png',
        image_1: '/images/data/toilet/10.1.png',
        inStock: true,
        specs: {
            size: "540x350x350 mm",
            material: "Керамика",
            model: "M1102",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown Rimless"
        }
    },
    {
        id: 12, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/12.png',
        image_1: '/images/data/toilet/10.1.png',
        inStock: true,
        specs: {
            size: "530x360x400 mm",
            material: "Керамика",
            model: "M1007",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 13, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/13.png',
        image_1: '/images/data/toilet/10.1.png',
        inStock: true,
        specs: {
            size: "530x375x365 mm",
            pTrap: "180 mm",
            sTrap: "250 mm Roughing-in",
            material: "Керамика",
            model: "M1008",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Rimless"
        }
    },
    {
        id: 14, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/14.png',
        inStock: true,
        specs: {
            size: "490x345x355 mm",
            material: "Керамика",
            model: "M1009",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Rimless"
        }
    },
    {
        id: 15, // YES
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/15.png',
        inStock: true,
        specs: {
            size: "530x360x365 mm",
            material: "Керамика",
            model: "M1010",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    // БИДЕ
    {
        id: 16, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/1.png',
        image_1: '/images/data/bide/1.1.png',
        inStock: true,
        specs: {
            size: "535x360x325 mm",
            material: "Керамика",
            model: "F7011",
            pTrap: "180 mm",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Wall-hung installation"
        }
    },
    {
        id: 17, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/2.png',
        image_1: '/images/data/bide/1.1.png',
        inStock: true,
        specs: {
            size: "535x360x325 mm",
            material: "Керамика",
            model: "F7012",
            pTrap: "180 mm",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Wall-hung installation"
        }
    },
    {
        id: 18, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/3.png',
        inStock: true,
        specs: {
            size: "535x376x359 mm",
            material: "Керамика",
            model: "F7058",
            pTrap: "180 mm",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 19, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/4.png',
        image_1: '/images/data/bide/4.1.png',
        inStock: true,
        specs: {
            size: "540x360x410 mm",
            material: "Керамика",
            model: "F1012",
            pTrap: "180 mm",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 20, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/5.png',
        image_1: '/images/data/bide/5.1.png',
        inStock: true,
        specs: {
            size: "540x360x410 mm",
            material: "Керамика",
            model: "F1011",
            pTrap: "180 mm",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 21, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/6.png',
        image_1: '/images/data/bide/6.1.png',
        inStock: true,
        specs: {
            size: "480x370x325 mm",
            material: "Керамика",
            model: "F7002",
            pTrap: "180 mm",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Wall-hung installation"
        }
    },
    {
        id: 211, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/7.png',
        image_1: '/images/data/bide/7.1.png',
        inStock: true,
        specs: {
            size: "510x350x320 mm",
            material: "Керамика",
            model: "M7007",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Wall-hung installation"
        }
    },
    {
        id: 212, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/8.png',
        inStock: true,
        specs: {
            size: "520x360x300 mm",
            material: "Керамика",
            model: "DBR-F700",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 213, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/9.png',
        inStock: true,
        specs: {
            size: "490x360x325 mm",
            material: "Керамика",
            model: "F7002",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 214, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/10.png',
        inStock: true,
        specs: {
            size: "540x360x410 mm",
            material: "Керамика",
            model: "F1007",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 215, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/11.png',
        inStock: true,
        specs: {
            size: "550x360x410 mm",
            material: "Керамика",
            model: "F1008",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 216, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/12.png',
        inStock: true,
        specs: {
            size: "525x340x400 mm",
            material: "Керамика",
            model: "F1005",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 217, // YES
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/13.png',
        inStock: true,
        specs: {
            size: "540x340x400 mm",
            material: "Керамика",
            model: "F1006",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 217,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/14.png',
        inStock: true,
        specs: {
            size: "560x365x400 mm",
            material: "Керамика",
            model: "F7005",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 217,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/15.png',
        inStock: true,
        specs: {
            size: "540x460x335 mm",
            material: "Керамика",
            model: "G1015",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            wallInstallation: "Fixing to wall with back"
        }
    },
    // CHASHA
    {
        id: 22,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/1.png',
        inStock: true,
        specs: {
            size: "385x385x140 mm",
            material: "Керамика",
            model: "K1701",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin",
            installation: "Above counter mounting"
        }
    },
    {
        id: 23,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/2.png',
        inStock: true,
        specs: {
            size: "600x380x120 mm",
            material: "Керамика",
            model: "K1012",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin",
            installation: "Above counter mounting"
        }
    },
    {
        id: 24,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/3.png',
        inStock: true,
        specs: {
            size: "650x440x165 mm",
            material: "Керамика",
            model: "K1011",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin",
            installation: "Above counter mounting"
        }
    },
    {
        id: 25,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/4.png',
        inStock: true,
        specs: {
            size: "550x380x180 mm",
            material: "Керамика",
            model: "K1901",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Drop In Basin",
            installation: "Counter Mounted"
        }
    },
    {
        id: 26,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/5.png',
        inStock: true,
        specs: {
            size: "600x420x225 mm",
            material: "Керамика",
            model: "K2002",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Under Counter Basin",
            installation: "Under Mounted"
        }
    },
    {
        id: 27,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/6.png',
        inStock: true,
        specs: {
            size: "500x400x135 mm",
            material: "Керамика",
            model: "K1702",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin",
            installation: "Above counter mounting"
        }
    },
    {
        id: 28,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/7.png',
        inStock: true,
        specs: {
            size: "515x405x170 mm",
            material: "Керамика",
            model: "K2106",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Under Counter Basin",
            installation: "Under Mounted"
        }
    },
    {
        id: 29,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/8.png',
        inStock: true,
        specs: {
            size: "600x400x150 mm",
            material: "Керамика",
            model: "K1009",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin",
            installation: "Above counter mounting"
        }
    },
    {
        id: 30,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/9.png',
        inStock: true,
        specs: {
            size: "600x400x180 mm",
            material: "Керамика",
            model: "K1031",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Vareous China",
            installation: "Semi-mounting"
        }
    },
    {
        id: 31,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/10.png',
        inStock: true,
        specs: {
            size: "435x320x130 mm",
            material: "Керамика",
            model: "K1605",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin"
        }
    },
    {
        id: 32,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/11.png',
        inStock: true,
        specs: {
            size: "425x425x140 mm",
            material: "Керамика",
            model: "K1503",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin"
        }
    },
    {
        id: 33,
        name: 'Чаша Debora',
        category: 'chasha',
        image: '/images/data/chasha/12.png',
        inStock: true,
        specs: {
            size: "360x360x120 mm",
            material: "Керамика",
            model: "K1103",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Art Basin"
        }
    },
    // РАКОВИНЫ
    { // YES
        id: 34,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/1.png',
        image_1: '/images/data/rakovina/1.1.png',
        inStock: true,
        specs: {
            size: "1200x500x195 mm",
            material: "Керамика",
            model: "8512",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Cabinet basin"
        }
    },
    { // YES
        id: 35,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/2.png',
        image_1: '/images/data/rakovina/2.1.png',
        inStock: true,
        specs: {
            size: "905x535x200 mm",
            material: "Керамика",
            model: "9790",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Cabinet basin"
        }
    },
    { // YES
        id: 36,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/3.png',
        image_1: '/images/data/rakovina/3.1.png',
        inStock: true,
        specs: {
            size: "1005x500x210 mm",
            material: "Керамика",
            model: "9810",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Cabinet basin"
        }
    },
    { // YES
        id: 37,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/4.png',
        image_1: '/images/data/rakovina/4.1.png',
        inStock: true,
        specs: {
            size: "505x420x195 mm",
            material: "Керамика",
            model: "841-50",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Cabinet basin"
        }
    },
    { // YES
        id: 38,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/5.png',
        inStock: true,
        specs: {
            size: "560x460x450 mm",
            material: "Керамика",
            model: "B215",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Wall-hung Basin",
        }
    },
    { // YES
        id: 39,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/6.png',
        inStock: true,
        specs: {
            size: "610x460x490 mm",
            material: "Керамика",
            model: "B192",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Wall-hung Basin",
        }
    },
    { // YES
        id: 40,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/7.png',
        inStock: true,
        specs: {
            size: "520x440x490 mm",
            material: "Керамика",
            model: "B193",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Wall-hung Basin",
        }
    },
    { // YES
        id: 41,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/8.png',
        inStock: true,
        specs: {
            size: "540x460x560 mm",
            material: "Керамика",
            model: "B201",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Wall-hung Basin",
        }
    },
    { // YES
        id: 42,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/9.png',
        image_1: '/images/data/rakovina/9.1.png',
        inStock: true,
        specs: {
            size: "510x475x195 mm",
            material: "Керамика",
            model: "836-50",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Wall-hung Basin",
        }
    },
    { // YES
        id: 43,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/10.png',
        inStock: true,
        specs: {
            size: "540x460x560 mm",
            material: "Керамика",
            model: "B201",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Wall-hung Basin",
        }
    },
    {
        id: 44,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/11.png',
        inStock: true,
        specs: {
            size: "610x460x880 mm",
            material: "Керамика",
            model: "B182",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Basin with Pedestal",
        }
    },
    {
        id: 45,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/12.png',
        inStock: true,
        specs: {
            size: "520x440x830 mm",
            material: "Керамика",
            model: "B183",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Basin with Pedestal",
        }
    },
    {
        id: 46,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/13.png',
        inStock: true,
        specs: {
            size: "560x470x805 mm",
            material: "Керамика",
            model: "B214",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Basin with Pedestal",
        }
    },
    {
        id: 47,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/14.png',
        inStock: true,
        specs: {
            size: "560x470x830 mm",
            material: "Керамика",
            model: "B215",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Basin with Pedestal",
        }
    },
    {
        id: 48,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/15.png',
        inStock: true,
        specs: {
            size: "570x450x845 mm",
            material: "Керамика",
            model: "B216",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Basin with Pedestal",
        }
    },
    {
        id: 49,
        name: 'Раковина Debora',
        category: 'rakovina',
        image: '/images/data/rakovina/16.png',
        inStock: true,
        specs: {
            size: "615x455x835 mm",
            material: "Керамика",
            model: "B190",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Basin with Pedestal",
        }
    },
    // ПИСУАР
    { // YES
        id: 42,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/1.png',
        inStock: true,
        specs: {
            size: "300x350x700 mm",
            material: "Керамика",
            model: "X8216",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 421,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/2.png',
        inStock: true,
        specs: {
            size: "350x300x700 mm",
            material: "Керамика",
            model: "DBR-333",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 422,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/3.png',
        inStock: true,
        specs: {
            size: "360x305x650 mm",
            material: "Керамика",
            model: "X8825",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 423,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/4.png',
        inStock: true,
        specs: {
            size: "405x365x850 mm",
            material: "Керамика",
            model: "X8835",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 424,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/5.png',
        inStock: true,
        specs: {
            size: "300x335x690 mm",
            material: "Керамика",
            model: "X8867",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 425,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/6.png',
        inStock: true,
        specs: {
            size: "300x350x700 mm",
            material: "Керамика",
            model: "X8216",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 426,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/7.png',
        inStock: true,
        specs: {
            size: "350x380x750 mm",
            material: "Керамика",
            model: "X8859",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 427,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/8.png',
        inStock: true,
        specs: {
            size: "400x420x1020 mm",
            material: "Керамика",
            model: "X8842",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 428,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/9.png',
        inStock: true,
        specs: {
            size: "320x350x950 mm",
            material: "Керамика",
            model: "X8868",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 429,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/10.png',
        inStock: true,
        specs: {
            size: "340x370x710 mm",
            material: "Керамика",
            model: "X8865",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 430,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/11.png',
        inStock: true,
        specs: {
            size: "380x420x920 mm",
            material: "Керамика",
            model: "X8857",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 431,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/12.png',
        inStock: true,
        specs: {
            size: "380x395x960 mm",
            material: "Керамика",
            model: "X7073",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    { // YES
        id: 432,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/13.png',
        inStock: true,
        specs: {
            size: "350x360x980 mm",
            material: "Керамика",
            model: "X7076",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
        }
    },
    // Чашоген
    { // YES
        id: 43,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/1.png',
        inStock: true,
        specs: {
            size: "300x350x700 mm",
            material: "Керамика",
            model: "L1002W",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: 'Lauren Platinum'
        }
    },
    { // YES
        id: 44,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/2.png',
        inStock: true,
        specs: {
            size: "300x350x700 mm",
            material: "Керамика",
            model: "L1002W",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: 'Armani Grey'
        }
    },
    { // YES
        id: 45,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/3.png',
        inStock: true,
        specs: {
            size: "300x350x700 mm",
            material: "Керамика",
            model: "L1002W",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический"
        }
    },
    {
        id: 451,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/4.png',
        inStock: true,
        specs: {
            material: "Керамика",
            model: "L1001W",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: "Lauren Platinum"
        }
    },
    {
        id: 452,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/5.png',
        inStock: true,
        specs: {
            material: "Керамика",
            model: "L1002W",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: "Lauren Platinum"
        }
    },
    {
        id: 453,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/6.png',
        inStock: true,
        specs: {
            material: "Керамика",
            model: "L1001G",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: "Armani Grey"
        }
    },
    {
        id: 454,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/7.png',
        inStock: true,
        specs: {
            material: "Керамика",
            model: "L1002G",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: "Armani Grey"
        }
    },
    {
        id: 455,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/8.png',
        inStock: true,
        specs: {
            material: "Керамика",
            model: "L1001B",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: "Black Gold"
        }
    },
    {
        id: 456,
        name: 'Чашоген Debora',
        category: 'chashogen',
        image: '/images/data/chashogen/9.png',
        inStock: true,
        specs: {
            material: "Керамика",
            model: "L1002B",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            color: "Black Gold"
        }
    },
    // Инсталяция
    { // YES
        id: 46,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/1.png',
        inStock: true,
        specs: {
            size: "580x80x1090 mm",
            material: "Металл",
            model: "S001",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    { // YES
        id: 47,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/2.png',
        inStock: true,
        specs: {
            size: "580x80x1090 mm",
            material: "Металл",
            model: "S002",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    { // YES
        id: 471,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/3.png',
        inStock: true,
        specs: {
            size: "580x92x1152 mm",
            material: "Металл",
            model: "S003",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    { // YES
        id: 472,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/4.png',
        inStock: true,
        specs: {
            size: "400x148x820 mm",
            material: "Металл",
            model: "S004",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    { // YES
        id: 473,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/5.png',
        inStock: true,
        specs: {
            size: "1085x80x545 mm",
            material: "Металл",
            model: "A002",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    {
        id: 474,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/6.png',
        inStock: true,
        specs: {
            size: "510x80x1080 mm",
            material: "Металл",
            model: "S003",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    {
        id: 475,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/7.png',
        inStock: true,
        specs: {
            size: "580x80x1090 mm",
            material: "Металл",
            model: "S005",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    {
        id: 476,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/8.png',
        inStock: true,
        specs: {
            size: "580x80x1090 mm",
            material: "Металл",
            model: "S001",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    {
        id: 477,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/9.png',
        inStock: true,
        specs: {
            size: "580x80x1140 mm",
            material: "Металл",
            model: "S006",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    {
        id: 478,
        name: 'Инсталяция Debora',
        category: 'installation',
        image: '/images/data/installation/10.png',
        inStock: true,
        specs: {
            size: "485x78x1060 mm",
            material: "Металл",
            model: "S009",
            production: "Китай",
            quality: "Высокое",
            body: "Металлический каркас",
            type: "Embedded Type",
            tank: "Concealed Tank",
            set: "Бачок, кнопки для смыва, крепления, гофра"
        }
    },
    // Раковина с тумбой
    { // YES
        id: 48,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/1.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "90 cm"
        }
    },
    { // YES
        id: 49,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/2.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "120 cm"
        }
    },
    { // YES
        id: 50,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/3.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "90 cm"
        }
    },
    { // YES
        id: 51,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/4.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "80 cm"
        }
    },
    { // YES
        id: 52,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/5.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "60 cm"
        }
    },
    { // YES
        id: 53,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/6.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "56 cm"
        }
    },
    { // YES
        id: 54,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/7.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "80 cm"
        }
    },
    { // YES
        id: 55,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/8.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "80 cm"
        }
    },
    { // YES
        id: 56,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/9.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "80 cm"
        }
    },
    { // YES
        id: 57,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/10.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "90 cm"
        }
    },
    { // YES
        id: 58,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/11.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "60 cm"
        }
    },
    { // YES
        id: 59,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/12.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "90 cm"
        }
    },
    { // YES
        id: 60,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/13.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "100 cm"
        }
    },
    { // YES
        id: 61,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/14.png',
        inStock: true,
        specs: {
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            width: "80 cm"
        }
    },
    { // YES
        id: 611,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/15.png',
        image_1: '/images/data/raktumba/15.1.png',
        image_2: '/images/data/raktumba/15.2.png',
        image_3: '/images/data/raktumba/15.3.png',
        image_4: '/images/data/raktumba/15.4.png',
        inStock: true,
        specs: {
            model: "L5010",
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            color: "Lauren Black Gold"
        }
    },
    { // YES
        id: 612,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/16.png',
        image_1: '/images/data/raktumba/16.1.png',
        image_2: '/images/data/raktumba/16.2.png',
        inStock: true,
        specs: {
            model: "L5001",
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            color: "Lauren Black Gold"
        }
    },
    { // YES
        id: 613,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/17.png',
        image_1: '/images/data/raktumba/17.1.png',
        image_2: '/images/data/raktumba/17.2.png',
        image_3: '/images/data/raktumba/17.3.png',
        inStock: true,
        specs: {
            model: "L5005",
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            color: "Lauren Black Gold"
        }
    },
    { // YES
        id: 614,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/18.png',
        image_1: '/images/data/raktumba/18.1.png',
        inStock: true,
        specs: {
            model: "L5007",
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            color: "Lauren Black Gold"
        }
    },
    { // YES
        id: 615,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/19.png',
        image_1: '/images/data/raktumba/19.1.png',
        inStock: true,
        specs: {
            model: "L5008",
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            color: "Lauren Black Gold"
        }
    },
    { // YES
        id: 616,
        name: 'Раковина с тумбой',
        category: 'raktumba',
        image: '/images/data/raktumba/20.png',
        image_1: '/images/data/raktumba/20.1.png',
        image_2: '/images/data/raktumba/20.2.png',
        inStock: true,
        specs: {
            model: "L3001",
            sinkMaterial: "Керамика",
            furnitureMaterial: "ПВС (прессованный водоустойчивый пластик)",
            production: "Китай",
            furnitureProduction: "Узбекистан",
            quality: "Высокое",
            color: "Lauren Black Gold"
        }
    },
    // Сместители
    {
        id: 62,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/1.png',
        inStock: true,
        specs: {
            model: "DBR 202-40",
            type: "Single lever bidet mixer",
            cartridge: "35 mm",
            spoutHeight: "69 mm",
            projection: "129 mm"
        }
    },
    {
        id: 63,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/2.png',
        inStock: true,
        specs: {
            model: "DBR 40G",
            type: "Single lever bidet mixer",
            cartridge: "35 mm",
            spoutHeight: "69 mm",
            projection: "129 mm"
        }
    },
    {
        id: 64,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/3.png',
        inStock: true,
        specs: {
            model: "DBR 202-40H",
            type: "Single lever bidet mixer",
            cartridge: "35 mm",
            spoutHeight: "69 mm",
            projection: "129 mm"
        }
    },
    {
        id: 65,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/4.png',
        inStock: true,
        specs: {
            model: "DBR 202-40MG",
            type: "Single lever bidet mixer",
            cartridge: "35 mm",
            spoutHeight: "69 mm",
            projection: "129 mm"
        }
    },
    {
        id: 66,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/5.png',
        inStock: true,
        specs: {
            model: "DBR 333-01",
            type: "Single lever basin mixer",
            cartridge: "25 mm",
            spoutHeight: "68 mm",
            projection: "133 mm"
        }
    },
    {
        id: 67,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/6.png',
        inStock: true,
        specs: {
            model: "DBR 333-01H",
            type: "Single lever basin mixer",
            cartridge: "25 mm",
            spoutHeight: "68 mm",
            projection: "133 mm"
        }
    },
    {
        id: 68,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/7.png',
        inStock: true,
        specs: {
            model: "DBR 202-02",
            type: "Single lever basin mixer",
            cartridge: "35 mm",
            spoutHeight: "87 mm",
            projection: "135 mm"
        }
    },
    {
        id: 69,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/8.png',
        inStock: true,
        specs: {
            model: "DBR 202-02G",
            type: "Single lever basin mixer",
            cartridge: "35 mm",
            spoutHeight: "87 mm",
            projection: "135 mm"
        }
    },
    {
        id: 70,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/9.png',
        inStock: true,
        specs: {
            model: "DBR 202-02H",
            type: "Single lever basin mixer",
            cartridge: "35 mm",
            spoutHeight: "87 mm",
            projection: "135 mm"
        }
    },
    {
        id: 71,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/10.png',
        inStock: true,
        specs: {
            model: "DBR 202-02MS",
            type: "Single lever basin mixer",
            cartridge: "35 mm",
            spoutHeight: "87 mm",
            projection: "135 mm"
        }
    },
    {
        id: 72,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/11.png',
        inStock: true,
        specs: {
            model: "DBR 707-07",
            type: "Single lever basin mixer",
            cartridge: "25 mm",
            spoutHeight: "104 mm",
            projection: "136 mm"
        }
    },
    {
        id: 73,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/12.png',
        inStock: true,
        specs: {
            model: "DBR 707-07G",
            type: "Single lever basin mixer",
            cartridge: "25 mm",
            spoutHeight: "104 mm",
            projection: "136 mm"
        }
    },
    {
        id: 74,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/13.png',
        inStock: true,
        specs: {
            model: "DBR 707-07H",
            type: "Single lever basin mixer",
            cartridge: "25 mm",
            spoutHeight: "104 mm",
            projection: "136 mm"
        }
    },
    {
        id: 75,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/14.png',
        inStock: true,
        specs: {
            model: "DBR 707-07MS",
            type: "Single lever basin mixer",
            cartridge: "25 mm",
            spoutHeight: "104 mm",
            projection: "136 mm"
        }
    },
    {
        id: 76,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/15.png',
        inStock: true,
        specs: {
            model: "DBR 707-40",
            type: "Single lever bidet mixer",
            cartridge: "26 mm",
            spoutHeight: "85 mm",
            projection: "128 mm"
        }
    },
    {
        id: 77,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/16.png',
        inStock: true,
        specs: {
            model: "DBR 707-40G",
            type: "Single lever bidet mixer",
            cartridge: "26 mm",
            spoutHeight: "85 mm",
            projection: "128 mm"
        }
    },
    {
        id: 78,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/17.png',
        inStock: true,
        specs: {
            model: "DBR 707-40H",
            type: "Single lever bidet mixer",
            cartridge: "26 mm",
            spoutHeight: "85 mm",
            projection: "128 mm"
        }
    },
    {
        id: 79,
        name: 'Сместитель Debora',
        category: 'smestitel',
        image: '/images/data/smestitel/18.png',
        inStock: true,
        specs: {
            model: "DBR 707-40MG",
            type: "Single lever bidet mixer",
            cartridge: "26 mm",
            spoutHeight: "85 mm",
            projection: "128 mm"
        }
    },
    // Душевые сместители
    { // YES
        id: 80,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/1.png',
        inStock: true,
        specs: {
            model: "DBR 101-01",
            cartridge: "30 mm",
            functions: 3,
            centreDistance: "150 ± 10 mm",
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    { // YES
        id: 81,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/2.png',
        inStock: true,
        specs: {
            model: "DBR 202-03",
            cartridge: "30 mm",
            functions: 3,
            centreDistance: "150 ± 10 mm",
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    { // YES
        id: 82,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/3.png',
        inStock: true,
        specs: {
            model: "DBR 707-01",
            cartridge: "30 mm",
            functions: 3,
            centreDistance: "150 ± 10 mm",
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    { // YES
        id: 83,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/4.png',
        inStock: true,
        specs: {
            model: "DBR 202-01",
            cartridge: "35 mm",
            functions: 3,
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    { // YES
        id: 84,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/5.png',
        inStock: true,
        specs: {
            model: "DBR 303-03",
            cartridge: "35 mm",
            functions: 3,
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    { // YES
        id: 85,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/6.png',
        inStock: true,
        specs: {
            model: "DBR 401-01"
        }
    },
    { // YES
        id: 861,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/7.png',
        inStock: true,
        specs: {
            model: "DBR 404-01G",
        }
    },
    { // YES
        id: 862,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/8.png',
        inStock: true,
        specs: {
            model: "DBR 101-01G",
        }
    },
    { // YES
        id: 863,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/9.png',
        inStock: true,
        specs: {
            model: "DBR 101-01H"
        }
    },
    { // YES
        id: 864,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/10.png',
        inStock: true,
        specs: {
            model: "DBR 202-03G"
        }
    },
    { // YES
        id: 865,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/11.png',
        inStock: true,
        specs: {
            model: "DBR 202-03H"
        }
    },
    { // YES
        id: 866,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/12.png',
        inStock: true,
        specs: {
            model: "DBR 202-03MS"
        }
    },
    { // YES
        id: 867,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/13.png',
        inStock: true,
        specs: {
            model: "DBR 707-01H"
        }
    },
    //////// 868 НЕТУ
    { // YES
        id: 869,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/15.png',
        inStock: true,
        specs: {
            model: "DBR 707-01G"
        }
    },
    { // YES
        id: 870,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/16.png',
        inStock: true,
        specs: {
            model: "DBR 707-01MS"
        }
    },
    { // YES
        id: 871,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/17.png',
        inStock: true,
        specs: {
            model: "DBR 202-01G"
        }
    },
    { // YES
        id: 872,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/18.png',
        inStock: true,
        specs: {
            model: "DBR 202-01H"
        }
    },
    { // YES
        id: 873,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/19.png',
        inStock: true,
        specs: {
            model: "DBR 202-01MS"
        }
    },
    { // YES
        id: 874,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/20.png',
        inStock: true,
        specs: {
            model: "DBR 404-01H"
        }
    },
    { // YES
        id: 875,
        name: 'Душевые сместители',
        category: 'smestitel_dush',
        image: '/images/data/smestitel2/21.png',
        inStock: true,
        specs: {
            model: "DBR 303-03MS"
        }
    },
    // ЗЕРКАЛО С ТУМБОЙ (oyna)
    { // YES
        id: 86,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/1.png',
        inStock: true,
        specs: {
            model: "MF5008-800",
            sizes: {
                mirror: '700*35*700',
                cabinet: '790*495*450',
                basin: '800*500*15'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    { // YES
        id: 87,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/2.png',
        inStock: true,
        specs: {
            model: "MF5008-1000",
            sizes: {
                mirror: '700*35*700',
                cabinet: '990*495*450',
                basin: '1000*500*15'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    { // YES
        id: 88,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/3.png',
        inStock: true,
        specs: {
            model: "MF5008-1200",
            sizes: {
                mirror: '700*35*700',
                cabinet: '1190*495*450',
                basin: '1200*500*12'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    { // YES
        id: 89,
        name: 'MF5008-1600',
        category: 'oyna',
        image: '/images/data/oyna/4.png',
        image_1: '/images/data/oyna/4.1.png',
        inStock: true,
        specs: {
            model: "MF5015-1600",
            sizes: {
                mirror: '700*35*700',
                cabinet: '1590*495*450',
                basin: '1600*500*12'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    //
    { // YES
        id: 90,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/5.png',
        inStock: true,
        specs: {
            model: "MF5009-800",
            sizes: {
                mirror: '700*35*700',
                cabinet: '790*450*550',
                basin: '800*500*15'
            },
            colors: {
                color_1: 'Glossy white',
                color_2: 'Salon'
            }
        }
    },
    { // YES
        id: 91,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/6.png',
        inStock: true,
        specs: {
            model: "MF5009-1000",
            sizes: {
                mirror: '700*35*700',
                cabinet: '990*495*550',
                basin: '1000*500*15'
            },
            colors: {
                color_1: 'Glossy white',
                color_2: 'Salon'
            }
        }
    },
    { // YES
        id: 911,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/7.png',
        inStock: true,
        specs: {
            model: "MF5009-1200",
            sizes: {
                mirror: '700*35*700',
                cabinet: '1190*495*550',
                basin: '1200*500*12'
            },
            colors: {
                color_1: 'Glossy white',
                color_2: 'Salon'
            }
        }
    },
    { // YES
        id: 912,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/8.png',
        image_: '/images/data/oyna/8.1.png',
        inStock: true,
        specs: {
            model: "MF5009-1800",
            sizes: {
                mirror: '700*35*700',
                cabinet: '1790*495*550',
                basin: '1800*500*15'
            },
            colors: {
                color_1: 'Glossy white',
                color_2: 'Salon'
            }
        }
    },
    //
    { // YES
        id: 913,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/9.png',
        inStock: true,
        specs: {
            model: "MF5010-1000",
            sizes: {
                mirror: '800*35*800',
                cabinet: '990*500*550',
                basin: '1000*500*12'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood'
            }
        }
    },
    { // YES
        id: 914,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/10.png',
        inStock: true,
        specs: {
            model: "MF5010-1200",
            sizes: {
                mirror: '800*35*800',
                cabinet: '1190*500*550',
                basin: '1200*500*12'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood'
            }
        }
    },
    { // YES
        id: 915,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/11.png',
        inStock: true,
        specs: {
            model: "MF5010-1500",
            sizes: {
                mirror: '1500*35*550',
                cabinet: '1490*500*550',
                basin: '1500*500*12'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood'
            }
        }
    },
    //
    { // YES
        id: 916,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/12.png',
        inStock: true,
        specs: {
            model: "MF5011-800",
            sizes: {
                mirror: '657*35*1204',
                cabinet: '790*495*550',
                basin: '800*500*15'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood',
                color_3: 'OAK',
                color_4: 'Grey oak'
            }
        }
    },
    { // YES
        id: 917,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/13.png',
        image_1: '/images/data/oyna/13.1.png',
        inStock: true,
        specs: {
            model: "MF5011-1000",
            sizes: {
                mirror: '657*35*1204',
                cabinet: '990*495*550',
                basin: '1000*500*15'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood',
                color_3: 'OAK',
                color_4: 'Grey oak'
            }
        }
    },
    { // YES
        id: 917,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/14.png',
        image_1: '/images/data/oyna/13.1.png',
        inStock: true,
        specs: {
            model: "MF5011-1200",
            sizes: {
                mirror: '657*35*1204',
                cabinet: '1190*495*550',
                basin: '1200*500*15'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood',
                color_3: 'OAK',
                color_4: 'Grey oak'
            }
        }
    },
    { // YES
        id: 918,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/15.png',
        image_1: '/images/data/oyna/13.1.png',
        inStock: true,
        specs: {
            model: "MF5011-1800",
            sizes: {
                mirror: '657*35*1204',
                cabinet: '1790*495*550',
                basin: '1800*500*15'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood',
                color_3: 'OAK',
                color_4: 'Grey oak'
            }
        }
    },
    //
    { // YES
        id: 919,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/16.png',
        image_1: '/images/data/oyna/16.1.png',
        inStock: true,
        specs: {
            model: "MF5012-1000",
            sizes: {
                mirror: '657*35*900',
                cabinet: '990*495*500',
                basin: '450*350*120'
            },
            colors: {
                color_1: 'Cherry Wood',
            }
        }
    },
    { // YES
        id: 920,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/17.png',
        image_1: '/images/data/oyna/17.1.png',
        inStock: true,
        specs: {
            model: "MF5012-1500",
            sizes: {
                mirror: '657*35*900',
                cabinet: '1490*495*500',
                basin: '450*350*120'
            },
            colors: {
                color_1: 'Cherry Wood',
            }
        }
    },
    { // YES
        id: 921,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/17.png',
        image_1: '/images/data/oyna/17.1.png',
        inStock: true,
        specs: {
            model: "MF5012-1800",
            sizes: {
                mirror: '657*35*900',
                cabinet: '1800*495*500',
                basin: '450*350*120'
            },
            colors: {
                color_1: 'Cherry Wood',
            }
        }
    },
    //
    { // YES
        id: 922,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/17.png',
        image_1: '/images/data/oyna/17.1.png',
        inStock: true,
        specs: {
            model: "MF5013-1400",
            sizes: {
                mirror: '657*35*1204',
                cabinet: '790*495*550',
                basin: '800*500*15'
            },
            colors: {
                color_1: 'Salon',
            }
        }
    },
    //
    { // YES
        id: 923,
        name: 'Зеркало с тумбой',
        category: 'oyna',
        image: '/images/data/oyna/18.png',
        image_1: '/images/data/oyna/18.1.png',
        image_2: '/images/data/oyna/18.2.png',
        inStock: true,
        specs: {
            model: "MF5014-1200",
            sizes: {
                mirror: '700*35*800',
                cabinet: '1190*495*550',
                basin: '1200*500*15'
            },
            colors: {
                color_1: 'Walnut',
                color_2: 'Cherry Wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    // Ванна
    { // YES
        id: 92,
        name: 'Ванна Debora',
        category: 'vanna',
        image: '/images/data/vanna/1.png',
        image_1: '/images/data/vanna/1.1.png',
        image_2: '/images/data/vanna/1.2.png',
        inStock: true,
        specs: {
            type: "BRISTOL",
            size: "1700x760x670x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Chrome handles"
            ]
        },
        leg_colors: {
            color_1: {
                color: "Gold",
                url: "/images/vanna/legs/1.png"
            },
            color_2: {
                color: "White",
                url: "/images/vanna/legs/2.png"
            },
            color_3: {
                color: "Silver",
                url: "/images/vanna/legs/3.png"
            },
            color_4: {
                color: "Coppery",
                url: "/images/vanna/legs/4.png"
            },
        }
    },
    { // YES
        id: 93,
        name: 'Ванна BRISTOL',
        category: 'vanna',
        image: '/images/data/vanna/2.png',
        inStock: true,
        specs: {
            type: "BRISTOL",
            size: "1520x770x600x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
        leg_colors: {
            color_1: {
                color: "Gold",
                url: "/images/data/vanna/legs/1.png"
            },
            color_2: {
                color: "White",
                url: "/images/data/vanna/legs/2.png"
            },
            color_3: {
                color: "Silver",
                url: "/images/data/vanna/legs/3.png"
            },
            color_4: {
                color: "Coppery",
                url: "/images/data/vanna/legs/4.png"
            },
        }
    },
    { // YES
        id: 94,
        name: 'Ванна GRANCE',
        category: 'vanna',
        image: '/images/data/vanna/3.png',
        image_1: '/images/data/vanna/3.1.png',
        inStock: true,
        specs: {
            type: "GRANCE",
            size: "1520x770x600x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
    },
    { // YES
        id: 95,
        name: 'Ванна GRANCE',
        category: 'vanna',
        image: '/images/data/vanna/4.png',
        inStock: true,
        specs: {
            type: "GRANCE",
            size: "1700x700x720x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
    },
    { // YES
        id: 96,
        name: 'Ванна TITAN DECO',
        category: 'vanna',
        image: '/images/data/vanna/5.png',
        inStock: true,
        specs: {
            type: "TITAN DECO",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
    },
    { // YES
        id: 97,
        name: 'Ванна VERO',
        category: 'vanna',
        image: '/images/data/vanna/6.png',
        image_1: '/images/data/vanna/6.1.png',
        inStock: true,
        specs: {
            type: "VERO",
            size: "1780x800x610x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
    },
    { // YES
        id: 98,
        name: 'Ванна TITAN',
        category: 'vanna',
        image: '/images/data/vanna/7.png',
        image_1: '/images/data/vanna/7.1.png',
        inStock: true,
        specs: {
            type: "TITAN",
            size: "1700x700x720x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
    },
    { // YES
        id: 99,
        name: 'Ванна TITAN',
        category: 'vanna',
        image: '/images/data/vanna/8.png',
        inStock: true,
        specs: {
            type: "TITAN",
            size: "1560x750x720x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
        leg_colors: {
            color_1: {
                color: "Gold",
                url: "/images/vanna/legs/1.png"
            },
            color_2: {
                color: "White",
                url: "/images/vanna/legs/2.png"
            },
            color_3: {
                color: "Silver",
                url: "/images/vanna/legs/3.png"
            },
            color_4: {
                color: "Coppery",
                url: "/images/vanna/legs/4.png"
            },
        }
    },
    { // YES
        id: 100,
        name: 'Ванна ELEMENT',
        category: 'vanna',
        image: '/images/data/vanna/9.png',
        image_1: '/images/data/vanna/9.1.png',
        inStock: true,
        specs: {
            type: "ELEMENT",
            size: "1830x770x810x mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
        leg_colors: {
            color_1: {
                color: "Gold",
                url: "/images/vanna/legs/1.png"
            },
            color_2: {
                color: "White",
                url: "/images/vanna/legs/2.png"
            },
            color_3: {
                color: "Silver",
                url: "/images/vanna/legs/3.png"
            },
            color_4: {
                color: "Coppery",
                url: "/images/vanna/legs/4.png"
            },
        }
    },
    { // YES
        id: 101,
        name: 'Ванна GLOSSY',
        category: 'vanna',
        image: '/images/data/vanna/10.png',
        inStock: true,
        specs: {
            type: "GLOSSY",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        }
    },
    { // YES
        id: 102,
        name: 'Ванна TITAN COLOR',
        category: 'vanna',
        image: '/images/data/vanna/11.png',
        image: '/images/data/vanna/11.1.png',
        inStock: true,
        specs: {
            type: "TITAN COLOR",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        }
    },
    { // YES
        id: 103,
        name: 'Ванна AVEO',
        category: 'vanna',
        image: '/images/data/vanna/12.png',
        image_1: '/images/data/vanna/12.1.png',
        image_2: '/images/data/vanna/12.2.png',
        inStock: true,
        specs: {
            type: "AVEO",
            size: "1780x800x610 mm",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
        leg_colors: {
            color_1: {
                color: "Gold",
                url: "/images/vanna/legs/5.png"
            },
            color_2: {
                color: "White",
                url: "/images/vanna/legs/6.png"
            },
            color_3: {
                color: "Silver",
                url: "/images/vanna/legs/7.png"
            },
            color_4: {
                color: "Coppery",
                url: "/images/vanna/legs/8.png"
            },
        }
    },
    { // YES
        id: 104,
        name: 'Ванна ODISSEY II',
        category: 'vanna',
        image: '/images/data/vanna/13.png',
        image: '/images/data/vanna/13.1.png',
        inStock: true,
        specs: {
            type: "ODISSEY II",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        }
    },
    { // YES
        id: 105,
        name: 'Ванна GRAND',
        category: 'vanna',
        image: '/images/data/vanna/14.png',
        image_1: '/images/data/vanna/14.1.png',
        inStock: true,
        specs: {
            type: "GRAND",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
        leg_colors: {
            color_1: {
                color: "Gold",
                url: "/images/vanna/legs/1.png"
            },
            color_2: {
                color: "White",
                url: "/images/vanna/legs/2.png"
            },
            color_3: {
                color: "Silver",
                url: "/images/vanna/legs/3.png"
            },
            color_4: {
                color: "Coppery",
                url: "/images/vanna/legs/4.png"
            },
        }
    },
    { // YES
        id: 106,
        name: 'Ванна CASABELLA',
        category: 'vanna',
        image: '/images/data/vanna/15.png',
        image_1: '/images/data/vanna/15.1.png',
        image_1: '/images/data/vanna/15.2.png',
        inStock: true,
        specs: {
            type: "CASABELLA",
            additionalOptions: [
                "Anti-slip coating",
                "Double tap hole"
            ]
        },
        leg_colors: {
            color_1: {
                color: "Gold",
                url: "/images/vanna/legs/1.png"
            },
            color_2: {
                color: "White",
                url: "/images/vanna/legs/2.png"
            },
            color_3: {
                color: "Silver",
                url: "/images/vanna/legs/3.png"
            },
            color_4: {
                color: "Coppery",
                url: "/images/vanna/legs/4.png"
            },
        }
    },
];

export const featuredProducts = products.filter(product => product.featured);