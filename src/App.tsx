import ToDo from "./pages/ToDo";
import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn variant="login" />} />
          <Route path="/signin" element={<LogIn variant="signin" />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
