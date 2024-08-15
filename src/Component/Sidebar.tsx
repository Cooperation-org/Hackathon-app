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
const drawerWidth = 240

const Array1 = [
  { text: 'Dashboard', icon: <SensorOccupiedOutlinedIcon />, path: '/' },
  { text: 'Candidates', icon: <SensorOccupiedOutlinedIcon />, path: '/team' },
  {
    text: 'Election Result',
    icon: <SensorOccupiedOutlinedIcon />,
    path: '/contacts'
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
  const drawer = (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        width: '28.75vw',
        maxWidth: '414px',
        maxHeight: '1066PX'
      }}
    >
      <Box>
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'center', mr: '-21px' }}>
          <svg width='82' height='36' viewBox='0 0 82 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.0137 0.721236V3.93589H8.13967V15.249H4.10074V3.93589H0.267888V0.721236H12.0137Z'
              fill='white'
            />
            <path
              d='M17.547 5.72868C18.0003 5.06926 18.5498 4.54722 19.1955 4.16256C19.8412 3.7779 20.535 3.58557 21.2768 3.58557V7.89239H20.1434C19.2642 7.89239 18.6117 8.06411 18.1858 8.40756C17.7599 8.751 17.547 9.3486 17.547 10.2003V15.249H13.508V3.68861H17.547V5.72868Z'
              fill='white'
            />
            <path
              d='M34.553 3.68861V15.249H30.4935V13.6005C30.15 14.1225 29.6761 14.5484 29.0716 14.8781C28.4672 15.194 27.7734 15.352 26.9903 15.352C25.644 15.352 24.5794 14.9124 23.7963 14.0332C23.027 13.1402 22.6423 11.9313 22.6423 10.4064V3.68861H26.6606V9.89124C26.6606 10.5507 26.8324 11.0727 27.1758 11.4574C27.533 11.8283 28.0001 12.0137 28.5771 12.0137C29.1678 12.0137 29.6349 11.8283 29.9783 11.4574C30.3218 11.0727 30.4935 10.5507 30.4935 9.89124V3.68861H34.553Z'
              fill='white'
            />
            <path
              d='M41.7767 15.3932C40.7326 15.3932 39.7984 15.2215 38.9741 14.8781C38.1636 14.5209 37.5179 14.0401 37.0371 13.4356C36.57 12.8174 36.309 12.1236 36.254 11.3543H40.1693C40.2243 11.7252 40.396 12.0137 40.6845 12.2198C40.973 12.4259 41.3302 12.5289 41.7561 12.5289C42.0858 12.5289 42.3468 12.4602 42.5391 12.3228C42.7314 12.1855 42.8276 12.0069 42.8276 11.7871C42.8276 11.4986 42.6696 11.2856 42.3536 11.1483C42.0377 11.0109 41.5156 10.8598 40.7875 10.6949C39.9633 10.5301 39.2764 10.3446 38.7269 10.1385C38.1773 9.93246 37.6965 9.59588 37.2844 9.12879C36.886 8.66171 36.6868 8.02977 36.6868 7.23297C36.6868 6.54608 36.8722 5.92788 37.2432 5.37836C37.6141 4.81511 38.1567 4.36863 38.8711 4.03892C39.5992 3.70922 40.4716 3.54436 41.4882 3.54436C42.9993 3.54436 44.1876 3.91528 45.0531 4.65713C45.9186 5.39897 46.42 6.37436 46.5574 7.58329H42.91C42.8413 7.21236 42.6765 6.93074 42.4155 6.73841C42.1682 6.53234 41.8316 6.42931 41.4057 6.42931C41.076 6.42931 40.8219 6.49113 40.6433 6.61477C40.4784 6.73841 40.396 6.91013 40.396 7.12994C40.396 7.40469 40.554 7.61763 40.87 7.76875C41.1859 7.90612 41.6942 8.05037 42.3949 8.20149C43.2329 8.38008 43.9266 8.57928 44.4761 8.79908C45.0394 9.01889 45.5271 9.37607 45.9392 9.87064C46.3651 10.3515 46.578 11.0109 46.578 11.8489C46.578 12.522 46.3788 13.1265 45.9804 13.6623C45.5958 14.1981 45.0394 14.6239 44.3113 14.9399C43.5969 15.2421 42.752 15.3932 41.7767 15.3932Z'
              fill='white'
            />
            <path
              d='M55.3845 11.8077V15.249H53.6329C50.6793 15.249 49.2025 13.7859 49.2025 10.8598V7.04751H47.7806V3.68861H49.2025V0.88609H53.262V3.68861H55.3639V7.04751H53.262V10.9216C53.262 11.2375 53.3307 11.4642 53.4681 11.6016C53.6192 11.739 53.8665 11.8077 54.2099 11.8077H55.3845Z'
              fill='white'
            />
            <path
              d='M68.2823 9.33486C68.2823 9.65083 68.2617 9.9668 68.2204 10.2828H60.5753C60.6165 10.9147 60.7883 11.3887 61.0905 11.7046C61.4065 12.0069 61.8049 12.158 62.2857 12.158C62.9588 12.158 63.4397 11.8558 63.7282 11.2513H68.035C67.8564 12.0481 67.5061 12.7624 66.984 13.3944C66.4757 14.0126 65.8301 14.5003 65.047 14.8575C64.2639 15.2147 63.3985 15.3932 62.4505 15.3932C61.3103 15.3932 60.2937 15.1528 59.4007 14.672C58.5215 14.1912 57.8278 13.5043 57.3195 12.6113C56.8249 11.7184 56.5776 10.6674 56.5776 9.4585C56.5776 8.24957 56.8249 7.20549 57.3195 6.32627C57.814 5.43331 58.5009 4.74642 59.3801 4.2656C60.2731 3.78477 61.2966 3.54436 62.4505 3.54436C63.5908 3.54436 64.6005 3.7779 65.4797 4.24499C66.359 4.71208 67.0459 5.38523 67.5404 6.26445C68.035 7.12994 68.2823 8.15341 68.2823 9.33486ZM64.1609 8.32513C64.1609 7.83057 63.9961 7.44591 63.6663 7.17115C63.3366 6.88266 62.9245 6.73841 62.4299 6.73841C61.9354 6.73841 61.5301 6.87579 61.2141 7.15054C60.8982 7.41156 60.6921 7.80309 60.5959 8.32513H64.1609Z'
              fill='white'
            />
            <path
              d='M69.2757 9.4585C69.2757 8.26331 69.4887 7.21923 69.9145 6.32627C70.3542 5.43331 70.9517 4.74642 71.7073 4.2656C72.4629 3.78477 73.3009 3.54436 74.2214 3.54436C74.9632 3.54436 75.6226 3.70235 76.1996 4.01832C76.7903 4.32055 77.2505 4.73955 77.5803 5.27533V0H81.6398V15.249H77.5803V13.6417C77.2643 14.1774 76.8178 14.6033 76.2408 14.9193C75.6638 15.2353 74.9838 15.3932 74.2007 15.3932C73.2803 15.3932 72.4423 15.1528 71.6867 14.672C70.9449 14.1912 70.3542 13.5043 69.9145 12.6113C69.4887 11.7046 69.2757 10.6537 69.2757 9.4585ZM77.6009 9.4585C77.6009 8.71666 77.3948 8.1328 76.9827 7.70693C76.5843 7.28105 76.0897 7.06812 75.499 7.06812C74.8945 7.06812 74.3931 7.28105 73.9947 7.70693C73.5963 8.11906 73.3971 8.70292 73.3971 9.4585C73.3971 10.2003 73.5963 10.7911 73.9947 11.2307C74.3931 11.6566 74.8945 11.8695 75.499 11.8695C76.0897 11.8695 76.5843 11.6566 76.9827 11.2307C77.3948 10.8048 77.6009 10.2141 77.6009 9.4585Z'
              fill='white'
            />
            <path
              d='M15.2078 21.328L10.2003 35.8558H5.02805L0 21.328H4.32742L7.6245 31.8168L10.901 21.328H15.2078Z'
              fill='white'
            />
            <path
              d='M21.8446 36C20.6906 36 19.6534 35.7596 18.733 35.2788C17.8263 34.7979 17.1119 34.111 16.5899 33.2181C16.0679 32.3251 15.8068 31.2742 15.8068 30.0653C15.8068 28.8701 16.0679 27.826 16.5899 26.933C17.1257 26.0401 17.8469 25.3532 18.7536 24.8724C19.674 24.3915 20.7112 24.1511 21.8652 24.1511C23.0192 24.1511 24.0495 24.3915 24.9562 24.8724C25.8767 25.3532 26.5979 26.0401 27.1199 26.933C27.6557 27.826 27.9236 28.8701 27.9236 30.0653C27.9236 31.2604 27.6557 32.3114 27.1199 33.2181C26.5979 34.111 25.8767 34.7979 24.9562 35.2788C24.0358 35.7596 22.9986 36 21.8446 36ZM21.8446 32.4969C22.4079 32.4969 22.8749 32.2908 23.2459 31.8787C23.6305 31.4528 23.8229 30.8483 23.8229 30.0653C23.8229 29.2822 23.6305 28.6846 23.2459 28.2725C22.8749 27.8603 22.4147 27.6543 21.8652 27.6543C21.3157 27.6543 20.8555 27.8603 20.4846 28.2725C20.1136 28.6846 19.9282 29.2822 19.9282 30.0653C19.9282 30.862 20.1068 31.4665 20.464 31.8787C20.8211 32.2908 21.2814 32.4969 21.8446 32.4969Z'
              fill='white'
            />
            <path
              d='M36.3877 32.4144V35.8558H34.6361C31.6825 35.8558 30.2056 34.3927 30.2056 31.4665V27.6543H28.7838V24.2954H30.2056V21.4928H34.2652V24.2954H36.3671V27.6543H34.2652V31.5283C34.2652 31.8443 34.3339 32.071 34.4712 32.2084C34.6224 32.3457 34.8696 32.4144 35.2131 32.4144H36.3877Z'
              fill='white'
            />
            <path
              d='M49.2854 29.9416C49.2854 30.2576 49.2648 30.5736 49.2236 30.8895H41.5785C41.6197 31.5215 41.7914 31.9954 42.0936 32.3114C42.4096 32.6136 42.808 32.7647 43.2888 32.7647C43.962 32.7647 44.4428 32.4625 44.7313 31.858H49.0381C48.8595 32.6548 48.5092 33.3692 47.9872 34.0011C47.4789 34.6193 46.8332 35.107 46.0501 35.4642C45.2671 35.8214 44.4016 36 43.4537 36C42.3135 36 41.2969 35.7596 40.4039 35.2788C39.5247 34.7979 38.8309 34.111 38.3226 33.2181C37.828 32.3251 37.5808 31.2742 37.5808 30.0653C37.5808 28.8563 37.828 27.8122 38.3226 26.933C38.8172 26.0401 39.5041 25.3532 40.3833 24.8724C41.2762 24.3915 42.2997 24.1511 43.4537 24.1511C44.5939 24.1511 45.6037 24.3847 46.4829 24.8517C47.3621 25.3188 48.049 25.992 48.5436 26.8712C49.0381 27.7367 49.2854 28.7602 49.2854 29.9416ZM45.1641 28.9319C45.1641 28.4373 44.9992 28.0527 44.6695 27.7779C44.3398 27.4894 43.9277 27.3452 43.4331 27.3452C42.9385 27.3452 42.5333 27.4825 42.2173 27.7573C41.9013 28.0183 41.6952 28.4098 41.5991 28.9319H45.1641Z'
              fill='white'
            />
          </svg>
        </Box>

        <List>
          {Array1.map(item => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                sx={{
                  position: 'relative',
                  top: '30px',
                  left: '130px',
                  justifyContent: 'flex-end',
                  pl: 4,
                  py: 1.5,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'rgba(255, 255, 255, 1)', // Matching icon color
                    minWidth: '40px'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '16px',
                    fontWeight: 'medium',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography
        sx={{
          textAlign: 'center',
          color: 'rgba(255, 78, 78, 1)',
          fontSize: '14px',
          fontWeight: '300',
          fontFamily: 'inter'
        }}
      >
        <IconButton>
          <LogoutOutlinedIcon sx={{ color: 'rgba(255, 78, 78, 1)' }} />
        </IconButton>
        Log out
      </Typography>
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
              width: '28.75vw',
              maxWidth: '414px',
              height: '1066px',
              borderRight: '2px solid rgba(255, 255, 255, 0.2)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }
          }}
          open
        >
          {drawer}
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
          borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          jstifyContent: 'space-between'
        }}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search for candidate' inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '12px',
              position: 'absolute',
              top: '80%',
              left: '50%',
              hight: '4.69vh',
              maxHeight: '560px',
              width: '15vw',
              maxWidth: '216px',
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
