import "./globals.css"

import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: '300',
    subsets: ["latin"]
    // You can also pass an array for multiple font weights, e.g. ['400', '600'].
});

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
            <html lang="en" className={roboto.className}>
                <body>{children}</body>
            </html>
            );
}
//import localFont from '@next/font/local';
///* eslint-disable @next/next/no-head-element */
////import { Inter } from '@next/font/google';
//
//// Font files can be colocated inside of `app`
//const myFont = localFont({ src: '../public/fonts/GoldmanSans_W_Rg.woff2' });
//
//export default function RootLayout({ children }: {
//    children: React.ReactNode;
//}) {
//    return (
//            <html lang="en" className={myFont.className}>
//                <body>{children}</body>
//            </html>
//            );
//}


//// If loading a variable font, you don't need to specify the font weight
//const inter = Inter();
//
//export default function RootLayout({ children }: {
//    children: React.ReactNode;
//}) {
//    return (
//            <html lang="en" className={inter.className}>
//                <body>{children}</body>
//            </html>
//            );
//}