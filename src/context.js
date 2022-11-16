import { createContext, useState, useContext } from "react";
const AppContext = createContext(null);
const Context = ({ children }) => {
  const [user, setUser] = useState({ id: "" });
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default Context;
