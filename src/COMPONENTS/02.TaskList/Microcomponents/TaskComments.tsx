import { Box, Typography } from "@mui/material";

export default function TaskComments() {
    return (
        <Box sx={{ mt: 'auto', borderTop: '1px solid #ccc', pt: 2 }}>
            <Typography variant="h6">Comments</Typography>
            <Box
                sx={{
                    height: '200px',
                    overflowY: 'auto',
                    '&:hover': {
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,.2)',
                            borderRadius: '4px',
                        },
                    },
                }}
            >
                <div style={{ animation: 'scrollDown 10s linear infinite' }}>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    {/* Add more comments here */}
                </div>
            </Box>
        </Box>
    )
}