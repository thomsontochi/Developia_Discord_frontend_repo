import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";
import "react-toastify/dist/ReactToastify.css";
import "../public/custom-toast.css";
import "./styles/vendor-dashboard.css";
import NotFound from "./pages/NotFound";
import GuestRoute from "./routes/GuestRoute";
import VendorRoute from "./routes/VendorRoute";
import AuthRoute from "./routes/AuthRoute";

function App() {
  
  const renderElement = (Component, guardType) => {
    if (!Component) return null;
    
    //console.log('Rendering component with guard type:', guardType || 'None');
    
    // Apply the appropriate guard based on guardType
    if (guardType === 'guest') {
      return <GuestRoute><Component /></GuestRoute>;
    } else if (guardType === 'vendor') {
      return <VendorRoute><Component /></VendorRoute>;
    } else if (guardType === 'auth') {
      return <AuthRoute><Component /></AuthRoute>;
    }
    
    // No guard
    return <Component />;
  };

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
              // Handle parent routes with children
              if (route.children) {
                const ParentComponent = route.element;
                return (
                  <Route 
                    key={route.path} 
                    path={route.path} 
                    element={ParentComponent && <ParentComponent />}
                  >
                    {/* Map through child routes */}
                    {route.children.map((child) => {
                      const ChildComponent = child.element;
                      const guardType = child.guardType;
                      
                      return (
                        <Route
                          key={`${route.path}/${child.path}`}
                          path={child.path}
                          element={renderElement(ChildComponent, guardType)}
                        />
                      );
                    })}
                  </Route>
                );
              }

              // Handle single routes
              const RouteComponent = route.element;
              const guardType = route.guardType;

              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={renderElement(RouteComponent, guardType)}
                />
              );
            })}

            {/* Fallback route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;