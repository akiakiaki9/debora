export const categories = [
    // САНИТАРНАЯ КЕРАМИКА (основное)
    { id: 1, name: 'Унитазы', slug: 'unitaz' },              // Самый популярный товар
    { id: 2, name: 'Ванны', slug: 'vanna' },                 // Второй по важности
    { id: 3, name: 'Раковины', slug: 'rakovina' },           // Обязательный элемент
    { id: 4, name: 'Смесители', slug: 'smestitel' },         // Идут вместе с раковинами/ваннами

    // МЕБЕЛЬ ДЛЯ ВАННОЙ
    { id: 5, name: 'Раковина с тумбой', slug: 'raktumba' },  // Готовое решение
    { id: 6, name: 'Зеркала', slug: 'oyna' },                // Важный аксессуар

    // ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ
    { id: 7, name: 'Биде', slug: 'bide' },                   // Для комфорта
    { id: 8, name: 'Чаши', slug: 'chasha' },                 // Дизайнерские решения
    { id: 9, name: 'Инсталляция', slug: 'installation' },    // Для подвесной сантехники
    { id: 10, name: 'Писуар', slug: 'pisuar' },              // Для общественных мест
    { id: 11, name: 'Чашоген', slug: 'chashogen' },          // Специфический товар
    { id: 12, name: 'Смеситель для душа', slug: 'smestitel' }, // Отдельно для душа
];

export const products = [
    // УНИТАЗЫ
    {
        id: 1,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/1.png',
        inStock: true,
        specs: {
            size: "650x360x810 mm",
            pTrap: "180 mm",
            sTrap: "150-250 mm",
            material: "Керамика",
            model: "M2201",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown Rimless"
        }
    },
    {
        id: 2,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/2.png',
        inStock: true,
        specs: {
            size: "680x365x810 mm",
            pTrap: "180 mm",
            sTrap: "150-250 mm",
            material: "Керамика",
            model: "M2202",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 3,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/3.png',
        inStock: true,
        specs: {
            size: "680x365x810 mm",
            pTrap: "180 mm",
            sTrap: "150-250 mm",
            material: "Керамика",
            model: "M2236",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown Rimless"
        }
    },
    {
        id: 4,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/4.png',
        inStock: true,
        specs: {
            size: "700x400x790 mm",
            pTrap: "180 mm",
            sTrap: "250-300-400 mm",
            material: "Керамика",
            model: "M2203",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown/Siphonic"
        }
    },
    {
        id: 5,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/5.png',
        inStock: true,
        specs: {
            size: "700x370x795 mm",
            pTrap: "180 mm",
            sTrap: "150-200-250 mm",
            material: "Керамика",
            model: "M2206",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Siphonic"
        }
    },
    {
        id: 6,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/6.png',
        inStock: true,
        specs: {
            size: "700x415x790 mm",
            pTrap: "180 mm",
            sTrap: "100-250 mm",
            material: "Керамика",
            model: "M2213",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Литой»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 7,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/7.png',
        inStock: true,
        specs: {
            size: "650x390x830 mm",
            pTrap: "180 mm Roughing-in",
            material: "Керамика",
            model: "M6011",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Rimless Flushing"
        }
    },
    {
        id: 8,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/8.png',
        inStock: true,
        specs: {
            size: "680x390x835 mm",
            pTrap: "180 mm Roughing-in",
            material: "Керамика",
            model: "M6012",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Rimless Flushing"
        }
    },
    {
        id: 9,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/9.png',
        inStock: true,
        specs: {
            size: "650x380x855 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "M6009",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 10,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/10.png',
        inStock: true,
        specs: {
            size: "700x390x850 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "M6013",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 11,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/11.png',
        inStock: true,
        specs: {
            size: "660x380x845 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "M6007",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 12,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/12.png',
        inStock: true,
        specs: {
            size: "700x385x840 mm",
            pTrap: "180 mm",
            material: "Керамика",
            model: "M6008",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 13,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/13.png',
        inStock: true,
        specs: {
            size: "650x340x770 mm",
            pTrap: "180 mm",
            sTrap: "250 mm Roughing-in",
            material: "Керамика",
            model: "M6008",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 14,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/14.png',
        inStock: true,
        specs: {
            size: "650x340x770 mm",
            pTrap: "180 mm",
            sTrap: "250 mm Roughing-in",
            material: "Керамика",
            model: "M6005",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Washdown"
        }
    },
    {
        id: 15,
        name: 'Унитаз Debora',
        category: 'unitaz',
        image: '/images/data/toilet/15.png',
        inStock: true,
        specs: {
            size: "625x385x785 mm",
            pTrap: "180 mm",
            sTrap: "100-250 mm",
            material: "Керамика",
            model: "H080",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический «Раздельный»",
            coating: "2х слойная эмаль «Фаянс»",
            flushingSystem: "Rimless & Tornado"
        }
    },
    // БИДЕ
    {
        id: 16,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/1.png',
        inStock: true,
        specs: {
            size: "480x370x325 mm",
            material: "Керамика",
            model: "F7002",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            installation: "Floor Standing Bidet",
            wallInstallation: "Wall-hung installation"
        }
    },
    {
        id: 17,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/2.png',
        inStock: true,
        specs: {
            size: "540x340x400 mm",
            material: "Керамика",
            model: "F1006",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            installation: "Floor Standing Bidet",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 18,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/3.png',
        inStock: true,
        specs: {
            size: "525x340x400 mm",
            material: "Керамика",
            model: "F1005",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            installation: "Floor Standing Bidet",
            wallInstallation: "Fixing to wall with back"
        }
    },
    {
        id: 19,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/4.png',
        inStock: true,
        specs: {
            size: "540x360x410 mm",
            material: "Керамика",
            model: "F1008",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            installation: "Floor Standing Bidet"
        }
    },
    {
        id: 20,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/5.png',
        inStock: true,
        specs: {
            size: "540x360x410 mm",
            material: "Керамика",
            model: "F7001",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            installation: "Wall-hung Bidet"
        }
    },
    {
        id: 21,
        name: 'Биде Debora',
        category: 'bide',
        image: '/images/data/bide/6.png',
        inStock: true,
        specs: {
            size: "550x360x410 mm",
            material: "Керамика",
            model: "F7001",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            coating: "2х слойная эмаль «Фаянс»",
            installation: "Floor-standing Bidet"
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
    {
        id: 34,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/1.png',
        inStock: true,
        specs: {
            size: "1005x515x220 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1176-100",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    {
        id: 35,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/2.png',
        inStock: true,
        specs: {
            size: "605x520x225 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1176-60",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    {
        id: 36,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/3.png',
        inStock: true,
        specs: {
            size: "705x520x225 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1176-70",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    {
        id: 37,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/4.png',
        inStock: true,
        specs: {
            size: "805x520x225 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1176-80",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    {
        id: 38,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/5.png',
        inStock: true,
        specs: {
            size: "900x515x225 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1176-90",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    {
        id: 39,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/6.png',
        inStock: true,
        specs: {
            size: "1000x500x160 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1173-100",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    {
        id: 40,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/7.png',
        inStock: true,
        specs: {
            size: "900x500x160 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1173-90",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    {
        id: 41,
        name: 'Раковина для столешницы',
        category: 'rakovina',
        image: '/images/data/rakovina/8.png',
        inStock: true,
        specs: {
            size: "800x500x160 mm",
            width: "60-100 sm",
            material: "Керамика",
            model: "1173-80",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Thin Side Basin",
            mounting: "Above cabinet"
        }
    },
    // ПИСУАР
    {
        id: 42,
        name: 'Писуар Debora',
        category: 'pisuar',
        image: '/images/data/pisuar/1.png',
        inStock: true,
        specs: {
            size: "300x350x700 mm",
            material: "Керамика",
            model: "X8216",
            mechanism: "Сенсорный",
            production: "Китай",
            quality: "Высокое",
            body: "Керамический",
            type: "Wall-Hung Auto-Induction Urinal",
            mounting: "Wall Mounted",
            drain: "Wall drainage or Direct drainage",
            waterIntake: "Backwater"
        }
    },
    // Чашоген
    {
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
    {
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
    {
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
    // Инсталяция
    {
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
    {
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
    // Раковина с тумбой
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    // Сместитель для душа
    {
        id: 80,
        name: 'Сместитель для душа',
        category: 'smestitel',
        image: '/images/data/smestitel2/1.png',
        inStock: true,
        specs: {
            model: "DBR 101-01",
            type: "Single lever shower mixer",
            cartridge: "30 mm",
            functions: 3,
            centreDistance: "150 ± 10 mm",
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    {
        id: 81,
        name: 'Сместитель для душа',
        category: 'smestitel',
        image: '/images/data/smestitel2/2.png',
        inStock: true,
        specs: {
            model: "DBR 202-03",
            type: "Single lever shower mixer",
            cartridge: "30 mm",
            functions: 3,
            centreDistance: "150 ± 10 mm",
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    {
        id: 82,
        name: 'Сместитель для душа',
        category: 'smestitel',
        image: '/images/data/smestitel2/3.png',
        inStock: true,
        specs: {
            model: "DBR 707-01",
            type: "Single lever shower mixer",
            cartridge: "30 mm",
            functions: 3,
            centreDistance: "150 ± 10 mm",
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    {
        id: 83,
        name: 'Сместитель для душа',
        category: 'smestitel',
        image: '/images/data/smestitel2/4.png',
        inStock: true,
        specs: {
            model: "DBR 202-01",
            type: "In wall single lever shower mixer",
            cartridge: "35 mm",
            functions: 3,
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    {
        id: 84,
        name: 'Сместитель для душа',
        category: 'smestitel',
        image: '/images/data/smestitel2/5.png',
        inStock: true,
        specs: {
            model: "DBR 303-03",
            type: "In wall single lever shower mixer",
            cartridge: "35 mm",
            functions: 3,
            showerHoseLength: "1.45 - 1.5 m"
        }
    },
    {
        id: 85,
        name: 'Сместитель для душа',
        category: 'smestitel',
        image: '/images/data/smestitel2/6.png',
        inStock: true,
        specs: {
            model: "DBR 401-01",
            type: "Bidet faucet"
        }
    },
    // ЗЕРКАЛА
    {
        id: 86,
        name: 'Зеркало Debora',
        category: 'oyna',
        image: '/images/data/oyna/1.png',
        inStock: true,
        specs: {
            model: "MF5015-800",
            sizes: {
                mirror: '600*35*600',
                cabinet: '590*495*450',
                basin: '600*500*15'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    {
        id: 87,
        name: 'Зеркало Debora',
        category: 'oyna',
        image: '/images/data/oyna/2.png',
        inStock: true,
        specs: {
            model: "MF5015-1000",
            sizes: {
                mirror: '1000*35*550',
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
    {
        id: 88,
        name: 'Зеркало Debora',
        category: 'oyna',
        image: '/images/data/oyna/3.png',
        inStock: true,
        specs: {
            model: "MF5015-1200",
            sizes: {
                mirror: '1200*35*550',
                cabinet: '1990*495*450',
                basin: '1200*500*15'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    {
        id: 89,
        name: 'Зеркало Debora',
        category: 'oyna',
        image: '/images/data/oyna/4.png',
        inStock: true,
        specs: {
            model: "MF5015-1500",
            sizes: {
                mirror: '1500*35*550',
                cabinet: '1490*495*450',
                basin: '1500*500*15'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    {
        id: 90,
        name: 'Зеркало Debora',
        category: 'oyna',
        image: '/images/data/oyna/5.png',
        inStock: true,
        specs: {
            model: "MF5015-1600D",
            sizes: {
                mirror: '1600*35*550',
                cabinet: '1590*495*450',
                basin: '1600*500*15'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    {
        id: 91,
        name: 'Зеркало Debora',
        category: 'oyna',
        image: '/images/data/oyna/6.png',
        inStock: true,
        specs: {
            model: "MF5015-1800D",
            sizes: {
                mirror: '1800*35*550',
                cabinet: '1790*495*450',
                basin: '1800*500*15'
            },
            colors: {
                color_1: 'walnut',
                color_2: 'cherry wood',
                color_3: 'OAK',
                color_4: 'Grey oak',
            }
        }
    },
    // Ванна
    {
        id: 92,
        name: 'Ванна Debora',
        category: 'vanna',
        image: '/images/data/vanna/1.png',
        inStock: true,
        specs: {
            model: "MF5015-1800D",
            type: "DIAMOND",
            size: "1500x750 mm",
            additionalOptions: [
                "Anti-slip coating",
                "Chrome handles"
            ]
        }
    },
    {
        id: 93,
        name: 'Ванна Debora',
        category: 'vanna',
        image: '/images/data/vanna/2.png',
        inStock: true,
        specs: {
            model: "MF5015-1800D",
            type: "DONNI",
            sizes: {
                size_1: "1400x750mm",
                size_2: "1500x750mm",
                size_3: "1600x750mm",
                size_4: "1700x750mm",
                size_5: "1700x800mm",
                size_6: "1800x800mm",
            },
            additionalOptions: [
                "Anti-slip coating",
                "Chrome handles"
            ]
        }
    },
    {
        id: 94,
        name: 'Ванна Debora',
        category: 'vanna',
        image: '/images/data/vanna/2.png',
        inStock: true,
        specs: {
            model: "MF5015-1800D",
            type: "COMFORT",
            sizes: {
                size_1: "1500x700mm",
                size_2: "1700x700mm",
                size_3: "1700x750mm",
            },
            additionalOptions: [
                "Anti-slip coating"
            ]
        }
    },
    {
        id: 95,
        name: 'Ванна Debora',
        category: 'vanna',
        image: '/images/data/vanna/2.png',
        inStock: true,
        specs: {
            model: "MF5015-1800D",
            type: "ELITE",
            sizes: {
                size_1: "1600x700mm",
                size_2: "1700x700mm",
                size_3: "1700x750mm",
                size_4: "1700x800mm",
                size_5: "1800x750mm",
                size_6: "1800x800mm",
            },
            additionalOptions: [
                "Anti-slip coating"
            ]
        }
    },
];

export const featuredProducts = products.filter(product => product.featured);