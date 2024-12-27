'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
 return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <ChevronDown 
          className={`transform transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        {/* Changed the order and adjusted spacing for RTL */}
        <div className="flex-grow text-right">
          <span className="font-semibold text-lg text-[#47646f]">{question}</span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="px-6 text-right text-gray-700 whitespace-pre-line">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "מהו החזר מס?",
      answer: `לפעמים המדינה גובה מכם יותר מס מהמותר בחוק. זה קורה בעיקר כי בישראל שכירים משלמים מס ברמה חודשית, בעוד שהחישוב של חבות המס האמיתית נעשה ברמה שנתית. אם המס שנגבה מכם בשנה מסוימת גבוה מהחבות האמיתית, אתם זכאים לקבל את ההפרש בחזרה.

לדוגמה, אם התחלתם לעבוד במקום חדש באמצע השנה, המערכת תניח שזה היה השכר שלכם לאורך כל השנה, מה שיוביל לניכוי מס גבוה יותר.`
    },
    {
      question: "האם באמת אפשר לבקש החזר מס 6 שנים אחורה?",
      answer: "כן, ניתן לבצע בדיקה והגשה לששת השנים האחרונות. לדוגמה, כיום (2024) ניתן לבדוק ולהגיש את השנים 2018-2023."
    },
    {
      question: "האם החזר המס שלי נושא ריבית?",
      answer: "כן, מס הכנסה מתייחס ברצינות לחוב שלו. אם הגשתם בקשה להחזר מס על שנים קודמות, תקבלו פיצוי בריבית של 4% בתוספת הצמדה לאינפלציה."
    },
    {
      question: "תוך כמה זמן לוקח למס הכנסה להחזיר את הכסף?",
      answer: "ברוב המקרים הטיפול במס הכנסה מסתיים עד 180 ימי עסקים מרגע ההגשה. בחלק מהמקרים הטיפול מתארך מעבר לכך, תלוי בעומס על פקיד השומה. החוק מחייב את מס הכנסה לסיים את הטיפול תוך שנה."
    },
    {
      question: "מה התהליך של החזר המס?",
      answer: "כיום מחשבי מס הכנסה אינם מחוברים לכל המידע האישי שלך. לכן התהליך של החזר המס הוא בעצם חיבור ואיחוד כל המידע מהטפסים החיצוניים לתוך טופס של רשות המיסים."
    },
    {
      question: "אילו טפסים צריך?",
      answer: "בשביל זה אנחנו פה, נרכיב עבורך את כל החלקים של פאזל המס שלך על מנת חשב החזר מס מירבי עבורך, ונצמצם את כמות הטפסים למינימום ההכרחי – והכל דיגיטלי ובמהירות ה-AI."
    },
    {
      question: "יש לי רק חלק מהטפסים הנדרשים, כדאי להתחיל?",
      answer: "כן! אנחנו נאסוף עבורכם את המידע ונזכיר לכם אילו טפסים לשלוח כדי לוודא שתקבלו את ההחזר. אנחנו נעזור לכם לקבל את מלוא ההחזר הכספי מבלי לפספס אותו או לדחות למחר."
    },
    {
      question: "למה מערכות המס של המעביד ושל הבנקים לא דואגות לזה?",
      answer: "מערכות השכר של המעביד ושל הבנק לא מחזיקות בכל המידע הדרוש לתאם עבורכם מס. על כן תמיד יעדיפו לנכות מס ביתר מאשר מס בחסר."
    },
    {
      question: "אם עבדתי כל השנה אצל אותו מעביד, האם ייתכן שאני זכאי להחזר?",
      answer: "בהחלט כן. יש המון סיבות לכך, כמו פער מידע (דברים שהמעביד לא יודע) או פער זמנים (כמו במקרה של אישה בהריון)."
    },
    {
      question: "האם ייתכן שבמקום החזר אקבל דרישת חוב?",
      answer: "זה בהחלט יכול לקרות, ישנם שכירים שיש להם חוב לרשות המיסים. לכן אנחנו קודם כל מחשבים לכם במדויק את גובה ההחזר, ורק לאחר מכן אתם מחליטים האם להגיש למס הכנסה."
    },
    {
      question: "כמה עולה להשתמש בשירות שלכם?",
      answer: "הבדיקה היא חינמית. אם נמצא שמגיע לכם החזר, יש לכם אפשרות להגיש את הבקשה למס הכנסה דרכנו בעלות של אחוז מסוים מגובה ההחזר, כולל מע\"מ. אחוז העמלה נקבע בהתאם לגובה ההחזר."
    },
    {
      question: "האם אתם מטפלים בעצמאים?",
      answer: "לא, כרגע המערכת שלנו תומכת בשכירים בלבד."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5ff]">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8 text-right text-[#47646f]">שאלות נפוצות</h1>
          
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;