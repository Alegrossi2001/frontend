import React from 'react';
import { Grid } from '@mui/material';
import CommunicationDashBoard from './CommunicationDashBoard';
import MessageBoard from './MessageBoard';
import Chatbox from './Chatbox';

const CommunicationLayout: React.FC = () => {
    return (

        <Grid container direction="column" style={{ height: '100vh' }}>
            {/* Sidebar or Communication Dashboard */}
            <Grid item>
                <CommunicationDashBoard />
            </Grid>

            {/* Messages Box */}
            <Grid item style={{ flex: 1 }}>
                <MessageBoard />
            </Grid>

            <Grid item style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
                <Chatbox></Chatbox>
            </Grid>

        </Grid>
    );
};

export default CommunicationLayout;