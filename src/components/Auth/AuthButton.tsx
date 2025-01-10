import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { GoogleSignIn } from './GoogleSignIn';
import { UserMenu } from './UserMenu';

export function AuthButton() {
  const { user } = useAuth();
  
  return user ? <UserMenu /> : <GoogleSignIn />;
}