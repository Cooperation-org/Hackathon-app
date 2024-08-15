import { Box } from '@mui/material'
import Sidebar from '../Component/Sidebar'

function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(14, 1, 30, 1)',
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
        flexDirection: 'column'
      }}
    >
      <Sidebar />
    </Box>
  )
}

export default Dashboard
