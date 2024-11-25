import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";
import EmployeeManagementApp from "./Random/EmployeeManagementApp";
import EmployeeDetails from "./Random/EmployeeDetails";
import Navbar from "./components/dashboard/Navbar";

function App() {
  return (
    <BrowserRouter>
      <RouteWithNavbar />
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/employee"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["admin", "employee"]}>
                <EmployeeManagementApp />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        />

        {/* Employee Details (accessible after authentication) */}
        <Route
          path="/employee/:id"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["admin", "employee"]}>
                <EmployeeDetails />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Component to conditionally render Navbar based on the route
function RouteWithNavbar() {
  const location = useLocation();

  // Only show the Navbar if the current pathname is NOT '/login'
  const shouldShowNavbar = location.pathname !== "/login";

  return (
    <>
      {shouldShowNavbar && <Navbar />}
    </>
  );
}

export default App;