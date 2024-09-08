import * as React from 'react';
import {
    Box,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemText,

} from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router'

const drawerWidth = 240;



export default function AccountSidebar() {

    const standardItems = ['info', 'rewards'];

    return (
        <Box sx={{ display: 'flex', pt: 1 }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        top: { xs: 56, sm: 64 }, // Adjust based on AppBar height
                        height: { xs: 'calc(100% - 56px)', sm: 'calc(100% - 64px)' },
                    },
                }}
            >
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <List>
                            {standardItems.map((text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton href={`account/${text}`}>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </List>

                </Box>
            </Drawer>
            <Box
                component="main"
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Box>
        </Box>
    );
}
