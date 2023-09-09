import React from 'react';

import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix
} from '@material-tailwind/react';

import {
    PowerIcon,
} from "@heroicons/react/24/solid";



export const NavbarLogin = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <List className=" h-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <ListItem className="">
                <ListItemPrefix>
                    <PowerIcon className="h-5 w-5 text-red-700" />
                </ListItemPrefix>
                Log Out
            </ListItem>
        </List>
    );
    return (
        <Navbar className="h-12 mx-auto w-full py-2 px-2 lg:px-8 lg:py-4 mb-0">
            <div className="container h-3 mx-auto flex items-center justify-between text-black">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    Material Tailwind
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </MobileNav>
        </Navbar>
    );
}
