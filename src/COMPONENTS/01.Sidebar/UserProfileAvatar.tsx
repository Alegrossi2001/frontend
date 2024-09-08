import React, { useState, MouseEvent } from 'react';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserProfileAvatar: React.FC = () => {
    //Hooks
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const HandleLogout = console.log("Hello");

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
            >
                <MenuItem onClick={handleProfile}>My Profile</MenuItem>
                <MenuItem onClick={handleLeaderboard}>Leaderboard</MenuItem>
                {/*<MenuItem onClick={HandleLogout}>Logout</MenuItem>*/}
            </Menu>
        </>
    );
};

export default UserProfileAvatar;
