import React, { useState } from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

const EditSaleModal = (props) => {
  const { sale, customers, products, stores } = props;
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState(sale.customer.id);
  const [product, setProduct] = useState(sale.product.id);
  const [store, setStore] = useState(sale.store.id);

  const handleChange = (e, input) => {
    switch (input) {
      case "customer":
        setCustomer(e.target.value);
        console.log(customer);
        break;
      case "product":
        setProduct(e.target.value);
        console.log(product);
        break;
      case "store":
        setStore(e.target.value);
        console.log(store);
        break;
      default:
        throw new Error();
    }
  };

  const EditSale = (id) => {
    Axios.put(`/sales/PutSales/${sale.id}`, {
      id: id,
      customerId: customer,
      productId: product,
      storeId: store,
      dateSold: sale.dateSold,
    })
      .then((res) => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="yellow">
          <Icon name="edit"></Icon>Edit
        </Button>
      }
    >
      <Modal.Header>Edit {sale.name}'s Details</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Date Sold</label>
            {/* <input value={currentDate()} disabled /> */}
          </Form.Field>
          <Form.Field>
            <label>Customer</label>
            <select
              value={customer}
              onChange={(e) => handleChange(e, "customer")}
            >
              <option value={sale.customer.id}>{sale.customer.name}</option>
              {customers
                .filter((c) => c.id !== sale.customer.id)
                .map((customer) => {
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
              <option value={sale.product.id}>{sale.product.name}</option>
              {products
                .filter((p) => p.id !== sale.product.id)
                .map((product) => {
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
              <option value={sale.store.id}>{sale.store.name}</option>
              {stores
                .filter((s) => s.id !== sale.store.id)
                .map((store) => {
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
          content="Edit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => EditSale(sale.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditSaleModal;
