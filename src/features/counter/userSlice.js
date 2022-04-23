// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';
import { createSlice} from '@reduxjs/toolkit'
// const initialState = {
//   value: 0,
//   status: 'idle',
// };


// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
    
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  
  reducers: {
    loginuser: (state,action) => {
      
      state.user = action.payload;
    },
    logoutuser: (state) => {
      state.value = null;
    },
    
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { loginuser, logoutuser } = userSlice.actions;


export const selectUser = (state) => state.user.user;


// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;
