import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import store from '../../REDUX/00.Store/store';
import { Message } from '../../INTERFACES/Message';

export default function Chatbox() {
    const [message, setMessage] = useState<string>();

    const handleSendMessage = () => {
        if (message) {
            const hardcodedMessage: Message = {
                id: '1',
                user: 'Jane Doe',
                message: message,
                recipient: 'John Doe',
                time: new Date().toISOString(),
                read: false,
                attachments: ['attachment1', 'attachment2']
            };

            store.dispatch({
                type: 'sentMessage',
                payload: hardcodedMessage,
            });

            console.log('Message sent:', message);
            console.log(store.getState());
        }
        else {
            console.log('No message to send');
        }
        //Send message to redux

        //Clear the message input
        setMessage('');
        //Logs the message to the console

    };

    return (
        <Box display="flex" alignItems="center">
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSendMessage();
                    }
                }}
                style={{ marginRight: '8px' }}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                Send
            </Button>
        </Box>
    )
}