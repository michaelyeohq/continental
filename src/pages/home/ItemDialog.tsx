// eslint-disable-next-line no-unused-vars
import { Button, Card, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react';
import MaterialUIInputField from '../../components/inputs/MaterialUIInputField';
import httpApi from '../../stores/https/http-api';
import './AddItemDialog.css';

interface IItemDialog {
  itemForm: { [x: string]: any };
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setTriggered: (prevState: any) => void;
  setCloseHandler: () => void;
  method: string;
  // eslint-disable-next-line react/require-default-props
  id?: number;
}

export const ItemDialog = (props: IItemDialog) => {
  const [itemForm, setItemForm] = useState(props.itemForm);

  const itemFormChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemForm({
      ...itemForm,
      [event.target.name]: {
        ...itemForm[event.target.name],
        value: event.target.value,
      },
    });
  };
  console.log(itemForm);

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem = {
      name: itemForm.name.value,
      type: itemForm.type.value,
      price: Number(itemForm.price.value),
      stock: Number(itemForm.stock.value),
    };
    const requestConfig: AxiosRequestConfig = {
      withCredentials: true,
    };
    let URL: string = 'https://digital-challenge-backend.herokuapp.com/items';
    if (props.method === 'POST') {
      httpApi.post(URL, newItem, requestConfig).then(res => {
        console.log(res.data.data);
        props.setTriggered((prevState: any) => !prevState);
      });
    } else if (props.method === 'UPDATE') {
      URL = `https://digital-challenge-backend.herokuapp.com/items/${props.id}`;
      httpApi.put(URL, newItem, requestConfig).then(res => {
        console.log(res.data.data);
        props.setTriggered((prevState: any) => !prevState);
      });
    }
    props.setCloseHandler();
  };

  // Generators
  const generateLoginFormInputs = Object.keys(itemForm).map(name => (
    <MaterialUIInputField key={name} name={name} input={itemForm[name]} onChange={itemFormChangeHandler} />
  ));

  return (
    <Dialog open={props.open}>
      <DialogContent>
        <form className="basic-form basic-form-column" onSubmit={formHandler}>
          {generateLoginFormInputs}
          <DialogActions>
            <Button onClick={props.setCloseHandler} color="primary">
              Close
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDialog;
