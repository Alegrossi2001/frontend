import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatIcon from '@mui/icons-material/Chat';
import FolderIcon from '@mui/icons-material/Folder';
import MentionIcon from '@mui/icons-material/NotificationImportant';

const CommunicationDashBoard: React.FC = () => {
    return (
        <Box sx={{ width: 250, bgcolor: 'background.paper', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ padding: '16px', textAlign: 'center' }}>
                Link1 Manager
            </Typography>

            {/* Projects Section */}
            <List component="nav">
                <Typography variant="subtitle1" sx={{ paddingLeft: '16px', paddingTop: '8px' }}>
                    Projects
                </Typography>
                <ListItemButton>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Project A" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Project B" />
                </ListItemButton>
                {/* Add more projects as needed */}
            </List>

            <Divider />

            {/* Direct Chats Section */}
            <List component="nav">
                <Typography variant="subtitle1" sx={{ paddingLeft: '16px', paddingTop: '8px' }}>
                    Direct Chats
                </Typography>
                <ListItemButton>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="John Doe" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jane Smith" />
                </ListItemButton>
                {/* Add more direct chats as needed */}
            </List>

            <Divider />

            {/* Mentions Section */}
            <List component="nav">
                <Typography variant="subtitle1" sx={{ paddingLeft: '16px', paddingTop: '8px' }}>
                    Mentions
                </Typography>
                <ListItem>
                    <ListItemIcon>
                        <MentionIcon />
                    </ListItemIcon>
                    <ListItemText primary="@you in Project A" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MentionIcon />
                    </ListItemIcon>
                    <ListItemText primary="@you in Direct Chat" />
                </ListItem>
                {/* Add more mentions as needed */}
            </List>

            <Divider />

            {/* Space for future additions */}
            <Box sx={{ flexGrow: 1 }} />

            <Typography variant="caption" sx={{ padding: '16px', textAlign: 'center', color: 'text.secondary' }}>
                More features coming soon...
            </Typography>
        </Box>
    );
};

export default CommunicationDashBoard;
