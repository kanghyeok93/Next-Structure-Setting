import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/redux/rootReducer";

import { increment } from "../../core/redux/slices/counterSlice";
import { wrapper } from "../../core/redux/store";

const Page = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const value = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <div>
      <div>Page... {id}</div>

      <div>Store Counter Value {value}</div>

      <button onClick={handleIncrement}>버튼</button>
    </div>
  );
};

export default Page;

// export const getServerSideProps = ({ params }: { params: { id: string } }) => {
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }: any) => {
      const { id } = params;
      console.log("Server Info ===> ", id);
      return {
        props: {
          id,
        },
      };
    },
);
