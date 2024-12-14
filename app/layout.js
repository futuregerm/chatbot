'use client';
import "./globals.css";
import ThemeRegistry from './styles/theme/ThemeRegistry';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}