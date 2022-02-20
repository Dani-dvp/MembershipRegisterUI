import React from "react";
import { Table } from "react-bootstrap";

const CustomerCard = ({ firstName, lastName, paid }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Has paid for</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{paid}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomerCard;
