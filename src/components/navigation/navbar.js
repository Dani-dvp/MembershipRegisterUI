import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/adminContext";
import "../navigation/navbar.css";

const NavBar = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  return (
    <div className="navigationbar">
      <Button
        variant="dark"
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </Button>
      {admin == true ? (
        <div>
          <Button
            variant="dark"
            onClick={() => {
              setAdmin(false);
              alert("You have successfully logged out");
            }}
          >
            Logout
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Admin Page
          </Button>
        </div>
      ) : (
        <Button
          variant="dark"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default NavBar;
