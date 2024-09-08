import * as React from 'react';
import {
    Box,
    Drawer,
    AppBar,
    CssBaseline,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
} from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Grid } from '@mui/material';
import UserProfileAvatar from './UserProfileAvatar';

const drawerWidth = 240;



export default function Sidebar() {

    const standardItems = ['Tasks', 'Communicate', 'Performance', 'Calendar'];
    const managerItems = ['Manage', 'Feedback', 'Report'];
    const adminItems = ['Structure', 'Analytics'];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="h6" noWrap>
                                Link1 Social
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" noWrap>
                                <b>Alex Grossi's App</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ textAlign: 'right' }}>
                            <UserProfileAvatar />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >

                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List subheader={<ListSubheader>Developer</ListSubheader>}>
                        <List>
                            {standardItems.map((text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton href={`/${text}`}>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </List>
                    <Divider />
                    <List subheader={<ListSubheader>Manager</ListSubheader>}>
                        <List>
                            {managerItems.map((text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton href={`/${text}`}>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </List>
                    <Divider />
                    <List subheader={<ListSubheader>Admin</ListSubheader>}>
                        <List>
                            {adminItems.map((text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton href={`/${text}`}>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {/* Main Content Area with Suspense for lazy loading */}
                <Box component="main">
                    <Toolbar />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet></Outlet>
                    </Suspense>
                </Box>
            </Box>
        </Box>

    );
}
