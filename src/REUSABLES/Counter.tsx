import React from 'react';
import { Typography, Box } from '@mui/material';

interface CounterProps {
    count: number;
    label: string;
}

const Counter: React.FC<CounterProps> = ({ count, label }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h2" component="div">
                {count}
            </Typography>
            <Typography variant="h6" color="textSecondary">
                {label}
            </Typography>
        </Box>
    );
};

export default Counter;