import React, { useState } from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

const EditProductModal = (props) => {
  const { product } = props;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleChange = (e, input) => {
    switch (input) {
      case "name":
        setName(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      default:
        throw new Error();
    }
  };

  const EditProduct = (id) => {
    Axios.put(`/products/PutProduct/${product.id}`, {
      id: id,
      name: name,
      price: price,
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
      <Modal.Header>Edit {product.name}'s Details</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => handleChange(e, "name")}
            />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input
              type="number"
              step=".01"
              placeholder="Enter Price..."
              value={price}
              onChange={(e) => handleChange(e, "price")}
            />
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
          onClick={() => EditProduct(product.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditProductModal;
