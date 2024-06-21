'use client'

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useRef } from 'react'

import store from '../store';
import { Provider } from 'react-redux';

const Custom_Provider = ({ children }) => {

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (

        <>
            <CacheProvider value={cacheRtl}>
                <Provider store={store}>

                    {children}

                </Provider>
            </CacheProvider>

        </>
    )
};

export default Custom_Provider;