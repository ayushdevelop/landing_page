import React from "react";

import useQuery from "../../hooks/useQuery";

const Navigation = () => {

  const {logoTitle} = useQuery();


  return (
    <div className="max-w-7xl bg-white h-5 p-6 m-auto flex items-center">
      <div className="ml-20 mt-10 text-2xl text-gray-500">codemancers</div>
    </div>
  );
};

export default Navigation;
