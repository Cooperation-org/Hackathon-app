import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Link,
    InputAdornment,
    IconButton,
    Grid,
    Paper,
    Divider,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";

const SignUpContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    background:
        "linear-gradient(45deg, rgba(0, 0, 0, 1) 5%, rgba(46, 2, 64, 1) 25%, rgba(0, 0, 0, 1) 60%, rgb(46, 2, 64) 75%, rgba(0, 0, 0, 0.3) 100%)",
    padding: theme.spacing(4),
    borderRadius: "10px",
    paddingTop: "10%",
    height: "100vh",
}));

const SignUpBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    borderRadius: "10px",
    height: "auto",
    maxHeight: "80vh",
    overflow: "hidden",
    gap: "40px",
    color: "#fff",
    marginRight: "30%",
    overflowY: "scroll",
}));

const SignUpField = styled(Box)(() => ({
    height: "72px",
    width: "540px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
}));

const SignUpButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    background: "linear-gradient(278.02deg, #E166FF 0%, #B504E1 49.22%)",
    textTransform: "none",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#ff3e76",
    },
}));

const MetaMaskButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: "#00000033",
    border: "1px solid grey",
    textTransform: "none",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#e2761b",
    },
}));

const LabelTypography = styled(Typography)(({ theme }) => ({
    color: "white",
    marginBottom: theme.spacing(1),
    alignSelf: "flex-start",
}));

export const SignUpForm = () => {
    const [fullName, setFullName] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // @TODO: once backend is ready, send API call
    };

    return (
        <SignUpContainer maxWidth={false}>
            <SignUpBox>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ color: "#fff", fontWeight: "bold" }}
                >
                    Create Your Voting Account
                </Typography>
                <Typography
                    component="p"
                    sx={{
                        color: "#b0b0b0",
                        width: "30%",
                        marginBottom: 2,
                        textAlign: "center",
                    }}
                >
                    By creating an account, you’ll be able to cast your vote,
                    receive important election updates.
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <SignUpField>
                        <LabelTypography>Full Name</LabelTypography>
                        <TextField
                            required
                            fullWidth
                            sx={{ marginBottom: "15px", marginTop: "-5px" }}
                            id="fullName"
                            name="fullName"
                            autoComplete="name"
                            autoFocus
                            placeholder="Enter fullname"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            InputProps={{
                                style: {
                                    color: "#fff",
                                    border: "1px solid grey",
                                    borderRadius: "10px",
                                    height: "40px",
                                },
                            }}
                        />
                    </SignUpField>
                    <SignUpField>
                        <LabelTypography>Wallet Address</LabelTypography>
                        <TextField
                            sx={{ marginBottom: "15px", marginTop: "-5px" }}
                            required
                            fullWidth
                            id="walletAddress"
                            name="walletAddress"
                            autoComplete="wallet"
                            value={walletAddress}
                            placeholder="eg: Oxde************456"
                            onChange={(e) => setWalletAddress(e.target.value)}
                            InputProps={{
                                style: {
                                    color: "#fff",
                                    border: "1px solid grey",
                                    borderRadius: "10px",
                                    height: "40px",
                                },
                            }}
                        />
                    </SignUpField>
                    <SignUpField>
                        <LabelTypography>Email Address</LabelTypography>
                        <TextField
                            sx={{ marginBottom: "15px", marginTop: "-5px" }}
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            placeholder="Enter email address"
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                style: {
                                    color: "#fff",
                                    border: "1px solid grey",
                                    borderRadius: "10px",
                                    height: "40px",
                                },
                            }}
                        />
                    </SignUpField>
                    <SignUpField>
                        <LabelTypography>Password</LabelTypography>
                        <TextField
                            sx={{ marginBottom: "15px", marginTop: "-5px" }}
                            required
                            fullWidth
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                style: {
                                    color: "#fff",
                                    border: "1px solid grey",
                                    borderRadius: "10px",
                                    height: "40px",
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: "white" }}
                                            aria-label="toggle password visibility"
                                            onClick={handlePasswordVisibility}
                                            edge="end"
                                        >
                                            <LockOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </SignUpField>
                    <LabelTypography>Confirm Password</LabelTypography>
                    <TextField
                        sx={{ marginBottom: "15px", marginTop: "-5px" }}
                        required
                        fullWidth
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        autoComplete="current-password"
                        value={confirmPassword}
                        placeholder="Renter password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        InputProps={{
                            style: {
                                color: "#fff",
                                border: "1px solid grey",
                                borderRadius: "10px",
                                height: "40px",
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{ color: "white" }}
                                        aria-label="toggle password visibility"
                                        onClick={
                                            handleConfirmPasswordVisibility
                                        }
                                        edge="end"
                                    >
                                        <LockOutlined />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <SignUpButton type="submit" fullWidth variant="contained">
                        Register
                    </SignUpButton>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Divider sx={{ flex: 1, borderColor: "gray" }} />
                        <Typography
                            variant="body2"
                            sx={{ mx: 2, color: "gray" }}
                        >
                            OR
                        </Typography>
                        <Divider sx={{ flex: 1, borderColor: "gray" }} />
                    </Box>
                    <MetaMaskButton
                        fullWidth
                        variant="contained"
                        startIcon={
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                                alt="MetaMask"
                                style={{ width: 24, height: 24 }}
                            />
                        }
                    >
                        Sign up with Metamask
                    </MetaMaskButton>
                    <Grid container justifyContent="flex-start" sx={{ mt: 2 }}>
                        <Link
                            href="#"
                            variant="body2"
                            sx={{ color: "#b0b0b0" }}
                        >
                            Already have an account? Login
                        </Link>
                    </Grid>
                </Box>
            </SignUpBox>
            <Paper
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 100,
                    width: "30%",
                    backgroundImage: `url(https://s3-alpha-sig.figma.com/img/a6a6/62cb/b6415f0df2a062deac64a68fd1fa390e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYuWv9p1MfpMDpPdjQBM8WTzaltJ~c1b~AOfUwCo5aWgk7luU~dHl~I1SVoRzL8Zi~EmEEdTndrzMSgwyxThebCKFtgjsyHq4YCG5mbYHiKi8skSQ6mgCo8cyvMjYdYb7tQ25CJRSFL2EU-rQsq0y5IMdbSH66n05jsfLCHKOl-tR6goEQqjG21qqovDUdImHhCV2Yhxc7d-3Meo93lFHyCmyu~i8fsZsztWWf2hozO8UHIgt5ssVY2HziniPDYVtgdlVzqeUIxvYZzCVBDYMKIsQUTwa-BzzsKfSAdYY0NTYLBg0RHDs4J6lqdgcKWsqyNCE8l~mwUUh~foQQIY9Q__)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                elevation={3}
            />
        </SignUpContainer>
    );
};
