import { createContext, useState } from "react";
import Wallet from "../components/Wallet";
import { WalletContextProvider } from "./WalletContextProvider";

export const OrderContext = createContext({
  name: "",
  status: "",
  pieces: "",
  slaves: "",
  setIsLoggedIn: () => {},
});

export const OrderContextProvider = () => {
  const value = {
    name: "Szczotka",
    status: "PAID",
    pieces: "three",
    slaves: "one",
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <OrderContext.Provider value={{ value, isLoggedIn, setIsLoggedIn }}>
      <WalletContextProvider>
        <Wallet />
      </WalletContextProvider>
    </OrderContext.Provider>
  );
};
