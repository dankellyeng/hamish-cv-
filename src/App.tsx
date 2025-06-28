import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box textAlign="center">
        <Avatar
          src="/profile.jpg"
          alt="Hamish"
          sx={{ width: 200, height: 200, margin: '0 auto', mb: 2 }}
        />
        <Typography variant="h4" component="h1">
          hi, I'm Hamish, please hire me
        </Typography>
      </Box>
    </Container>
  )
}

export default App
