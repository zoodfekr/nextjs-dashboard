
import Box from '@mui/material/Box';
import Sidebar from '../ui/sidebar/Sidebar';


export default function homeLayout({ children }) {
  return (
    <>
      <Box className=" flex flex-row h-screen " >

        <Box className=" w-60 border border-red-500 p-1">
          <Sidebar></Sidebar>
        </Box>

        <Box className="border grow p-1 border border-red-900 relative h-screen">



          <Box className="border border-red-500" sx={{ height: "calc(100vh - 75px)" }}>

            {children}
          </Box>
        </Box>

      </Box>

    </>
  )
}
