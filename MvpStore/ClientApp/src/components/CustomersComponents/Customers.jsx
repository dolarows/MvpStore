import React from "react";
import { Button, Table, Pagination } from "semantic-ui-react";
import "./Customer.css";

const Customers = () => {
  return (
    <div>
      <div className="button">
        <Button primary>Add Customer</Button>
      </div>
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Pagination
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={3}
            />
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
};

export default Customers;
