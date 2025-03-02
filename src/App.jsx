// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { routes } from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary"; // Add this
import "react-toastify/dist/ReactToastify.css";
import "../public/custom-toast.css";
import './styles/vendor-dashboard.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
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
            {routes.map((route) => {
              if (route.children) {
                return (
                  <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.children.map((child) => (
                      <Route
                        key={child.path}
                        path={child.path}
                        element={
                          child.guard ? (
                            <child.guard>
                              <child.element />
                            </child.guard>
                          ) : (
                            <child.element />
                          )
                        }
                      />
                    ))}
                  </Route>
                );
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    route.guard ? (
                      <route.guard>
                        <route.element />
                      </route.guard>
                    ) : (
                      <route.element />
                    )
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;