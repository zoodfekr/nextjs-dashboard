import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image'
import sidebar_bg from '@/assets/sidebar_bg.png';


// icons
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Sidebar = () => {

    const links = [
        { id: 1, hred: '/home/dashboard', text: "داشبورد", icon: <DashboardRoundedIcon /> },
        { id: 2, hred: '/home/table', text: "جدول ها", icon: <TableChartRoundedIcon /> },
        { id: 3, hred: '/', text: "خروج", icon: <ExitToAppRoundedIcon /> },
    ]


    return (
        <>
            <Box className="flex flex-col h-full bg-stone-700 rounded-lg">

                <Box className='flex justify-center align-center p-3'>
                    <Image
                        src={sidebar_bg.src}
                        width={70}
                        height={70}
                        className=' flex justify-center items-center rounded-full shadow'
                        alt="logo"
                    />
                </Box>


                <Divider className='text-white ' sx={{ bgcolor: "white" }} variant="middle"></Divider>

                <Box className="flex flex-col p-2">
                    {links.map(elem => {
                        return (
                            <Link
                                id={elem.id}
                                key={elem.id}
                                href={elem.hred}
                                className=' text-white m-2'
                            >
                                <span className='ml-2'>
                                    {elem.icon}
                                </span>
                                {elem.text}
                            </Link>
                        )
                    })}
                </Box>


            </Box>
        </>
    )
};
export default Sidebar;