import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    increment: (state) => {
     
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { increment} = counterSlice.actions

export default counterSlice.reducer