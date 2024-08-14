<<<<<<< HEAD
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'

function Navbar() {
  return (
    <AppBar
      sx={{
        alignSelf: 'stretch',
        position: 'relative',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none',
        backdropFilter: 'blur(24px)',
        padding: '9px 20px',
        width: '72.222vw',
        maxWidth: '1040px',
        minWidth: '620px',
        height: '80px',
        marginTop: '25px',
        boxSizing: 'border-box',
        letterSpacing: '0.02em',
        fontWeight: 500
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            color: ' rgba(255, 255, 255, 1)',
            padding: '1px'
          }}
        >
          Trusted <br /> Vote
        </Typography>

        <Box
          sx={{
            display: 'flex',
            width: '465px',
            height: '58px',
            padding: '6px 7px',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <Link
            href='#'
            underline='none'
            sx={{
              width: '100px',
              height: '17px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: '16.94px',
              letterSpacing: '2%',
              color: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            Candidates
          </Link>
          <Link
            href='#'
            underline='none'
            sx={{
              width: '150px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: '16.94px',
              letterSpacing: '2%',
              color: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            Election Results
          </Link>
          <Button
            variant='contained'
            sx={{
              borderRadius: '8px',
              border: '2px solid',
              gap: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '196px',
              height: '24px',
              padding: '21px 30px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              background: 'linear-gradient(90deg, rgba(225, 102, 255, 1) 0%, rgba(181, 4, 225, 1) 100%)'
            }}
          >
            Get Involved
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
=======
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

function Navbar() {
    return (
        <AppBar
            sx={{
                background: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                width: "1040px", // Fixed width
                height: "80px", // Hug height
                borderRadius: "20px", // Border radius for rounded corners
                margin: "auto",
                border: "1px solid", // Border with 1px thickness
                display: "flex", // Flexbox layout
                justifyContent: "space-between", // Space between child elements
                padding: "11px", // Padding (top-right-bottom-left)
                boxSizing: "border-box", // Ensure padding is included in the width/height
                top: "40px",
                left: "200px",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        color: " rgba(255, 255, 255, 1)",
                        padding: "1px",
                    }}
                >
                    Trusted <br /> Vote
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        width: "465px", // Fixed width (Hug)
                        height: "58px", // Fixed height (Hug)
                        padding: "6px 7px", // Padding (top-right-bottom-left)
                        gap: "40px", // Space between elements
                        alignItems: "center",
                    }}
                >
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            width: "100px",
                            hight: "17px",
                            fontFamily: "Inter, sans-serif", // Set the font family to Inter
                            fontWeight: 300, // Set the font weight to 300
                            fontSize: "14px", // Set the font size to 14px
                            lineHeight: "16.94px", // Set the line height to 16.94px
                            letterSpacing: "2%",
                            color: "rgba(255, 255, 255, 0.5)", // Set the letter spacing to 2%
                        }}
                    >
                        Candidates
                    </Link>
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            width: "150px", // زيادة العرض
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 300,
                            fontSize: "14px",
                            lineHeight: "16.94px",
                            letterSpacing: "2%",
                            color: "rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        Election Results
                    </Link>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "8px",
                            border: "2px solid",
                            gap: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "196px",
                            height: "24px",
                            padding: "21px 30px",
                            fontSize: "14px",
                            fontWeight: "500",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            background:
                                "linear-gradient(90deg, rgba(225, 102, 255, 1) 0%, rgba(181, 4, 225, 1) 100%)", // التدرج اللوني
                            // Button shadow for emphasis
                        }}
                    >
                        Get Involved
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
>>>>>>> aa4ec6a5537e3183283292bb290c79aba6be9e9f
