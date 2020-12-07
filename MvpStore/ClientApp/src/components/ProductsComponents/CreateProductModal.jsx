import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

const CreateProductModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [price, setPrice] = useState();

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

  const createProduct = () => {
    Axios.post("/products/PostProduct", {
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
      trigger={<Button primary>New Product</Button>}
    >
      <Modal.Header>Create Product</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Your Name"
              onChange={(e) => handleChange(e, "name")}
              name="name"
            />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter Price..."
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
          content="Create"
          labelPosition="right"
          icon="checkmark"
          onClick={createProduct}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default CreateProductModal;
