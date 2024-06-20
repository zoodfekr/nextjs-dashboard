import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@material-ui/core/IconButton';

// icons
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

const Appbar = () => {
    return (
        <>
            <Box className=" w-full bg-stone-700 rounded-lg p-2 text-white h-16 flex justify-end ">


                <Box className="w-full border border-red-500 flex items-center">

                    <IconButton aria-label="delete" >
                        <MenuOpenRoundedIcon fontSize="small" />
                    </IconButton>
                 
                </Box>

                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Stack>


            </Box>
        </>
    )
};

export default Appbar;