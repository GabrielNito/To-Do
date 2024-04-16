import ToDo from "./pages/ToDo";
import Login from "./pages/Login";
import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
