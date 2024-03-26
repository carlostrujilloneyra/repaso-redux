import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../services/store/hooks";
import { increment } from "../services/store/slices/counter";
import { useEffect } from "react";
import { getUsers } from "../services/store/slices/users";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const { counter } = useAppSelector((state) => state.counter);

  const navigate = useNavigate();

  const handleNavigateAbout = () => {
    navigate("/about");
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <button onClick={handleNavigateAbout}>Ir a About</button>
      <p>El valor del contador es: {counter}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
    </>
  );
};
