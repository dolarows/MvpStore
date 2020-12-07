import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

const CreateCustomerModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState();

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

  const createCustomer = () => {
    Axios.post("/customers/PostCustomer", {
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
      trigger={<Button primary>New Customer</Button>}
    >
      <Modal.Header>Create Customer</Modal.Header>
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
            <label>Address</label>
            <input
              placeholder="Enter Address..."
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
          content="Create"
          labelPosition="right"
          icon="checkmark"
          onClick={createCustomer}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default CreateCustomerModal;
