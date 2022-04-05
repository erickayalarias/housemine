import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./components/login";
import { Home } from "./pages/Home";
import { lightTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme} >
      <CssBaseline />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
