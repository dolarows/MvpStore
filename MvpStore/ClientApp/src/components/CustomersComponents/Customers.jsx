import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import { Table, Menu, Icon } from "semantic-ui-react";
import CreateCustomerModal from "./CreateCustomerModal";
import EditCustomerModal from "./EditCustomerModal";
import DeleteCustomerModal from "./DeleteCustomerModal";

const Customers = () => {
  const [customers, setcustomers] = useState([]);
  const mountedRef = useRef(true);

  useEffect(() => {
    getCustomer();
  }, [customers]);

  const getCustomer = () => {
    Axios.get("/Customers/GetCustomer")
      .then((res) => {
        if (!mountedRef.current) return null;
        setcustomers(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="button">
        <CreateCustomerModal />
      </div>
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {customers.map((customer) => {
              return (
                <Table.Row key={customer.id}>
                  <Table.Cell>{customer.name}</Table.Cell>
                  <Table.Cell>{customer.address}</Table.Cell>
                  <Table.Cell>
                    <EditCustomerModal customer={customer} />
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteCustomerModal customer={customer} />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
};

export default Customers;
