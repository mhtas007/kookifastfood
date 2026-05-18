import React from 'react';

export type Language = 'ku' | 'en' | 'ar';

export type LocalizedString = {
  ku: string;
  en: string;
  ar: string;
};

export interface MenuItem {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: LocalizedString;
  image: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: LocalizedString;
  items: MenuItem[];
}

export interface Branch {
  id: string;
  name: LocalizedString;
  address: LocalizedString;
  phone: string;
  instagram: string;
}

export const uiTranslations = {
  ku: {
    digitalMenu: "مێنوی دیجیتاڵی پرۆفیشناڵ",
    recommended: "پێشنیارکراو",
    view: "بینین",
    cart: "سەبەتەی کڕین",
    item: "دانە",
    ourBranches: "لقەکانمان",
    contactUs: "پەیوەندیکردن"
  },
  en: {
    digitalMenu: "Professional Digital Menu",
    recommended: "Recommended",
    view: "View",
    cart: "Cart",
    item: "items",
    ourBranches: "Our Branches",
    contactUs: "Contact Us"
  },
  ar: {
    digitalMenu: "قائمة رقمية احترافية",
    recommended: "موصى به",
    view: "عرض",
    cart: "سلة التسوق",
    item: "عناصر",
    ourBranches: "فروعنا",
    contactUs: "اتصل بنا"
  }
};

export const branchesData: Branch[] = [
  {
    id: 'soran',
    name: { ku: 'سۆران', en: 'Soran', ar: 'سوران' },
    address: { ku: 'تەنیشت حەفتەبازاڕ', en: 'Next to Hafta Bazar', ar: 'بجوار هفتة بازار' },
    phone: '0750 281 4800',
    instagram: 'kookifastfood4'
  },
  {
    id: 'pirmam',
    name: { ku: 'پیرمام', en: 'Pirmam', ar: 'بيرمام' },
    address: { ku: 'ڕێگای دارە بزمارە', en: 'Dara Bzmara Road', ar: 'طريق دارة بزمارة' },
    phone: '0750 745 7227',
    instagram: 'kooki_fastfood'
  },
  {
    id: 'bahirka',
    name: { ku: 'بەحرکە', en: 'Bahirka', ar: 'بحركة' },
    address: { ku: 'بەحرکە - هەولێر', en: 'Bahirka - Erbil', ar: 'بحركة - أربيل' },
    phone: '0750 567 2211',
    instagram: 'kooki.pizza.bahrka'
  }
];

export const menuData: Category[] = [
  {
    id: 'burgers',
    name: { ku: 'بەرگر', en: 'Burgers', ar: 'برجر' },
    items: [
      {
        id: 'b1',
        name: { ku: 'ڕۆیاڵ بەرگر', en: 'Royal Burger', ar: 'رويال برجر' },
        description: { ku: 'رۆیاڵ بەرگری تایبەت بە گۆشتی تازە', en: 'Special Royal Burger with fresh meat', ar: 'رويال برجر خاص مع لحم طازج' },
        price: { ku: '٦,٥٠٠ دینار', en: '6,500 IQD', ar: '٦,٥٠٠ دينار' },
        image: 'https://disappointed-peach-vmsoktbqr1.edgeone.app/royal%20burger.jpg',
        isPopular: true,
      },
      {
        id: 'b2',
        name: { ku: 'ڕۆیاڵ چیز بەرگر', en: 'Royal Cheese Burger', ar: 'رويال تشيز برجر' },
        description: { ku: 'رۆیاڵ بەرگر بە پەنیری تواوەی ئەمریکی', en: 'Royal burger with melted American cheese', ar: 'رويال برجر مع جبن أمريكي ذائب' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://spiritual-salmon-aqm8jxq7vk.edgeone.app/45801824-65f0-4feb-9442-858960ebec57.jpg',
      },
      {
        id: 'b3',
        name: { ku: 'ڕۆیاڵ چیکن بەرگر', en: 'Royal Chicken Burger', ar: 'رويال تشيكن برجر' },
        description: { ku: 'بەرگری مریشکی کریسپی نایاب', en: 'Premium crispy chicken burger', ar: 'برجر دجاج مقرمش ممتاز' },
        price: { ku: '٦,٥٠٠ دینار', en: '6,500 IQD', ar: '٦,٥٠٠ دينار' },
        image: 'https://disappointed-peach-vmsoktbqr1.edgeone.app/Royal%20crispy%20chicken%20burger.jpg',
      },
      {
        id: 'b4',
        name: { ku: 'ڕۆیاڵ چیکن چیز بەرگر', en: 'Royal Chicken Cheese Burger', ar: 'رويال تشيكن تشيز برجر' },
        description: { ku: 'بەرگری مریشک بە پەنیری تایبەت', en: 'Chicken burger with special cheese', ar: 'برجر دجاج مع جبن خاص' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://disappointed-peach-vmsoktbqr1.edgeone.app/Royal%20crispy%20chicken%20cheese.jpg',
      }
    ]
  },
  {
    id: 'pizza',
    name: { ku: 'پیتزاکان', en: 'Pizzas', ar: 'بيتزا' },
    items: [
      {
        id: 'p1',
        name: { ku: 'پیتزای گۆشت', en: 'Meat Pizza', ar: 'بيتزا باللحم' },
        description: { ku: 'پیتزایەکی بەتام بە گۆشتی فرێش و پەنیری مۆزارێلا', en: 'Delicious pizza with fresh meat and mozzarella cheese', ar: 'بيتزا لذيذة مع لحم طازج وجبنة موزاريلا' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://disappointed-peach-vmsoktbqr1.edgeone.app/meat%20pizza.jpg',
        isPopular: true,
      },
      {
        id: 'p2',
        name: { ku: 'پیتزای مریشک', en: 'Chicken Pizza', ar: 'بيتزا بالدجاج' },
        description: { ku: 'پیتزای مریشکی برژاو لەگەڵ سەوزەوات', en: 'Grilled chicken pizza with vegetables', ar: 'بيتزا دجاج مشوي مع خضراوات' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'p3',
        name: { ku: 'پیتزای مارگریتا', en: 'Margherita Pizza', ar: 'بيتزا مارغريتا' },
        description: { ku: 'کلاسیکترین پیتزا بە سۆسی تەماتە و پەنیر', en: 'Classic pizza with tomato sauce and cheese', ar: 'بيتزا كلاسيكية مع صلصة الطماطم والجبن' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://splendid-yellow-inbzkqtup0.edgeone.app/margherita.jpg',
      },
      {
        id: 'p4',
        name: { ku: 'پیتزای میکس', en: 'Mix Pizza', ar: 'بيتزا مشكلة' },
        description: { ku: 'تێکەڵەیەک لە گۆشت، مریشک و سەوزەوات', en: 'A mix of meat, chicken and vegetables', ar: 'مزيج من اللحم والدجاج والخضراوات' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://splendid-yellow-inbzkqtup0.edgeone.app/mix.jpg',
      }
    ]
  },
  {
    id: 'fries',
    name: { ku: 'پەتاتە و زیاتر', en: 'Fries & More', ar: 'بطاطس والمزيد' },
    items: [
      {
        id: 'f1',
        name: { ku: 'بافەلۆ فرایز', en: 'Buffalo Fries', ar: 'بافلو فرايز' },
        description: { ku: 'پەتاتە بە سۆسی بافەلۆی تیژ', en: 'Fries with spicy buffalo sauce', ar: 'بطاطس مع صلصة البافلو الحارة' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://wonderful-gray-ouwwonsmxx.edgeone.app/buffalo-fries.jpg',
      },
      {
        id: 'f2',
        name: { ku: 'فارمەر فرایز', en: 'Farmer Fries', ar: 'فارمر فرايز' },
        description: { ku: 'پەتاتەی کریسپی تایبەت', en: 'Special crispy potato', ar: 'بطاطس مقرمشة خاصة' },
        price: { ku: '٦,٠٠٠ دینار', en: '6,000 IQD', ar: '٦,٠٠٠ دينار' },
        image: 'https://wonderful-gray-ouwwonsmxx.edgeone.app/farmer-fries.jpg',
      },
      {
        id: 'f3',
        name: { ku: 'فینگەر', en: 'Finger Fries', ar: 'أصابع البطاطس' },
        description: { ku: 'پەتاتەی سوورکراوەی سادە', en: 'Plain french fries', ar: 'بطاطس مقلية عادية' },
        price: { ku: '٢,٠٠٠ دینار', en: '2,000 IQD', ar: '٢,٠٠٠ دينار' },
        image: 'https://wonderful-gray-ouwwonsmxx.edgeone.app/fries.jpg',
      }
    ]
  },
  {
    id: 'rizzo',
    name: { ku: 'ڕیزۆ', en: 'Rizzo', ar: 'ريزو' },
    items: [
      {
        id: 'r1',
        name: { ku: 'ڕیزۆ هۆت هەنی', en: 'Rizzo Hot Honey', ar: 'ريزو هني حار' },
        description: { ku: 'مریشک و برنج بە سۆسی هەنگوینی تیژ', en: 'Chicken and rice with spicy honey sauce', ar: 'دجاج وأرز مع صلصة العسل الحارة' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://zeroth-silver-13nwqgkdmc.edgeone.app/Gemini_Generated_Image_vg05alvg05alvg05.png',
        isPopular: true,
      },
      {
        id: 'r2',
        name: { ku: 'ڕیزۆ سامۆرای', en: 'Rizzo Samurai', ar: 'ريزو ساموراي' },
        description: { ku: 'مریشک و برنج بە سۆسی سامۆرای تایبەت', en: 'Chicken and rice with special Samurai sauce', ar: 'دجاج وأرز مع صلصة ساموراي الخاصة' },
        price: { ku: '٧,٠٠٠ دینار', en: '7,000 IQD', ar: '٧,٠٠٠ دينار' },
        image: 'https://zeroth-silver-13nwqgkdmc.edgeone.app/Gemini_Generated_Image_vg05alvg05alvg05.png',
      },
      {
        id: 'r3',
        name: { ku: 'ڕیزۆ فلۆریدا', en: 'Rizzo Florida', ar: 'ريزو فلوريدا' },
        description: { ku: 'مریشک و برنج بە تامێکی نەرمتر', en: 'Chicken and rice with a milder taste', ar: 'دجاج وأرز بطعم معتدل' },
        price: { ku: '٦,٠٠٠ دینار', en: '6,000 IQD', ar: '٦,٠٠٠ دينار' },
        image: 'https://zeroth-silver-13nwqgkdmc.edgeone.app/Gemini_Generated_Image_vg05alvg05alvg05.png',
      },
      {
        id: 'r4',
        name: { ku: 'ڕیزۆ سمۆکی', en: 'Rizzo Smoky', ar: 'ريزو سموكي' },
        description: { ku: 'مریشک و برنج بە سۆسی باربیکیۆی دوکەڵاوی', en: 'Chicken and rice with smoky BBQ sauce', ar: 'دجاج وأرز مع صلصة باربكيو مدخنة' },
        price: { ku: '٦,٠٠٠ دینار', en: '6,000 IQD', ar: '٦,٠٠٠ دينار' },
        image: 'https://zeroth-silver-13nwqgkdmc.edgeone.app/Gemini_Generated_Image_vg05alvg05alvg05.png',
      }
    ]
  },
  {
    id: 'drinks',
    name: { ku: 'خواردنەوەکان', en: 'Drinks', ar: 'المشروبات' },
    items: [
      {
        id: 'd1',
        name: { ku: 'پێپسی قوتو', en: 'Pepsi Can', ar: 'بيبسي علبة' },
        description: { ku: 'پێپسی ساردی قوتو', en: 'Cold Pepsi can', ar: 'علبة بيبسي باردة' },
        price: { ku: '١,٠٠٠ دینار', en: '1,000 IQD', ar: '١,٠٠٠ دينار' },
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'd2',
        name: { ku: 'ئاوی کانزایی', en: 'Water', ar: 'مياه معدنية' },
        description: { ku: 'ئاوی کانزایی سارد', en: 'Cold mineral water', ar: 'مياه معدنية باردة' },
        price: { ku: '٥٠٠ دینار', en: '500 IQD', ar: '٥٠٠ دينار' },
        image: 'https://hq2.recyclist.co/wp-content/uploads/sites/2/2015/02/waterbottle-300x300.jpg',
      }
    ]
  }
];

export const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'burgers':
    case 'appetizers':
      return 'UtensilsCrossed';
    case 'pizza':
      return 'Pizza';
    case 'fries':
      return 'Utensils';
    case 'rizzo':
      return 'Flame';
    case 'drinks':
      return 'CupSoda';
    default:
      return 'Utensils';
  }
};
