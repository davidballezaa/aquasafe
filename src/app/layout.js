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
            <body
                className={
                    'h-screen flex flex-col items-between' + inter.className
                }
            >
                <Header />
                <div className="h-100 grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
