import { useRouter } from 'next/router'
import NavBar from './components/inc/Navbar'
import { Button } from '@mui/material'
import Banner from './components/home/banner'
import List from './components/home/list'
import Leaderboard from './components/home/leaderboard'
import Particle from './components/home/particle'
import { Box } from '@mui/system'
import Footer from './components/inc/footer'


export default function Main() {
  const router = useRouter()
  return (
    <div style={{ backgroundColor: '#498EC5', color: 'white' }}>
      <NavBar />
      <Particle style={{ "position": "fixed !important", "backgroundRepeat": "no-repeat !important", "backgroundSize": "cover !important", "width": "100%", "height": "100%" }} />
      <Box m={2} pt={3}>
        <Banner />

        <div
          style={{
            padding: '50px',
            justifyContent: 'space-evenly',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            // height: '100vh',
          }}
        >
          <Button
            onClick={() => router.push('/editor')}
            style={{
              backgroundColor: '#000030',
              color: '#498EC5',
              padding: '3% 5% 3% 5%',
            }}
          >
            Go to Your Daily Challenge
          </Button>{' '}
        </div>

        <Leaderboard />
        <List />
      </Box>
      <Footer />
    </div>
  )
}
