// Libraries
import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { AnyAction } from 'redux';
// Action Types
import * as ActionTypes from '../action-types';
import httpApi from '../https/http-api';

export const getInventoryAction = () => async (dispatch: React.Dispatch<AnyAction>) => {
  try {
    const requestConfig: AxiosRequestConfig = {
      withCredentials: true,
    };
    const URL: string = 'https://digital-challenge-backend.herokuapp.com/items';
    const response = (await httpApi.get(URL, requestConfig)).data.data;
    const inventory = response.map((item: { id: any; name: any; type: any; price: any; stock: any; manufacturer: any }) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      price: item.price,
      stock: item.stock,
      manufacturer: item.manufacturer,
    }));
    console.log('inventory:', inventory);
    dispatch({ type: ActionTypes.GET_ITEMS_SUCCESS, payload: inventory });
  } catch (error) {
    console.log(error);
  }
};

export default { getInventoryAction };
