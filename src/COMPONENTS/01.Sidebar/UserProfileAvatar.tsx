import React, { useState, MouseEvent } from 'react';
import { Avatar, Menu, MenuItem, IconButton, ListItem, Divider, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Numbers, Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../REDUX/Reducer';

const UserProfileAvatar: React.FC = () => {
    //Redux
    const userName = useSelector((state: RootState) => state.user.username);
    const equippedBadge = useSelector((state: RootState) => state.user.equippedBadge);
    //Hooks
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        navigate('/user', { replace: true });
    };

    const handleLeaderboard = () => {
        navigate('/leaderboard', { replace: true });
    };

    return (
        <>
            <IconButton onClick={handleClick} size="large">
                <Avatar alt="User Avatar" src="/path-to-avatar-image.jpg" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    style: {
                        width: '300px',
                        padding: '10px',
                    },
                }}
            >
                <ListItem style={{ fontSize: '1.2rem' }}><b>{userName}</b></ListItem>
                <ListItem style={{ fontSize: '1.2rem' }}>Equipped Title: <b>{equippedBadge}</b></ListItem>
                <Divider />
                <Box>

                    <MenuItem onClick={handleProfile} style={{ fontSize: '1rem' }}><Person /> My Profile</MenuItem>
                    <MenuItem onClick={handleLeaderboard} style={{ fontSize: '1rem' }}><Numbers />Leaderboard</MenuItem>
                    {/*<MenuItem onClick={HandleLogout} style={{ fontSize: '1.1rem' }}>Logout</MenuItem>*/}
                </Box>
            </Menu>
        </>
    );
};

export default UserProfileAvatar;
