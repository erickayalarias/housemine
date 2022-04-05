import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { signOutFirebase } from "../firebase/auth"
import { auth } from "../firebase/config"


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
    <div>Home</div>
      <button onClick={signOutFirebase}>
        Log Out
    </button>
    </>
  )
}
