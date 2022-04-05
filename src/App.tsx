import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./components/login";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
