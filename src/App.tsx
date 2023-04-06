import React from "react";
import { UsersList } from "./components/UsersList";
import { UserCreation } from "./components/UserCreation";

const App: React.FunctionComponent = () => {
  return (
    <>
      <UsersList />
      <UserCreation />
    </>
  );
};

export default App;
