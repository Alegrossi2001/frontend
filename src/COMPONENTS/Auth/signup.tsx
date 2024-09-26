import React, { useState } from 'react';
import { Container, Box, Avatar, Typography, TextField, Button, Link as MuiLink, Grid, IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useSignupUser } from '../../HOOKS/UseSignupUser';

const Signup: React.FC = () => {


    const [email, setEmail] = useState('');
    const [validateEmail, setValidateEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const signupUser = useSignupUser();

    //Snackbar for errors and redirect to signin

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (email !== validateEmail) {
                throw new Error("Emails do not match");
            }
            else {
                const response = await signupUser(email, password, username, "user");
                console.log(response);
            }
        }
        catch (error) {
            console.error(error);
        }
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
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="validateEmail"
                        label="Validate Email Address"
                        name="validateEmail"
                        autoComplete="email"
                        autoFocus
                        value={validateEmail}
                        onChange={(e) => setValidateEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <MuiLink component={Link} to="/signin" variant="body2">
                                {"Already have an account? Sign In"}
                            </MuiLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 2,
                }}
            >
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
            </Box>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <MuiLink color="inherit" href="https://yourwebsite.com/">
                    Your Website
                </MuiLink>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Container>
    );
};

export default Signup;
