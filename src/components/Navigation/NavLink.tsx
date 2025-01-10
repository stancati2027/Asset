import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
}

export function NavLink({ to, icon, text, isActive }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'flex items-center space-x-1 transition-colors',
        isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}