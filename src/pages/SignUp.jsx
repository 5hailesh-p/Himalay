import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Container, IconButton, InputAdornment, TextField, Link, Typography } from '@mui/material'
import { useState } from 'react'
const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [showCPass, setShowCPass] = useState(false);
    const [cpassword, setCPassword] = useState('');
    const handleClickShowPassword = () => setShowPass(!showPass);
    const handleClickShowCPassword = () => setShowCPass(!showCPass);
    const handleMouseDownPassword = (event) => {
        event.preventDefault(); // prevents focus loss
    };

    const handelName = (e) => {
        setName(e.target.value);
    }
    const handelPass = (e) => {
        setPassword(e.target.value);
    }
    const handelCPass = (e) => {
        setCPassword(e.target.value);

    }
    return (
        <>
            <video autoPlay muted loop playsInline style={{ maxWidth: "100%", minWidth: "100%", minHeight: "100vh", maxHeight: "100vh", overflow: "hidden", objectFit: "cover" }}>
                <source src="/videos/bg-v.mp4" type="video/mp4" />
            </video>
            <Container maxWidth="xl" sx={{ display: "grid", placeItems: "center", minHeight: "100vh", position: "absolute", top: 0, left: 0, width: "100%", borderImage: "fill 0 radial-gradient(at center, #f9f9f900, #00000070)" }}>
                <Box sx={{
                    width: 300,
                    mx: 'auto',
                    my: 4,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    backdropFilter: "blur(10px)",
                    background: "#4a46465c",
                }}>
                    <div>
                        <Typography variant="h4" component="h1">
                            <b>Create !</b>
                        </Typography>
                        <Typography variant="h5">Your New Account .</Typography>
                    </div>

                    <TextField type="text" id="uname" label="UserID" variant="outlined" value={name} onChange={handelName} fullWidth />
                    <TextField type={showPass ? 'text' : 'password'} id="pass" label="Password" variant="outlined" value={password} onChange={handelPass} fullWidth InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPass ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }} />
                    <TextField type={showCPass ? 'text' : 'password'} id="cpass" label="Confirm Password" variant="outlined" value={cpassword} onChange={handelCPass} fullWidth InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleClickShowCPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showCPass ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }} />

                    <Button sx={{ mt: 1 }} variant="contained">Sign up</Button>

                    <Typography variant="body2" align="center">
                        Don&apos;t have an account? <Link component={RouterLink} to="/sign-in">Sign in</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default SignUp
