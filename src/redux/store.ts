import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "./tasks-reducer/tasks-reducer";

const reducer = { // object of my reducers
   tasks: tasksReducer
}

const store = configureStore({ // store configuration
   reducer
})
export default store
export type RootStateT = ReturnType<typeof store.getState>
export type MyDispatchT = typeof store.dispatch // custom dispatch with only my actions