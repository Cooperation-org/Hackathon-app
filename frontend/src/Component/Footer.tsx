import { Box, Link, Typography } from '@mui/material'

// the footer link
const Footer = () => {
  return (
    <Box
      sx={{
        height: '19px',
        position: 'absolute',
        bottom: '40px',
        left: '20%'
      }}
    >
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
        View this project on{' '}
        <Link href='https://github.com' sx={{ color: 'rgba(231, 134, 255, 1)' }} underline='always'>
          Github
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
