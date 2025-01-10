import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/index';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} PDR Booking System. All rights reserved.
        </div>
      </footer>
    </div>
  );
}