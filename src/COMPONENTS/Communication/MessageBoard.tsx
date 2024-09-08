import React from 'react';
import { Box, Typography } from '@mui/material';
import MessageBox from './MessageBox';
import { Message } from '../../INTERFACES/Message';
import { useSelector, useStore } from 'react-redux';

export default function MessageBoard() {
    const messages = useSelector((state: any) => state.messages || []);

    console.log(messages);
    return (
        <Box sx={{ height: '100vh', bgcolor: 'background.default', padding: 2 }}>
            <Typography variant="h6">Messages</Typography>
            <Box sx={{ marginTop: 2 }}>
                {messages.map((message: Message, index: number) => (
                    <MessageBox user={message.user} message={message.message} />
                ))}
            </Box>
        </Box>
    )
}