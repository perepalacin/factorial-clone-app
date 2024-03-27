import {
  CalendarOffIcon,
  ClockIcon,
  HomeIcon,
  InboxIcon,
  PalmtreeIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const pathname = useLocation().pathname;
  const today = new Date();
  const clockInLink = `/clock-in/${today.getFullYear().toString()}/${today.getMonth().toString()}`;

  const [currentLink, setCurrentLink] = useState("/pathame");

  useEffect(() => {
    console.log("here");
    // navigate(0);
  }, [currentLink]);

  return (
    <nav className="pcnavbar">
      <img
        src="/src/assets/factorial.png"
        alt="logo of the company"
        width={200}
      />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Link
            style={{
              backgroundColor:
                pathname === "/dashboard" ? "#ebebed" : "#F4F4F5",
              color: pathname === "/dashboard" ? "#000000" : "#7a7a7a",
            }}
            to={"/dashboard"}
            className="navlinks"
          >
            <HomeIcon className="icon" />
            Dashboard
          </Link>
          <Link
            style={{
              backgroundColor: pathname === "/inbox" ? "#ebebed" : "#F4F4F5",
              color: pathname === "/inbox" ? "#000000" : "#7a7a7a",
            }}
            to={"/inbox"}
            className="navlinks"
          >
            <InboxIcon className="icon" />
            Inbox
          </Link>
          <p
            style={{
              fontWeight: "600", fontSize: '0.8rem'
            }}
          >
            YOU
          </p>
          <Link 
            to="/user-details" 
            className="navlinks"
            style={{
              backgroundColor: pathname === "/user-details" ? "#ebebed" : "#F4F4F5",
              color: pathname === "/user-details" ? "#000000" : "#7a7a7a",
            }}>
            <UserIcon className="icon" />
            Me
          </Link>
          <Link 
            style={{
              backgroundColor: pathname.includes('/clock-in') === true ? "#ebebed" : "#F4F4F5",
              color: pathname.includes('/clock-in') === true ? "#000000" : "#7a7a7a",
            }}
            to={clockInLink} 
            className="navlinks"
          >
            <ClockIcon className="icon" />
            Clock in
          </Link>
          <Link 
            style={{
              backgroundColor: pathname === "/time-off" ? "#ebebed" : "#F4F4F5",
              color: pathname === "/time-off" ? "#000000" : "#7a7a7a",
            }}
          to="/time-off"
          className="navlinks">
            <PalmtreeIcon className="icon" />
            Time off
          </Link>
          <p
            style={{
              fontWeight: "600", fontSize: '0.8rem'
            }}
          >
            YOUR COMPANY
          </p>
          <Link 
            style={{
              backgroundColor: pathname === "/org-chart" ? "#ebebed" : "#F4F4F5",
              color: pathname === "/org-chart" ? "#000000" : "#7a7a7a",
            }}
          to="/org-chart"
          className="navlinks">
            <UsersIcon className="icon" />
            Org Chart
          </Link>
          <Link 
            style={{
              backgroundColor: pathname === "/absences" ? "#ebebed" : "#F4F4F5",
              color: pathname === "/absences" ? "#000000" : "#7a7a7a",
            }}
            to="/absences" className="navlinks">
            <CalendarOffIcon className="icon" />
            Absences
          </Link>
        </ul>
    </nav>
  );
};

export default Sidebar;
