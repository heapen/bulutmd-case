import { createSlice } from '@reduxjs/toolkit';
import dataList from '../../utils/data.json'
const initialState = {dataList};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export const listData = (state) => state.data.dataList.entries; // film ved dizi listesine tekrar dönmesi için

export default dataSlice.reducer;