import React, { useState } from "react";
import { Header, Button, Icon, Modal } from "semantic-ui-react";
import Axios from "axios";

const DeleteCustomerModal = (props) => {
  const { customer } = props;
  const [open, setOpen] = useState(false);

  const DeleteCustomer = (id) => {
    Axios.delete(`/customers/DeleteCustomer/${customer.id}`)
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
      <Modal.Header>Delete Customer</Modal.Header>
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
          onClick={() => DeleteCustomer(customer.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteCustomerModal;
