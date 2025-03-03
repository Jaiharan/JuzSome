import React from "react";
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const er = useRouteError();
  console.log(er);
  return (
    <div className=" flex justify-center items-center text-5xl font-bold h-screen">
      <Link to="/">404 | NOT FOUND</Link>
    </div>
  );
};

export default NotFound;
