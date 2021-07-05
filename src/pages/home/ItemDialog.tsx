/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import { Button, Card, Dialog, DialogActions, DialogContent, Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
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
const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const ItemDialog = (props: IItemDialog) => {
  const [itemForm, setItemForm] = useState(props.itemForm);
  const [error, setError] = useState('');

  const itemFormChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemForm({
      ...itemForm,
      [event.target.name]: {
        ...itemForm[event.target.name],
        value: event.target.value,
      },
    });
  };

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem = {
      name: itemForm.name.value,
      type: itemForm.type.value,
      price: Number(itemForm.price.value),
      stock: Number(itemForm.stock.value),
      manufacturer: itemForm.manufacturer.value,
      description: itemForm.description.value,
    };
    const requestConfig: AxiosRequestConfig = {
      withCredentials: true,
    };
    let URL: string = `${process.env.REACT_APP_BACKEND_URL}/items`;
    if (props.method === 'POST') {
      httpApi
        .post(URL, newItem, requestConfig)
        .then(() => {
          props.setTriggered((prevState: any) => !prevState);
          props.setCloseHandler();
        })
        .catch(err => {
          setError(err.response.data.message);
        });
    } else if (props.method === 'UPDATE') {
      URL = `${process.env.REACT_APP_BACKEND_URL}/items/${props.id}`;
      httpApi
        .put(URL, newItem, requestConfig)
        .then(() => {
          props.setTriggered((prevState: any) => !prevState);
          props.setCloseHandler();
        })
        .catch(err => {
          setError(err.response.data.message);
        });
    }
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
            <Button
              onClick={() => {
                props.setCloseHandler();
                setError('');
              }}
              color="primary"
            >
              Close
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
      <Snackbar open={error !== ''} autoHideDuration={6}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Dialog>
  );
};

export default ItemDialog;
