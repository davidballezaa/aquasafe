import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Aquasafe',
    description: 'Potabilidad con confianza',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={'flex flex-col min-h-screen ' + inter.className}>
                <Header />
                <div className="h-100 grow box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
