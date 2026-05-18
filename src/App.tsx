import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Pizza, 
  CupSoda, 
  UtensilsCrossed,
  Utensils,
  Flame, 
  Info,
  X,
  MapPin,
  Phone,
  Instagram
} from 'lucide-react';
import { menuData, uiTranslations, getCategoryIcon, Language, Category, MenuItem, branchesData } from './data';
import { FlagKurdistan, FlagUK, FlagIraq } from './components/Flags';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(menuData[0].id);
  const [language, setLanguage] = useState<Language>('ku');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  const popularItems = useMemo(() => {
    const items: MenuItem[] = [];
    menuData.forEach(cat => {
      cat.items.forEach(item => {
        if (item.isPopular) items.push(item);
      });
    });
    // Fallback if no popular items: use first items of categories
    if (items.length === 0) {
      menuData.forEach(cat => {
        if (cat.items.length > 0) items.push(cat.items[0]);
      });
    }
    return items;
  }, []);

  const [promoIndex, setPromoIndex] = useState(0);

  // Preload crucial images
  useEffect(() => {
    const urlsToPreload = [
      ...popularItems.map(item => item.image),
      ...menuData[0].items.map(item => item.image)
    ];
    
    // Unique URLs
    const uniqueUrls = Array.from(new Set(urlsToPreload));
    
    uniqueUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, [popularItems]);

  useEffect(() => {
    // Remove the static initial splash from index.html manually
    const initialSplash = document.getElementById('initial-splash');
    if (initialSplash) {
      initialSplash.style.display = 'none';
    }
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (popularItems.length <= 1) return;
    const interval = setInterval(() => {
      setPromoIndex(prev => (prev + 1) % popularItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [popularItems]);

  const currentPromoItem = popularItems[promoIndex];

  // Helper to find currently selected category Data
  const currentCategory = menuData.find(c => c.id === activeTab) || menuData[0];
  const ui = uiTranslations[language];
  const isRtl = language !== 'en';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className={`min-h-screen pb-20 selection:bg-brand-accent/30 bg-brand-bg text-brand-secondary ${isRtl ? 'font-kurdish' : 'font-latin'}`}>
      
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-brand-secondary flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            {/* Background Decor - elegant glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
              <div className="w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-brand-primary/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center z-10 w-full max-w-3xl"
            >
              {/* Logo */}
              <motion.div 
                initial={{ rotate: -5, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                className="w-32 h-32 md:w-44 md:h-44 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-primary/20 border border-white/10 relative mb-8 bg-white p-2"
              >
                <img 
                  src="https://particular-chocolate-6pci24tryv.edgeone.app/logo%20(7).png" 
                  alt="Kooki FastFood Logo" 
                  className="w-full h-full object-contain relative z-10" 
                />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-5xl font-black text-white tracking-tight font-latin uppercase mb-12 drop-shadow-sm"
              >
                Kooki <span className="text-brand-primary">FastFood</span>
              </motion.h1>

              <div className="flex flex-col gap-8 md:gap-10 items-center w-full relative">
                 <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto hidden md:block"></div>
                 
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
                   className="text-white text-xl md:text-2xl font-kurdish font-bold w-full" dir="rtl"
                 >
                   بەخێربێن بۆ ڤیستیڤاڵی بەرهەمە ناوخۆییەکان
                   <span className="text-white/70 font-medium text-base md:text-lg mt-2 block">کوکی فاستفوود بە گەرمی بەخێرهاتنتان دەکات ✨</span>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8 }}
                   className="text-white text-lg md:text-xl font-bold w-full" dir="rtl"
                 >
                   مرحباً بكم في مهرجان المنتجات المحلية
                   <span className="text-white/70 font-medium text-base md:text-lg mt-2 block">كوكي فاست فود ترحب بكم بحرارة 🌟</span>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}
                   className="text-white text-lg md:text-xl font-latin font-bold w-full" dir="ltr"
                 >
                   Welcome to the Local Products Festival
                   <span className="text-white/70 font-medium text-base md:text-lg mt-2 block">Kooki FastFood warmly welcomes you 🔥</span>
                 </motion.div>
              </div>

            </motion.div>
            
            {/* Progress Bar */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 md:h-1.5 bg-brand-primary/80"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <header className="bg-white px-4 md:px-10 py-4 md:py-5 flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-100 shadow-sm relative z-40">
        
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3 md:gap-[15px]">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] shrink-0 relative flex items-center justify-center p-1 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <img 
                src="https://particular-chocolate-6pci24tryv.edgeone.app/logo%20(7).png" 
                alt="Kooki FastFood Logo" 
                className="w-full h-full object-contain relative z-10 drop-shadow-sm" 
              />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[20px] md:text-[28px] font-extrabold text-brand-secondary tracking-tight font-latin uppercase"
            >
              Kooki <span className="text-brand-primary">FastFood</span>
            </motion.h1>
          </div>
          
          <div className="flex items-center gap-6">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-gray-500 text-[15px] md:text-[18px] font-medium hidden lg:block"
            >
              {ui.digitalMenu}
            </motion.p>
            
            {/* Language Switcher */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex bg-gray-100/80 p-1.5 rounded-full border border-gray-200 shadow-inner relative z-0" 
              dir="ltr"
            >
              {[
                { id: 'en', label: 'EN', Flag: FlagUK },
                { id: 'ar', label: 'عربي', Flag: FlagIraq },
                { id: 'ku', label: 'کوردی', Flag: FlagKurdistan }
              ].map((lang) => {
                const isActive = language === lang.id;
                return (
                  <button
                    key={lang.id}
                    onClick={() => setLanguage(lang.id as Language)}
                    className={`relative flex items-center gap-2 px-3 lg:px-5 py-2 text-sm font-bold rounded-full transition-colors outline-none focus:ring-0 ${isActive ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-lang-bg"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06)] pointer-events-none"
                        style={{ zIndex: -1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        initial={false}
                      />
                    )}
                    <lang.Flag className={`w-5 h-5 sm:w-6 sm:h-6 rounded-sm object-cover shadow-sm border border-black/5 shrink-0 transition-transform ${isActive ? 'scale-110' : 'scale-100'}`} />
                    <span className="inline-block">{lang.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <section className="px-4 sm:px-10 pt-6 pb-2 w-full max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full h-[160px] md:h-[240px] rounded-[2.5rem] overflow-hidden shadow-lg group border border-gray-100 bg-black"
        >
          {/* Subtle overlay gradient to make text legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentPromoItem.id}
              initial={{ opacity: 0.4, scale: 1.02 }}
              animate={{ opacity: 0.85, scale: 1 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={currentPromoItem.image} 
              alt="Promo" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
            />
          </AnimatePresence>
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-10 mix-blend-overlay"></div>

          {/* Banner Content */}
          <div className="relative z-20 px-8 sm:px-12 py-8 text-white w-full h-full flex flex-col justify-center max-w-2xl">
            <motion.h2 
              key={`title-${currentPromoItem.id}`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 leading-tight drop-shadow-lg tracking-tight"
            >
              {currentPromoItem.name[language]}
            </motion.h2>
            
            <motion.p 
              key={`desc-${currentPromoItem.id}`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-gray-200 text-sm sm:text-base md:text-lg font-medium max-w-md drop-shadow-md line-clamp-2"
            >
              {currentPromoItem.description[language]}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Navigation / Categories */}
      <nav className="sticky top-0 z-30 bg-brand-bg/90 backdrop-blur-sm pt-4 md:pt-6 pb-2">
        <ul className="flex overflow-x-auto hide-scrollbar px-4 sm:px-10 py-2 gap-[10px] items-center w-full max-w-6xl mx-auto">
          {menuData.map((category) => {
            const isActive = activeTab === category.id;
            const iconName = getCategoryIcon(category.id);
            const IconMap: any = { Pizza, CupSoda, UtensilsCrossed, Utensils, Flame };
            const Icon = IconMap[iconName] || Utensils;
            
            return (
              <li key={category.id} className="shrink-0">
                <button
                  onClick={() => setActiveTab(category.id)}
                  className={`
                    relative px-[20px] sm:px-[25px] py-[10px] sm:py-[12px] rounded-[30px] flex items-center gap-2 font-bold text-sm sm:text-base transition-all duration-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-transparent
                    ${isActive ? 'text-white shadow-brand-primary/30' : 'text-brand-secondary hover:border-brand-primary/30'}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-primary rounded-[30px]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-2">
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{category.name[language]}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Menu Items Grid */}
      <main className="px-4 sm:px-10 pt-4 pb-12 max-w-6xl mx-auto flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + language} // Crucial for exit/enter animations
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[25px]"
          >
            {currentCategory.items.map((item, index) => (
              <motion.article 
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={item.id}
                className="group cursor-pointer relative bg-brand-card rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_15px_30px_rgba(255,107,0,0.15)] transition-all duration-300 aspect-square flex flex-col border border-brand-primary/5"
              >
                {/* Image Section */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.name.en} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00]/90 via-[#1a0a00]/30 to-transparent transition-opacity duration-300 group-hover:from-[#1a0a00]/95" />
                  
                  {item.isPopular && (
                    <div className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'} bg-brand-accent text-brand-secondary text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 border border-white/20`}>
                      <Pizza size={12} className="stroke-[3px]" /> <span className="hidden xs:inline">{ui.recommended}</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col justify-end h-full p-4 sm:p-5">
                  <h3 className="text-white text-[15px] sm:text-[18px] lg:text-[20px] font-bold mb-1 leading-tight drop-shadow-md">
                    {item.name[language]}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-extrabold text-brand-accent text-sm sm:text-base drop-shadow-md bg-black/20 px-2 py-0.5 rounded-md backdrop-blur-sm border border-brand-accent/20">
                      {item.price[language]}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Contact Hub */}
      <footer className="mt-auto bg-brand-secondary text-white pt-16 pb-8 border-t-[8px] border-brand-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
           <Pizza size={400} className="absolute -top-20 -left-20 transform -rotate-12" />
           <UtensilsCrossed size={300} className="absolute bottom-10 -right-10 transform rotate-45" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-brand-primary drop-shadow-md">
              {ui.ourBranches}
            </h2>
            <p className="text-gray-300 font-medium max-w-xl mx-auto">
              {ui.contactUs}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {branchesData.map((branch) => (
              <div 
                key={branch.id} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col items-start gap-4 shadow-xl"
              >
                <div className="flex items-center gap-3 w-full border-b border-white/10 pb-4 mb-2">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{branch.name[language]}</h3>
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin size={20} className="shrink-0 mt-0.5 text-brand-primary/80" />
                    <span className="text-sm sm:text-base font-medium leading-relaxed">{branch.address[language]}</span>
                  </div>
                  
                  <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <Phone size={20} className="shrink-0 text-brand-primary/80 group-hover:text-brand-primary" />
                    <span className="text-sm sm:text-base font-bold tracking-wide" dir="ltr">{branch.phone}</span>
                  </a>
                  
                  <a href={`https://instagram.com/${branch.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <Instagram size={20} className="shrink-0 text-brand-primary/80 group-hover:text-brand-primary" />
                    <span className="text-sm sm:text-base font-bold tracking-wide" dir="ltr">@{branch.instagram}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-[60px] h-[60px] shrink-0 bg-white p-1 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative">
                <img 
                  src="https://particular-chocolate-6pci24tryv.edgeone.app/logo%20(7).png" 
                  alt="Kooki FastFood Logo" 
                  className="w-full h-full object-contain relative z-10" 
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight uppercase">Kooki <span className="text-brand-primary">FastFood</span></span>
            </div>
            
            <p className="text-gray-400 text-sm font-medium">
              Powered by <a href="https://masmenu.masmenu.workers.dev/" target="_blank" rel="noopener noreferrer" className="font-extrabold text-white hover:text-brand-primary transition-colors">MAS MENU</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Item Expansion Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-[#1a0a00]/70 backdrop-blur-md z-50 transition-opacity"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50 pointer-events-none">
              <motion.div 
                layoutId={`card-${selectedItem.id}`}
                className="bg-white rounded-[2rem] overflow-hidden w-full max-w-[480px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] pointer-events-auto flex flex-col"
              >
                <div className="relative h-[35vh] sm:h-80 w-full shrink-0 bg-gray-100">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name.en} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent opacity-100" />
                  
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className={`absolute top-5 ${isRtl ? 'left-5' : 'right-5'} bg-white/50 hover:bg-white text-black p-3 rounded-full backdrop-blur-md transition-all duration-200 hover:scale-105 z-10 shadow-sm`}
                  >
                     <X size={20} strokeWidth={2.5} />
                  </button>
                  
                  {selectedItem.isPopular && (
                    <div className={`absolute top-5 ${isRtl ? 'right-5' : 'left-5'} bg-brand-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 z-10`}>
                      <Flame size={14} className="fill-white" /> {ui.recommended}
                    </div>
                  )}
                </div>
                
                <div className="px-8 md:px-10 pb-10 pt-4 flex flex-col gap-4 relative z-10 -mt-6">
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary leading-tight tracking-tight">
                      {selectedItem.name[language]}
                    </h2>
                  </div>
                  
                  <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
                    {selectedItem.description[language]}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-gray-400 uppercase tracking-widest text-sm">
                      {isRtl ? 'نرخ' : (language === 'ar' ? 'السعر' : 'Price')}
                    </span>
                    <span className="font-black text-brand-primary text-3xl">
                      {selectedItem.price[language]}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

