
'use client';

import { createTheme } from '@mui/material/styles';

// برای فونتهای گوگل
import { Roboto } from 'next/font/google';

// برای فونتهای محلی
import localFont from 'next/font/local';
const vazir_font = localFont({ src: '../../../public/fonts/Vazir.woff2' });

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// ایجاد تم با استفاده از فونتهای مورد نظر
const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: `${roboto.style.fontFamily}, ${vazir_font.style.fontFamily}`,
    },
});

export default theme;
