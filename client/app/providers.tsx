'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/state/redux'; // Assuming your store is exported from here or '@/state/index'

// You might add other providers here later, e.g., ThemeProvider, TooltipProvider

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* Wrap with other providers if needed */}
      {children}
    </Provider>
  );
}