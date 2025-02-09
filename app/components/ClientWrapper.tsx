// components/ClientWrapper.tsx
'use client';

import { AuthProvider } from '@/contexts/AuthContext';
// import { AuthProvider } from '@/contexts/AuthContext';
// import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
// import { SessionProvider } from '../providers/SessionProvider';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
<AuthProvider>

        <CartProvider>
          {children}
        </CartProvider>
        </AuthProvider>
       
  );
};

export default ClientWrapper;
