import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./components/login";
import { DashBoard } from "./pages/DashBoard";
import { Home } from "./pages/Home";
import ProviderGlobal from "./redux/Provider";
import { lightTheme } from "./themes";
function App() {
    
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <ProviderGlobal>
                <Routes>
                    {/* {<NavBar />} */}
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </ProviderGlobal>
        </ThemeProvider>
    );
}

export default App;
