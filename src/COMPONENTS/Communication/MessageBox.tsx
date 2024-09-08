import { Box, Typography } from '@mui/material';

interface MessageBoxProps {
    user: string;
    message: string;
}

export default function MessageBox({ user, message }: MessageBoxProps) {
    return (
        <Box>
            <Typography style={{ wordWrap: 'break-word', maxWidth: '100ch' }}>
                {user}: {message}
            </Typography>
        </Box>
    )
}