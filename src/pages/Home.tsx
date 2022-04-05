import { onAuthStateChanged } from "firebase/auth"
import { signOutFirebase } from "../firebase/auth"
import { auth } from "../firebase/config"


export const Home = () => {
  onAuthStateChanged(auth, (user) => { 
    if (user) { 
      console.log(user);
    } else {
      console.log("no existe el usuario bro")
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
