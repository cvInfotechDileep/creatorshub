'use client';
import { Inter } from "next/font/google";
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { store } from '../redux/store/store';
// import ThemeToggle from '@/components/ThemeToggle';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../components/Headers/PublicHeader/PublicHeader.module.scss'
import './../styles/page.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicHeader from '@/components/Headers/PublicHeader';
import UserHeader from '@/components/Headers/UserHeader';
import CreatorHeader from '@/components/Headers/CreatorHeader';

const inter = Inter({ subsets: ["latin"] });

function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.theme.theme);
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <>{children}</>;
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  let HeaderComponent = PublicHeader;
  // Hide header for signin and signup pages
  const hideHeader = pathname === '/signin' || pathname === '/signup' || pathname === '/forgotpassword';

  if (pathname.startsWith('/user')) {
    HeaderComponent = UserHeader;
  } else if (pathname.startsWith('/creator')) {
    HeaderComponent = CreatorHeader;
  }

  return (
    <html>
      <body className={inter.className}>
        <Provider store={store}>
        {!hideHeader && <HeaderComponent />}
          {/* <ThemeToggle /> */}
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
