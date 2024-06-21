import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Paper_app = ({ children }) => {


    return (
        <>
            <Paper elevation={3} className='w-full h-full border border-red-500 bg-sky-500/100' sx={{ background: "#222831" }}>
                {children}
            </Paper>
        </>
    )
};

export default Paper_app;