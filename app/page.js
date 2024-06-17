import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import login_bg from '../assets/login_bg.jpg';
import Login_Element from './ui/login/Login_Element';
import Image from 'next/image'


const Login = () => {
  return (
    <>
      <Box className=' overflow-hidden relative flex justify-center items-center' sx={{ height: "100vh", width: "100vw" }}>

        <Image
          src={login_bg.src}
          width={1920}
          height={1080}
          className='absolute bg-cover w-full h-screen -z-10 flex justify-center items-center'
          alt="Picture of the author"
        />

        <Login_Element />

      </Box>
    </>
  )
};

export default Login;
