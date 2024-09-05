import React from 'react';
import { Modal, Box, Grid } from '@mui/material';

interface L1ModalProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    height: '70vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
};

const L1Modal: React.FC<L1ModalProps> = ({ open, handleClose, children }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Grid container spacing={2}>
                    {children}
                </Grid>
            </Box>
        </Modal>
    );
};

export default L1Modal;