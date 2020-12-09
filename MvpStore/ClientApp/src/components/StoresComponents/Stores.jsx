import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Table, Menu, Icon } from "semantic-ui-react";
import CreateStoreModal from "./CreateStoreModal";
import EditStoreModal from "./EditStoreModal";
import DeleteStoreModal from "./DeleteStoreModal";

const Stores = () => {
  const [stores, setstores] = useState([]);

  useEffect(() => {
    Axios.get("/Stores/GetStore")
      .then((res) => {
        setstores(res.data);
      })
      .catch((err) => console.log(err));
  }, [stores]);

  return (
    <div>
      <div className="button">
        <CreateStoreModal />
      </div>
      <div>
        <Table striped celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {stores.map((store) => {
              return (
                <Table.Row key={store.id}>
                  <Table.Cell>{store.name}</Table.Cell>
                  <Table.Cell>{store.address}</Table.Cell>
                  <Table.Cell>
                    <EditStoreModal store={store} />
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteStoreModal store={store} />
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

export default Stores;
