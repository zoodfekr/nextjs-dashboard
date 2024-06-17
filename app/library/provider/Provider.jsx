'use client'

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const Provider = ({ children }) => {


    // Create rtl cache
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });


    return (
        <>
            <CacheProvider value={cacheRtl}>
                {children}
            </CacheProvider>
            
        </>
    )
};

export default Provider;