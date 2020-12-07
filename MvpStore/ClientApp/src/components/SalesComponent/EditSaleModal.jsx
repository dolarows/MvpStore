import React, { useState } from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

const EditSaleModal = (props) => {
  const { sale } = props;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(sale.name);
  const [address, setAddress] = useState(sale.address);

  const handleChange = (e, input) => {
    switch (input) {
      case "name":
        setName(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      default:
        throw new Error();
    }
  };

  const EditSale = (id) => {
    Axios.put(`/sales/PutSale/${sale.id}`, {
      id: id,
      name: name,
      address: address,
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
            <label>Name</label>
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => handleChange(e, "name")}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              placeholder="Enter Address..."
              value={address}
              onChange={(e) => handleChange(e, "address")}
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
          onClick={() => EditSale(sale.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditSaleModal;
