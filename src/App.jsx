import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import { routes } from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../public/custom-toast.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />


        <Routes>
          {routes.map(({ path, element: Element, guard: Guard }) => (
            <Route
              key={path}
              path={path}
              element={
                Guard ? (
                  <Guard>
                    <Element />
                  </Guard>
                ) : (
                  <Element />
                )
              }
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
