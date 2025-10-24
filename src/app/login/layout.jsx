'use client';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';

export default function LoginLayout({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">{children}</div>
      </AuthProvider>
    </ThemeProvider>
  );
}
