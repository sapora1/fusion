import { useRouter } from "next/router";
import NavBar from "./Navbar";
import { Button } from "@mui/material";

export default function Main() {
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: "#498EC5", width: "100vw", minHeight: "100vh" }}
    >
      <NavBar />
     
      <div style={{justifyContent: 'space-evenly',display:'flex',alignItems:'center',width:'100%',height:'100vh'}}> 
    <Button onClick={() => router.push('/Secondpage')} style={{backgroundColor:'#000030', color:'#498EC5',padding:'3% 5% 3% 5%'}}>
      Go to Your Daily Challenge</Button> </div>
    </div>
  );
}
