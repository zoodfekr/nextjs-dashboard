import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Link from 'next/link';


const Login_Element = () => {

    return (
        <>
            <Grid container className=' flex justify-center'>

                <Grid item xs={12} sm={8} md={6} lg={4} xl={3} className=" bg-stone-300/85 flex flex-col justify-center p-2 rounded-lg shadow">

                    <Box className="flex flex-col   w-full justify-center items-center">


                        <Typography variant="h6" color="white" className=' flex justify-center w-80 m-auto p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500' sx={{ mt: -3 }}>
                            صفحه ورود
                        </Typography>


                        <Box className=" flex flex-col  w-full">
                            <TextField
                                sx={{ m: 1 }}
                                id=""
                                label="نام کاربری"
                            // value={}
                            // onChange={ }
                            />

                            <TextField
                                sx={{ m: 1 }}
                                id=""
                                label="رمز عبور"
                            // value={}
                            // onChange={ }
                            />

                            <Link
                                href="/home/dashboard"
                                className=' flex justify-center bg-blue-500 rounded-lg p-1 m-1'
                            >ورود
                            </Link>


                        </Box>


                    </Box>

                </Grid>
            </Grid>
        </>
    )
};

export default Login_Element