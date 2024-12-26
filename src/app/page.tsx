'use client'
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, FileText, Clock, Calculator, MessageCircle } from 'lucide-react';
import NavigationMenu from '@/components/NavigationMenu';
import FAQPage from '@/components/FAQPage';
import AboutPage from '@/components/AboutPage';
import Image from 'next/image';
import paybackLogo from '@/assets/payback-logo.png';
import goldSack from '@/assets/goldsack-2.PNG';

export default function PaybackWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  const openWhatsApp = () => {
    window.open('https://wa.me/972525389669', '_blank');	
  };

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="bg-[#6b61b1] text-white px-4 py-8">
              <div className="max-w-3xl mx-auto mr-16">
                <h2 className="text-[#ededed] text-2xl font-bold mb-4">החזר מס בקליק</h2>
                <p className="text-lg mb-6">בדקו כמה מגיע לכם תוך 2 דקות</p>
                <button 
                  onClick={openWhatsApp}
                  className="bg-slate-100 text-[#6b61b1] px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  לבדיקת זכאות
                </button>
              </div>
            </section>

            {/* Process Steps */}
            <section className="px-4 py-8 bg-[#f5f5ff]">
              <div className="max-w-3xl mx-auto mr-16">
                <h3 className="text-[#47646f] text-xl font-bold mb-6">איך זה עובד?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FileText className="w-6 h-6 text-[#6b61b1]" />
                    </div>
                    <div>
                      <h4 className="text-[#47646f] font-bold mb-1">1. ממלאים טופס קצר</h4>
                      <p className="text-gray-600">ממלאים טופס קצר עם הפרטים הבסיסיים שלכם</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calculator className="w-6 h-6 text-[#6b61b1]" />
                    </div>
                    <div>
                      <h4 className="text-[#47646f] font-bold mb-1">2. אנו בודקים זכאות</h4>
                      <p className="text-gray-600">המערכת בודקת את זכאותכם להחזר מס</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CheckCircle className="w-6 h-6 text-[#6b61b1]" />
                    </div>
                    <div>
                      <h4 className="text-[#47646f] font-bold mb-1">3. אנו מטפלים בתהליך</h4>
                      <p className="text-gray-600">אנחנו מטפלים בכל התהליך מול רשות המיסים</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clock className="w-6 h-6 text-[#6b61b1]" />
                    </div>
                    <div>
                      <h4 className="text-[#47646f] font-bold mb-1">4. אתם מקבלים החזר</h4>
                      <p className="text-gray-600">מקבלים את הכסף ישירות לחשבון הבנק</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-8 bg-[#f5f5ff]">
              <div className="max-w-3xl mx-auto mr-16">
                <h3 className="text-[#47646f] text-xl font-bold mb-4">מוכנים להתחיל?</h3>
                <p className="text-gray-600 mb-6">תהליך הבדיקה אורך כ-2 דקות</p>
                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  לבדיקת זכאות חינם בוואטסאפ
                </button>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-[#e2e7fa] px-4 py-8">
              <div className="max-w-3xl mx-auto mr-16">
                <h3 className="text-[#47646f] text-xl font-bold mb-6">למה כדאי לבחור ב-Payback?</h3>
                <div className="space-y-4">
                  <div className="bg-[#f5f5ff] p-4 rounded-lg shadow-sm">
                    <h4 className="text-[#47646f] font-bold mb-2">✓ תהליך דיגיטלי קל ומהיר</h4>
                    <p className="text-gray-600">הכל נעשה באופן מקוון, ללא צורך בניירת</p>
                  </div>
                  <div className="bg-[#f5f5ff] p-4 rounded-lg shadow-sm">
                    <h4 className="text-[#47646f] font-bold mb-2">✓ הבירוקרטיה עלינו</h4>
                    <p className="text-gray-600">המומחים של Payback מטפלים בבירוקרטיה בשבילך</p>
                  </div>
                  <div className="bg-[#f5f5ff] p-4 rounded-lg shadow-sm">
                    <h4 className="text-[#47646f] font-bold mb-2">✓ אלפי לקוחות מרוצים</h4>
                    <p className="text-gray-600">אלפי ישראלים כבר קיבלו החזרי מס</p>
                  </div>
                  <div className="bg-[#f5f5ff] p-4 rounded-lg shadow-sm">
                    <h4 className="text-[#47646f] font-bold mb-2">✓ ללא תשלום מראש</h4>
                    <p className="text-gray-600">משלמים רק אם מקבלים החזר</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5ff] font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-[#e2e7fa] shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-right">
            <div className="w-64 flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-[#47646f] text-7xl font-bold tracking-wide">PAYBACK</h1>
                <p className="text-[#47646f] text-[24px] tracking-wide">מחזירים את הכסף שלך בקליק</p>
              </div>
              <Image
                src={goldSack}
                alt="Gold Sack"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <NavigationMenu 
              currentPage={currentPage}
              onNavigate={handleNavigation}
            />
          </div>
          {currentPage === 'home' && (
            <div className="mt-4 text-right">
              <p className="text-gray-600 font-medium">4 מכל 5 שכירים זכאים להחזר של אלפי שקלים. ואתם?</p>
              <p className="text-gray-800 mt-2 text-xl">קבלו את המס שמגיע לכם בחזרה</p>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-4 py-8">
        <div className="mb-6">
          <button 
            onClick={openWhatsApp}
            className="flex items-center justify-center w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            לשיחה עם נציג בוואטסאפ
          </button>
        </div>
        <div className="text-sm text-gray-400 text-center">
          <p>© Payback 2021 מבית סנדמן שרותים פיננסיים</p>
        </div>
      </footer>
    </div>
  );
}