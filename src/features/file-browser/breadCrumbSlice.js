import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'breadCrumb/fetchData',
  async lastLocation => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/files/${lastLocation}`
    );
    return response.data;
  }
);

export const breadCrumbSlice = createSlice({
  name: 'breadCrumb',
  initialState: {
    lastLocation: 'root',
    links: [],
    files: [],
  },
  reducers: {
    updateLastLocation: (state, action) => {
      state.lastLocation = action.payload;
    },
    updateLinks: {
      prepare: value => {
        const pathArray = value
          .split('/')
          .filter(p => p !== '')
          .reduce(
            (acc, curr) => {
              acc.tempTo += `/${curr}`;
              const container = {};
              container.name = curr;
              container.to = acc.tempTo;
              acc.links.push(container);
              return acc;
            },
            { links: [], tempTo: '' }
          );
        return { payload: { links: pathArray.links } };
      },
      reducer: (state, action) => {
        state.links = action.payload.links;
      },
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
  },
});

export const {
  addToBreadCrumb,
  removeFromBreadCrumb,
  updateLastLocation,
  updateLinks,
} = breadCrumbSlice.actions;

export const selectBreadCrumb = state => state.breadCrumb;
export const selectBreadCrumbLinks = state => state.breadCrumb.links;
export const selectLastLocation = state => state.breadCrumb.lastLocation;
export const selectFiles = state => state.breadCrumb.files;

export default breadCrumbSlice.reducer;
