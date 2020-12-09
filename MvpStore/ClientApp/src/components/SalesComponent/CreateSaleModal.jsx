import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

const CreateSaleModal = (props) => {
  const [open, setOpen] = useState(false);
  const { customers, products, stores } = props;
  const [customer, setCustomer] = useState();
  const [product, setProduct] = useState();
  const [store, setStore] = useState();

  const createSale = () => {
    Axios.post("/sales/PostSales", {
      customerId: customer,
      productId: product,
      storeId: store,
    })
      .then((res) => {
        setOpen(false);
        setProduct("");
        setStore("");
        setCustomer("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e, input) => {
    switch (input) {
      case "customer":
        setCustomer(e.target.value);
        break;
      case "product":
        setProduct(e.target.value);
        break;
      case "store":
        setStore(e.target.value);
        break;
      default:
        throw new Error();
    }
  };

  const currentDate = () => {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    return `${day}/${month}/${year}`;
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>New Sale</Button>}
    >
      <Modal.Header>Create Sale</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Date Sold</label>
            <input value={currentDate()} disabled />
          </Form.Field>
          <Form.Field>
            <label>Customer</label>
            <select
              value={customer}
              onChange={(e) => handleChange(e, "customer")}
            >
              <option value=""></option>
              {customers.map((customer) => {
                return (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                );
              })}
            </select>
          </Form.Field>
          <Form.Field>
            <label>Product</label>
            <select
              value={product}
              onChange={(e) => handleChange(e, "product")}
            >
              <option value=""></option>
              {products.map((product) => {
                return (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                );
              })}
            </select>
          </Form.Field>
          <Form.Field>
            <label>Store</label>
            <select value={store} onChange={(e) => handleChange(e, "store")}>
              <option value=""></option>
              {stores.map((store) => {
                return (
                  <option key={store.id} value={store.id}>
                    {store.name}
                  </option>
                );
              })}
            </select>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Create"
          labelPosition="right"
          icon="checkmark"
          onClick={() => createSale()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default CreateSaleModal;
