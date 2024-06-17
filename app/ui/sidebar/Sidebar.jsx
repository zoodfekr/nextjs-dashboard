import Box from '@mui/material/Box';
import Link from 'next/link';


const Sidebar = () => {

    const links = [
        { id: 1, hred: '/home/dashboard', text: "داشبورد", icon: "" },
        { id: 2, hred: '/home/table', text: "جدول ها", icon: "" },
        { id: 3, hred: '/', text: "login", icon: "" },
    ]


    return (
        <>
            <Box className="flex flex-col border border-yellow-900 h-full">

                {links.map(elem => {
                    return (
                        <Link
                            id={elem.id}
                            key={elem.id}
                            href={elem.hred}
                            className=''
                        >
                            {elem.text}
                            {elem.icon}
                        </Link>
                    )
                })}

            </Box>
        </>
    )
};
export default Sidebar;