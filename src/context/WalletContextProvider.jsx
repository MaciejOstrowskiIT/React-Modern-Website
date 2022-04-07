import { createContext, useState } from "react";

export const WalletContext = createContext({
  isLogged: false,
  balance: 300,
  currency: "PLN",
  pieces: "",
});

export const WalletContextProvider = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function doLogin() {
  //   if (login === "a" && password === "a") {
  //     setIsLoggedIn(true);
  //   }
  // }
  const value = {
    balance: 122,
    currency: "EUR",
    pieces: "four",
  };

  return (
    <WalletContext.Provider value={{ value }}>
      <div>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" onChange={(e) => setLogin(e.target.value)} />
      </div>
      {props.children}
    </WalletContext.Provider>
  );
};
