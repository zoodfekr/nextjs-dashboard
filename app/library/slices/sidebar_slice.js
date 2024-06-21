import { createSlice } from '@reduxjs/toolkit'

export const sidebar = createSlice({
    name: 'sidebar',
    initialState: {
        value: false
    },
    reducers: {
        sidebar_status: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { sidebar_status } = sidebar.actions

export default sidebar.reducer