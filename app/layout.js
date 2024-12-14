'use client';
import "./globals.css";
import ThemeRegistry from './styles/theme/ThemeRegistry';
import { AuthContextProvider } from './context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AuthContextProvider>
      </body>
    </html>
  );
}