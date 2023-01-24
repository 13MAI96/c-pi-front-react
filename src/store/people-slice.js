import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    filterValue: []
  }
  
  export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
      addPeople: (state, action) => {
        state.value.push(action.payload)
      },
      deletePeople: (state, action) => {
        state.value.splice(action.payload, 1);
        state.filterValue.splice(action.payload, 1)
      },
      setInitialPeople: (state, action) => {
        state.value = action.payload;
        state.filterValue = action.payload;
      },
      filterPeople: (state, action) => {
        state.filterValue = state.value.filter(value => {
            return value.includes(action.payload)
        })
      }
    },
  })
  
  export const { addPeople, deletePeople, setInitialPeople } = peopleSlice.actions
  
  export default peopleSlice.reducer