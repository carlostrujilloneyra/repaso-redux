import { startLoadingUsers } from "./userSlice";
import { AppDispatch } from "../../store";

export const getUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingUsers());
  };

  // TODO: Realizar petición HTTP
};
