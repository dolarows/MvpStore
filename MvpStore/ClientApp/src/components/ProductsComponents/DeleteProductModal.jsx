import React, { useState } from "react";
import { Header, Button, Icon, Modal } from "semantic-ui-react";
import Axios from "axios";

const DeleteProductModal = (props) => {
  const { product } = props;
  const [open, setOpen] = useState(false);

  const DeleteProduct = (id) => {
    Axios.delete(`/products/DeleteProduct/${product.id}`)
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
        <Button color="red">
          <Icon name="trash"></Icon>Delete
        </Button>
      }
    >
      <Modal.Header>Delete Product</Modal.Header>
      <Modal.Content>
        <Header>Are you sure?</Header>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Delete"
          labelPosition="right"
          icon="checkmark"
          onClick={() => DeleteProduct(product.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteProductModal;
