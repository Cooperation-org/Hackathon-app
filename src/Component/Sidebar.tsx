import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import { Toolbar, Typography, IconButton } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const drawerWidth = 240; 
const Array1 = [
    { text: "Dashboard", icon: <SensorOccupiedOutlinedIcon />, path: "/" },
    { text: "Candidates", icon: <SensorOccupiedOutlinedIcon />, path: "/team" },
    {
        text: "Election Result",
        icon: <SensorOccupiedOutlinedIcon />,
        path: "/contacts",
    },
];

export default function ResponsiveDrawer() {
    const drawer = (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
            <Box>
                <Toolbar />
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'bold',
                        textAlign: 'right',
                        mb: 2,
                        color: 'rgba(255, 255, 255, 1)', // Gold color for the title
                    }}
                >
                    Trusted <br /> Vote
                </Typography>
                <List>
                    {Array1.map((item) => (
                        <ListItem key={item.path} disablePadding>
                            <ListItemButton
                                sx={{
                                    position: 'relative',
                                    top: '30px',
                                    left: '130px',
                                    justifyContent: "flex-end",
                                    pl: 4,
                                    py: 1.5,
                                    borderRadius: 1,
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: "rgba(255, 255, 255, 1)", // Matching icon color
                                        minWidth: "40px",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: "16px",
                                        fontWeight: "medium",
                                        color: "rgba(255, 255, 255, 0.8)",
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
                    fontSize: "14px",
                    fontWeight: '300',
                    fontFamily: 'inter'
                }}
            >
                <IconButton >
                    <LogoutOutlinedIcon sx={{ color: 'rgba(255, 78, 78, 1)', }} />
                </IconButton>
                Log out
            </Typography>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            background: 'linear-gradient(to bottom, rgba(25, 0, 32, 1), rgba(50, 0, 64, 1))',
                            color: 'rgba(255, 255, 255, 1)',
                            width: '414px',
                            height: '1066px',
                            borderRight: '2px solid rgba(255, 255, 255, 0.2)',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* Main content goes here */}
            </Box>
        </Box>
    );
}
