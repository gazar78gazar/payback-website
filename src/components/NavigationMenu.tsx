'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationMenuProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'דף הבית' },
    { id: 'about', label: 'אודות' },
    { id: 'faq', label: 'שאלות נפוצות' }
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="relative mt-4">  {/* Added mt-4 to lower the links */}
      <div className="hidden md:flex gap-6 items-center">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`px-3 py-2 text-lg rounded-lg hover:bg-blue-50 transition-colors ${  // Changed from text-base to text-lg
              currentPage === item.id ? 'text-[#6b61b1] font-bold' : 'text-gray-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationMenu;