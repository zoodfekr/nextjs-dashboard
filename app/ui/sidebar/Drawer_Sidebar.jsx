'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { sidebar_status } from '@/app/library/slices/sidebar_slice';

export default function AnchorTemporaryDrawer() {

    const sidebar = useSelector(state => state.sidebar.value);
    const dispatch = useDispatch();

    return (
        <div>

            <Drawer
                className="border border-green-500 md:hidden"
                anchor={"left"}
                open={sidebar}
                onClose={() => dispatch(sidebar_status(false))}
            >
                <Box className="relative w-60 h-full">
                    <Sidebar></Sidebar>
                </Box>

            </Drawer>

        </div>
    );
}
