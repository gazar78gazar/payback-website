'use client'
import React from 'react';
import { CheckCircle, Target, Users, Shield } from 'lucide-react';

const AboutPage = () => {
  const benefits = [
    {
      title: "מקצועיות",
      description: "הצוות שלנו כולל רואי חשבון ויועצי מס מהשורה הראשונה",
      icon: Users
    },
    {
      title: "פשטות",
      description: "תהליך קל ונוח שחוסך לך זמן וכאב ראש",
      icon: Target
    },
    {
      title: "שקיפות",
      description: "אתה יודע בדיוק כמה כסף מגיע לך ומתי",
      icon: CheckCircle
    },
    {
      title: "אמינות",
      description: "אלפי לקוחות מרוצים כבר קיבלו החזרי מס באמצעותנו",
      icon: Shield
    }
  ];

  const expertise = [
    "צוות מקצועי: יועצי מס מנוסים, כולם בעלי הסמכות ורישיונות מתאימים",
    "ניסיון עשיר: מעל 15 שנות ניסיון בתחום החזרי המס",
    "עדכניות מתמדת: הצוות שלנו מתעדכן באופן שוטף בכל השינויים בחוקי המס והתקנות",
    "גישה ישירה: אנחנו מחוברים למערכות רשות המסים, מה שמאפשר לנו לעקוב אחר התהליך בזמן אמת"
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-[#47646f]">אודות PayBack</h1>
            <p className="text-lg text-gray-700 mb-6">
              PayBack הוא שירות מוביל להחזרי מס בישראל. אנחנו מאמינים שלכל אזרח מגיע לקבל בחזרה את הכסף שמגיע לו מרשויות המס, בקלות ובמהירות.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#47646f]">המשימה שלנו</h2>
            <p className="text-gray-700">
              המשימה שלנו היא פשוטה: לעזור לך לקבל את הכסף שמגיע לך בחזרה מרשויות המס, ללא מאמץ מצדך. אנחנו מבינים שתהליך החזרי המס יכול להיות מסובך ומתיש, ולכן אנחנו כאן כדי לפשט אותו עבורך.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#47646f]">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expertise Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#47646f]">המומחיות שלנו</h2>
            <p className="text-gray-700 mb-6">
              כשמדובר בכסף שלך, אל תסתפק בפחות מהטוב ביותר. ב-PayBack, אנחנו מעסיקים רק את המומחים המובילים בתחום:
            </p>
            <ul className="space-y-3">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commitment Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#47646f]">המחויבות שלנו</h2>
            <p className="text-gray-700 mb-6">
              ב-PayBack, אנחנו מחויבים לא רק להשיג עבורך את ההחזר המקסימלי, אלא גם לעשות זאת בדרך החוקית והאתית ביותר. אנחנו מאמינים בשקיפות מלאה ובשמירה קפדנית על כל כללי החוק והאתיקה המקצועית.
            </p>
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold mb-3 text-[#47646f]">הצוות שלנו</h3>
              <p className="text-gray-700">
                מאחורי PayBack עומד צוות מסור של מומחים בתחום המיסוי. כל אחד מאנשי הצוות שלנו מחויב לעזור לך לקבל את ההחזר המקסימלי האפשרי, תוך שמירה על הסטנדרטים הגבוהים ביותר של מקצועיות ושירות.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;