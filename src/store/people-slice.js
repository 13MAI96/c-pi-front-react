import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    filterText: "",
    spinnerState: true
}
  
export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
      addPeople: (state, action) => {
        state.value.push(action.payload)
      },
      deletePeople: (state, action) => {
        state.value = state.value.filter( value => {
            return value.id !== action.payload
        });
      },
      setInitialPeople: (state, action) => {
        state.value = action.payload;
        state.filterValue = action.payload;
      },
      updateFilter: (state, action) => {
        state.filterText = action.payload
      },
      toggleSpinnerState: (state, action) => {
        state.spinnerState = action.payload
      }
    },
})
  
export const { addPeople, deletePeople, setInitialPeople, updateFilter, toggleSpinnerState } = peopleSlice.actions
  
export default peopleSlice.reducer