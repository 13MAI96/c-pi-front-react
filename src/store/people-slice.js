import { createSlice } from '@reduxjs/toolkit'
import { People } from '../models/people'

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
        let lastId = state.value[state.value.length-1]?.id ?? 0
        action.payload.id = 1 + lastId
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