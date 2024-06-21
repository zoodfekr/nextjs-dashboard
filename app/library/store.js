import { configureStore } from '@reduxjs/toolkit'

import sidebar from './slices/sidebar_slice';

export default configureStore({
    reducer: {
        sidebar
    }
})