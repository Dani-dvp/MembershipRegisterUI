import logo from "./logo.svg";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigation/navbar";
import HomePage from "./components/homepage/homepage";
import LoginPage from "./components/loginpage/loginpage";
import { AdminContext } from "./components/context/adminContext";
import "./App.css";
import AdminPage from "./components/adminpage/adminpage";

function App() {
  const [admin, setAdmin] = useState(false);
  return (
    <Router>
      <div className="App">
        <AdminContext.Provider value={{ admin, setAdmin }}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </AdminContext.Provider>
      </div>
    </Router>
  );
}

export default App;
