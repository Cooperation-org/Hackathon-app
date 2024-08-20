import { Dialog, DialogContent, DialogTitle, Typography, Button, Box, IconButton } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Sidebar from '../Component/Sidebar'
import { useNavigate } from 'react-router-dom'

export const ElectionResults = () => {
  const navigate = useNavigate()
  return (
    <>
      <Sidebar />
      <Dialog open={true} onClose={() => navigate('/dashboard')} maxWidth='xs' fullWidth>
        <DialogTitle>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #5c0099, #a64cc8)',
              padding: '1rem',
              position: 'relative'
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                color: '#fff'
              }}
              disabled
            >
              <InfoOutlinedIcon sx={{ fontSize: '40px' }} />
            </IconButton>
            <Typography variant='h5' color='#fff'>
              Election In Progress
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: '#330033',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <Typography variant='body1' gutterBottom>
            Result will be displayed once the election has ended.
          </Typography>
          <Typography variant='body2' gutterBottom>
            Go ahead and cast your vote (if not already).
          </Typography>
          <Button
            variant='contained'
            onClick={() => navigate('/dashboard')}
            sx={{
              background: 'linear-gradient(135deg, #9f00ff, #ff33cc)',
              marginTop: '2rem',
              padding: '0.5rem 2rem',
              fontSize: '1rem',
              color: '#fff'
            }}
          >
            Go back
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
