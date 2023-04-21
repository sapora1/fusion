
import { useRouter } from 'next/router';
import NavBar from './Navbar';



export default function Main() {
    const router = useRouter();
    return (
    <div style={{backgroundColor:'#498EC5', width: '100vw',height:'100vh'}}>
    <NavBar/>
    {/* <button onClick={() => router.push('/Secondpage')}>Go to Home Page</button>
    <button onClick={() => router.push('/Firstpage')}>Go to Home Page</button> */}
    <div >

      </div>
    </div>
    
  );
}


