import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>Go to Home</Button>
        </div>
    )
}