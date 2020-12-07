import React, { useState } from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

const EditStoreModal = (props) => {
  const { store } = props;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(store.name);
  const [address, setAddress] = useState(store.address);

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

  const EditStore = (id) => {
    Axios.put(`/stores/PutStore/${store.id}`, {
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
      <Modal.Header>Edit {store.name}'s Details</Modal.Header>
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
          onClick={() => EditStore(store.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditStoreModal;
