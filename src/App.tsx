import ToDo from "./pages/ToDo";
import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
