import api, {BaseResponseT} from "./api"
import {AxiosResponse} from "axios";
import {TaskT} from "../redux/tasks-reducer/tasks-reducer";

export const tasksApi = {
   getCards() {
      return api.get<BaseResponseT<Array<CardResponseT>>>("/getCategory.php").then(res => res.data)
   },
   test() {
      return api.get("/").then((res: AxiosResponse) => res.data)
   },
}

export type CardResponseT = {
   id: number
   tasks: Array<TaskT>
}