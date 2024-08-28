import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mockData: [
    {
      id: 1,
      name: "Smart watch band",
      product: "Accessories",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "Neck band Earbuds",
      product: "Accessories",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Classic back cover",
      product: "Accessories",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 4,
      name: "Tarbo charger",
      product: "Accessories",
      description: "New smart watch here",
      price: 1000,
      remaining: 1,
    },
    {
      id: 5,
      name: "buds shocase",
      product: "Accessories",
      description: "New brand of shoes here",
      price: 1300,
      remaining: 5,
    },
    {
      id: 1,
      name: "Smart watch band",
      product: "Accessories",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "Neck band Earbuds",
      product: "Accessories",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Classic back cover",
      product: "Accessories",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 4,
      name: "Tarbo charger",
      product: "Accessories",
      description: "New smart watch here",
      price: 1000,
      remaining: 1,
    },
    {
      id: 5,
      name: "buds shocase",
      product: "Accessories",
      description: "New brand of shoes here",
      price: 1300,
      remaining: 5,
    },
    {
      id: 1,
      name: "Smart watch band",
      product: "Accessories",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "Neck band Earbuds",
      product: "Accessories",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Classic back cover",
      product: "Accessories",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 4,
      name: "Tarbo charger",
      product: "Accessories",
      description: "New smart watch here",
      price: 1000,
      remaining: 1,
    },
    {
      id: 5,
      name: "buds shocase",
      product: "Accessories",
      description: "New brand of shoes here",
      price: 1300,
      remaining: 5,
    },
    {
      id: 1,
      name: "Smart watch band",
      product: "Accessories",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "Neck band Earbuds",
      product: "Accessories",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Classic back cover",
      product: "Accessories",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 4,
      name: "Tarbo charger",
      product: "Accessories",
      description: "New smart watch here",
      price: 1000,
      remaining: 1,
    },
  
  ],

  mockData2: [
    {
      id: 1,
      name: "Jeans",
      product: "bottom wear",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "T-shirt",
      product: "top wear",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Shirt",
      product: "top wear",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 4,
      name: "Skinny jeans",
      product: "bottom wear",
      description: "New smart watch here",
      price: 1000,
      remaining: 1,
    },
    {
      id: 5,
      name: "Canvas Shoes",
      product: "shoes",
      description: "New brand of shoes here",
      price: 1300,
      remaining: 5,
    },
    {
      id: 1,
      name: "Jeans",
      product: "bottom wear",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "T-shirt",
      product: "top wear",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Shirt",
      product: "top wear",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 4,
      name: "Skinny jeans",
      product: "bottom wear",
      description: "New smart watch here",
      price: 1000,
      remaining: 1,
    },
    {
      id: 5,
      name: "Canvas Shoes",
      product: "shoes",
      description: "New brand of shoes here",
      price: 1300,
      remaining: 5,
    },
    {
      id: 1,
      name: "Jeans",
      product: "bottom wear",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "T-shirt",
      product: "top wear",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Shirt",
      product: "top wear",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 4,
      name: "Skinny jeans",
      product: "bottom wear",
      description: "New smart watch here",
      price: 1000,
      remaining: 1,
    },
    {
      id: 5,
      name: "Canvas Shoes",
      product: "shoes",
      description: "New brand of shoes here",
      price: 1300,
      remaining: 5,
    },
  ],

  mockData3: [
    {
      id: 1,
      name: "Jeans",
      product: "cloth",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "T-shirt",
      product: "cloth",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Shirt",
      product: "cloth",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 1,
      name: "Jeans",
      product: "cloth",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "T-shirt",
      product: "cloth",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Shirt",
      product: "cloth",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
    {
      id: 1,
      name: "Jeans",
      product: "cloth",
      description: "One of the finest brands here",
      price: 700,
      remaining: 6,
    },
    {
      id: 2,
      name: "T-shirt",
      product: "cloth",
      description: "New brand of T-shirt here",
      price: 300,
      remaining: 2,
    },
    {
      id: 3,
      name: "Shirt",
      product: "cloth",
      description: "New brand of shirt here",
      price: 500,
      remaining: 2,
    },
  ],
};

const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    addDataToTable1: (state, action) => {
      state.mockData.push({ id: state.mockData.length + 1, ...action.payload });
    },
    addDataToTable2: (state, action) => {
      state.mockData2.push({ id: state.mockData2.length + 1, ...action.payload });
    },
    addDataToTable3: (state, action) => {
      state.mockData3.push({ id: state.mockData3.length + 1, ...action.payload });
    },
    deleteDataFromTable1: (state, action) => {
      state.mockData = state.mockData.filter(item => item.id !== action.payload);
    },
    deleteDataFromTable2: (state, action) => {
      state.mockData2 = state.mockData2.filter(item => item.id !== action.payload);
    },
    deleteDataFromTable3: (state, action) => {
      state.mockData3 = state.mockData3.filter(item => item.id !== action.payload);
    },
    editDataInTable1: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const index = state.mockData.findIndex(item => item.id === id);
      if (index !== -1) {
        state.mockData[index] = { id, ...updatedData };
      }
    },
    editDataInTable2: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const index = state.mockData2.findIndex(item => item.id === id);
      if (index !== -1) {
        state.mockData2[index] = { id, ...updatedData };
      }
    },
    editDataInTable3: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const index = state.mockData3.findIndex(item => item.id === id);
      if (index !== -1) {
        state.mockData3[index] = { id, ...updatedData };
      }
    },
  },
});

export const {
  addDataToTable1,
  addDataToTable2,
  addDataToTable3,
  deleteDataFromTable1,
  deleteDataFromTable2,
  deleteDataFromTable3,
  editDataInTable1,
  editDataInTable2,
  editDataInTable3
} = tableSlice.actions;

export const selectData1 = (state: any) => state.tables.mockData;
export const selectData2 = (state: any) => state.tables.mockData2;
export const selectData3 = (state: any) => state.tables.mockData3;

export default tableSlice.reducer;
