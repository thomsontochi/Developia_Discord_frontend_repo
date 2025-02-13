import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import { routes } from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
