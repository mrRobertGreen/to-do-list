import {CardResponseT} from "../api/tasks-api";
import {normalize, schema} from "normalizr";
import {CardT, TaskT} from "../redux/tasks-reducer/tasks-reducer";

export const normalizeCards = (originalData: Array<CardResponseT>): NormalizedCardsT => {
   // Define schemas
   const taskSchema = new schema.Entity('tasks');
   const cardSchema = new schema.Entity('cards', {
      tasks: [taskSchema],
   });

   const result = new schema.Array(cardSchema)

   return normalize(originalData, result);
}
export type NormalizedCardsT = {
   entities: {
      cards: Array<CardT>
      tasks: Array<TaskT>
   }
   result: Array<string>
}