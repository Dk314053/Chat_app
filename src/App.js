import Registration from "./Component/Registration";
import './App.css'
import Login from "./Component/Login";
import Home from "./Component/Home";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contextApi/AuthContext";

function App() {
  const {currentUser}=useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;