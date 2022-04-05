import React, { useState } from "react";
import "./Menu.css";

export const Menu = () => {
  const [isClicked, setIsClicked] = useState(true);

  //https://reactgo.com/react-toggle-class/
  return (
    <>
      <nav className="justnav">
        <img src={require("./logo/project-logos_transparent.png")} alt="logo" />
        <header className="main-menu">Main menu</header>
        <button
          onClick={(e) => {
            setIsClicked(!isClicked);
          }}
          className={isClicked ? "dashboard-button active" : "dashboard-button"}
          //   style={{ backgroundColor: "red" }}
        >
          <span className="justspan">Dashboard</span>
        </button>
        <button className="my-wallet-button">
          <span className="justspan">My Wallet</span>
        </button>
        <button className="invoices-button">
          <span className="justspan">Invoices</span>
        </button>
        <header className="others">Others</header>
        <button className="contacts-button">
          <span className="justspan">Contacts</span>
        </button>
        <button className="help-button">
          <span className="justspan">Help</span>
        </button>
        <button className="settings-button">
          <span className="justspan">Settings</span>
        </button>
      </nav>
    </>
  );
};
