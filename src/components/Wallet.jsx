import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/OrderContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import { WalletContext } from "../context/WalletContextProvider";

const Wallet = () => {
  const [activeTheme, setActiveTheme] = useState("");

  useEffect(() => {
    document.title = `${activeTheme}`;
  });

  const walletContextValue = useContext(WalletContext);
  const orderContextValue = useContext(OrderContext);
  const { setIsLoggedIn } = useContext(OrderContext);
  const themeContextValue = useContext(ThemeContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const changeThemeToDark = () => {
    document.body.style.color = themeContextValue.dark.foreground;
    document.body.style.backgroundColor = themeContextValue.dark.background;
    setActiveTheme("BLACK");
  };
  const changeThemeToWhite = () => {
    document.body.style.color = themeContextValue.light.foreground;
    document.body.style.backgroundColor = themeContextValue.light.background;
    setActiveTheme("WHITE");
  };

  return (
    <div>
      <p>Balance: {walletContextValue.balance}</p>
      <p>Currency: {walletContextValue.currency}</p>
      <p>Name: {orderContextValue.name}</p>
      <p>Status: {orderContextValue.status}</p>
      {orderContextValue.isLoggedIn && <p>Logged</p>}
      <button onClick={() => handleLogin()}> Handle Login Wallet</button>
      <button onClick={() => handleLogout()}> Handle Logout Wallet</button>
      <button onClick={() => changeThemeToWhite()}> White Theme</button>
      <button onClick={() => changeThemeToDark()}> Dark Theme</button>
    </div>
  );
};

export default Wallet;
