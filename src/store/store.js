import { configureStore } from '@reduxjs/toolkit'
import peopleSlice from './people-slice'

const store = configureStore({
    reducer: {
        people: peopleSlice,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        serializableCheck: false,
    })],
})


export default store