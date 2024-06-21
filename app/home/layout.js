
import Box from '@mui/material/Box';
import Sidebar from '../ui/sidebar/Sidebar';
import Appbar from '../ui/appbar/Appbar';
import AnchorTemporaryDrawer from '../ui/sidebar/Drawer_Sidebar';


export default function homeLayout({ children }) {
  return (
    <>
      <Box className=" flex flex-row h-screen  overflow-hidden" >


        {/* ساید بار */}
        <Box className=" w-60 p-1 hidden md:block relative">
          <Sidebar></Sidebar>
        </Box>

        <AnchorTemporaryDrawer></AnchorTemporaryDrawer>




        <Box className=" grow p-1   relative h-screen">

          {/* اپ بار  در صفحات */}
          <Appbar></Appbar>

          {/* محتوا */}
          <Box className=" border border-red-500 overflow-x-hidden overflow-y-auto p-1 rounded-lg" sx={{ height: "calc(100vh - 75px)" }}>
            {children}
          </Box>

        </Box>

      </Box>

    </>
  )
}
