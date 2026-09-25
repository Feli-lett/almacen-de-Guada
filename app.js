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

// Predefined weight steps for variable products
const WEIGHT_STEPS = [
    { label: "250g", val: 250 },
    { label: "500g", val: 500 },
    { label: "750g", val: 750 },
    { label: "1kg", val: 1000 },
    { label: "1.5kg", val: 1500 },
    { label: "2kg", val: 2000 }
];

// Seed Data for Orders and Finances (Empty for a fresh store)
const DEFAULT_ORDERS = [];
const DEFAULT_FINANCES = [];

// One-time localStorage reset to wipe old demo content for clients
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

// Application State
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

let orders = JSON.parse(localStorage.getItem("cozy_orders")) || [...DEFAULT_ORDERS];
let finances = JSON.parse(localStorage.getItem("cozy_finances")) || [...DEFAULT_FINANCES];
let cart = JSON.parse(localStorage.getItem("cozy_cart")) || [];
let activeCategory = "all";
let searchQuery = "";

// Currency formatter
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
};

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

// Real-time listener setup for client and admin updates
const setupFirebaseListeners = () => {
    if (typeof isFirebaseConfigured === 'function' && !isFirebaseConfigured()) return;
    if (!window.db) return;

    window.db.collection("products").onSnapshot((snapshot) => {
        if (!snapshot.empty) {
            const list = [];
            snapshot.forEach(doc => list.push(doc.data()));
            products = list;
            localStorage.setItem("cozy_products", JSON.stringify(products));
            if (typeof renderProducts === 'function') renderProducts();
            if (typeof renderNovedadesCarousel === 'function') renderNovedadesCarousel();
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

// Local storage saving + Firebase Cloud Sync
const saveProducts = () => { localStorage.setItem("cozy_products", JSON.stringify(products)); syncCollectionToFirebase("products", products); };
const saveCategories = () => { localStorage.setItem("cozy_categories", JSON.stringify(categories)); syncCollectionToFirebase("categories", categories); };
const saveOrders = () => { localStorage.setItem("cozy_orders", JSON.stringify(orders)); syncCollectionToFirebase("orders", orders); };
const saveFinances = () => { localStorage.setItem("cozy_finances", JSON.stringify(finances)); syncCollectionToFirebase("finances", finances); };
const saveCart = () => { localStorage.setItem("cozy_cart", JSON.stringify(cart)); };

// Helper to render product image (handles both emojis and real images/base64)
const renderProductImageHTML = (image, name) => {
    if (!image) return `<span class="product-emoji-element">📦</span>`;
    if (image.startsWith("http") || image.startsWith("data:image") || image.includes("/") || image.includes(".")) {
        return `<img src="${image}" alt="${name}" class="product-img-element" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547514701-42782101795e?w=500';">`;
    }
    return `<span class="product-emoji-element">${image}</span>`;
};

// Helper for dev table image
const renderDevTableImageHTML = (image) => {
    if (!image) return `<span class="table-emoji">📦</span>`;
    if (image.startsWith("http") || image.startsWith("data:image") || image.includes("/") || image.includes(".")) {
        return `<img src="${image}" alt="" style="width: 32px; height: 32px; object-fit: cover; border-radius: var(--border-radius-sm); display: block; margin: auto;">`;
    }
    return `<span class="table-emoji">${image}</span>`;
};

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    setupFirebaseListeners();
    renderCategories();
    renderNovedadesCarousel();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    lucide.createIcons();
});

// Render Shop Catalog
const renderProducts = () => {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";

    // Filter products
    const filtered = products.filter(p => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="cart-empty-state" style="grid-column: 1 / -1; padding: 40px 0;">
                <i data-lucide="info"></i>
                <p>No se encontraron productos en esta categoría.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-id", p.id);

        let buyControlsHTML = "";
        
        if (p.mode === "weight") {
            // Variable weight mode (slider)
            const defaultStepIdx = 1; 
            const weightVal = WEIGHT_STEPS[defaultStepIdx].val;
            const computedPrice = p.pricePerKg * (weightVal / 1000);
            
            buyControlsHTML = `
                <div class="weight-selector">
                    <div class="weight-labels">
                        <span>Min (250g)</span>
                        <span>Max (2kg)</span>
                    </div>
                    <div class="slider-wrapper">
                        <input type="range" 
                               class="weight-slider" 
                               min="0" 
                               max="${WEIGHT_STEPS.length - 1}" 
                               value="${defaultStepIdx}"
                               data-product-id="${p.id}"
                               data-price-per-kg="${p.pricePerKg}"
                               oninput="updateWeightSelection(this)">
                    </div>
                    <div class="selected-weight-display">
                        Peso: 500g
                    </div>
                </div>
                <div class="price-calculation-preview">
                    Total: ${formatCurrency(computedPrice)}
                </div>
                <button class="btn btn-add-to-cart" onclick="addToCartWeight(${p.id}, this)">
                    <i data-lucide="plus"></i> Agregar al carrito
                </button>
            `;
        } else {
            // Kilo mode — ahora con selector 500g / 1kg y +/- cantidad
            const defaultKiloPrice = p.pricePerKg;
            const halfKiloPrice = Math.round(p.pricePerKg / 2);
            buyControlsHTML = `
                <div class="kilo-size-selector" style="display:flex; gap:6px; margin-bottom:10px;">
                    <button type="button" class="kilo-size-btn" data-grams="500" onclick="selectKiloSize(this, 500)" style="flex:1; padding:8px 0; border:2px solid var(--border-color); border-radius:var(--border-radius-md); background:var(--bg-main); cursor:pointer; font-weight:700; font-size:13px; transition:all .2s;">½ kg</button>
                    <button type="button" class="kilo-size-btn active" data-grams="1000" onclick="selectKiloSize(this, 1000)" style="flex:1; padding:8px 0; border:2px solid var(--color-primary); border-radius:var(--border-radius-md); background:var(--color-primary-light); color:var(--color-primary); cursor:pointer; font-weight:700; font-size:13px; transition:all .2s;">1 kg</button>
                </div>
                <div class="qty-selector">
                    <button class="qty-btn" onclick="adjustKiloQty(this, -1)">-</button>
                    <span class="qty-val" data-grams="1000">1</span>
                    <button class="qty-btn" onclick="adjustKiloQty(this, 1)">+</button>
                </div>
                <div class="price-calculation-preview">
                    Total: ${formatCurrency(defaultKiloPrice)}
                </div>
                <button class="btn btn-add-to-cart" onclick="addToCartKilo(${p.id}, this)">
                    <i data-lucide="plus"></i> Agregar al carrito
                </button>
            `;
        }

        const sinTaccBadge = p.sinTacc ? `
            <span style="background: #2e7d32; color: white; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: var(--border-radius-sm); text-transform: uppercase; margin-top: 4px; display: inline-block;">
                🌾 Sin TACC
            </span>
        ` : '';

        const descriptionHTML = p.description ? `
            <p class="product-description" style="font-size: 12px; color: var(--color-text-muted); margin: 4px 0 10px 0; line-height: 1.4;">${p.description}</p>
        ` : '';

        card.innerHTML = `
            <div style="position: absolute; top: 12px; left: 12px; display: flex; flex-direction: column; align-items: flex-start; z-index: 2;">
                <span class="badge-mode ${p.mode}">
                    ${p.mode === 'weight' ? 'Por Peso' : 'Por Kilo'}
                </span>
                ${sinTaccBadge}
            </div>
            <div class="product-image-container">
                ${renderProductImageHTML(p.image, p.name)}
            </div>
            <div class="product-card-body">
                <span class="product-category">${formatCategoryName(p.category)}</span>
                <h3 class="product-title" style="margin-bottom: 2px;">${p.name}</h3>
                ${descriptionHTML}
                <div class="product-price-info">
                    <span class="price-main">${formatCurrency(p.pricePerKg)}</span>
                    <span class="price-unit">/ kg</span>
                </div>
                <div class="purchase-controls">
                    ${buyControlsHTML}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    lucide.createIcons();
};

// State & Functions for Novedades Carousel (Steam Style)
let novedadesCurrentIndex = 0;
let novedadesAutoTimer = null;

const renderNovedadesCarousel = () => {
    const track = document.getElementById("novedades-track");
    const dotsContainer = document.getElementById("novedades-indicators");
    if (!track || !dotsContainer) return;

    track.innerHTML = "";
    dotsContainer.innerHTML = "";

    // Featured items (if none flagged, pick first 4)
    let featuredList = products.filter(p => p.isFeatured);
    if (featuredList.length === 0) {
        featuredList = products.slice(0, 4);
    }

    if (novedadesCurrentIndex >= featuredList.length) {
        novedadesCurrentIndex = 0;
    }

    featuredList.forEach((p, idx) => {
        const slide = document.createElement("div");
        slide.className = "novedades-slide";
        
        let buyControlsHTML = "";
        if (p.mode === "weight") {
            const defaultStepIdx = 1; 
            const weightVal = WEIGHT_STEPS[defaultStepIdx].val;
            const computedPrice = p.pricePerKg * (weightVal / 1000);
            
            buyControlsHTML = `
                <div class="weight-selector" style="margin-bottom:12px;">
                    <div class="weight-labels">
                        <span>Min (250g)</span>
                        <span>Max (2kg)</span>
                    </div>
                    <div class="slider-wrapper">
                        <input type="range" 
                               class="weight-slider" 
                               min="0" 
                               max="${WEIGHT_STEPS.length - 1}" 
                               value="${defaultStepIdx}"
                               data-product-id="${p.id}"
                               data-price-per-kg="${p.pricePerKg}"
                               oninput="updateWeightSelection(this)">
                    </div>
                    <div class="selected-weight-display">
                        Peso: 500g
                    </div>
                </div>
                <div class="price-calculation-preview">
                    Total: ${formatCurrency(computedPrice)}
                </div>
                <button class="btn btn-add-to-cart" onclick="addToCartWeight(${p.id}, this)">
                    <i data-lucide="plus"></i> Agregar al carrito
                </button>
            `;
        } else {
            buyControlsHTML = `
                <div class="kilo-size-selector" style="display:flex; gap:6px; margin-bottom:10px;">
                    <button type="button" class="kilo-size-btn" data-grams="500" onclick="selectKiloSize(this, 500)" style="flex:1; padding:8px 0; border:2px solid var(--border-color); border-radius:var(--border-radius-md); background:var(--bg-main); cursor:pointer; font-weight:700; font-size:13px; transition:all .2s;">½ kg</button>
                    <button type="button" class="kilo-size-btn active" data-grams="1000" onclick="selectKiloSize(this, 1000)" style="flex:1; padding:8px 0; border:2px solid var(--color-primary); border-radius:var(--border-radius-md); background:var(--color-primary-light); color:var(--color-primary); cursor:pointer; font-weight:700; font-size:13px; transition:all .2s;">1 kg</button>
                </div>
                <div class="qty-selector" style="margin-bottom:12px;">
                    <button class="qty-btn" onclick="adjustKiloQty(this, -1)">-</button>
                    <span class="qty-val" data-grams="1000">1</span>
                    <button class="qty-btn" onclick="adjustKiloQty(this, 1)">+</button>
                </div>
                <div class="price-calculation-preview">
                    Total: ${formatCurrency(p.pricePerKg)}
                </div>
                <button class="btn btn-add-to-cart" onclick="addToCartKilo(${p.id}, this)">
                    <i data-lucide="plus"></i> Agregar al carrito
                </button>
            `;
        }

        const sinTaccNovedadTag = p.sinTacc ? `<span style="background: #2e7d32; color: white; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 12px; margin-left: 8px; vertical-align: middle; text-transform: uppercase;">🌾 Sin TACC</span>` : '';
        const descText = p.description || "Seleccionado especialmente por su máxima frescura y calidad garantizada en nuestra despensa.";

        slide.innerHTML = `
            <div class="novedades-slide-media">
                ${renderProductImageHTML(p.image, p.name)}
            </div>
            <div class="novedades-slide-info" data-id="${p.id}">
                <span class="novedades-category">${formatCategoryName(p.category)}${sinTaccNovedadTag}</span>
                <h3 class="novedades-title">${p.name}</h3>
                <p class="novedades-desc">${descText}</p>
                <div class="novedades-price-row">
                    <span class="novedades-price-val">${formatCurrency(p.pricePerKg)}</span>
                    <span class="novedades-price-unit">/ kg</span>
                </div>
                <div class="purchase-controls" style="border:none; padding:0;">
                    ${buyControlsHTML}
                </div>
            </div>
        `;
        track.appendChild(slide);

        // Indicator dot
        const dot = document.createElement("div");
        dot.className = `novedades-dot ${idx === novedadesCurrentIndex ? 'active' : ''}`;
        dot.addEventListener("click", () => {
            goToNovedadSlide(idx);
            resetNovedadesTimer();
        });
        dotsContainer.appendChild(dot);
    });

    lucide.createIcons();
    updateNovedadesSlidePosition();
    startNovedadesAutoPlay(featuredList.length);
};

const goToNovedadSlide = (index) => {
    let featuredList = products.filter(p => p.isFeatured);
    if (featuredList.length === 0) featuredList = products.slice(0, 4);
    const count = featuredList.length;
    novedadesCurrentIndex = (index + count) % count;
    updateNovedadesSlidePosition();
};

const updateNovedadesSlidePosition = () => {
    const track = document.getElementById("novedades-track");
    if (track) {
        track.style.transform = `translateX(-${novedadesCurrentIndex * 100}%)`;
    }
    const dots = document.querySelectorAll(".novedades-dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === novedadesCurrentIndex);
    });
};

const startNovedadesAutoPlay = (totalSlides) => {
    clearInterval(novedadesAutoTimer);
    if (totalSlides <= 1) return;
    novedadesAutoTimer = setInterval(() => {
        goToNovedadSlide(novedadesCurrentIndex + 1);
    }, 3000);
};

const resetNovedadesTimer = () => {
    let featuredList = products.filter(p => p.isFeatured);
    if (featuredList.length === 0) featuredList = products.slice(0, 4);
    startNovedadesAutoPlay(featuredList.length);
};

window.toggleDevProductFeatured = (productId) => {
    const p = products.find(prod => prod.id === productId);
    if (p) {
        p.isFeatured = !p.isFeatured;
        saveProducts();
        renderDevProductsTable();
        renderNovedadesCarousel();
    }
};

// Render categories dynamically in all elements
const renderCategories = () => {
    // 1. Navigation Header — scrollable track with arrow buttons
    const navLinksList = document.getElementById("nav-links-list");
    if (navLinksList) {
        // "Todos" siempre fijo primero
        navLinksList.innerHTML = `<li><button class="nav-link ${activeCategory === 'all' ? 'active' : ''}" data-category="all">Todos</button></li>`;
        categories.forEach(cat => {
            navLinksList.innerHTML += `<li><button class="nav-link ${activeCategory === cat.key ? 'active' : ''}" data-category="${cat.key}">${cat.name}</button></li>`;
        });

        // Re-bind click events
        navLinksList.querySelectorAll(".nav-link").forEach(btn => {
            btn.addEventListener("click", (e) => {
                navLinksList.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));
                e.currentTarget.classList.add("active");
                activeCategory = e.currentTarget.getAttribute("data-category");
                // Sync the category select too
                const sel = document.getElementById("category-filter-select");
                if (sel) sel.value = activeCategory;
                renderProducts();
                const prodSec = document.getElementById("productos-section");
                if (prodSec) prodSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Update nav arrow visibility
        updateNavArrows();
    }

    // 2. Category filter select (alongside search bar)
    const catSelect = document.getElementById("category-filter-select");
    if (catSelect) {
        const currentVal = catSelect.value || 'all';
        catSelect.innerHTML = `<option value="all">Todas las categorías</option>`;
        categories.forEach(cat => {
            catSelect.innerHTML += `<option value="${cat.key}" ${currentVal === cat.key ? 'selected' : ''}>${cat.name}</option>`;
        });
    }

    // 3. Navigation Footer
    const footerLinksContainer = document.querySelector(".footer-links ul");
    if (footerLinksContainer) {
        footerLinksContainer.innerHTML = "";
        categories.forEach(cat => {
            footerLinksContainer.innerHTML += `<li><a href="#" data-category-link="${cat.key}">${cat.name}</a></li>`;
        });
        const footerLinks = footerLinksContainer.querySelectorAll("a");
        footerLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const cat = e.currentTarget.getAttribute("data-category-link");
                const targetHeaderBtn = document.querySelector(`#nav-links-list .nav-link[data-category="${cat}"]`);
                if (targetHeaderBtn) targetHeaderBtn.click();
            });
        });
    }

    // 4. Form select in dev panel (Agregar Producto)
    const formSelect = document.getElementById("prod-category");
    if (formSelect) {
        formSelect.innerHTML = "";
        categories.forEach(cat => {
            formSelect.innerHTML += `<option value="${cat.key}">${cat.name}</option>`;
        });
    }

    // 5. Categories admin list in developer modal
    const adminList = document.getElementById("admin-categories-list");
    if (adminList) {
        adminList.innerHTML = "";
        categories.forEach(cat => {
            adminList.innerHTML += `
                <li class="admin-category-item" style="margin-bottom: 8px;">
                    <span>${cat.name} <small style="color:var(--color-text-muted);">(${cat.key})</small></span>
                    <button type="button" class="btn-icon-delete" onclick="deleteCategory('${cat.key}')" title="Eliminar Categoría" style="border:none; background:none; color:var(--color-danger); cursor:pointer;">
                        <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                    </button>
                </li>
            `;
        });
        lucide.createIcons();
    }
};

// Update scroll arrow disabled state
const updateNavArrows = () => {
    const track = document.getElementById("nav-links-list");
    const leftBtn = document.getElementById("nav-scroll-left");
    const rightBtn = document.getElementById("nav-scroll-right");
    if (!track || !leftBtn || !rightBtn) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    leftBtn.disabled = track.scrollLeft <= 2;
    rightBtn.disabled = track.scrollLeft >= maxScroll - 2;
};


// Translate internal category to Spanish Label dynamically
const formatCategoryName = (cat) => {
    const found = categories.find(c => c.key === cat);
    return found ? found.name : cat;
};

window.deleteCategory = (catKey) => {
    if (confirm(`¿Estás seguro de que deseas eliminar la categoría "${formatCategoryName(catKey)}"? Los productos asociados se moverán a la categoría "Otros".`)) {
        // Move products to 'otros'
        products.forEach(p => {
            if (p.category === catKey) {
                p.category = "otros";
            }
        });
        
        // Remove from categories list
        categories = categories.filter(c => c.key !== catKey);
        
        // Add "otros" category if it doesn't exist
        if (!categories.some(c => c.key === "otros")) {
            categories.push({ key: "otros", name: "Otros" });
        }
        
        saveCategories();
        saveProducts();
        renderCategories();
        renderProducts();
        renderDevProductsTable();
        alert("Categoría eliminada con éxito.");
    }
};

// UI interactions for card sliders (weight mode) — uses DOM traversal, not IDs
window.updateWeightSelection = (slider) => {
    const stepIdx = parseInt(slider.value);
    const weightObj = WEIGHT_STEPS[stepIdx];
    const pricePerKg = parseFloat(slider.dataset.pricePerKg);
    
    // Find sibling elements relative to slider's container
    const container = slider.closest(".purchase-controls") || slider.closest(".novedades-slide-info") || slider.parentElement.parentElement.parentElement;
    
    const labelDisplay = container.querySelector(".selected-weight-display");
    if (labelDisplay) {
        labelDisplay.innerText = `Peso: ${weightObj.label}`;
    }

    const calculatedPrice = pricePerKg * (weightObj.val / 1000);
    const pricePreview = container.querySelector(".price-calculation-preview");
    if (pricePreview) {
        pricePreview.innerText = `Total: ${formatCurrency(calculatedPrice)}`;
    }
};

// Kilo size selector (500g / 1kg toggle)
window.selectKiloSize = (btn, grams) => {
    const container = btn.closest(".purchase-controls") || btn.closest(".novedades-slide-info") || btn.parentElement.parentElement;
    
    // Toggle active visual state
    container.querySelectorAll(".kilo-size-btn").forEach(b => {
        b.style.border = "2px solid var(--border-color)";
        b.style.background = "var(--bg-main)";
        b.style.color = "inherit";
        b.classList.remove("active");
    });
    btn.style.border = "2px solid var(--color-primary)";
    btn.style.background = "var(--color-primary-light)";
    btn.style.color = "var(--color-primary)";
    btn.classList.add("active");
    
    // Update qty-val data attribute
    const qtySpan = container.querySelector(".qty-val");
    if (qtySpan) {
        qtySpan.dataset.grams = grams;
        // Reset quantity to 1 on size change
        qtySpan.innerText = "1";
    }
    
    // Update price preview
    const card = container.closest(".product-card") || container.closest(".novedades-slide");
    let productId;
    if (card && card.dataset.id) {
        productId = parseInt(card.dataset.id);
    } else if (container.dataset.id) {
        productId = parseInt(container.dataset.id);
    }
    const product = products.find(p => p.id === productId);
    if (product) {
        const price = product.pricePerKg * (grams / 1000);
        const pricePreview = container.querySelector(".price-calculation-preview");
        if (pricePreview) {
            pricePreview.innerText = `Total: ${formatCurrency(price)}`;
        }
    }
};

// UI interactions for quantity buttons (kilo mode)
window.adjustKiloQty = (button, change) => {
    const qtySpan = button.parentElement.querySelector(".qty-val");
    let currentVal = parseInt(qtySpan.innerText) || 1;
    currentVal = Math.max(1, currentVal + change);
    qtySpan.innerText = `${currentVal}`;

    // Compute updated price preview using DOM traversal
    const container = button.closest(".purchase-controls") || button.closest(".novedades-slide-info") || button.parentElement.parentElement;
    const card = container.closest(".product-card") || container.closest(".novedades-slide");
    let productId;
    if (card && card.dataset.id) {
        productId = parseInt(card.dataset.id);
    } else if (container.dataset.id) {
        productId = parseInt(container.dataset.id);
    }
    const product = products.find(p => p.id === productId);
    if (product) {
        const grams = parseInt(qtySpan.dataset.grams) || 1000;
        const calculatedPrice = product.pricePerKg * (grams / 1000) * currentVal;
        const pricePreview = container.querySelector(".price-calculation-preview");
        if (pricePreview) {
            pricePreview.innerText = `Total: ${formatCurrency(calculatedPrice)}`;
        }
    }
};

// Add weight-based item to cart (uses DOM traversal from button)
window.addToCartWeight = (productId, btn) => {
    const container = btn.closest(".purchase-controls") || btn.closest(".novedades-slide-info") || btn.parentElement;
    const slider = container.querySelector(".weight-slider");
    if (!slider) return;
    const selectedStep = WEIGHT_STEPS[parseInt(slider.value)];
    
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId && item.weight === selectedStep.val);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            pricePerKg: product.pricePerKg,
            mode: "weight",
            weight: selectedStep.val,
            weightLabel: selectedStep.label,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    openCartDrawer();
};

// Add kilo-based item to cart (uses DOM traversal from button)
window.addToCartKilo = (productId, btn) => {
    const container = btn.closest(".purchase-controls") || btn.closest(".novedades-slide-info") || btn.parentElement;
    const qtySpan = container.querySelector(".qty-val");
    const qty = parseInt(qtySpan.innerText) || 1;
    const grams = parseInt(qtySpan.dataset.grams) || 1000;
    const weightLabel = grams === 500 ? "½kg" : "1kg";

    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Stack by product + weight size
    const existingIndex = cart.findIndex(item => item.id === productId && item.weight === grams);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            pricePerKg: product.pricePerKg,
            mode: "kilo",
            weight: grams,
            weightLabel: weightLabel,
            quantity: qty
        });
    }

    // Reset card controls after adding
    qtySpan.innerText = "1";
    const pricePreview = container.querySelector(".price-calculation-preview");
    if (pricePreview) {
        pricePreview.innerText = `Total: ${formatCurrency(product.pricePerKg * (grams / 1000))}`;
    }

    saveCart();
    updateCartUI();
    openCartDrawer();
};

// Cart logic operations
const updateCartUI = () => {
    const container = document.getElementById("cart-items-container");
    const countBadge = document.getElementById("cart-badge-count");
    const totalPreview = document.getElementById("cart-total-preview");
    const subtotalText = document.getElementById("cart-subtotal");
    const totalText = document.getElementById("cart-total");
    
    container.innerHTML = "";

    let totalAmount = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <i data-lucide="shopping-basket"></i>
                <p>Tu carrito está vacío.<br>¡Comienza a añadir productos!</p>
            </div>
        `;
        countBadge.innerText = 0;
        totalPreview.innerText = formatCurrency(0);
        subtotalText.innerText = formatCurrency(0);
        totalText.innerText = formatCurrency(0);
        lucide.createIcons();
        return;
    }

    cart.forEach((item, index) => {
        // Calculate price for this single item line
        // (pricePerKg) * (weightInGrams / 1000) * quantity
        const unitPrice = item.pricePerKg * (item.weight / 1000);
        const lineTotal = unitPrice * item.quantity;

        totalAmount += lineTotal;
        totalItems += item.quantity;

        const cartItemHTML = document.createElement("div");
        cartItemHTML.className = "cart-item";
        
        let metaText = "";
        if (item.mode === "weight") {
            metaText = `Porción de ${item.weightLabel} x ${item.quantity}`;
        } else {
            metaText = `${item.weightLabel || '1kg'} x ${item.quantity}`;
        }

        cartItemHTML.innerHTML = `
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-meta">${metaText}</p>
                <div class="cart-item-actions">
                    <span class="cart-item-price">${formatCurrency(lineTotal)}</span>
                    <button class="btn-remove-cart" onclick="removeCartItem(${index})">
                        <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> Eliminar
                    </button>
                </div>
            </div>
        `;

        container.appendChild(cartItemHTML);
    });

    countBadge.innerText = totalItems;
    totalPreview.innerText = formatCurrency(totalAmount);
    subtotalText.innerText = formatCurrency(totalAmount);
    
    // Free shipping boundary ($15.000)
    const deliveryText = document.getElementById("cart-delivery");
    if (totalAmount >= 15000 || totalAmount === 0) {
        deliveryText.innerText = "¡Gratis!";
        totalText.innerText = formatCurrency(totalAmount);
    } else {
        const deliveryFee = 1500;
        deliveryText.innerText = formatCurrency(deliveryFee);
        totalText.innerText = formatCurrency(totalAmount + deliveryFee);
    }

    lucide.createIcons();
};

window.removeCartItem = (index) => {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
};

// Open/Close cart drawers
const openCartDrawer = () => {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
};

const closeCartDrawer = () => {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("open");
};

// Event Listeners setup
const setupEventListeners = () => {
    // Cart opening and closing
    document.getElementById("cart-toggle-btn").addEventListener("click", openCartDrawer);
    document.getElementById("close-cart-btn").addEventListener("click", closeCartDrawer);
    document.getElementById("cart-overlay").addEventListener("click", closeCartDrawer);

    // Search bar logic
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Category filter select (alongside search bar)
    const catFilterSelect = document.getElementById("category-filter-select");
    if (catFilterSelect) {
        catFilterSelect.addEventListener("change", (e) => {
            activeCategory = e.target.value;
            // Sync nav link active state
            const navList = document.getElementById("nav-links-list");
            if (navList) {
                navList.querySelectorAll(".nav-link").forEach(b => {
                    b.classList.toggle("active", b.getAttribute("data-category") === activeCategory);
                });
            }
            renderProducts();
        });
    }

    // Nav scroll arrows
    const navTrack = document.getElementById("nav-links-list");
    const navScrollLeft = document.getElementById("nav-scroll-left");
    const navScrollRight = document.getElementById("nav-scroll-right");
    if (navTrack && navScrollLeft && navScrollRight) {
        const SCROLL_STEP = 140;
        navScrollLeft.addEventListener("click", () => {
            navTrack.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
            setTimeout(updateNavArrows, 300);
        });
        navScrollRight.addEventListener("click", () => {
            navTrack.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
            setTimeout(updateNavArrows, 300);
        });
        navTrack.addEventListener("scroll", updateNavArrows, { passive: true });
        // Initial state
        setTimeout(updateNavArrows, 100);
    }

    // Novedades Carousel controls & hover pause
    const novPrevBtn = document.getElementById("novedades-prev-btn");
    const novNextBtn = document.getElementById("novedades-next-btn");
    const novWrapper = document.getElementById("novedades-carousel-wrapper");

    if (novPrevBtn) {
        novPrevBtn.addEventListener("click", () => {
            goToNovedadSlide(novedadesCurrentIndex - 1);
            resetNovedadesTimer();
        });
    }
    if (novNextBtn) {
        novNextBtn.addEventListener("click", () => {
            goToNovedadSlide(novedadesCurrentIndex + 1);
            resetNovedadesTimer();
        });
    }
    if (novWrapper) {
        novWrapper.addEventListener("mouseenter", () => clearInterval(novedadesAutoTimer));
        novWrapper.addEventListener("mouseleave", () => resetNovedadesTimer());
    }

    // Footer categories links helper
    const footerLinks = document.querySelectorAll(".footer-links a");
    footerLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const cat = e.currentTarget.getAttribute("data-category-link");
            
            // Activate corresponding header link
            const targetHeaderBtn = document.querySelector(`.nav-link[data-category="${cat}"]`);
            if (targetHeaderBtn) {
                targetHeaderBtn.click();
            }
        });
    });

    // Logo click resets to home
    document.getElementById("logo-btn").addEventListener("click", () => {
        activeCategory = "all";
        searchQuery = "";
        searchInput.value = "";
        const catSelect = document.getElementById("category-filter-select");
        if (catSelect) catSelect.value = "all";
        
        const firstHeaderBtn = document.querySelector('.nav-link[data-category="all"]');
        if (firstHeaderBtn) {
            document.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));
            firstHeaderBtn.classList.add("active");
        }
        
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Developer Modal actions (Hidden from view)
    const openDevModal = () => {
        // Open the admin panel in a new tab for a better experience
        window.open("admin.html", "_blank");
    };

    // Secret Access Trigger 1: Triple-click on header Logo
    let logoClickCount = 0;
    let logoClickTimer;
    document.getElementById("logo-btn").addEventListener("click", () => {
        logoClickCount++;
        clearTimeout(logoClickTimer);
        logoClickTimer = setTimeout(() => {
            logoClickCount = 0;
        }, 600); // 600ms window

        if (logoClickCount === 3) {
            openDevModal();
            logoClickCount = 0;
        }
    });

    // Secret Access Trigger 2: Keyboard shortcut (Ctrl + Alt + A)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'a') {
            e.preventDefault();
            openDevModal();
        }
    });

    // Authentication Submit Logic (only on pages that have the auth elements)
    const devPasscodeInput = document.getElementById("dev-passcode-input");
    const devAuthSubmitBtn = document.getElementById("dev-auth-submit-btn");

    if (devPasscodeInput && devAuthSubmitBtn) {
        const HASHED_ADMIN_PASS = "8538ba36b04e3a3ff4a1a70261549fa5caf2ec06ad80481cec63010926fd77dd";

        const hashString = async (str) => {
            const encoder = new TextEncoder();
            const data = encoder.encode(str);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        };

        const submitAuth = async () => {
            const passwordInput = devPasscodeInput;
            const errorMsg = document.getElementById("dev-auth-error-msg");
            const authCard = document.getElementById("dev-auth-card");
            const mainContent = document.getElementById("dev-main-content");

            const inputHash = await hashString(passwordInput.value || "");
            if (inputHash === HASHED_ADMIN_PASS) {
                errorMsg.style.display = "none";
                authCard.style.display = "none";
                mainContent.style.display = "block";
                
                // Render all modules
                renderAdminDashboard();
                renderDevProductsTable();
                renderAdminOrders();
                renderAdminFinances();
                updateExportPreview();
                renderCategories(); // ensure category tab is loaded
            } else {
                errorMsg.style.display = "block";
                passwordInput.value = "";
                passwordInput.focus();
            }
        };

        devAuthSubmitBtn.addEventListener("click", submitAuth);
        devPasscodeInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                submitAuth();
            }
        });
    }

    // Dev Panel Tabs switching
    const tabs = document.querySelectorAll(".dev-tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("active"));
            e.currentTarget.classList.add("active");

            const tabTarget = e.currentTarget.getAttribute("data-tab");
            document.querySelectorAll(".dev-tab-content").forEach(tc => tc.classList.remove("active"));
            document.getElementById(`tab-${tabTarget}`).classList.add("active");
            
            // Reload logs when switching
            if (tabTarget === "dashboard") {
                renderAdminDashboard();
            } else if (tabTarget === "manage-products") {
                renderDevProductsTable();
            } else if (tabTarget === "orders") {
                renderAdminOrders();
            } else if (tabTarget === "finances") {
                renderAdminFinances();
            } else if (tabTarget === "export") {
                updateExportPreview();
            }
        });
    });

    // Expandable forms in Catalog Tab (only on admin pages)
    const toggleProdBtn = document.getElementById("toggle-add-product-form-btn");
    if (toggleProdBtn) {
        const prodFormSec = document.getElementById("product-form-section");
        const closeProdFormBtn = document.getElementById("close-product-form-btn");
        const addProductForm = document.getElementById("add-product-form");
        const prodIdInput = document.getElementById("prod-id");
        const prodFormTitle = document.getElementById("product-form-title");
        
        toggleProdBtn.addEventListener("click", () => {
            addProductForm.reset();
            prodIdInput.value = "";
            prodFormTitle.innerText = "Añadir Producto";
            document.getElementById("product-form-image-preview-container").style.display = "none";
            prodFormSec.style.display = prodFormSec.style.display === "none" ? "block" : "none";
            document.getElementById("category-form-section").style.display = "none";
        });
        
        closeProdFormBtn.addEventListener("click", () => {
            prodFormSec.style.display = "none";
        });

        const toggleCatBtn = document.getElementById("toggle-category-form-btn");
        const catFormSec = document.getElementById("category-form-section");
        const closeCatFormBtn = document.getElementById("close-category-form-btn");
        
        toggleCatBtn.addEventListener("click", () => {
            catFormSec.style.display = catFormSec.style.display === "none" ? "block" : "none";
            prodFormSec.style.display = "none";
        });
        
        closeCatFormBtn.addEventListener("click", () => {
            catFormSec.style.display = "none";
        });

        const toggleFinBtn = document.getElementById("toggle-add-finance-btn");
        const finFormSec = document.getElementById("finance-form-section");
        const closeFinFormBtn = document.getElementById("close-finance-form-btn");
        
        toggleFinBtn.addEventListener("click", () => {
            finFormSec.style.display = finFormSec.style.display === "none" ? "block" : "none";
        });
        
        closeFinFormBtn.addEventListener("click", () => {
            finFormSec.style.display = "none";
        });

        // Image upload and preview logic
        const imgFileInput = document.getElementById("prod-image-file");
        const imgUrlInput = document.getElementById("prod-image-url");
        const imgPreviewContainer = document.getElementById("product-form-image-preview-container");
        const imgPreviewDiv = document.getElementById("product-form-image-preview");
        const clearImgBtn = document.getElementById("clear-product-form-image-btn");
        
        let uploadedImageBase64 = "";

        imgFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    uploadedImageBase64 = event.target.result;
                    imgPreviewDiv.innerHTML = `<img src="${uploadedImageBase64}" style="width: 100%; height: 100%; object-fit: cover;">`;
                    imgPreviewContainer.style.display = "flex";
                    imgUrlInput.value = ""; // clear URL
                };
                reader.readAsDataURL(file);
            }
        });

        imgUrlInput.addEventListener("input", (e) => {
            const url = e.target.value.trim();
            if (url) {
                imgPreviewDiv.innerHTML = `<img src="${url}" style="width: 100%; height: 100%; object-fit: cover;">`;
                imgPreviewContainer.style.display = "flex";
                imgFileInput.value = ""; // clear file upload
                uploadedImageBase64 = "";
            } else if (!uploadedImageBase64) {
                imgPreviewContainer.style.display = "none";
            }
        });

        clearImgBtn.addEventListener("click", () => {
            imgFileInput.value = "";
            imgUrlInput.value = "";
            uploadedImageBase64 = "";
            imgPreviewDiv.innerHTML = "";
            imgPreviewContainer.style.display = "none";
        });

        // Add/Edit Product Submission
        addProductForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const idVal = prodIdInput.value;
            const name = document.getElementById("prod-name").value.trim();
            const category = document.getElementById("prod-category").value;
            const pricePerKg = parseFloat(document.getElementById("prod-price").value);
            const mode = document.getElementById("prod-mode").value;
            
            let finalImage = "";
            if (uploadedImageBase64) {
                finalImage = uploadedImageBase64;
            } else if (imgUrlInput.value.trim() !== "") {
                finalImage = imgUrlInput.value.trim();
            } else {
                if (idVal) {
                    const prev = products.find(p => p.id === parseInt(idVal));
                    if (prev) finalImage = prev.image;
                }
                if (!finalImage) {
                    if (category === "frutos-secos") finalImage = "🌰";
                    else if (category === "legumbres") finalImage = "🫘";
                    else if (category === "mixes") finalImage = "🥣";
                    else if (category === "cereales") finalImage = "🌾";
                    else finalImage = "📦";
                }
            }

            const isFeatured = document.getElementById("prod-featured").checked;

            if (idVal) {
                // EDIT PRODUCT
                const index = products.findIndex(p => p.id === parseInt(idVal));
                if (index > -1) {
                    products[index] = {
                        ...products[index],
                        name,
                        category,
                        pricePerKg,
                        mode,
                        image: finalImage,
                        isFeatured
                    };
                    alert("¡Producto actualizado exitosamente!");
                }
            } else {
                // CREATE PRODUCT
                const newProduct = {
                    id: Date.now(),
                    name,
                    category,
                    pricePerKg,
                    mode,
                    image: finalImage,
                    isFeatured
                };
                products.push(newProduct);
                alert("¡Producto añadido exitosamente!");
            }

            saveProducts();
            renderProducts();
            renderNovedadesCarousel();
            renderDevProductsTable();
            updateExportPreview();
            
            addProductForm.reset();
            prodIdInput.value = "";
            uploadedImageBase64 = "";
            imgPreviewContainer.style.display = "none";
            prodFormSec.style.display = "none";
        });

        // Add Category Submission
        document.getElementById("add-category-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const catNameInput = document.getElementById("cat-name");
            const nameVal = catNameInput.value.trim();
            if (!nameVal) return;

            const keyVal = nameVal.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
            
            if (categories.some(c => c.key === keyVal)) {
                alert("Ya existe una categoría similar.");
                return;
            }

            categories.push({ key: keyVal, name: nameVal });
            saveCategories();
            renderCategories();
            
            catNameInput.value = "";
            alert(`Categoría "${nameVal}" creada exitosamente.`);
        });

        // Reset default catalog button
        document.getElementById("reset-catalog-btn").addEventListener("click", () => {
            if (confirm("¿Estás seguro de que quieres restablecer el catálogo de productos y categorías a su estado inicial? Esto borrará tus cambios.")) {
                products = [...DEFAULT_PRODUCTS];
                categories = [...DEFAULT_CATEGORIES];
                saveProducts();
                saveCategories();
                renderCategories();
                renderProducts();
                renderDevProductsTable();
                updateExportPreview();
                alert("El catálogo ha sido restaurado.");
            }
        });
    } // end if (toggleProdBtn)

    // Two-step checkout workflow in cart drawer
    const checkoutContinueBtn = document.getElementById("checkout-continue-btn");
    const backToCartBtn = document.getElementById("back-to-cart-btn");
    const checkoutWhatsappBtn = document.getElementById("checkout-whatsapp-btn");
    const cartCustomerForm = document.getElementById("cart-customer-form");
    const cartItemsList = document.getElementById("cart-items-container");

    checkoutContinueBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Su carrito está vacío.");
            return;
        }
        cartItemsList.style.display = "none";
        cartCustomerForm.style.display = "block";
        checkoutContinueBtn.style.display = "none";
        checkoutWhatsappBtn.style.display = "block";
    });

    backToCartBtn.addEventListener("click", () => {
        cartItemsList.style.display = "block";
        cartCustomerForm.style.display = "none";
        checkoutContinueBtn.style.display = "block";
        checkoutWhatsappBtn.style.display = "none";
    });

    checkoutWhatsappBtn.addEventListener("click", () => {
        if (cart.length === 0) return;

        const custName = document.getElementById("cart-cust-name").value.trim();
        const custPhone = document.getElementById("cart-cust-phone").value.trim();
        const custAddress = document.getElementById("cart-cust-address").value.trim();

        if (!custName || !custPhone || !custAddress) {
            alert("Por favor, complete todos los campos obligatorios (*)");
            return;
        }

        // Generate Order entry and save to LocalStorage
        const orderId = "AT-" + Math.floor(1000 + Math.random() * 9000);
        let totalAmount = 0;
        const orderItems = cart.map(item => {
            const unitPrice = item.pricePerKg * (item.weight / 1000);
            const lineTotal = unitPrice * item.quantity;
            totalAmount += lineTotal;
            return {
                name: item.name,
                quantity: item.quantity,
                weightLabel: item.weightLabel,
                weight: item.weight,
                pricePerKg: item.pricePerKg,
                subtotal: lineTotal
            };
        });

        let deliveryFee = 0;
        if (totalAmount < 15000) {
            deliveryFee = 1500;
        }

        const newOrder = {
            id: orderId,
            createdAt: new Date().toISOString(),
            customer: { name: custName, phone: custPhone, address: custAddress },
            items: orderItems,
            subtotal: totalAmount,
            shipping: deliveryFee,
            total: totalAmount + deliveryFee,
            status: "Pendiente"
        };

        orders.push(newOrder);
        saveOrders();

        // Generate WhatsApp message
        let message = `🛒 *Nuevo Pedido #${orderId} - El Almacén de Guada* 🛒\n\n`;
        message += `👤 *Cliente:* ${custName}\n`;
        message += `📞 *WhatsApp:* ${custPhone}\n`;
        message += `📍 *Dirección de Envío:* ${custAddress}\n\n`;
        message += `📦 *Detalle del Pedido:*\n`;

        orderItems.forEach((item, index) => {
            message += `- *${item.name}* (${item.weightLabel} x${item.quantity}) -> _${formatCurrency(item.subtotal)}_\n`;
        });

        message += `\n---------------------------------\n`;
        message += `*Subtotal:* ${formatCurrency(totalAmount)}\n`;
        message += `*Envío:* ${deliveryFee === 0 ? "¡GRATIS!" : formatCurrency(deliveryFee)}\n`;
        message += `*Total a Pagar:* ${formatCurrency(totalAmount + deliveryFee)}\n\n`;
        message += `💬 _Coordinamos el pago por transferencia o efectivo._`;

        // Clear cart and reset UI
        cart = [];
        saveCart();
        updateCartUI();
        
        document.getElementById("cart-cust-name").value = "";
        document.getElementById("cart-cust-phone").value = "";
        document.getElementById("cart-cust-address").value = "";
        
        cartItemsList.style.display = "block";
        cartCustomerForm.style.display = "none";
        checkoutContinueBtn.style.display = "block";
        checkoutWhatsappBtn.style.display = "none";
        
        closeCartDrawer();

        // Open WhatsApp - send directly to store owner number
        const encodedText = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=542944697804&text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
    });
};

// Dev Catalog Search
const devSearchInput = document.getElementById("dev-search-input");
devSearchInput.addEventListener("input", () => {
    renderDevProductsTable();
});

// Render Dev Products Table
const renderDevProductsTable = () => {
    const tableBody = document.getElementById("dev-products-table-body");
    if (!tableBody) return;
    tableBody.innerHTML = "";

    const query = document.getElementById("dev-search-input").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));

    filtered.forEach(p => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${renderDevTableImageHTML(p.image)}</td>
            <td><strong>${p.name}</strong></td>
            <td><span class="badge-category" style="background:#EFE6DD; padding:4px 8px; border-radius:var(--border-radius-sm); font-size:11px; font-weight:700;">${formatCategoryName(p.category)}</span></td>
            <td>${p.mode === 'weight' ? 'Peso Variable' : 'Kilo Cerrado'}</td>
            <td>
                <input type="number" 
                       class="table-price-input" 
                       value="${p.pricePerKg}" 
                       min="0"
                       onchange="updateProductPrice(${p.id}, this.value)">
            </td>
            <td>
                <button type="button" class="btn-novedad-toggle ${p.isFeatured ? 'active' : ''}" onclick="toggleDevProductFeatured(${p.id})">
                    ${p.isFeatured ? '🔥 Destacado' : '☆ Marcar'}
                </button>
            </td>
            <td>
                <div class="btn-row-actions">
                    <button class="btn-table-edit" onclick="editDevProduct(${p.id})">Editar</button>
                    <button class="btn-table-delete" onclick="deleteDevProduct(${p.id})">Eliminar</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });

    lucide.createIcons();
};

window.editDevProduct = (productId) => {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    // Show and update Form heading
    document.getElementById("product-form-section").style.display = "block";
    document.getElementById("category-form-section").style.display = "none";
    document.getElementById("product-form-title").innerText = `Editar Producto: ${p.name}`;
    
    // Fill fields
    document.getElementById("prod-id").value = p.id;
    document.getElementById("prod-name").value = p.name;
    document.getElementById("prod-category").value = p.category;
    document.getElementById("prod-price").value = p.pricePerKg;
    document.getElementById("prod-mode").value = p.mode;
    document.getElementById("prod-featured").checked = Boolean(p.isFeatured);
    
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

    document.getElementById("product-form-section").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// Update price in table input
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
        renderProducts();
        updateExportPreview();
    }
};

// Delete product
window.deleteDevProduct = (productId) => {
    if (confirm("¿Estás seguro de que deseas eliminar este producto del catálogo?")) {
        products = products.filter(p => p.id !== productId);
        saveProducts();
        renderProducts();
        renderDevProductsTable();
        updateExportPreview();
    }
};

// Render Admin Dashboard
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
        const recentOrders = [...orders].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);
        
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

    // Chart.js graphs
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
                y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 9 } } },
                x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 9 } } }
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
                legend: { position: 'right', labels: { boxWidth: 8, font: { size: 9 } } }
            }
        }
    });
};

// Render Orders module
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

        let itemsDetailHTML = "<ul class='order-items-detail-list'>";
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
                <select onchange="updateOrderStatus('${o.id}', this.value)" style="padding: 4px; font-size: 12px; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color); background: white;">
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

window.updateOrderStatus = (orderId, newStatus) => {
    const index = orders.findIndex(o => o.id === orderId);
    if (index > -1) {
        const oldStatus = orders[index].status;
        orders[index].status = newStatus;
        saveOrders();
        renderAdminOrders();

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
            }
        }
        
        // Remove from log if cancelled
        if (newStatus === "Cancelado") {
            finances = finances.filter(f => f.concept !== `Venta Pedido ${orderId}`);
            saveFinances();
        }
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

document.getElementById("add-finance-form").addEventListener("submit", (e) => {
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
    document.getElementById("finance-form-section").style.display = "none";
    alert("Movimiento contable registrado con éxito.");
});

// Excel Consolidated Export using SheetJS
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

    // 1. Orders
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

    // 2. Catalog
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

    // 3. Cash finances
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

document.getElementById("btn-execute-export").addEventListener("click", exportToExcel);

