import { Box, Link, Typography } from '@mui/material'

// the footer link
const Footer = () => {
  return (
    <Box
      sx={{
        // position: 'relative',
        zIndex: 1,
        textDecoration: 'underline',
        // width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '34px',
        left: '200px',
        gap: '0px',
        opacity: 1
      }}
    >
      <Typography
        variant='body2'
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19.36px',
          letterSpacing: '0.02em',
          color: '#FFFFFF'
        }}
      >
        View this project on{' '}
        <Link href='https://github.com' sx={{ color: '#e786ff' }} underline='always'>
          Github
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
