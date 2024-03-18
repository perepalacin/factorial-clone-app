import {
  CalendarOffIcon,
  ClockIcon,
  HomeIcon,
  InboxIcon,
  PalmtreeIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";

const Sidebar = () => {
  // const navigate = useNavigate();
  const today = new Date();
  const clockInLink = `/clock-in/${today.getFullYear().toString()}/${today.getMonth().toString()}`;

  const [currentLink, setCurrentLink] = useState("/dashboard");

  useEffect(() => {
    console.log("here");
    // navigate(0);
  }, [currentLink]);

  return (
    <div className="pcnavbar">
      <img
        src="/src/assets/factorial.png"
        alt="logo of the company"
        width={200}
      />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Link
            style={{
              backgroundColor:
                currentLink === "/dashboard" ? "#ebebed" : "#F4F4F5",
              color: currentLink === "/dashboard" ? "#000000" : "#7a7a7a",
            }}
            to={"/dashboard"}
            className="navlinks"
            onClick={() => setCurrentLink("/dashboard")}
          >
            <HomeIcon className="icon" />
            Dashboard
          </Link>
          <Link
            style={{
              backgroundColor: currentLink === "/inbox" ? "#ebebed" : "#F4F4F5",
              color: currentLink === "/inbox" ? "#000000" : "#7a7a7a",
            }}
            to={"/inbox"}
            className="navlinks"
            onClick={() => setCurrentLink("/inbox")}
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
          <Link to="/d" className="navlinks">
            <UserIcon className="icon" />
            Me
          </Link>
          <Link 
            to={clockInLink} 
            className="navlinks"
            onClick={() => setCurrentLink("/clockin")}
          >
            <ClockIcon className="icon" />
            Clock in
          </Link>
          <Link to="/e" className="navlinks">
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
          <Link to="/org-chart" className="navlinks">
            <UsersIcon className="icon" />
            Org Chart
          </Link>
          <Link to="/absences" className="navlinks">
            <CalendarOffIcon className="icon" />
            Absences
          </Link>
        </div>
    </div>
  );
};

export default Sidebar;
