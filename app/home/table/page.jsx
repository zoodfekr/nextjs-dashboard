"use client"

import Paper_app from '@/app/ui/HOC/Paper_app';
import Table_data from '@/app/ui/table_data/table_data';
import Box from '@mui/material/Box';

const table = () => {
    return (
        <>
            <Paper_app className="">
                <Table_data></Table_data>
            </Paper_app>
        </>
    )
}

export default table