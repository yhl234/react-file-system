import { createSlice } from '@reduxjs/toolkit';

export const breadCrumbSlice = createSlice({
  name: 'breadCrumb',
  initialState: {
    lastLocation: '',
    links: [
      {
        name: 'root',
        to: '',
      },
    ],
  },
  reducers: {
    addToBreadCrumb: (state, action) => {
      const temp = `${state.lastLocation}${action.payload.to}`;
      state.lastLocation = temp;
      state.links.push({ ...action.payload, to: temp });
    },
    removeFromBreadCrumb: (state, action) => {
      const { to } = action.payload;
      console.log(to);
      const index = state.links.findIndex(i => i.to === to);
      state.lastLocation = to;
      state.links = state.links.slice(0, index + 1);
    },
  },
});

export const {
  addToBreadCrumb,
  removeFromBreadCrumb,
} = breadCrumbSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.breadCrumb.value)`
export const selectBreadCrumb = state => state.breadCrumb;
export const selectBreadCrumbLinks = state => state.breadCrumb.links;
export const selectLastLocation = state => state.breadCrumb.lastLocation;

export default breadCrumbSlice.reducer;
