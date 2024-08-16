import React, { useState } from 'react'
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
  Divider
} from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'
import { styled } from '@mui/material/styles'

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  background:
    'linear-gradient(45deg, rgba(0, 0, 0, 1) 5%, rgba(46, 2, 64, 1) 25%, rgba(0, 0, 0, 1) 60%, rgb(46, 2, 64) 75%, rgba(0, 0, 0, 0.3) 100%)',
  padding: theme.spacing(4),
  borderRadius: '10px',
  height: '100vh'
}))

const LoginBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: '10px',
  height: 'auto',
  maxHeight: '80vh',
  overflow: 'hidden',
  gap: '40px',
  color: '#fff',
  marginRight: '30%',
  overflowY: 'scroll'
}))

const LoginField = styled(Box)(() => ({
  height: '75px',
  width: '540px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px'
}))

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(278.02deg, #E166FF 0%, #B504E1 49.22%)',
  textTransform: 'none',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#ff3e76'
  }
}))

const MetaMaskButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#00000033',
  border: '1px solid grey',
  textTransform: 'none',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#e2761b'
  }
}))

const LabelTypography = styled(Typography)(({ theme }) => ({
  color: 'white',
  marginBottom: theme.spacing(1),
  alignSelf: 'flex-start'
}))

export const LoginForm = () => {
  const [walletAddress, setWalletAddress] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // @TODO: once backend is ready, send API call
  }

  return (
    <LoginContainer maxWidth={false}>
      <LoginBox>
        <Typography component='h1' variant='h4' sx={{ color: '#fff', fontWeight: 'bold' }}>
          Login To Your Account
        </Typography>
        <Typography
          component='p'
          sx={{
            color: '#b0b0b0',
            width: '30%',
            marginBottom: 2,
            textAlign: 'center'
          }}
        >
          By signing into your account, you’re granted access to cast your vote.
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <LoginField>
            <LabelTypography>Wallet Address</LabelTypography>
            <TextField
              sx={{ marginBottom: '15px', marginTop: '0px' }}
              required
              fullWidth
              id='walletAddress'
              name='walletAddress'
              autoComplete='wallet'
              value={walletAddress}
              placeholder='eg: Oxde************456'
              onChange={e => setWalletAddress(e.target.value)}
              InputProps={{
                style: {
                  color: '#fff',
                  border: '1px solid grey',
                  borderRadius: '10px',
                  height: '40px'
                }
              }}
            />
          </LoginField>

          <LoginField>
            <LabelTypography>Password</LabelTypography>
            <TextField
              sx={{ marginBottom: '15px', marginTop: '0px' }}
              required
              fullWidth
              name='password'
              type={showPassword ? 'text' : 'password'}
              id='password'
              autoComplete='current-password'
              placeholder='Enter password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              InputProps={{
                style: {
                  color: '#fff',
                  border: '1px solid grey',
                  borderRadius: '10px',
                  height: '40px'
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label='toggle password visibility'
                      onClick={handlePasswordVisibility}
                      edge='end'
                    >
                      <LockOutlined />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </LoginField>
          <LoginButton type='submit' fullWidth variant='contained'>
            Login
          </LoginButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Divider sx={{ flex: 1, borderColor: 'gray' }} />
            <Typography variant='body2' sx={{ mx: 2, color: 'gray' }}>
              OR
            </Typography>
            <Divider sx={{ flex: 1, borderColor: 'gray' }} />
          </Box>
          <MetaMaskButton
            fullWidth
            variant='contained'
            startIcon={
              <img
                src='https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png'
                alt='MetaMask'
                style={{ width: 24, height: 24 }}
              />
            }
          >
            Sign up with Metamask
          </MetaMaskButton>
          <Grid container justifyContent='flex-start' sx={{ mt: 2 }}>
            <Typography
              variant='body2'
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#fff',
                fontSize: '16px',
                lineHeight: '19.36px',
                letterSpacing: '0.02em'
              }}
            >
              Yet to create a voting account?{' '}
              <Link href='/signup' sx={{ color: 'rgba(231, 134, 255, 1)' }} underline='always'>
                Create an account
              </Link>
            </Typography>
          </Grid>
        </Box>
      </LoginBox>
      <Paper
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 100,
          width: '30%',
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/a6a6/62cb/b6415f0df2a062deac64a68fd1fa390e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYuWv9p1MfpMDpPdjQBM8WTzaltJ~c1b~AOfUwCo5aWgk7luU~dHl~I1SVoRzL8Zi~EmEEdTndrzMSgwyxThebCKFtgjsyHq4YCG5mbYHiKi8skSQ6mgCo8cyvMjYdYb7tQ25CJRSFL2EU-rQsq0y5IMdbSH66n05jsfLCHKOl-tR6goEQqjG21qqovDUdImHhCV2Yhxc7d-3Meo93lFHyCmyu~i8fsZsztWWf2hozO8UHIgt5ssVY2HziniPDYVtgdlVzqeUIxvYZzCVBDYMKIsQUTwa-BzzsKfSAdYY0NTYLBg0RHDs4J6lqdgcKWsqyNCE8l~mwUUh~foQQIY9Q__)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        elevation={3}
      />
    </LoginContainer>
  )
}
