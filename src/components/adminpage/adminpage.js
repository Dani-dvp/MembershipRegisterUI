import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CustomerCard from "../customercard/customer-card";
import "./adminpage.css";

const AdminPage = () => {
  const [customerData, setCustomerData] = useState([]);

  const getCustomerData = () => {
    axios
      .get(`http://localhost:5296/Customer`)
      .then((response) => {
        setCustomerData(response.data, console.log(response.data));
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  const displayCustomers = customerData.map((customerData) => {
    return (
      <CustomerCard
        firstName={customerData.firstName}
        lastName={customerData.lastName}
        paid={customerData.paidFor}
      />
    );
  });
  return (
    <Container className="adminpage">
      <h1>{displayCustomers}</h1>
    </Container>
  );
};

export default AdminPage;
