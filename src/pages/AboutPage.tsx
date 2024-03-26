import { useAppSelector } from "../services/store/hooks";

export const AboutPage = () => {
  const { counter } = useAppSelector((state) => state.counter);

  return (
    <>
      <p>El valor del contador: {counter}</p>
    </>
  );
};
