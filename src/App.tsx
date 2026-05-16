import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Pizza, 
  CupSoda, 
  UtensilsCrossed,
  Utensils,
  Flame, 
  Info,
  X
} from 'lucide-react';
import { menuData, uiTranslations, getCategoryIcon, Language, Category, MenuItem } from './data';
import { FlagKurdistan, FlagUK, FlagIraq } from './components/Flags';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(menuData[0].id);
  const [language, setLanguage] = useState<Language>('ku');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Helper to find currently selected category Data
  const currentCategory = menuData.find(c => c.id === activeTab) || menuData[0];
  const ui = uiTranslations[language];
  const isRtl = language !== 'en';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className={`min-h-screen pb-20 selection:bg-brand-accent/30 bg-brand-bg text-brand-secondary ${isRtl ? 'font-kurdish' : 'font-latin'}`}>
      
      {/* Header Section */}
      <header className="bg-white px-4 md:px-10 py-4 md:py-5 flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-100 shadow-sm relative z-40">
        
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3 md:gap-[15px]">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-brand-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-primary/20"
            >
              {/* Logo Icon */}
              <div className="relative text-white font-bold text-xl flex items-center">
                <Pizza size={22} className="transform -rotate-12" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[20px] md:text-[28px] font-extrabold text-brand-secondary tracking-tight font-latin"
            >
              Kooki <span className="text-brand-primary">Pizza</span>
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

      {/* Footer / Footer Actions */}
      <footer className="mt-auto bg-brand-secondary text-white py-[20px] px-[40px]">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
          <div className="w-[40px] h-[40px] bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mb-2">
            <Pizza size={20} className="transform -rotate-12" />
          </div>
          <div className="text-[14px] opacity-90 font-medium">
            {ui.address}
          </div>
          <div className="text-[14px] opacity-90 font-medium text-brand-primary">
            {ui.phone}
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
                className="bg-brand-bg rounded-[32px] overflow-hidden w-full max-w-[420px] shadow-2xl pointer-events-auto flex flex-col border border-brand-primary/10"
              >
                <div className="relative h-64 sm:h-72 w-full shrink-0">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name.en} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-80" />
                  
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-200 hover:scale-105 z-10`}
                  >
                     <X size={20} strokeWidth={2.5} />
                  </button>
                  
                  {selectedItem.isPopular && (
                    <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} bg-brand-accent text-brand-secondary text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10`}>
                      <Pizza size={14} className="stroke-[3px]" /> {ui.recommended}
                    </div>
                  )}
                </div>
                
                <div className="px-6 md:px-8 pb-8 pt-2 flex flex-col gap-4 relative z-10 -mt-8">
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-secondary leading-tight">
                      {selectedItem.name[language]}
                    </h2>
                  </div>
                  
                  <p className="text-brand-secondary/70 text-base sm:text-lg leading-relaxed font-medium">
                    {selectedItem.description[language]}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-brand-primary/10 flex justify-between items-center">
                    <span className="font-bold text-gray-500 uppercase tracking-widest text-xs">
                      {isRtl ? 'نرخ' : (language === 'ar' ? 'السعر' : 'Price')}
                    </span>
                    <span className="font-black text-brand-primary text-2xl">
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

