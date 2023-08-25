import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice/dataSlice'
import sortSlice from './sortSlice/sortSlice'

export const store = configureStore({
    reducer: {
      data: dataSlice,
      sort: sortSlice
    },
  })