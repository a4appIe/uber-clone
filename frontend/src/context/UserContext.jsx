import React, { createContext, useState } from "react";

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });
  return (
    <userDataContext.Provider value={user}>{children}</userDataContext.Provider>
  );
};

export default UserContext;
