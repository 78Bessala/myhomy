import React from "react";
import { Outlet } from "react-router";

const auth = () => {
  return (
    <div >
      
      Auth
      <Outlet/>
    </div>
  );
};

export default auth;