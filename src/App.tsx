import ToDo from "./pages/ToDo";
import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Login";
// import { DB } from "./api/server";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   DB();
  // }, []);

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
