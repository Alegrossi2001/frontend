import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface DynamicInputBoxProps {
    label: string;
    type: string;
    value: string;
    onSave: (value: string) => void;
}

const L1DynamicInputBox: React.FC<DynamicInputBoxProps> = ({ label, type, value, onSave }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleSave = () => {
        onSave(inputValue);
    };

    return (
        <Box display="flex" flexDirection="column" mb={3}>
            <TextField
                label={label}
                type={type}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                variant="outlined"
                fullWidth
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ marginTop: '8px' }}
            >
                Save Changes
            </Button>
        </Box>
    );
};

export default L1DynamicInputBox;
