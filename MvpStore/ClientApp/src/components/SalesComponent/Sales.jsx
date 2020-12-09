import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Table, Menu, Icon } from "semantic-ui-react";
import CreateSaleModal from "./CreateSaleModal";
import EditSaleModal from "./EditSaleModal";
import DeleteSaleModal from "./DeleteSaleModal";

const Sales = () => {
  const [sales, setsales] = useState([]);
  const [customers, setcustomers] = useState([]);
  const [products, setproducts] = useState([]);
  const [stores, setstores] = useState([]);

  useEffect(() => {
    getSales();
    getCustomers();
    getProducts();
    getStores();
  }, [sales]);

  const getCustomers = () => {
    Axios.get("/Customers/GetCustomer")
      .then((res) => {
        setcustomers(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getSales = () => {
    Axios.get("/Sales/GetSales")
      .then((res) => {
        setsales(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getStores = () => {
    Axios.get("/Stores/GetStore")
      .then((res) => {
        setstores(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getProducts = () => {
    Axios.get("/Products/GetProduct")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const convertISODate = (date) => {
    let newDate = new Date(date);
    let year = newDate.getUTCFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <div className="button">
        <CreateSaleModal
          customers={customers}
          products={products}
          stores={stores}
        />
      </div>
      <div>
        <Table striped celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Store</Table.HeaderCell>
              <Table.HeaderCell>DateSold</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sales.map((sale) => {
              return (
                <Table.Row key={sale.id}>
                  <Table.Cell>{sale.customer.name}</Table.Cell>
                  <Table.Cell>{sale.product.name}</Table.Cell>
                  <Table.Cell>{sale.store.name}</Table.Cell>
                  <Table.Cell>{convertISODate(sale.dateSold)}</Table.Cell>
                  <Table.Cell>
                    <EditSaleModal
                      sale={sale}
                      customers={customers}
                      products={products}
                      stores={stores}
                      convertISODate={convertISODate}
                    />
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
              <Table.HeaderCell colSpan="6">
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
