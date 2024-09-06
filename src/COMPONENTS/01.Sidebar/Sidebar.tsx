import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Suspense } from 'react';
import ContentRouter from '../00.ContentRouter/ContentRouter';
import { Grid2 } from '@mui/material';
import Avatar from '@mui/material/Avatar';
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
                    <Grid2 container size={12} justifyContent="space-between" alignItems="center">
                        <Grid2 size="auto">
                            <Typography variant="h6" noWrap component="div">LINK1 MANAGER</Typography>
                        </Grid2>
                        <Grid2 size="auto">
                            <Avatar alt="L" src="/path/to/avatar.png" />
                        </Grid2>
                    </Grid2>
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
                        <ContentRouter />
                    </Suspense>
                </Box>
            </Box>
        </Box>

    );
}
