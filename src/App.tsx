import ToDo from "./pages/ToDo";
import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Login";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn variant="login" />} />
          <Route path="/signin" element={<LogIn variant="signin" />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
