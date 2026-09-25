// Format Currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
};

// Format Category Slug to Human Readable
const formatCategoryName = (slug) => {
    if (!slug) return "";
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Predefined weight steps for variable products
const WEIGHT_STEPS = [
    { label: "250g", val: 250 },
    { label: "500g", val: 500 },
    { label: "750g", val: 750 },
    { label: "1kg", val: 1000 },
    { label: "1.5kg", val: 1500 },
    { label: "2kg", val: 2000 }
];

// =====================================================================
// CATÁLOGO COMPLETO — EL ALMACÉN DE GUADA
// =====================================================================
const DEFAULT_CATEGORIES = [
    { key: "mixes",                name: "Mixes de la Casa" },
    { key: "granolas",             name: "Granolas Nutrinola" },
    { key: "frutos-secos",         name: "Frutos Secos" },
    { key: "barritas",             name: "Barritas de Cereal" },
    { key: "almohaditas-cereales", name: "Almohaditas & Cereales" },
    { key: "harinas-granos",       name: "Arroz, Avena & Harinas" },
    { key: "frutas-deshidratados", name: "Frutas & Deshidratados" },
    { key: "semillas",             name: "Semillas & Cacao" },
    { key: "legumbres",            name: "Legumbres" },
    { key: "chocolates",           name: "Bañados en Chocolate & Chips" }
];

const DEFAULT_PRODUCTS = [
    // ─── MIXES DE LA CASA (19 Productos) ──────────────────────────────
    { id: 1001, name: "Mix de Semillas", category: "mixes", pricePerKg: 5720, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.49.jpeg", isFeatured: true, description: "Blend equilibrado de chía, sésamo, girasol y lino. Ideal para ensaladas, yogur o smoothies.", sinTacc: true },
    { id: 1002, name: "Mix Energía", category: "mixes", pricePerKg: 13300, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.49 (1).jpeg", isFeatured: true, description: "Combinación perfecta de nueces, almendras, pasas rubias y morenas y maníes.", sinTacc: true },
    { id: 1003, name: "Mix Energía con Banana", category: "mixes", pricePerKg: 14700, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.49 (2).jpeg", isFeatured: false, description: "Nueces, almendras, pasas rubias y morenas, maníes y chips de banana.", sinTacc: true },
    { id: 1004, name: "Mix Desayuno", category: "mixes", pricePerKg: 10500, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.50.jpeg", isFeatured: true, description: "Granola, copos de maíz, fibra de salvado, chips de banana, ananá en cubos y pasas.", sinTacc: false },
    { id: 1005, name: "Mix Granola Deportiva", category: "mixes", pricePerKg: 9800, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.51 (1).jpeg", isFeatured: false, description: "Avena tostada con miel crujiente, toque de nueces, almendras y maníes.", sinTacc: false },
    { id: 1006, name: "Mix Nutrición", category: "mixes", pricePerKg: 12900, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.51 (2).jpeg", isFeatured: false, description: "Nueces, almendras, avena, semillas de girasol y zapallo, copos sin azúcar y pasas.", sinTacc: true },
    { id: 1007, name: "Mix Tropical", category: "mixes", pricePerKg: 13616, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.52.jpeg", isFeatured: false, description: "Nueces, almendras, chips de banana, pasas rubias y morenas, ananá en cubos y maníes.", sinTacc: true },
    { id: 1008, name: "Mix Explosión de Sabores", category: "mixes", pricePerKg: 14440, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.54 (3).jpeg", isFeatured: false, description: "Almendras, chips de banana, pasas, ananá, maní con chocolate y maní salado.", sinTacc: true },
    { id: 1009, name: "Mix Running", category: "mixes", pricePerKg: 23000, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.52 (1).jpeg", isFeatured: false, description: "Nueces, almendras, chips de banana y maníes. Liviano y energizante.", sinTacc: true },
    { id: 1010, name: "Mix Andino", category: "mixes", pricePerKg: 14760, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.53 (1).jpeg", isFeatured: false, description: "Almendras, pasas, garrapiñada de maní, maíz frito y semillas de zapallo.", sinTacc: true },
    { id: 1011, name: "Mix Power", category: "mixes", pricePerKg: 24360, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.52 (3).jpeg", isFeatured: false, description: "Nueces, almendras, castañas de cajú, chips de banana y pasas morenas.", sinTacc: true },
    { id: 1012, name: "Mix Premium", category: "mixes", pricePerKg: 38000, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.53.jpeg", isFeatured: true, description: "Nueces, almendras, castañas de cajú y avellanas. Lo mejor de los frutos secos.", sinTacc: true },
    { id: 1013, name: "Mix Afrodisíaco", category: "mixes", pricePerKg: 32516, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.53 (3).jpeg", isFeatured: true, description: "Nueces, almendras, arándanos, higos negros, jengibre caramelizado y coco flakes.", sinTacc: true },
    { id: 1014, name: "Mix Classic", category: "mixes", pricePerKg: 26000, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.54 (2).jpeg", isFeatured: false, description: "Nueces, almendras y maníes. Simple y delicioso.", sinTacc: true },
    { id: 1015, name: "Mix Forte", category: "mixes", pricePerKg: 23600, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.51.jpeg", isFeatured: false, description: "Nueces, almendras, castañas de cajú, maníes y semillas de girasol.", sinTacc: true },
    { id: 1016, name: "Mix Dúo", category: "mixes", pricePerKg: 34600, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.53.jpeg", isFeatured: false, description: "Excelente combinación de dos variedades seleccionadas de frutos secos.", sinTacc: true },
    { id: 1017, name: "Mix Europeo", category: "mixes", pricePerKg: 19600, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.54.jpeg", isFeatured: false, description: "Nueces, almendras, castañas de cajú, chips de banana, pasas y maníes.", sinTacc: true },
    { id: 1018, name: "Mix Patagónico", category: "mixes", pricePerKg: 30800, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.54 (1).jpeg", isFeatured: false, description: "Nueces, almendras, manzana en cubos y arándanos. Fresco y natural.", sinTacc: true },
    { id: 1019, name: "Mix Break", category: "mixes", pricePerKg: 13200, mode: "weight", image: "img/WhatsApp Image 2026-07-27 at 18.53.53 (2).jpeg", isFeatured: false, description: "Nueces, almendras, chips de banana, arándanos y ananá en cubos.", sinTacc: true },

    // ─── GRANOLAS NUTRINOLA (3 Productos) ──────────────────────────────
    { id: 1101, name: "Granola Tradicional 'Nutrinola' 1 KG", category: "granolas", pricePerKg: 16300, mode: "kilo", image: "img/nutrinola_tradicional.png", isFeatured: true, description: "Granola artesanal Nutrinola. Mezcla de avena, miel, pasas de uva, maní, semillas y frutos secos. Sin sal ni conservantes.", sinTacc: false },
    { id: 1102, name: "Granola Base 'Nutrinola' 1 KG", category: "granolas", pricePerKg: 12100, mode: "kilo", image: "img/nutrinola_base.png", isFeatured: true, description: "Granola artesanal Nutrinola Base. Mezcla de avena, azúcar mascabo, maní y semillas de girasol. Sin sal agregada.", sinTacc: false },
    { id: 1103, name: "Granola Cocada 'Nutrinola' 1 KG", category: "granolas", pricePerKg: 14000, mode: "kilo", image: "img/nutrinola_cocada.png", isFeatured: true, description: "Granola artesanal Nutrinola Cocada. 100% vegana. Cereales, azúcar mascabo, maní, coco rallado, semillas de girasol y nueces.", sinTacc: false },

    // ─── FRUTOS SECOS & MANI / MAIZ (13 Productos) ─────────────────────
    { id: 2001, name: "Nueces Mariposas 1 KG", category: "frutos-secos", pricePerKg: 35000, mode: "weight", image: "img/nueces.jpg", isFeatured: true, description: "Nueces mariposa extra blancas de primera calidad.", sinTacc: true },
    { id: 2002, name: "Nueces Mariposas 500g (Fraccionado)", category: "frutos-secos", pricePerKg: 38500, mode: "kilo", image: "img/nueces.jpg", isFeatured: false, description: "Nueces mariposa fraccionadas paquete de 500g ($19.250).", sinTacc: true },
    { id: 2003, name: "Nueces en Cuartos 1 KG", category: "frutos-secos", pricePerKg: 33250, mode: "weight", image: "img/nueces.jpg", isFeatured: false, description: "Nueces peladas en cuartos de excelente calidad.", sinTacc: true },
    { id: 2004, name: "Nueces en Cuartos 500g (Fraccionado)", category: "frutos-secos", pricePerKg: 36576, mode: "kilo", image: "img/nueces.jpg", isFeatured: false, description: "Nueces en cuartos fraccionadas paquete de 500g ($18.288).", sinTacc: true },
    { id: 2005, name: "Almendras 1 KG", category: "frutos-secos", pricePerKg: 35000, mode: "weight", image: "img/almendras.jpg", isFeatured: true, description: "Almendras enteras de la mejor calidad.", sinTacc: true },
    { id: 2006, name: "Almendras 500g (Fraccionado)", category: "frutos-secos", pricePerKg: 36750, mode: "kilo", image: "img/almendras.jpg", isFeatured: false, description: "Almendras enteras fraccionadas paquete de 500g ($18.375).", sinTacc: true },
    { id: 2007, name: "Castañas de Cajú 1 KG", category: "frutos-secos", pricePerKg: 22000, mode: "weight", image: "img/caju.jpg", isFeatured: false, description: "Castañas de cajú tostadas naturales sin sal.", sinTacc: true },
    { id: 2008, name: "Pistachos Pelados Naturales 500g", category: "frutos-secos", pricePerKg: 129800, mode: "kilo", image: "img/cereales.jpg", isFeatured: false, description: "Pistachos pelados naturales fraccionados 500g ($64.900).", sinTacc: true },
    { id: 2009, name: "Pistachos Tostados y Salados 1 KG", category: "frutos-secos", pricePerKg: 118000, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Pistachos con cáscara tostados y salados de primera.", sinTacc: true },
    { id: 2010, name: "Maní Cervecero (Pizza, Jamón, Queso, Original) 1 KG", category: "frutos-secos", pricePerKg: 12500, mode: "weight", image: "img/mani.jpg", isFeatured: false, description: "Maní saborizado especial para picadas. Variedades: Pizza, Jamón, Queso, Original.", sinTacc: false },
    { id: 2011, name: "Maní con Cáscara 1 KG", category: "frutos-secos", pricePerKg: 7650, mode: "weight", image: "img/mani.jpg", isFeatured: false, description: "Maní tostado con cáscara natural.", sinTacc: true },
    { id: 2012, name: "Maíz Frito (Orig, Barbacoa, Mostaza y Miel, Queso) 1 KG", category: "frutos-secos", pricePerKg: 16000, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Maíz crocante frito con diferentes sabores a elección.", sinTacc: false },
    { id: 2013, name: "Azúcar Mascabo 1 KG (Fraccionado)", category: "frutos-secos", pricePerKg: 5300, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Azúcar mascabo pura sin refinar 1 KG.", sinTacc: true },

    // ─── BARRITAS DE CEREAL (4 Productos) ──────────────────────────────
    { id: 3001, name: "Barrita Cereal 'Mudra' Armonía (Caja x 14 Uni)", category: "barritas", pricePerKg: 23300, mode: "kilo", image: "img/Barra-De-Frutos-Secos-Armonia-Mudra-X-35g-1-1029059.webp", isFeatured: true, description: "Barritas de frutos secos Mudra variedad Armonía 35g. Caja cerrada por 14 unidades.", sinTacc: true },
    { id: 3002, name: "Barrita Cereal 'Mudra' Bienestar (Caja x 14 Uni)", category: "barritas", pricePerKg: 23300, mode: "kilo", image: "img/Barra-De-Frutos-Secos-Bienestar-Mudra-X-35g-1-1029057.webp", isFeatured: true, description: "Barritas de frutos secos Mudra variedad Bienestar 35g. Caja cerrada por 14 unidades.", sinTacc: true },
    { id: 3003, name: "Barrita Cereal 'Mudra' Energía (Caja x 14 Uni)", category: "barritas", pricePerKg: 23300, mode: "kilo", image: "img/Barra-De-Frutos-Secos-Armonia-Mudra-X-35g-1-1029059.webp", isFeatured: false, description: "Barritas de frutos secos Mudra variedad Energía 35g. Caja cerrada por 14 unidades.", sinTacc: true },
    { id: 3004, name: "Barrita Quinoa y Chocolate 'Weak Up' (Caja x 18 Uni)", category: "barritas", pricePerKg: 22000, mode: "kilo", image: "img/846265-800-600.webp", isFeatured: true, description: "Barritas saludables Weak Up de quinoa con baño de chocolate. Caja cerrada por 18 unidades.", sinTacc: true },

    // ─── ALMOHADITAS & CEREALES (7 Productos) ─────────────────────────
    { id: 4001, name: "Almohaditas Rell. Frutilla/Maní/Avellana/Limón 1 KG", category: "almohaditas-cereales", pricePerKg: 12000, mode: "weight", image: "img/almohaditas.jpg", isFeatured: true, description: "Almohaditas de cereal crocante rellenas. Sabor Frutilla, Maní, Avellana o Limón.", sinTacc: false },
    { id: 4002, name: "Almohaditas Rell. Avellana (Caja 2.5 KG)", category: "almohaditas-cereales", pricePerKg: 11200, mode: "weight", image: "img/almohaditas.jpg", isFeatured: false, description: "Caja cerrada de 2,5 KG de almohaditas rellenas de avellana ($28.000).", sinTacc: false },
    { id: 4003, name: "Almohaditas de Arroz (Frutilla) 500g", category: "almohaditas-cereales", pricePerKg: 16800, mode: "kilo", image: "img/almohaditas.jpg", isFeatured: false, description: "Almohaditas de arroz con relleno sabor frutilla 500g ($8.400).", sinTacc: true },
    { id: 4004, name: "Almohaditas Lasfor Dos Salvado 1.5 KG", category: "almohaditas-cereales", pricePerKg: 6733, mode: "weight", image: "img/almohaditas.jpg", isFeatured: false, description: "Almohaditas Lasfor integrales con dos salvados 1,5 KG ($10.100).", sinTacc: false },
    { id: 4005, name: "Bolitas de Chocolate Lasfor 500g", category: "almohaditas-cereales", pricePerKg: 10600, mode: "kilo", image: "img/almohaditas.jpg", isFeatured: false, description: "Cereal en bolitas de chocolate de marca Lasfor 500g ($5.300).", sinTacc: false },
    { id: 4006, name: "Copos Cereal Sin Azúcar 500g", category: "almohaditas-cereales", pricePerKg: 8700, mode: "kilo", image: "img/cereales.jpg", isFeatured: false, description: "Copos de maíz crujientes sin azúcar 500g ($4.350).", sinTacc: true },
    { id: 4007, name: "Copos Cereal Con Azúcar 4 KG", category: "almohaditas-cereales", pricePerKg: 4775, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Bolsa familiar de 4 KG de copos de maíz azucarados ($19.100).", sinTacc: false },

    // ─── ARROZ, AVENA & HARINAS (6 Productos) ──────────────────────────
    { id: 5001, name: "Arroz Yamaní 1 KG", category: "harinas-granos", pricePerKg: 3400, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Arroz yamaní integral de grano corto de cocción perfecta.", sinTacc: true },
    { id: 5002, name: "Avena Arrollada 1 KG", category: "harinas-granos", pricePerKg: 3240, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Avena arrollada tradicional de copo entero.", sinTacc: false },
    { id: 5003, name: "Coco Rallado 1 KG", category: "harinas-granos", pricePerKg: 13950, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Coco rallado fino natural deshidratado.", sinTacc: true },
    { id: 5004, name: "Harina de Coco 1 KG", category: "harinas-granos", pricePerKg: 12400, mode: "weight", image: "img/cereales.jpg", isFeatured: false, description: "Harina desgrasada de coco pura sin gluten.", sinTacc: true },
    { id: 5005, name: "Harina de Almendras con Piel 1 KG", category: "harinas-granos", pricePerKg: 33000, mode: "weight", image: "img/almendras.jpg", isFeatured: false, description: "Harina de almendras molidas con piel pura 100%.", sinTacc: true },
    { id: 5006, name: "Harina de Almendras con Piel 500g", category: "harinas-granos", pricePerKg: 33400, mode: "kilo", image: "img/almendras.jpg", isFeatured: false, description: "Harina de almendras con piel fraccionada 500g ($16.700).", sinTacc: true },

    // ─── FRUTAS & DESHIDRATADOS (6 Productos) ──────────────────────────
    { id: 6001, name: "Arándanos Rojos Deshidratados 1 KG", category: "frutas-deshidratados", pricePerKg: 22000, mode: "weight", image: "img/frutas_deshidratadas.jpg", isFeatured: true, description: "Cranberries arándanos rojos desecados de sabor agridulce.", sinTacc: true },
    { id: 6002, name: "Chips de Banana 1 KG", category: "frutas-deshidratados", pricePerKg: 17500, mode: "weight", image: "img/frutas_deshidratadas.jpg", isFeatured: false, description: "Chips de banana crujientes endulzados.", sinTacc: true },
    { id: 6003, name: "Frutas Nevadas 1 KG", category: "frutas-deshidratados", pricePerKg: 13000, mode: "weight", image: "img/frutas_deshidratadas.jpg", isFeatured: false, description: "Mix de frutas glaseadas desecadas surtidas.", sinTacc: true },
    { id: 6004, name: "Maca Orgánica Peruana (Polvo)", category: "frutas-deshidratados", pricePerKg: 3000, mode: "weight", image: "img/frutas_deshidratadas.jpg", isFeatured: false, description: "Maca peruana orgánica energizante en polvo.", sinTacc: true },
    { id: 6005, name: "Tomates Deshidratados 500g", category: "frutas-deshidratados", pricePerKg: 30600, mode: "kilo", image: "img/frutas_deshidratadas.jpg", isFeatured: false, description: "Tomates desecados al sol 500g ($15.300).", sinTacc: true },
    { id: 6006, name: "Hongos de Pino 1 KG", category: "frutas-deshidratados", pricePerKg: 35100, mode: "weight", image: "img/frutas_deshidratadas.jpg", isFeatured: false, description: "Hongos secos de pino patagónico seleccionados.", sinTacc: true },

    // ─── SEMILLAS & CACAO (6 Productos) ────────────────────────────────
    { id: 7001, name: "Semillas de Chía 1 KG", category: "semillas", pricePerKg: 10900, mode: "weight", image: "img/legumbres.jpg", isFeatured: false, description: "Semillas de chía negra ricas en omega 3.", sinTacc: true },
    { id: 7002, name: "Semillas de Sésamo Integral 1 KG", category: "semillas", pricePerKg: 6100, mode: "weight", image: "img/legumbres.jpg", isFeatured: false, description: "Semillas de sésamo integral con cáscara.", sinTacc: true },
    { id: 7003, name: "Semillas de Zapallo 500g", category: "semillas", pricePerKg: 16200, mode: "kilo", image: "img/legumbres.jpg", isFeatured: false, description: "Pepitas de girasol y zapallo peladas 500g ($8.100).", sinTacc: true },
    { id: 7004, name: "Semillas de Quinoa 500g", category: "semillas", pricePerKg: 13200, mode: "kilo", image: "img/cereales.jpg", isFeatured: false, description: "Quinoa en grano seleccionada 500g ($6.600).", sinTacc: true },
    { id: 7005, name: "Cacao Amargo Puro (100%) 500g", category: "semillas", pricePerKg: 36300, mode: "kilo", image: "img/chocolates.jpg", isFeatured: false, description: "Cacao alcalino amargo 100% puro en polvo 500g ($18.150).", sinTacc: true },
    { id: 7006, name: "Cacao Amargo Puro (100%) 250g", category: "semillas", pricePerKg: 39960, mode: "kilo", image: "img/chocolates.jpg", isFeatured: false, description: "Cacao amargo puro 100% 250g ($9.990).", sinTacc: true },

    // ─── LEGUMBRES (3 Productos) ───────────────────────────────────────
    { id: 8001, name: "Lentejas 1 KG", category: "legumbres", pricePerKg: 4650, mode: "weight", image: "img/lentejas.jpg", isFeatured: false, description: "Lentejas verdes seleccionadas.", sinTacc: true },
    { id: 8002, name: "Garbanzos 1 KG", category: "legumbres", pricePerKg: 4800, mode: "weight", image: "img/garbanzos.jpg", isFeatured: false, description: "Garbanzos enteros medianos.", sinTacc: true },
    { id: 8003, name: "Porotos Negros 1 KG", category: "legumbres", pricePerKg: 4500, mode: "weight", image: "img/legumbres.jpg", isFeatured: false, description: "Porotos negros secos.", sinTacc: true },

    // ─── BAÑADOS EN CHOCOLATE & CHIPS (4 Productos) ───────────────────
    { id: 9001, name: "Baño de Repostería (Leche) 500g", category: "chocolates", pricePerKg: 17040, mode: "kilo", image: "img/chocolates.jpg", isFeatured: false, description: "Chocolate para moldear y bañar sabor chocolate con leche 500g ($8.520).", sinTacc: false },
    { id: 9002, name: "Baño de Repostería (Semiamargo) 500g", category: "chocolates", pricePerKg: 17040, mode: "kilo", image: "img/chocolates.jpg", isFeatured: false, description: "Chocolate semiamargo especial repostería 500g ($8.520).", sinTacc: false },
    { id: 9003, name: "Baño de Repostería (Blanco) 500g", category: "chocolates", pricePerKg: 17040, mode: "kilo", image: "img/chocolates.jpg", isFeatured: false, description: "Chocolate blanco para cobertura y moldeo 500g ($8.520).", sinTacc: false },
    { id: 9004, name: "Chips de Chocolate 500g", category: "chocolates", pricePerKg: 15600, mode: "kilo", image: "img/chocolates.jpg", isFeatured: false, description: "Gotas/chips de chocolate resistentes al horneado 500g ($7.800).", sinTacc: false }
];

const DEFAULT_ORDERS = [];
const DEFAULT_FINANCES = [];

// ─── Reset v5: limpia localStorage viejo y fuerza catálogo completo ──────
if (!localStorage.getItem("cozy_virgin_reset_v5")) {
    localStorage.removeItem("cozy_products");
    localStorage.removeItem("cozy_categories");
    localStorage.removeItem("cozy_orders");
    localStorage.removeItem("cozy_finances");
    localStorage.removeItem("cozy_cart");
    localStorage.removeItem("cozy_virgin_reset");
    localStorage.removeItem("cozy_virgin_reset_v2");
    localStorage.removeItem("cozy_virgin_reset_v3");
    localStorage.removeItem("cozy_virgin_reset_v4");
    localStorage.setItem("cozy_virgin_reset_v5", "true");
}

// Load State from LocalStorage
let products = JSON.parse(localStorage.getItem("cozy_products")) || [];
let categories = JSON.parse(localStorage.getItem("cozy_categories")) || [];

// AUTO-REPAIR: Si el localStorage tiene menos productos que el catálogo por defecto (39), fusionar/reponer los faltantes
if (!products || products.length < DEFAULT_PRODUCTS.length) {
    const existingIds = new Set((products || []).map(p => p.id));
    DEFAULT_PRODUCTS.forEach(dp => {
        if (!existingIds.has(dp.id)) {
            products.push(dp);
        }
    });
    localStorage.setItem("cozy_products", JSON.stringify(products));
}

if (!categories || categories.length < DEFAULT_CATEGORIES.length) {
    const existingKeys = new Set((categories || []).map(c => c.key));
    DEFAULT_CATEGORIES.forEach(dc => {
        if (!existingKeys.has(dc.key)) {
            categories.push(dc);
        }
    });
    localStorage.setItem("cozy_categories", JSON.stringify(categories));
}

let orders = JSON.parse(localStorage.getItem("cozy_orders")) || [];
let finances = JSON.parse(localStorage.getItem("cozy_finances")) || [];

// Firebase Sync Helpers
const syncCollectionToFirebase = async (colName, dataArr) => {
    if (typeof isFirebaseConfigured === 'function' && !isFirebaseConfigured()) return;
    if (!window.db) return;
    try {
        const batch = window.db.batch();
        dataArr.forEach(item => {
            if (item && item.id) {
                const docRef = window.db.collection(colName).doc(String(item.id));
                batch.set(docRef, item, { merge: true });
            }
        });
        await batch.commit();
    } catch (e) {
        console.warn("Firebase sync warning (" + colName + "):", e);
    }
};

const deleteFirebaseDoc = async (colName, id) => {
    if (typeof isFirebaseConfigured === 'function' && !isFirebaseConfigured()) return;
    if (!window.db) return;
    try {
        await window.db.collection(colName).doc(String(id)).delete();
    } catch (e) {
        console.warn("Firebase delete warning:", e);
    }
};

const setupFirebaseListenersAdmin = () => {
    if (typeof isFirebaseConfigured === 'function' && !isFirebaseConfigured()) return;
    if (!window.db) return;

    window.db.collection("products").onSnapshot((snapshot) => {
        if (!snapshot.empty) {
            const list = [];
            snapshot.forEach(doc => list.push(doc.data()));
            products = list;
            localStorage.setItem("cozy_products", JSON.stringify(products));
            if (typeof renderDevProductsTable === 'function') renderDevProductsTable();
        }
    });

    window.db.collection("categories").onSnapshot((snapshot) => {
        if (!snapshot.empty) {
            const list = [];
            snapshot.forEach(doc => list.push(doc.data()));
            categories = list;
            localStorage.setItem("cozy_categories", JSON.stringify(categories));
            if (typeof renderCategories === 'function') renderCategories();
        }
    });

    window.db.collection("orders").onSnapshot((snapshot) => {
        if (!snapshot.empty) {
            const list = [];
            snapshot.forEach(doc => list.push(doc.data()));
            orders = list;
            localStorage.setItem("cozy_orders", JSON.stringify(orders));
            if (typeof renderAdminOrders === 'function') renderAdminOrders();
        }
    });

    window.db.collection("finances").onSnapshot((snapshot) => {
        if (!snapshot.empty) {
            const list = [];
            snapshot.forEach(doc => list.push(doc.data()));
            finances = list;
            localStorage.setItem("cozy_finances", JSON.stringify(finances));
            if (typeof renderAdminFinances === 'function') renderAdminFinances();
            if (typeof renderAdminDashboard === 'function') renderAdminDashboard();
        }
    });
};

// Save State to LocalStorage + Firebase Cloud
const saveProducts = () => { localStorage.setItem("cozy_products", JSON.stringify(products)); syncCollectionToFirebase("products", products); };
const saveCategories = () => { localStorage.setItem("cozy_categories", JSON.stringify(categories)); syncCollectionToFirebase("categories", categories); };
const saveOrders = () => { localStorage.setItem("cozy_orders", JSON.stringify(orders)); syncCollectionToFirebase("orders", orders); };
const saveFinances = () => { localStorage.setItem("cozy_finances", JSON.stringify(finances)); syncCollectionToFirebase("finances", finances); };

// Initialize Admin UI
document.addEventListener("DOMContentLoaded", () => {
    setupFirebaseListenersAdmin();
    setupAuth();
    
    // Check if already authenticated in this session
    if (sessionStorage.getItem("admin_authenticated") === "true") {
        showAdminContent();
    }
});

// Setup Authentication Trigger
const setupAuth = () => {
    const submitBtn = document.getElementById("dev-auth-submit-btn");
    const passcodeImg = document.getElementById("dev-passcode-input");
    
    if (submitBtn) {
        submitBtn.addEventListener("click", submitAuthLogic);
    }
    if (passcodeImg) {
        passcodeImg.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                submitAuthLogic();
            }
        });
    }
};

const HASHED_ADMIN_PASS = "8538ba36b04e3a3ff4a1a70261549fa5caf2ec06ad80481cec63010926fd77dd";

const hashString = async (str) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const submitAuthLogic = async () => {
    const passwordInput = document.getElementById("dev-passcode-input");
    const errorMsg = document.getElementById("dev-auth-error-msg");
    
    const inputHash = await hashString(passwordInput.value || "");
    if (inputHash === HASHED_ADMIN_PASS) {
        errorMsg.style.display = "none";
        sessionStorage.setItem("admin_authenticated", "true");
        showAdminContent();
    } else {
        errorMsg.style.display = "block";
        passwordInput.value = "";
        passwordInput.focus();
    }
};

const showAdminContent = () => {
    // Hide login screen, show admin panel
    document.getElementById("admin-login-wrapper").style.display = "none";
    document.getElementById("dev-main-content").style.display = "block";
    
    // Initialize Dashboard UI & Events
    initAdminPanel();
};

const initAdminPanel = () => {
    setupTabSwitching();
    setupForms();
    
    // Render all modules
    renderAdminDashboard();
    renderDevProductsTable();
    renderAdminOrders();
    renderAdminFinances();
    updateExportPreview();
    renderCategoriesSelectAndList();
    
    lucide.createIcons();
};

// Tab Switching
const setupTabSwitching = () => {
    const tabs = document.querySelectorAll(".dev-tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("active"));
            e.currentTarget.classList.add("active");

            const tabTarget = e.currentTarget.getAttribute("data-tab");
            document.querySelectorAll(".dev-tab-content").forEach(tc => tc.classList.remove("active"));
            
            const activeContent = document.getElementById(`tab-${tabTarget}`);
            if (activeContent) activeContent.classList.add("active");
            
            lucide.createIcons();
        });
    });
};

// Setup forms (Add Product, Categories, Finances)
const setupForms = () => {
    // Add Product Collapsible
    const toggleProdBtn = document.getElementById("toggle-add-product-form-btn");
    const prodFormSec = document.getElementById("product-form-section");
    const closeProdFormBtn = document.getElementById("close-product-form-btn");
    const addProductForm = document.getElementById("add-product-form");
    const prodIdInput = document.getElementById("prod-id");
    const prodFormTitle = document.getElementById("product-form-title");
    
    if (toggleProdBtn && prodFormSec) {
        toggleProdBtn.addEventListener("click", () => {
            prodFormSec.style.display = prodFormSec.style.display === "none" ? "block" : "none";
            // Reset to "add" mode
            prodIdInput.value = "";
            prodFormTitle.innerText = "Añadir Producto";
            addProductForm.reset();
            document.getElementById("product-form-image-preview-container").style.display = "none";
            document.getElementById("category-form-section").style.display = "none";
        });
    }
    
    if (closeProdFormBtn && prodFormSec) {
        closeProdFormBtn.addEventListener("click", () => {
            prodFormSec.style.display = "none";
        });
    }

    // Category Collapsible
    const toggleCatBtn = document.getElementById("toggle-category-form-btn");
    const catFormSec = document.getElementById("category-form-section");
    const closeCatFormBtn = document.getElementById("close-category-form-btn");
    
    if (toggleCatBtn && catFormSec) {
        toggleCatBtn.addEventListener("click", () => {
            catFormSec.style.display = catFormSec.style.display === "none" ? "block" : "none";
            document.getElementById("product-form-section").style.display = "none";
        });
    }
    
    if (closeCatFormBtn && catFormSec) {
        closeCatFormBtn.addEventListener("click", () => {
            catFormSec.style.display = "none";
        });
    }

    // Finance Collapsible
    const toggleFinBtn = document.getElementById("toggle-add-finance-btn");
    const finFormSec = document.getElementById("finance-form-section");
    const closeFinFormBtn = document.getElementById("close-finance-form-btn");
    
    if (toggleFinBtn && finFormSec) {
        toggleFinBtn.addEventListener("click", () => {
            finFormSec.style.display = finFormSec.style.display === "none" ? "block" : "none";
        });
    }
    
    if (closeFinFormBtn && finFormSec) {
        closeFinFormBtn.addEventListener("click", () => {
            finFormSec.style.display = "none";
        });
    }

    // Handle photo file / URL input changes
    const imgFileInput = document.getElementById("prod-image-file");
    const imgUrlInput = document.getElementById("prod-image-url");
    const imgPreviewContainer = document.getElementById("product-form-image-preview-container");
    const imgPreviewDiv = document.getElementById("product-form-image-preview");
    const clearImgBtn = document.getElementById("clear-product-form-image-btn");

    if (imgFileInput) {
        imgFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    imgPreviewDiv.innerHTML = `<img src="${event.target.result}" style="width:100%; height:100%; object-fit:cover;">`;
                    imgPreviewContainer.style.display = "flex";
                    imgUrlInput.value = ""; // clear URL when file is chosen
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (imgUrlInput) {
        imgUrlInput.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (val) {
                imgPreviewDiv.innerHTML = `<img src="${val}" style="width:100%; height:100%; object-fit:cover;">`;
                imgPreviewContainer.style.display = "flex";
                if (imgFileInput) imgFileInput.value = ""; // clear file
            } else {
                imgPreviewContainer.style.display = "none";
            }
        });
    }

    if (clearImgBtn) {
        clearImgBtn.addEventListener("click", () => {
            if (imgFileInput) imgFileInput.value = "";
            if (imgUrlInput) imgUrlInput.value = "";
            imgPreviewContainer.style.display = "none";
            imgPreviewDiv.innerHTML = "";
        });
    }

    // Submit Product Form
    if (addProductForm) {
        addProductForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const idVal = prodIdInput.value;
            const name = document.getElementById("prod-name").value.trim();
            const category = document.getElementById("prod-category").value;
            const pricePerKg = parseFloat(document.getElementById("prod-price").value);
            const mode = document.getElementById("prod-mode").value;
            const isFeatured = document.getElementById("prod-featured").checked;
            const description = (document.getElementById("prod-description") ? document.getElementById("prod-description").value.trim() : "");
            const sinTacc = (document.getElementById("prod-sintacc") ? document.getElementById("prod-sintacc").checked : false);

            // Get image source (Base64 from preview or URL)
            let image = "";
            const previewImg = imgPreviewDiv.querySelector("img");
            if (previewImg) {
                image = previewImg.src;
            } else {
                // Fallback to emoji placeholder based on category
                if (category === "frutos-secos") image = "🌰";
                else if (category === "legumbres") image = "🫘";
                else if (category === "mixes") image = "🥣";
                else image = "🌾";
            }

            if (idVal) {
                // Edit mode
                const index = products.findIndex(p => p.id === parseInt(idVal));
                if (index > -1) {
                    products[index] = {
                        ...products[index],
                        name,
                        category,
                        pricePerKg,
                        mode,
                        image,
                        isFeatured,
                        description,
                        sinTacc
                    };
                    alert("Producto actualizado con éxito.");
                }
            } else {
                // Add mode
                const newProduct = {
                    id: Date.now(),
                    name,
                    category,
                    pricePerKg,
                    mode,
                    image,
                    isFeatured,
                    description,
                    sinTacc
                };
                products.push(newProduct);
                alert("Producto creado con éxito.");
            }

            saveProducts();
            addProductForm.reset();
            if (imgFileInput) imgFileInput.value = "";
            if (imgUrlInput) imgUrlInput.value = "";
            imgPreviewContainer.style.display = "none";
            prodFormSec.style.display = "none";

            renderDevProductsTable();
            updateExportPreview();
            renderAdminDashboard();
        });
    }

    // Submit Category Form
    const addCategoryForm = document.getElementById("add-category-form");
    if (addCategoryForm) {
        addCategoryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const catNameInput = document.getElementById("cat-name");
            const name = catNameInput.value.trim();
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

            if (!name || !slug) return;

            // Avoid duplicates
            if (categories.some(c => c.key === slug)) {
                alert("Esta categoría ya existe.");
                return;
            }

            categories.push({ key: slug, name: name });
            saveCategories();
            catNameInput.value = "";
            
            renderCategoriesSelectAndList();
            renderDevProductsTable();
            renderAdminDashboard();
            alert("Categoría creada con éxito.");
        });
    }

    // Reset / Sync Full Catalog Button
    const syncCatalogBtn = document.getElementById("sync-full-catalog-btn");
    if (syncCatalogBtn) {
        syncCatalogBtn.addEventListener("click", () => {
            products = [...DEFAULT_PRODUCTS];
            categories = [...DEFAULT_CATEGORIES];
            saveProducts();
            saveCategories();
            
            renderCategoriesSelectAndList();
            renderDevProductsTable();
            updateExportPreview();
            renderAdminDashboard();
            alert("¡Se ha restablecido el catálogo completo con los 39 productos!");
        });
    }

    const resetBtn = document.getElementById("reset-catalog-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("¿Está seguro de vaciar el catálogo y reiniciar todas las categorías? Se borrarán todos los cambios.")) {
                products = [...DEFAULT_PRODUCTS];
                categories = [...DEFAULT_CATEGORIES];
                saveProducts();
                saveCategories();
                
                renderCategoriesSelectAndList();
                renderDevProductsTable();
                updateExportPreview();
                renderAdminDashboard();
            }
        });
    }

    // Submit Finance Form
    const addFinanceForm = document.getElementById("add-finance-form");
    if (addFinanceForm) {
        addFinanceForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const type = document.getElementById("fin-type").value;
            const concept = document.getElementById("fin-concept").value.trim();
            const category = document.getElementById("fin-category").value;
            const amount = parseFloat(document.getElementById("fin-amount").value);

            if (!concept || isNaN(amount) || amount <= 0) {
                alert("Complete todos los campos con montos válidos.");
                return;
            }

            const newFin = {
                id: "fin-" + Math.floor(1000 + Math.random() * 9000),
                type,
                concept,
                category,
                amount,
                date: new Date().toISOString()
            };

            finances.push(newFin);
            saveFinances();
            renderAdminFinances();

            e.target.reset();
            finFormSec.style.display = "none";
            updateExportPreview();
            alert("Movimiento contable registrado con éxito.");
        });
    }

    // Excel Export trigger
    const exportBtn = document.getElementById("btn-execute-export");
    if (exportBtn) {
        exportBtn.addEventListener("click", exportToExcel);
    }

    // Search input inside catalog table
    const devSearchInput = document.getElementById("dev-search-input");
    if (devSearchInput) {
        devSearchInput.addEventListener("input", () => {
            renderDevProductsTable();
        });
    }
};

// Render Categories selectors & lists in admin
const renderCategoriesSelectAndList = () => {
    // 1. Selector for product form
    const formSelect = document.getElementById("prod-category");
    if (formSelect) {
        formSelect.innerHTML = "";
        categories.forEach(cat => {
            formSelect.innerHTML += `<option value="${cat.key}">${cat.name}</option>`;
        });
    }

    // 2. Admin manager list
    const adminList = document.getElementById("admin-categories-list");
    if (adminList) {
        adminList.innerHTML = "";
        categories.forEach(cat => {
            adminList.innerHTML += `
                <li class="admin-category-item" style="margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; background: white; padding: 8px 12px; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color);">
                    <span><strong>${cat.name}</strong> <small style="color:var(--color-text-muted);">(${cat.key})</small></span>
                    <button type="button" onclick="deleteCategory('${cat.key}')" title="Eliminar Categoría" style="border:none; background:none; color:var(--color-danger); cursor:pointer; font-weight:700;">Eliminar</button>
                </li>
            `;
        });
    }
};

// Delete Category logic
window.deleteCategory = (catKey) => {
    if (confirm(`¿Estás seguro de eliminar la categoría "${catKey}"? Los productos en ella serán movidos a "Otros".`)) {
        // Remove category
        categories = categories.filter(c => c.key !== catKey);
        saveCategories();

        // Move products to "Otros" category
        let changedAnyProduct = false;
        products.forEach(p => {
            if (p.category === catKey) {
                p.category = "Otros";
                changedAnyProduct = true;
            }
        });

        // Ensure "Otros" exists in categories list if it doesn't already
        if (changedAnyProduct && !categories.some(c => c.key === "Otros")) {
            categories.push({ key: "Otros", name: "Otros" });
            saveCategories();
        }

        if (changedAnyProduct) saveProducts();

        renderCategoriesSelectAndList();
        renderDevProductsTable();
        renderAdminDashboard();
        updateExportPreview();
    }
};

// Image element inside tables
const renderDevTableImageHTML = (image) => {
    if (!image) return `<span class="table-emoji">📦</span>`;
    if (image.startsWith("http") || image.startsWith("data:image") || image.includes("/") || image.includes(".")) {
        return `<img src="${image}" style="width:36px; height:36px; object-fit:cover; border-radius:var(--border-radius-sm); border:1px solid var(--border-color);">`;
    }
    return `<span class="table-emoji" style="font-size: 22px;">${image}</span>`;
};

// Render Products Catalog Table
const renderDevProductsTable = () => {
    const tableBody = document.getElementById("dev-products-table-body");
    if (!tableBody) return;
    tableBody.innerHTML = "";

    const searchInput = document.getElementById("dev-search-input");
    const query = searchInput ? searchInput.value.toLowerCase() : "";
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--color-text-muted);">No se encontraron productos.</td></tr>`;
        return;
    }

    filtered.forEach(p => {
        const row = document.createElement("tr");
        const sinTaccTag = p.sinTacc ? `<span style="background:#e8f5e9; color:#2e7d32; font-size:10px; font-weight:700; padding:2px 6px; border-radius:4px; margin-left:6px; border:1px solid #a5d6a7;">🌾 Sin TACC</span>` : '';
        row.innerHTML = `
            <td>${renderDevTableImageHTML(p.image)}</td>
            <td><strong>${p.name}</strong>${sinTaccTag}${p.description ? `<br><small style="color:var(--color-text-muted); font-size:11px;">${p.description}</small>` : ''}</td>
            <td><span class="badge-category" style="background:#EFE6DD; padding:4px 8px; border-radius:var(--border-radius-sm); font-size:11px; font-weight:700;">${formatCategoryName(p.category)}</span></td>
            <td>${p.mode === 'weight' ? 'Peso Variable' : 'Kilo Cerrado'}</td>
            <td>
                <input type="number" 
                       class="table-price-input" 
                       value="${p.pricePerKg}" 
                       min="0"
                       onchange="updateProductPrice(${p.id}, this.value)"
                       style="width: 80px; padding: 4px; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm);">
            </td>
            <td>
                <button type="button" class="btn-novedad-toggle ${p.isFeatured ? 'active' : ''}" onclick="toggleDevProductFeatured(${p.id})">
                    ${p.isFeatured ? '🔥 Destacado' : '☆ Marcar'}
                </button>
            </td>
            <td>
                <div class="btn-row-actions">
                    <button class="btn-table-edit" onclick="editDevProduct(${p.id})" style="padding: 4px 8px; margin-right: 4px; font-size: 12px; cursor: pointer;">Editar</button>
                    <button class="btn-table-delete" onclick="deleteDevProduct(${p.id})" style="padding: 4px 8px; font-size: 12px; cursor: pointer;">Eliminar</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });

    lucide.createIcons();
};

// Edit catalog product
window.editDevProduct = (productId) => {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    // Show form and scroll
    const prodFormSec = document.getElementById("product-form-section");
    prodFormSec.style.display = "block";
    document.getElementById("category-form-section").style.display = "none";
    document.getElementById("product-form-title").innerText = `Editar Producto: ${p.name}`;
    
    // Fill fields
    document.getElementById("prod-id").value = p.id;
    document.getElementById("prod-name").value = p.name;
    document.getElementById("prod-category").value = p.category;
    document.getElementById("prod-price").value = p.pricePerKg;
    document.getElementById("prod-mode").value = p.mode;
    document.getElementById("prod-featured").checked = Boolean(p.isFeatured);
    if (document.getElementById("prod-description")) document.getElementById("prod-description").value = p.description || "";
    if (document.getElementById("prod-sintacc")) document.getElementById("prod-sintacc").checked = Boolean(p.sinTacc);
    
    const imgPreviewContainer = document.getElementById("product-form-image-preview-container");
    const imgPreviewDiv = document.getElementById("product-form-image-preview");
    
    if (p.image) {
        if (p.image.startsWith("http") || p.image.startsWith("data:image") || p.image.includes("/") || p.image.includes(".")) {
            imgPreviewDiv.innerHTML = `<img src="${p.image}" style="width:100%; height:100%; object-fit:cover;">`;
            document.getElementById("prod-image-url").value = p.image;
        } else {
            imgPreviewDiv.innerHTML = `<span style="font-size:24px;">${p.image}</span>`;
            document.getElementById("prod-image-url").value = "";
        }
        imgPreviewContainer.style.display = "flex";
    } else {
        imgPreviewContainer.style.display = "none";
    }

    prodFormSec.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// Toggle Featured live
window.toggleDevProductFeatured = (productId) => {
    const p = products.find(prod => prod.id === productId);
    if (p) {
        p.isFeatured = !p.isFeatured;
        saveProducts();
        renderDevProductsTable();
    }
};

// Update price in catalog table directly
window.updateProductPrice = (productId, newPrice) => {
    const parsedPrice = parseFloat(newPrice);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
        alert("El precio debe ser un número positivo.");
        renderDevProductsTable();
        return;
    }

    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
        products[index].pricePerKg = parsedPrice;
        saveProducts();
        updateExportPreview();
    }
};

// Delete product from catalog
window.deleteDevProduct = (productId) => {
    if (confirm("¿Estás seguro de que deseas eliminar este producto del catálogo?")) {
        deleteFirebaseDoc("products", productId);
        products = products.filter(p => p.id !== productId);
        saveProducts();
        renderDevProductsTable();
        updateExportPreview();
        renderAdminDashboard();
    }
};

// Render Admin Dashboard Modules
const renderAdminDashboard = () => {
    const totalOrdersCount = orders.length;
    const totalRevenueSum = orders.reduce((sum, o) => sum + o.total, 0);
    const totalProductsCount = products.length;
    const totalCategoriesCount = categories.length;

    document.getElementById("admin-kpi-orders").innerText = totalOrdersCount;
    document.getElementById("admin-kpi-revenue").innerText = formatCurrency(totalRevenueSum);
    document.getElementById("admin-kpi-products").innerText = totalProductsCount;
    document.getElementById("admin-kpi-categories").innerText = totalCategoriesCount;

    // Render dashboard table
    const dashboardTbody = document.getElementById("dashboard-recent-orders-tbody");
    if (dashboardTbody) {
        dashboardTbody.innerHTML = "";
        const recentOrders = [...orders].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
        
        if (recentOrders.length === 0) {
            dashboardTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:15px; color:var(--color-text-muted);">Sin pedidos registrados.</td></tr>`;
        } else {
            recentOrders.forEach(o => {
                const tr = document.createElement("tr");
                let badgeClass = "badge-status-pendiente";
                if (o.status === "Confirmado") badgeClass = "badge-status-confirmado";
                else if (o.status === "Entregado") badgeClass = "badge-status-entregado";
                else if (o.status === "Cancelado") badgeClass = "badge-status-cancelado";

                tr.innerHTML = `
                    <td><strong>#${o.id}</strong></td>
                    <td>${new Date(o.createdAt).toLocaleDateString('es-AR')}</td>
                    <td>${o.customer.name}</td>
                    <td style="font-weight:700;">${formatCurrency(o.total)}</td>
                    <td><span class="badge-status ${badgeClass}">${o.status}</span></td>
                `;
                dashboardTbody.appendChild(tr);
            });
        }
    }

    // ChartJS Graphs
    const ctxSales = document.getElementById("adminSalesChart");
    const ctxCategory = document.getElementById("adminCategoryChart");

    if (!ctxSales || !ctxCategory) return;

    if (window.salesChartInstance) {
        window.salesChartInstance.destroy();
    }
    if (window.categoryChartInstance) {
        window.categoryChartInstance.destroy();
    }

    // Sales over last 7 days
    const days = [];
    const salesValues = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dayStr = d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' });
        days.push(dayStr);

        const dayOrders = orders.filter(o => {
            const oDate = new Date(o.createdAt);
            return oDate.getDate() === d.getDate() && oDate.getMonth() === d.getMonth();
        });
        const daySum = dayOrders.reduce((sum, o) => sum + o.total, 0);
        salesValues.push(daySum);
    }

    window.salesChartInstance = new Chart(ctxSales, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Ingresos por Ventas ($)',
                data: salesValues,
                borderColor: '#C86B4A',
                backgroundColor: 'rgba(200, 107, 74, 0.05)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 10 } } },
                x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 10 } } }
            }
        }
    });

    // Category distribution doughnut
    const catLabels = categories.map(c => c.name);
    const catCounts = categories.map(c => products.filter(p => p.category === c.key).length);
    const colors = ['#C86B4A', '#5A7863', '#DCA144', '#7F5539', '#B7B7A4', '#DDBDF1'];

    window.categoryChartInstance = new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: catLabels,
            datasets: [{
                data: catCounts,
                backgroundColor: colors.slice(0, categories.length),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 10, font: { size: 10 } } }
            }
        }
    });
};

// Render Orders List
const renderAdminOrders = () => {
    const tbody = document.getElementById("admin-orders-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--color-text-muted);">No hay pedidos registrados.</td></tr>`;
        return;
    }

    const sortedOrders = [...orders].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

    sortedOrders.forEach(o => {
        const tr = document.createElement("tr");

        let itemsDetailHTML = "<ul class='order-items-detail-list' style='margin:0; padding-left:16px;'>";
        o.items.forEach(i => {
            const weightText = i.weightLabel === "1kg" ? "1kg cerrado" : i.weightLabel;
            itemsDetailHTML += `<li>${i.name} (${weightText}) x${i.quantity}</li>`;
        });
        itemsDetailHTML += "</ul>";

        let badgeClass = "badge-status-pendiente";
        if (o.status === "Confirmado") badgeClass = "badge-status-confirmado";
        else if (o.status === "Entregado") badgeClass = "badge-status-entregado";
        else if (o.status === "Cancelado") badgeClass = "badge-status-cancelado";

        tr.innerHTML = `
            <td><strong>#${o.id}</strong></td>
            <td>${new Date(o.createdAt).toLocaleDateString('es-AR')}<br><small style="color:var(--color-text-muted);">${new Date(o.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} hs</small></td>
            <td>
                <strong>${o.customer.name}</strong><br>
                <small>${o.customer.phone}</small><br>
                <small style="color:var(--color-text-muted);">${o.customer.address}</small>
            </td>
            <td>${itemsDetailHTML}</td>
            <td style="font-weight:700;">${formatCurrency(o.total)}</td>
            <td><span class="badge-status ${badgeClass}">${o.status}</span></td>
            <td>
                <select onchange="updateOrderStatus('${o.id}', this.value)" style="padding: 6px; font-size: 12px; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color); background: white; cursor: pointer;">
                    <option value="Pendiente" ${o.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                    <option value="Confirmado" ${o.status === 'Confirmado' ? 'selected' : ''}>Confirmado</option>
                    <option value="Entregado" ${o.status === 'Entregado' ? 'selected' : ''}>Entregado</option>
                    <option value="Cancelado" ${o.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                </select>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

// Update Order Status (Sync with Finance incomes)
window.updateOrderStatus = (orderId, newStatus) => {
    const index = orders.findIndex(o => o.id === orderId);
    if (index > -1) {
        const oldStatus = orders[index].status;
        orders[index].status = newStatus;
        saveOrders();
        renderAdminOrders();
        renderAdminDashboard();

        // Save order revenue to financial book when status turns confirmed or delivered
        if ((newStatus === "Confirmado" || newStatus === "Entregado") && (oldStatus !== "Confirmado" && oldStatus !== "Entregado")) {
            const existingFin = finances.find(f => f.concept === `Venta Pedido ${orderId}`);
            if (!existingFin) {
                const newFin = {
                    id: "fin-" + Math.floor(1000 + Math.random() * 9000),
                    type: "income",
                    concept: `Venta Pedido ${orderId}`,
                    category: "Ventas",
                    amount: orders[index].total,
                    date: new Date().toISOString()
                };
                finances.push(newFin);
                saveFinances();
                renderAdminFinances();
            }
        }
        
        // Remove from log if cancelled
        if (newStatus === "Cancelado") {
            finances = finances.filter(f => f.concept !== `Venta Pedido ${orderId}`);
            saveFinances();
            renderAdminFinances();
        }
        updateExportPreview();
    }
};

// Render Finances ledger
const renderAdminFinances = () => {
    const tbody = document.getElementById("admin-finances-table-body");
    const incomesText = document.getElementById("admin-finance-incomes");
    const expensesText = document.getElementById("admin-finance-expenses");
    const balanceText = document.getElementById("admin-finance-balance");
    const balanceCard = document.getElementById("admin-finance-balance-card");

    if (!tbody) return;
    tbody.innerHTML = "";

    const incomes = finances.filter(f => f.type === 'income').reduce((sum, f) => sum + f.amount, 0);
    const expenses = finances.filter(f => f.type === 'expense').reduce((sum, f) => sum + f.amount, 0);
    const balance = incomes - expenses;

    incomesText.innerText = formatCurrency(incomes);
    expensesText.innerText = formatCurrency(expenses);
    balanceText.innerText = formatCurrency(balance);
    
    if (balance >= 0) {
        balanceCard.style.borderLeftColor = "#5A7863";
    } else {
        balanceCard.style.borderLeftColor = "var(--color-danger)";
    }

    if (finances.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:15px; color:var(--color-text-muted);">Sin movimientos contables registrados.</td></tr>`;
        return;
    }

    const sortedFin = [...finances].sort((a,b) => new Date(b.date) - new Date(a.date));

    sortedFin.forEach(f => {
        const tr = document.createElement("tr");
        tr.style.borderLeft = `3px solid ${f.type === 'income' ? '#5A7863' : 'var(--color-danger)'}`;
        
        tr.innerHTML = `
            <td>${new Date(f.date).toLocaleDateString('es-AR')}</td>
            <td style="font-weight:700; text-transform:uppercase; color:${f.type === 'income' ? '#5A7863' : 'var(--color-danger)'};">
                ${f.type === 'income' ? 'Ingreso' : 'Egreso'}
            </td>
            <td><strong>${f.concept}</strong></td>
            <td><span style="background:var(--bg-main); padding:4px 8px; border-radius:var(--border-radius-sm); font-size:11px; font-weight:700;">${f.category}</span></td>
            <td style="font-weight:700; color:${f.type === 'income' ? '#5A7863' : 'var(--color-danger)'};">
                ${f.type === 'income' ? '+' : '-'}${formatCurrency(f.amount)}
            </td>
        `;
        tbody.appendChild(tr);
    });
};

// Excel Export logic (SheetJS)
const exportToExcel = () => {
    if (typeof XLSX === 'undefined') {
        alert('Librería de exportación XLSX no cargada. Por favor, reintente.');
        return;
    }

    const wb = XLSX.utils.book_new();

    const incSales = document.getElementById("ex-sales").checked;
    const incStock = document.getElementById("ex-stock").checked;
    const incFinances = document.getElementById("ex-finances").checked;

    if (!incSales && !incStock && !incFinances) {
        alert("Selecciona al menos una planilla para exportar.");
        return;
    }

    // 1. Orders sheet
    if (incSales) {
        const salesData = orders.map(o => ({
            'ID Pedido': o.id,
            'Fecha': new Date(o.createdAt).toLocaleDateString('es-AR'),
            'Cliente': o.customer.name,
            'Teléfono': o.customer.phone,
            'Dirección Envío': o.customer.address,
            'Productos': o.items.map(i => `${i.name} (${i.weightLabel}) x${i.quantity}`).join('; '),
            'Subtotal ($)': o.subtotal,
            'Envío ($)': o.shipping,
            'Total ($)': o.total,
            'Estado': o.status
        }));
        const wsSales = XLSX.utils.json_to_sheet(salesData);
        wsSales['!cols'] = [
            { wch: 12 }, { wch: 12 }, { wch: 22 }, { wch: 16 }, { wch: 30 },
            { wch: 45 }, { wch: 12 }, { wch: 10 }, { wch: 12 }, { wch: 15 }
        ];
        XLSX.utils.book_append_sheet(wb, wsSales, 'Ventas - Pedidos');
    }

    // 2. Catalog sheet
    if (incStock) {
        const stockData = products.map(p => ({
            'ID Producto': p.id,
            'Nombre del Producto': p.name,
            'Categoría': formatCategoryName(p.category),
            'Modalidad de Venta': p.mode === 'weight' ? 'Por Peso Variable' : 'Por Kilo Cerrado',
            'Precio por Kg ($)': p.pricePerKg
        }));
        const wsStock = XLSX.utils.json_to_sheet(stockData);
        wsStock['!cols'] = [
            { wch: 15 }, { wch: 30 }, { wch: 20 }, { wch: 22 }, { wch: 18 }
        ];
        XLSX.utils.book_append_sheet(wb, wsStock, 'Inventario - Productos');
    }

    // 3. Cash finances sheet
    if (incFinances) {
        const finData = finances.map(f => ({
            'Fecha': new Date(f.date).toLocaleDateString('es-AR'),
            'Tipo de Movimiento': f.type === 'income' ? 'INGRESO' : 'EGRESO',
            'Concepto / Detalle': f.concept,
            'Categoría Contable': f.category,
            'Monto ($)': f.amount
        }));
        
        const totalIncomes = finances.filter(f => f.type === 'income').reduce((sum, f) => sum + f.amount, 0);
        const totalExpenses = finances.filter(f => f.type === 'expense').reduce((sum, f) => sum + f.amount, 0);
        finData.push({ 'Fecha': '', 'Tipo de Movimiento': '', 'Concepto / Detalle': '', 'Categoría Contable': 'TOTAL INGRESOS', 'Monto ($)': totalIncomes });
        finData.push({ 'Fecha': '', 'Tipo de Movimiento': '', 'Concepto / Detalle': '', 'Categoría Contable': 'TOTAL EGRESOS', 'Monto ($)': totalExpenses });
        finData.push({ 'Fecha': '', 'Tipo de Movimiento': '', 'Concepto / Detalle': '', 'Categoría Contable': 'BALANCE NETO', 'Monto ($)': totalIncomes - totalExpenses });

        const wsFin = XLSX.utils.json_to_sheet(finData);
        wsFin['!cols'] = [
            { wch: 12 }, { wch: 18 }, { wch: 30 }, { wch: 22 }, { wch: 15 }
        ];
        XLSX.utils.book_append_sheet(wb, wsFin, 'Caja - Contabilidad');
    }

    const today = new Date().toISOString().split('T')[0];
    const filename = `ElAlmacenDeGuada_Reporte_${today}.xlsx`;
    XLSX.writeFile(wb, filename);
};

const updateExportPreview = () => {
    document.getElementById("preview-sales-count").innerText = `${orders.length} filas`;
    document.getElementById("preview-stock-count").innerText = `${products.length} filas`;
    document.getElementById("preview-finances-count").innerText = `${finances.length} filas`;
};
