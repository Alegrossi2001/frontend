import { Snackbar } from '@mui/material';
import React from 'react';
import { Box } from '@mui/material';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import { AlertColor, Alert } from '@mui/material';
import { useState, useEffect } from 'react';
interface DynamicSnackbarProps {
    message: string;
    severity?: AlertColor;  // 'success' | 'error' | 'warning' | 'info'
}

const DynamicSnackbar: React.FC<DynamicSnackbarProps> = ({
    message,
    severity = 'info',  // Default severity is 'info'
}) => {
    const [open, setOpen] = useState(true); // Manages its own open state

    // Auto-close the snackbar after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 5000);

        return () => clearTimeout(timer);  // Cleanup the timer on unmount
    }, []);

    // Handles manual close when the user clicks close button or Snackbar closes automatically
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default DynamicSnackbar;