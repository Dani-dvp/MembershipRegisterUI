import React from "react";
import { Table } from "react-bootstrap";

const CompetitionCard = ({ name, description, winner }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Competition</th>
          <th>Description</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{description}</td>
          <td>{winner}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CompetitionCard;
