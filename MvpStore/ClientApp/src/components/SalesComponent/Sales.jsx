import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Table, Menu, Icon } from "semantic-ui-react";
import "./Sales.css";
import CreateSaleModal from "./CreateSaleModal";
import EditSaleModal from "./EditSaleModal";
import DeleteSaleModal from "./DeleteSaleModal";

const Sales = () => {
  const [sales, setsales] = useState([]);

  useEffect(() => {
    Axios.get("/Sales/GetSales")
      .then((res) => {
        setsales(res.data);
      })
      .catch((err) => console.log(err));
  }, [sales]);

  return (
    <div>
      <div className="button">
        <CreateSaleModal />
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
            {sales.map((sale) => {
              return (
                <Table.Row key={sale.id}>
                  <Table.Cell>{sale.name}</Table.Cell>
                  <Table.Cell>{sale.address}</Table.Cell>
                  <Table.Cell>
                    <EditSaleModal sale={sale} />
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteSaleModal sale={sale} />
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

export default Sales;
