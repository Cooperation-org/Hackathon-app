import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined'
import { Toolbar, Typography, IconButton, styled, InputBase, AppBar, Avatar } from '@mui/material'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useNavigate } from 'react-router-dom'
const drawerWidth = 240

const Array1 = [
  { text: 'Dashboard', icon: <SensorOccupiedOutlinedIcon />, path: '/dashboard' },
  { text: 'Candidates', icon: <SensorOccupiedOutlinedIcon />, path: '/candidates' },
  {
    text: 'Election Result',
    icon: <SensorOccupiedOutlinedIcon />,
    path: '/electionResults'
  }
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  left: '200px',
  top: '50px',
  borderRadius: '8px',
  border: '1px solid #808080',
  height: '62px',
  marginLeft: 0,
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '24.028vw',
    maxWidth: '346px'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255, 255, 255, 1)'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 1)',
  width: '100%',
  height: '100%',
  left: '8px',
  fontSize: '14px',
  fontWeight: '300',
  fontFamily: 'Inter',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%'
      }
    }
  }
}))

export default function ResponsiveDrawer() {
  const navigate = useNavigate()

  const drawer = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box>
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
        </Box>
        <Box
          sx={{
            display: 'flex'
          }}
        >
          <List style={{ marginTop: '20px' }}>
            {Array1.map(item => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton style={{ marginLeft: '75%' }} onClick={() => navigate(item.path)}>
                  <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 1)' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              background: 'linear-gradient(to bottom, rgba(25, 0, 32, 1), rgba(50, 0, 64, 1))',
              color: 'rgba(255, 255, 255, 1)',
              borderRight: '2px solid rgba(255, 255, 255, 0.2)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minWidth: '100px',
              p: 2,
              width: 'calc(100vw - 80%)'
            }
          }}
          open
        >
          {drawer}

          <Typography
            sx={{
              color: 'rgba(255, 78, 78, 1)',
              fontSize: '14px',
              fontWeight: '300',
              fontFamily: 'inter',
              textAlign: 'center'
            }}
            onClick={() => navigate('/login')}
          >
            <IconButton>
              <LogoutOutlinedIcon sx={{ color: 'rgba(255, 78, 78, 1)' }} />
            </IconButton>
            Logout
          </Typography>
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
      </Box>

      <AppBar
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(14, 1, 30, 1)',
          height: '150px',
          width: '71.250vw',
          borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Toolbar>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search for candidate' inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '12px',
              position: 'absolute',
              top: '80%',
              left: '50%',
              height: '4.69vh',
              maxHeight: '560px',
              width: '15vw',
              gap: '10px'
            }}
          >
            {/* Avatar */}
            <Avatar sx={{ bgcolor: '#B0B0B0', marginRight: '12px' }}>UE</Avatar>

            {/* User Information */}
            <Box sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  maxWidth: '124px',
                  width: '8.857vw',
                  height: '20px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                <Typography variant='body1' sx={{ color: '#FFFFFF', fontWeight: '400' }}>
                  Umoren Emmanuel
                </Typography>
              </Box>

              <Typography variant='body2' sx={{ color: '#9E9E9E' }}>
                Oxde*************456
              </Typography>
            </Box>

            {/* Copy Icon */}
            <IconButton sx={{ color: '#e18eff' }}>
              <ContentCopyIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
