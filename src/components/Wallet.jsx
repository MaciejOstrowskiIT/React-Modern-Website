import { useContext } from "react";
import { OrderContext } from "../context/OrderContextProvider";
import { WalletContext } from "../context/WalletContextProvider";

const Wallet = () => {
  const walletContextValue = useContext(WalletContext);
  const orderContextValue = useContext(OrderContext);
  const { setIsLoggedIn } = useContext(OrderContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
    </div>
  );
};

export default Wallet;
