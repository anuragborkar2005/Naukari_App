import React, { createContext, ReactNode, useContext, useState } from 'react';
import { User } from 'types';

interface AuthContextProps {
  user: User | null;
  signIn: () => void;
  signUp: () => void;
  getProfile: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = () => {
    // TODO: implement sign-in logic
  };

  const signUp = () => {
    // TODO: implement sign-up logic
  };

  const getProfile = () => {
    // TODO: implement profile fetching logic
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, getProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
