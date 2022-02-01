import React from "react";

const Page = ({ id }: { id: string }) => {
  return (
    <div>
      <div>Page... {id}</div>
    </div>
  );
};

export default Page;

export const getServerSideProps = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log("Server Info ===> ", id);
  return {
    props: {
      id,
    },
  };
};
