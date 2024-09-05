import { AppBar, Box, Button, Container } from "@mui/material"
import { useState } from "react"
import AddTaskModal from "./AddTaskModal";

export default function TaskInteractionBar() {
    const navItems = ['ADD TASK', 'ADD PROJECT'];
    const [open, setOpen] = useState(false);


    const OpenTask = () => {
        setOpen(true);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }} onClick={OpenTask}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Container>
            </AppBar>
            <AddTaskModal open={open} handleClose={() => setOpen(false)} />
        </>

    )
}