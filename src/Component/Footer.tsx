import { Box, Link, Typography } from '@mui/material';



// the footer link
const Footer = () => {
    return (
        <Box
            sx={{

                    width: '214px',            
                    height: '19px',            
                    position: 'absolute',       
                    top: '1013px',              
                    left: '200px',             
                    gap: '0px',                
                    opacity: 1,                 
                  }}
           
        >
            <Typography variant="body2" sx={{
    fontFamily: 'Inter, sans-serif', 
    fontWeight: 400,                  
    fontSize: '16px',                
    lineHeight: '19.36px',          
    letterSpacing: '0.02em',          
  }}>
                View this project on{' '}
                <Link href="https://github.com" sx={{color:'rgba(231, 134, 255, 1)'}} underline="always">
                    Github
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
