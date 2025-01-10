import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export function MobileNavLink({ to, icon, text, isActive, onClick }: MobileNavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={clsx(
        'flex items-center space-x-2 px-4 py-2 rounded-md transition-colors',
        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}