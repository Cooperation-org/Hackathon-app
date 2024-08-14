import { alpha, AppBar, Box, Button, Card, CardContent, CardMedia, Grid, InputBase, styled, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Dashboard() {
  return (
  
    
    <Box
    sx={{
      width: '100vh',
      hight :'100%',
      backgroundColor: "rgba(14, 1, 30, 1)",
      
    }}
  
  
  >
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#0A0016' }}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3 }}>
        <Grid container spacing={3} padding={4}>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: 6,
            },
          }}
        >
          {/* <Link href="#" passHref>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 10,
              }}
            >
              <span style={{ display: 'none' }}>Vote</span>
            </Box>
          </Link> */}
          <CardMedia
            component="img"
            image="/placeholder.svg"
            alt="Candidate 1"
            height="200"
            sx={{ objectFit: 'cover', aspectRatio: '500/400' }}
          />
          <CardContent sx={{ bgcolor: 'background.default' }}>
            <Typography variant="h6" component="h3">
              Jill Smith
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1,234 votes
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Vote
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            position: 'relative',

            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: 6,
            },
            
          }}
        >
          {/* <Link href="#" passHref>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 10,
              }}
            >
              <span style={{ display: 'none' }}>Vote</span>
            </Box>
          </Link> */}
          <CardMedia
            component="img"
            image="/placeholder.svg"
            alt="Candidate 1"
            height="200"
            sx={{ objectFit: 'cover', aspectRatio: '500/400' }}
          />
          <CardContent sx={{ bgcolor: 'background.default' }}>
            <Typography variant="h6" component="h3">
              Jill Smith
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1,234 votes
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Vote
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: 6,
            },
          }}
        >
          {/* <Link href="#" passHref>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 10,
              }}
            >
              <span style={{ display: 'none' }}>Vote</span>
            </Box>
          </Link> */}
          <CardMedia
            component="img"
            image="/placeholder.svg"
            alt="Candidate 3"
            height="200"
            sx={{ objectFit: 'cover', aspectRatio: '500/400' }}
          />
          <CardContent sx={{ bgcolor: 'background.default' }}>
            <Typography variant="h6" component="h3">
              Sarah Lee
            </Typography>
            <Typography variant="body2" color="text.secondary">
              654 votes
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Vote
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: 6,
            },
          }}
        >
          {/* <Link href="#" passHref>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 10,
              }}
            >
              <span style={{ display: 'none' }}>Vote</span>
            </Box>
          </Link> */}
          <CardMedia
            component="img"
            image="/placeholder.svg"
            alt="Candidate 4"
            height="200"
            sx={{ objectFit: 'cover', aspectRatio: '500/400' }}
          />
          <CardContent sx={{ bgcolor: 'background.default' }}>
            <Typography variant="h6" component="h3">
              David Kim
            </Typography>
            <Typography variant="body2" color="text.secondary">
              321 votes
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Vote
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
        </Box>
      </Box>
    </Box>
 
  );
}

export default Dashboard;
