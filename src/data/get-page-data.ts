enum CakeVariants {
  BAPTISM = 'torty-na-chrzest',
  COMMUNION = 'torty-na-komunie',
  KID = 'torty-dla-dzieci',
  WOMEN = 'torty-dla-kobiety',
  MEN = 'torty-dla-mezczyzny',
  OTHER = 'torty-okolicznosciowe-na-kazda-okazje',
}

export enum ProductCategory {
  CAKES = 'torty',
  CUPCAKES = 'babeczki',
  MACAROONS = 'makaroniki',
  OTHER = 'pozostale-wypieki',
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  category: ProductCategory;
  variant?: CakeVariants;
  // flavours?: string[];
  // price: number;
  mainImage: string;
  images: string[];
}

export interface Category<T = string> {
  id: T;
  name: string;
}

export interface PageData {
  // section Ulubione wypieki
  // for elements on the main page
  // IDs of promoted products
  // defined in allProducts
  promoted: {
    promoted1: string;
    promoted2: string;
    promoted3: string;
    promoted4: string;
  };
  // section Domowe wypieki od 2018
  // for elements on the main page
  // IDs of creations products
  // defined in allProducts
  creations: {
    creation1: string;
    creation2: string;
    creation3: string;
  };
  allProducts: Product[];
  categories: Array<Category<ProductCategory>>;
  cakesVariants: Array<Category<CakeVariants>>;
}

const data: PageData = {
  promoted: {
    promoted1: '1',
    promoted2: '2',
    promoted3: '3',
    promoted4: '4',
  },
  creations: {
    creation1: '21',
    creation2: '36',
    creation3: '7',
  },
  allProducts: [
    {
      id: '1',
      name: 'Biały tort na chrzest z niebieskimi dekoracjami',
      description: 'Delikatny tort chrzcielny z pastelowymi zdobieniami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.BAPTISM,
      mainImage: '/images/chrzest/chrzest_zdj_1.jpg',
      images: ['/images/chrzest/chrzest_zdj_1.jpg'],
    },
    {
      id: '2',
      name: 'Kolorowy tort urodzinowy dla dziewczynki',
      description: 'Jasny tort dziecięcy z wesołą dekoracją',
      category: ProductCategory.CAKES,
      variant: CakeVariants.KID,
      mainImage: '/images/dzieciece/dzieciece_zdj_3.jpg',
      images: ['/images/dzieciece/dzieciece_zdj_3.jpg'],
    },
    {
      id: '3',
      name: 'Tort komunijny z białym kremem i hostią',
      description: 'Tradycyjny tort na Pierwszą Komunię Świętą',
      category: ProductCategory.CAKES,
      variant: CakeVariants.COMMUNION,
      mainImage: '/images/komunia/komunia_zdj_5.jpg',
      images: ['/images/komunia/komunia_zdj_5.jpg'],
    },
    {
      id: '4',
      name: 'Torty Okolicznościowe',
      description: 'Wyjątkowe torty na każdą okazję',
      category: ProductCategory.CAKES,
      variant: CakeVariants.WOMEN,
      mainImage: '/images/kobieta/kobieta_zdj_5.jpg',
      images: ['/images/kobieta/kobieta_zdj_5.jpg'],
    },
    {
      id: '5',
      name: 'Tort okolicznościowy z owocami',
      description: 'Uniwersalny tort na każdą uroczystość',
      category: ProductCategory.CAKES,
      variant: CakeVariants.OTHER,
      mainImage: '/images/inne/inne_zdj_5.jpg',
      images: ['/images/inne/inne_zdj_5.jpg'],
    },
    {
      id: '7',
      name: 'Deserki',
      description: 'Delikatne deserki z owocami',
      category: ProductCategory.CUPCAKES,
      mainImage: '/images/inne/inne_zdj_8.jpg',
      images: ['/images/inne/inne_zdj_8.jpg'],
    },
    {
      id: '9',
      name: 'Tort chrzcielny z różową kokardą',
      description: 'Uroczy tort na chrzest dla dziewczynki',
      category: ProductCategory.CAKES,
      variant: CakeVariants.BAPTISM,
      mainImage: '/images/chrzest/chrzest_zdj_2.jpg',
      images: ['/images/chrzest/chrzest_zdj_2.jpg'],
    },
    {
      id: '10',
      name: 'Dwupiętrowy tort na chrzest święty',
      description: 'Klasyczny biały tort z aniołkami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.BAPTISM,
      mainImage: '/images/chrzest/chrzest_zdj_3.jpg',
      images: ['/images/chrzest/chrzest_zdj_3.jpg'],
    },
    {
      id: '11',
      name: 'Kremowy tort chrzcielny z krzyżykiem',
      description: 'Subtelny tort z religijnymi motywami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.BAPTISM,
      mainImage: '/images/chrzest/chrzest_zdj_4.jpg',
      images: ['/images/chrzest/chrzest_zdj_4.jpg'],
    },
    // Dziecięce
    {
      id: '12',
      name: 'Tort dla dzieci z bajkowymi postaciami',
      description: 'Kolorowy tort urodzinowy z cukrowymi figurkami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.KID,
      mainImage: '/images/dzieciece/dzieciece_zdj_1.jpg',
      images: ['/images/dzieciece/dzieciece_zdj_1.jpg'],
    },
    {
      id: '13',
      name: 'Tęczowy tort dziecięcy z posypką',
      description: 'Radosny tort na urodziny dla najmłodszych',
      category: ProductCategory.CAKES,
      variant: CakeVariants.KID,
      mainImage: '/images/dzieciece/dzieciece_zdj_2.jpg',
      images: ['/images/dzieciece/dzieciece_zdj_2.jpg'],
    },
    {
      id: '14',
      name: 'Tort urodzinowy dla chłopca z samochodami',
      description: 'Chłopięcy tort z niebieskimi akcentami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.KID,
      mainImage: '/images/dzieciece/dzieciece_zdj_3.jpg',
      images: ['/images/dzieciece/dzieciece_zdj_3.jpg'],
    },
    {
      id: '15',
      name: 'Różowy tort dla dziewczynki z kwiatkami',
      description: 'Słodki tort z motylkami i cukrowymi kwiatami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.KID,
      mainImage: '/images/dzieciece/dzieciece_zdj_4.jpg',
      images: ['/images/dzieciece/dzieciece_zdj_4.jpg'],
    },
    // Inne
    {
      id: '16',
      name: 'Tort weselny z białymi różami',
      description: 'Elegancki tort na ślub lub rocznicę',
      category: ProductCategory.CAKES,
      variant: CakeVariants.OTHER,
      mainImage: '/images/inne/inne_zdj_1.jpg',
      images: ['/images/inne/inne_zdj_1.jpg'],
    },
    {
      id: '17',
      name: 'Tort jubileuszowy z złotymi dekoracjami',
      description: 'Wytworny tort na okrągłe urodziny',
      category: ProductCategory.CAKES,
      variant: CakeVariants.OTHER,
      mainImage: '/images/inne/inne_zdj_2.jpg',
      images: ['/images/inne/inne_zdj_2.jpg'],
    },
    {
      id: '18',
      name: 'Klasyczny tort z owocami sezonowymi',
      description: 'Tort na przyjęcie ze świeżymi owocami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.OTHER,
      mainImage: '/images/inne/inne_zdj_3.jpg',
      images: ['/images/inne/inne_zdj_3.jpg'],
    },
    {
      id: '19',
      name: 'Nowoczesny tort z geometrycznym wzorem',
      description: 'Minimalistyczny tort na specjalne okazje',
      category: ProductCategory.CAKES,
      variant: CakeVariants.OTHER,
      mainImage: '/images/inne/inne_zdj_4.jpg',
      images: ['/images/inne/inne_zdj_4.jpg'],
    },
    {
      id: '20',
      name: 'Tort rocznicowy z perłami cukrowymi',
      description: 'Subtelny tort na rocznicę ślubu',
      category: ProductCategory.CAKES,
      variant: CakeVariants.OTHER,
      mainImage: '/images/inne/inne_zdj_5.jpg',
      images: ['/images/inne/inne_zdj_5.jpg'],
    },
    // Kobieta
    {
      id: '21',
      name: 'Torty Okolicznościowe',
      description: 'Wyjątkowe torty na każdą okazję',
      category: ProductCategory.CAKES,
      variant: CakeVariants.WOMEN,
      mainImage: '/images/kobieta/kobieta_zdj_1.jpg',
      images: ['/images/kobieta/kobieta_zdj_1.jpg'],
    },
    {
      id: '22',
      name: 'Różowy tort z kremem śmietankowym',
      description: 'Delikatny tort na urodziny dla pani',
      category: ProductCategory.CAKES,
      variant: CakeVariants.WOMEN,
      mainImage: '/images/kobieta/kobieta_zdj_2.jpg',
      images: ['/images/kobieta/kobieta_zdj_2.jpg'],
    },
    {
      id: '23',
      name: 'Elegancki tort dla kobiety z truskawkami',
      description: 'Wytworny tort z czerwonymi owocami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.WOMEN,
      mainImage: '/images/kobieta/kobieta_zdj_3.jpg',
      images: ['/images/kobieta/kobieta_zdj_3.jpg'],
    },
    {
      id: '24',
      name: 'Tort urodzinowy z fioletowymi kwiatami',
      description: 'Romantyczny tort z cukrowymi liliami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.WOMEN,
      mainImage: '/images/kobieta/kobieta_zdj_4.jpg',
      images: ['/images/kobieta/kobieta_zdj_4.jpg'],
    },
    // Komunia
    {
      id: '25',
      name: 'Biały tort komunijny z kielichem',
      description: 'Uroczysto zdobiony tort na komunię świętą',
      category: ProductCategory.CAKES,
      variant: CakeVariants.COMMUNION,
      mainImage: '/images/komunia/komunia_zdj_1.jpg',
      images: ['/images/komunia/komunia_zdj_1.jpg'],
    },
    {
      id: '26',
      name: 'Tort na komunię z aniołkiem i różańcem',
      description: 'Klasyczny tort z religijnymi symbolami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.COMMUNION,
      mainImage: '/images/komunia/komunia_zdj_2.jpg',
      images: ['/images/komunia/komunia_zdj_2.jpg'],
    },
    {
      id: '27',
      name: 'Tort komunijny dla dziewczynki w koronkach',
      description: 'Subtelny biało-różowy tort pierwszokomunijny',
      category: ProductCategory.CAKES,
      variant: CakeVariants.COMMUNION,
      mainImage: '/images/komunia/komunia_zdj_3.jpg',
      images: ['/images/komunia/komunia_zdj_3.jpg'],
    },
    {
      id: '28',
      name: 'Tort na komunię dla chłopca z biblią',
      description: 'Chłopięcy tort komunijny w bieli i błękicie',
      category: ProductCategory.CAKES,
      variant: CakeVariants.COMMUNION,
      mainImage: '/images/komunia/komunia_zdj_4.jpg',
      images: ['/images/komunia/komunia_zdj_4.jpg'],
    },
    // Mężczyzna
    {
      id: '29',
      name: 'Tort urodzinowy dla mężczyzny w stylu klasycznym',
      description: 'Męski tort z eleganckimi dekoracjami',
      category: ProductCategory.CAKES,
      variant: CakeVariants.MEN,
      mainImage: '/images/mezczyzna/mezczyzna_zdj_1.jpg',
      images: ['/images/mezczyzna/mezczyzna_zdj_1.jpg'],
    },
    {
      id: '30',
      name: 'Tort dla mężczyzny z ciemną czekoladą',
      description: 'Elegancki tort czekoladowy dla panów',
      category: ProductCategory.CAKES,
      variant: CakeVariants.MEN,
      mainImage: '/images/mezczyzna/mezczyzna_zdj_2.jpg',
      images: ['/images/mezczyzna/mezczyzna_zdj_2.jpg'],
    },
    {
      id: '31',
      name: 'Tort z motywem męskiego hobby',
      description: 'Spersonalizowany tort na urodziny dla niego',
      category: ProductCategory.CAKES,
      variant: CakeVariants.MEN,
      mainImage: '/images/mezczyzna/mezczyzna_zdj_3.jpg',
      images: ['/images/mezczyzna/mezczyzna_zdj_3.jpg'],
    },
    {
      id: '32',
      name: 'Stylowy tort urodzinowy dla dżentelmena',
      description: 'Nowoczesny tort w męskiej kolorystyce',
      category: ProductCategory.CAKES,
      variant: CakeVariants.MEN,
      mainImage: '/images/mezczyzna/mezczyzna_zdj_4.jpg',
      images: ['/images/mezczyzna/mezczyzna_zdj_4.jpg'],
    },
    // Babeczki
    {
      id: '33',
      name: 'Babeczki czekoladowe z maślanym kremem',
      description: 'Domowe muffiny z bogatą polewą',
      category: ProductCategory.CUPCAKES,
      mainImage: '/images/babeczki/babeczki_zdj_1.jpg',
      images: ['/images/babeczki/babeczki_zdj_1.jpg'],
    },
    {
      id: '34',
      name: 'Kolorowe babeczki z posypką i kulkami',
      description: 'Radosne cupcakes na przyjęcie dla dzieci',
      category: ProductCategory.CUPCAKES,
      mainImage: '/images/babeczki/babeczki_zdj_2.jpg',
      images: ['/images/babeczki/babeczki_zdj_2.jpg'],
    },
    {
      id: '35',
      name: 'Babeczki waniliowe z różowym kremem',
      description: 'Delikatne muffiny na słodki stół',
      category: ProductCategory.CUPCAKES,
      mainImage: '/images/babeczki/babeczki_zdj_3.jpg',
      images: ['/images/babeczki/babeczki_zdj_3.jpg'],
    },
    {
      id: '36',
      name: 'Babeczki',
      description: 'Personalizowane babeczki',
      category: ProductCategory.CUPCAKES,
      mainImage: '/images/babeczki/babeczki_zdj_4.jpg',
      images: ['/images/babeczki/babeczki_zdj_4.jpg'],
    },
    {
      id: '37',
      name: 'Babeczki czekoladowe z owocami',
      description: 'Soczyste muffiny z dodatkami owocowymi',
      category: ProductCategory.CUPCAKES,
      mainImage: '/images/babeczki/babeczki_zdj_5.jpg',
      images: ['/images/babeczki/babeczki_zdj_5.jpg'],
    },
    {
      id: '38',
      name: 'Eleganckie babeczki z kremem śmietankowym',
      description: 'Wytwornie zdobione cupcakes na przyjęcie',
      category: ProductCategory.CUPCAKES,
      mainImage: '/images/babeczki/babeczki_zdj_6.jpg',
      images: ['/images/babeczki/babeczki_zdj_6.jpg'],
    },
    // Makaroniki
    {
      id: '39',
      name: 'Kolorowe makaroniki francuskie',
      description: 'Kruche ciasteczka z różnymi nadzieniami',
      category: ProductCategory.MACAROONS,
      mainImage: '/images/makaroniki/makaroniki_zdj_1.jpg',
      images: ['/images/makaroniki/makaroniki_zdj_1.jpg'],
    },
    {
      id: '40',
      name: 'Makaroniki migdałowe w pastelowych kolorach',
      description: 'Eleganckie macarons na słodki bufet',
      category: ProductCategory.MACAROONS,
      mainImage: '/images/makaroniki/makaroniki_zdj_2.jpg',
      images: ['/images/makaroniki/makaroniki_zdj_2.jpg'],
    },
    // Pozostałe
    {
      id: '41',
      name: 'Sernik nowojorski z owocami',
      description: 'Kremowy cheesecake z sezonowymi dodatkami',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_1.jpg',
      images: ['/images/pozostale/pozostale_zdj_1.jpg'],
    },
    {
      id: '42',
      name: 'Brownie czekoladowe z orzechami',
      description: 'Intensywnie czekoladowe ciasto w kawałkach',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_2.jpg',
      images: ['/images/pozostale/pozostale_zdj_2.jpg'],
    },
    {
      id: '43',
      name: 'Domowe ciastka kruche z dodatkami',
      description: 'Tradycyjne wypieki na każdą okazję',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_3.jpg',
      images: ['/images/pozostale/pozostale_zdj_3.jpg'],
    },
    {
      id: '44',
      name: 'Ciasto marchewkowe z kremem serowym',
      description: 'Wilgotne ciasto z orzechami i przyprawami',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_4.jpg',
      images: ['/images/pozostale/pozostale_zdj_4.jpg'],
    },
    {
      id: '45',
      name: 'Tarteletki z owocami i kremem',
      description: 'Mini desery z kruchym spodem',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_5.jpg',
      images: ['/images/pozostale/pozostale_zdj_5.jpg'],
    },
    {
      id: '46',
      name: 'Eklerki z kremem waniliowym',
      description: 'Francuskie ciastka z pysznym nadzieniem',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_6.jpg',
      images: ['/images/pozostale/pozostale_zdj_6.jpg'],
    },
    {
      id: '47',
      name: 'Ptysie z bitą śmietaną',
      description: 'Chrupiące ptysie z kremowym farszem',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_7.jpg',
      images: ['/images/pozostale/pozostale_zdj_7.jpg'],
    },
    {
      id: '48',
      name: 'Pierniki lukrowane ręcznie',
      description: 'Aromatyczne pierniki z kolorową dekoracją',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_8.jpg',
      images: ['/images/pozostale/pozostale_zdj_8.jpg'],
    },
    {
      id: '49',
      name: 'Bezy francuskie kolorowe',
      description: 'Delikatne beziki w różnych smakach',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_9.jpg',
      images: ['/images/pozostale/pozostale_zdj_9.jpg'],
    },
    {
      id: '50',
      name: 'Ciasto czekoladowe z musem',
      description: 'Warstwowy deser z kremową nutą',
      category: ProductCategory.OTHER,
      mainImage: '/images/pozostale/pozostale_zdj_10.jpg',
      images: ['/images/pozostale/pozostale_zdj_10.jpg'],
    },
    {
      id: '51',
      name: 'Torty Okolicznościowe',
      description: 'Wyjątkowe torty na każdą okazję',
      category: ProductCategory.CAKES,
      mainImage: '/images/inne/inne_zdj_6.jpg',
      images: ['/images/inne/inne_zdj_6.jpg'],
    },
  ],
  categories: [
    {
      id: ProductCategory.CAKES,
      name: 'Torty',
    },
    {
      id: ProductCategory.CUPCAKES,
      name: 'Babeczki',
    },
    {
      id: ProductCategory.MACAROONS,
      name: 'Makaroniki',
    },
    {
      id: ProductCategory.OTHER,
      name: 'Inne',
    },
  ],
  cakesVariants: [
    {
      id: CakeVariants.BAPTISM,
      name: 'Chrzest',
    },
    {
      id: CakeVariants.COMMUNION,
      name: 'Komunia',
    },
    {
      id: CakeVariants.KID,
      name: 'Dla Najmłodszych',
    },
    {
      id: CakeVariants.WOMEN,
      name: 'Dla Niej',
    },
    {
      id: CakeVariants.MEN,
      name: 'Dla Niego',
    },
    {
      id: CakeVariants.OTHER,
      name: 'Na każdą okazję',
    },
  ],
};

export function getPageConfig(): PageData {
  return data;
}
