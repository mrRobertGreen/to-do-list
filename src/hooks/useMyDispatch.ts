import {useDispatch} from "react-redux";
import {MyDispatchT} from "../redux/store";

export const useMyDispatch = () => useDispatch<MyDispatchT>()