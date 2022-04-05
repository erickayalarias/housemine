import { Grid } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { CardText } from "../components/card"
import { NavBar } from "../components/navBar/Navbar"
import { SearchBar } from "../components/search/SearchBar"
import { auth } from "../firebase/config"
// json-server --watch json/Basic.json;

export const Home = () => {
  const navigate = useNavigate()
  onAuthStateChanged(auth, (user) => { 
    if (user) { 
      console.log(user);
    } else {
      navigate("/login")
    }
  })
    
  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={2} md={6} xl={2} >
       <CardText />
        </Grid>
        <Grid item xs={2} md={6} xl={2} >
         <SearchBar/>
        </Grid>
        </Grid>
      
    </>
  )
}
