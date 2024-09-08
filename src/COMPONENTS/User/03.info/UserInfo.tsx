import L1DynamicInputBox from "../../../REUSABLES/L1SingleFormBox";
import { Box } from "@mui/material";
export default function UserInfo() {
    return (
        <Box>
            <L1DynamicInputBox label="Username" type="text" value="Username" onSave={() => { console.log('Username saved') }} />
            <L1DynamicInputBox label="Email" type="email" value="Email" onSave={() => { console.log('Email saved') }} />
            <L1DynamicInputBox label="Password" type="password" value="Password" onSave={() => { console.log('Password saved') }} />
        </Box>
    )
}
