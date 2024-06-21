'use client'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';

// icons
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { useDispatch, useSelector } from 'react-redux';
import { sidebar_status } from '@/app/library/slices/sidebar_slice';

const Appbar = () => {


    const dispatch = useDispatch();

    return (
        <>
            <Box className=" w-full bg-stone-700 rounded-lg p-2 text-white h-16 flex justify-end ">


                <Box className="w-full  flex items-center">

                    <Box className="md:hidden">
                        <IconButton aria-label="delete" onClick={() => dispatch(sidebar_status(true))}>
                            <MenuOpenRoundedIcon fontSize="small" className='' sx={{ color: "white" }} />
                        </IconButton>
                    </Box>


                </Box>

                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="" />
                </Stack>


            </Box>
        </>
    )
};

export default Appbar;