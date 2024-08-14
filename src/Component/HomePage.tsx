import { Box, Button, Typography } from '@mui/material'
import BackgroungImg from '../assets/BackGround.svg'
import Image1 from '../assets/image 3.svg'
import Image2 from '../assets/image 4.svg'
import Navbar from './Navbar'
import Footer from './Footer'

function HomePage() {
  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          margin: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
          backgroundImage: `url(${BackgroungImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover'
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            right: 'auto',
            left: 'auto'
          }}
        >
          <Navbar />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '208px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              color: '#FFFFFF',
              flexDirection: 'column'
            }}
          >
            <Box>
              <Typography
                variant='h1'
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '60px',
                  lineHeight: '80px',
                  textAlign: 'center'
                }}
              >
                Empower Your <br /> Vote With{' '}
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '60px',
                    lineHeight: '80px',
                    textAlign: 'center',
                    background: 'linear-gradient(94.67deg, #e07efa, #fff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                    //   padding: '8px'
                  }}
                >
                  Trust
                </span>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: '-15px',
                marginLeft: '205px',
                position: 'relative'
              }}
            >
              <Typography
                sx={{
                  fontWeight: '200',
                  fontSize: '12px'
                }}
              >
                Powered by:{' '}
                <span
                  style={{
                    color: 'rgba(231, 134, 255, 1)',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}
                >
                  HEDERA BLOCKCHAIN
                </span>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '37.847vw',
              minWidth: '503px',
              maxWidth: '527px',
              marginTop: '25px',
              padding: '0'
              //   height: 'auto'
            }}
          >
            <Typography
              variant='body1'
              paragraph
              sx={{
                color: 'rgba(255, 255, 255, 1)',
                fontWeight: '400',
                fontSize: '16px',
                marginBottom: '0px'
              }}
            >
              Experience secure, transparent, and efficient voting like never before. Our system leverages Hedera
              codebase technology to ensure every vote is accurately counted and tamper-proof, giving you the trust you
              deserve in every election.
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'relative',
              top: '42px',
              display: 'inline-block',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button
              variant='contained'
              sx={{
                flex: '1',
                borderRadius: '8px',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '11px 56px 11px 56px',
                gap: '10px',
                whiteSpace: 'nowrap',
                zIndex: 2,
                textAlign: 'center',
                color: '#FFFFFF',
                // width: '196px',
                // height: '24px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                background: 'linear-gradient(-81.98deg, #e166ff, #b504e1)'
              }}
            >
              <Typography sx={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '100' }}>
                Get Involved
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              width: '145.4px',
              height: '145.4px',
              position: 'absolute',
              margin: 0,
              top: '197px',
              right: '113.6px',
              objectFit: 'contain',
              zIndex: 1
            }}
          >
            <img src={Image1} alt='cryptocoin1' />
          </Box>
          <Box
            sx={{
              width: '170px',
              height: '170px',
              position: 'absolute',
              margin: 0,
              bottom: '96px',
              left: '85px',
              objectFit: 'contain',
              zIndex: 1
            }}
          >
            <img src={Image2} alt='cryptocoin2' />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
