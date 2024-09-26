import React from 'react';
import { Container, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Link, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useSigninUser } from '../../HOOKS/UseSignin';
import { useState } from 'react';
import DynamicSnackbar from '../../REUSABLES/L1Snackbar';

const Signin: React.FC = () => {

    //Hooks and variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signinUser = useSigninUser(); // Correctly using the custom hook here
    const navigate = useNavigate();
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [message, setMessage] = useState("User signed in successfully!");
    const [severity, setSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('success');

    //Handle snackbar - move to a separate file
    const handleShowSnackbar = (msg: string, type: 'success' | 'error' | 'warning' | 'info') => {
        setMessage(msg);
        setSeverity(type);
        setShowSnackbar(true);
    };

    //Handle login - create custom snackbars for errors and success
    const SetLogin = async (e: React.FormEvent) => {
        e.preventDefault();  // Prevent default form submission
        //Here we we check if the email call is successful. If not, we will show an error message to the user.
        try {
            const response = await signinUser(email, password);
            console.log(response);
            if (!response) {
                throw new Error('An unknown error occurred');
            }
            if (response.status === 200) {
                handleShowSnackbar("User signed in successfully!", 'success');
                //wait one second before redirecting to the home page
                setTimeout(() => {
                    navigate('/'); // Redirect after signing in
                }, 1000);
            }
            else {
                throw new Error(response.message);

            }
        }
        catch (error) {
            if (error instanceof Error) {
                handleShowSnackbar(error.message, 'error');
            } else {
                handleShowSnackbar('An unknown error occurred x2', 'error');
            }
        }

    };

    const handleNavigate = (nav: string) => {
        navigate(nav, { replace: true });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="button"  // This disables default form submission behavior
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={SetLogin}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={() => handleNavigate('/signup')}>

                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://yourwebsite.com/">
                    Link1 Manager
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            {/* Conditionally render the DynamicSnackbar */}
            {showSnackbar && <DynamicSnackbar message={message} severity={severity} />}
        </Container>
    );
}

export default Signin;