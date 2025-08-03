import NavIndex from "@/component/navbar/NavIndex";
import React from "react";

const UserLayout = ({ children }) => {
  return (
    <>
      <NavIndex />
      {children}
    </>
  );
};

export default UserLayout;
