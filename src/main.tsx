import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { auth } from '@webcontainer/api';
import App from './App.tsx';
import './index.css';

// Initialize WebContainer authentication
auth.init({
  clientId: 'wc_api_stancati_526da90d83aad1bce0dd7dc51a88445e',
  scope: '',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);