import { TableRow, TableCell, TableContainer, Paper, Table, TableHead, TableBody, Button } from '@material-ui/core';
import { AxiosRequestConfig } from 'axios';
// Libraries
import React, { useEffect, useState } from 'react';
import httpApi from '../../../stores/https/http-api';
// Components
import InventoryTableRow from './InventoryTableRow';
import ItemDialog from '../ItemDialog';
// Mocks
import { newItemForm } from '../../authenticate/mock';

interface IInventoryTableProps {}

// eslint-disable-next-line no-unused-vars
export const InventoryTable = (props: IInventoryTableProps) => {
  // For Add item form
  const [openAddForm, setOpenAddForm] = useState(false);
  const handleAddFormOpen = () => {
    setOpenAddForm(true);
  };
  const handleAddFormClose = () => {
    setOpenAddForm(false);
  };
  // For Edit item form
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editItemIndex, setEditItemIndex] = useState(0);
  const handleEditFormOpen = (index: number) => {
    setOpenEditForm(true);
    setEditItemIndex(index);
  };
  const handleEditFormClose = () => {
    setOpenEditForm(false);
  };
  const [inventory, setInventory] = useState<
    {
      id: number;
      name: string;
      type: string;
      price: number;
      stock: number;
      manufacturer: string;
      description: string;
    }[]
  >();
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const requestConfig: AxiosRequestConfig = {
      withCredentials: true,
    };
    const URL: string = 'https://digital-challenge-backend.herokuapp.com/items';
    httpApi.get(URL, requestConfig).then(res => {
      setInventory(res.data.data);
    });
  }, []);
  // second useEffect to trigger component rerender
  useEffect(() => {
    const requestConfig: AxiosRequestConfig = {
      withCredentials: true,
    };
    const URL: string = 'https://digital-challenge-backend.herokuapp.com/items';
    httpApi.get(URL, requestConfig).then(res => {
      setInventory(res.data.data);
    });
  }, [triggered]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              {/* <TableCell align="right">Manufacturer</TableCell> */}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory
              ? inventory!.map((item: any) => (
                  <InventoryTableRow
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    price={item.price}
                    stock={item.stock}
                    manufacturer={item.manufacturer}
                    description={item.description}
                    setTriggered={setTriggered}
                    handleEditFormOpen={handleEditFormOpen}
                  />
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ justifyContent: 'flex-start' }}>
        <Button onClick={handleAddFormOpen}>ADD NEW ITEM</Button>

        <ItemDialog setCloseHandler={handleAddFormClose} open={openAddForm} setTriggered={setTriggered} itemForm={newItemForm} method="POST" />
        <ItemDialog
          setCloseHandler={handleEditFormClose}
          open={openEditForm}
          setTriggered={setTriggered}
          itemForm={newItemForm}
          method="UPDATE"
          id={editItemIndex}
        />
      </div>
    </>
  );
};

export default InventoryTable;
