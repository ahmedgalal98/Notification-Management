import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./notification.css";
import Switch from "../Components/Switch";

const store = [
  { id: 2, name: "Added", disabeld: false, type: "instalation" },
  { id: 3, name: "Updated", disabeld: false, type: "instalation" },
  { id: 4, name: "Deleted", disabeld: false, type: "instalation" },
  { id: 5, name: "Water filter changes", disabeld: false, type: "instalation" },
  {
    id: 6,
    name: "Upcoming water filter changes",
    disabeld: false,
    type: "instalation"
  },
  { id: 7, name: "Water filter overdue", disabeld: false, type: "instalation" },
  {
    id: 8,
    name: "Maintenance performed",
    disabeld: false,
    type: "instalation"
  },
  { id: 9, name: "Maintenance upcoming", disabeld: false, type: "instalation" },
  { id: 10, name: "Maintenance overdue", disabeld: false, type: "instalation" },
  { id: 11, name: "Leaks", disabeld: false, type: "instalation" },
  { id: 12, name: "Battery alerts", disabeld: false, type: "instalation" },
  { id: 13, name: "Consumption drops", disabeld: false, type: "instalation" },
  { id: 14, name: "Connection lost", disabeld: false, type: "instalation" },
  {
    id: 15,
    name: "Connection re-established",
    disabeld: false,
    type: "instalation"
  },
  {
    id: 16,
    name: "Daily average alerts",
    disabeld: false,
    type: "instalation"
  },
  { id: 18, name: "Added", disabeld: false, type: "location" },
  { id: 19, name: "Updated", disabeld: false, type: "location" },
  { id: 20, name: "Deleted", disabeld: false, type: "location" },
  { id: 22, name: "Added", disabeld: false, type: "client" },
  { id: 23, name: "Updated", disabeld: false, type: "client" },
  { id: 24, name: "Deleted", disabeld: false, type: "client" }
];

const Notification = () => {
  const [arr, setArr] = useState(store);

  const changeHandler = (id) => {
    let newArr = arr.map((item) => {
      if (item.id === id) {
        item.disabeld = !item.disabeld;
      }
      return item;
    });
    setArr(newArr);
  };

  return (
    <div>
      <Header />
      <h1> Installation Notifications</h1>
      <div className="installation">
        {arr.map((notification) => {
          if (notification.type !== "instalation") return;
          return (
            <>
              <div className="container">
                <div className="notification-name">
                  <span>{notification.name}</span>
                </div>
                <Switch
                  id={notification.id}
                  changeHandler={changeHandler}
                  checked={notification.disabeld}
                />
              </div>
            </>
          );
        })}
      </div>
      <h1> location Notifications</h1>
      <div className="location">
        {arr.map((location) => {
          if (location.type !== "location") return;
          return (
            <>
              <div className="container">
                <div className="notification-name">
                  <span>{location.name}</span>
                </div>
                <Switch
                  id={location.id}
                  changeHandler={changeHandler}
                  checked={location.disabeld}
                />
              </div>
            </>
          );
        })}
      </div>
      <h1> Client Notifications </h1>
      <div className="client">
        {arr.map((client) => {
          if (client.type !== "client") return;
          return (
            <>
              <div className="container">
                <div className="notification-name">
                  <span>{client.name}</span>
                </div>
                <Switch
                  id={client.id}
                  changeHandler={changeHandler}
                  checked={client.disabeld}
                />
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
