/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import { TableRow, TableCell, IconButton, Collapse, Typography, makeStyles } from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowDown, Delete, Update, Add, Remove } from '@material-ui/icons';
import { AxiosRequestConfig } from 'axios';
import React from 'react';
import httpApi from '../../../stores/https/http-api';

interface IInventoryTableRowProps {
  id: number;
  name: string;
  type: string;
  price: number;
  stock: number;
  manufacturer: string;
  setTriggered: (prevState: any) => void;
  handleEditFormOpen: (index: number) => void;
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

export const InventoryTableRow = (props: IInventoryTableRowProps) => {
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);
  const deleteItemHandler = async (index: number) => {
    const requestConfig: AxiosRequestConfig = {
      withCredentials: true,
    };
    const URL: string = `https://digital-challenge-backend.herokuapp.com/items/${index}`;
    httpApi.delete(URL, requestConfig).then(res => {
      console.log(res.data.data);
      props.setTriggered((prevState: any) => !prevState);
    });
  };
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell align="right">{props.id}</TableCell>
        <TableCell align="right">{props.name}</TableCell>
        <TableCell align="right">{props.type}</TableCell>
        <TableCell align="right">{props.price}</TableCell>
        <TableCell align="right">{props.stock}</TableCell>
        {/* <TableCell align="right">{props.manufacturer}</TableCell> */}
        <TableCell align="right" style={{ display: 'flex' }}>
          <IconButton onClick={() => deleteItemHandler(props.id)} aria-label="delete" style={{ flexGrow: 1, marginLeft: -15, marginRight: -15 }}>
            <Delete fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="update"
            onClick={() => props.handleEditFormOpen(props.id)}
            style={{ flexGrow: 1, marginLeft: -15, marginRight: -15 }}
          >
            <Update fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Typography>Description</Typography>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InventoryTableRow;
