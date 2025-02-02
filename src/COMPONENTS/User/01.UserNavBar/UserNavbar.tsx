import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const buttonStyle = {
    my: 2,
    color: 'white',
    display: 'block'
}

export default function UserNavbar() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageChange = (page: string) => {
        if (page === "Return") {
            navigate('/');
        }
        else {
            navigate(`/user/${page}`);
        }
    };



    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LINK1 MANAGER
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={(event) => setAnchorElNav(event.currentTarget)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >

                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* Account Button to modify your account */}
                            <Button
                                key={"Account"}
                                onClick={() => handlePageChange("Account")}
                                sx={buttonStyle}
                            >
                                Account
                            </Button>
                            {/* Return Button to return to the main page */}
                            <Button
                                key="Return"
                                onClick={() => handlePageChange("Return")}
                                sx={buttonStyle}
                            >
                                Return
                            </Button>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Container>
                    <Outlet />
                </Container>
            </Box>
        </>
    );
}

