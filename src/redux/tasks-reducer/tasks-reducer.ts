import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {tasksApi} from "../../api/tasks-api";
import {normalizeCards, NormalizedCardsT} from "../../utils/normalizeCards";

const initialState = {
   cards: null as Array<CardT> | null,
   tasks: null as Array<TaskT> | null,
}
export const getCards = createAsyncThunk<Promise<NormalizedCardsT | undefined>>(
   "tasks/GET_CARDS",
   async () => {
      const data = await tasksApi.getCards()
      if (data.success && data.data) {
         console.log(normalizeCards(data.data))
         return normalizeCards(data.data)
      }
   }
)

const tasksSlice = createSlice({
   name: "tasks",
   initialState,
   reducers: {},
   extraReducers: {
      [getCards.fulfilled.toString()]: (state: InitialStateT, action: PayloadAction<NormalizedCardsT>) => {
         state.cards = action.payload.entities.cards
         state.tasks = action.payload.entities.tasks
      },
   }
})



export const tasksReducer = tasksSlice.reducer
export const tasksActions = tasksSlice.actions

export type CardT = {
   title: string
   id: number
   tasks: Array<string>
}
export type TaskT = {
   text: string
   isDone: boolean
   id: number
}
export type InitialStateT = typeof initialState