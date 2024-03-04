import {
  CheckCircleIcon,
  ClockIcon,
  CreditCardIcon,
  FlagIcon,
  FolderOpenIcon,
  HomeIcon,
  InboxIcon,
  PalmtreeIcon,
  SearchIcon,
  StoreIcon,
  UserIcon,
} from "lucide-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState("/dashboard");
  return (
    <div className="pcnavbar">
      <img
        src="src/assets/factorial.png"
        alt="logo of the company"
        width={200}
      />
      <div>
        <input placeholder="Search..." />
        <SearchIcon />
      </div>
      <Router>
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
            to="/dashboard"
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
            to="/inbox"
            className="navlinks"
            onClick={() => setCurrentLink("/inbox")}
          >
            <InboxIcon className="icon" />
            Inbox
          </Link>
          <Link to="/c" className="navlinks">
            <StoreIcon className="icon" />
            Integrations
          </Link>
          <p
            style={{
              fontWeight: "600",
            }}
          >
            YOU
          </p>
          <Link to="/d" className="navlinks">
            <UserIcon className="icon" />
            Me
          </Link>
          <Link to="/e" className="navlinks">
            <ClockIcon className="icon" />
            Clock in
          </Link>
          <Link to="/e" className="navlinks">
            <PalmtreeIcon className="icon" />
            Time off
          </Link>
          <Link to="/e" className="navlinks">
            <CheckCircleIcon className="icon" />
            Tasks
          </Link>
          <Link to="/e" className="navlinks">
            <FolderOpenIcon className="icon" />
            My documents
          </Link>
          <Link to="/e" className="navlinks">
            <FlagIcon className="icon" />
            My goals
          </Link>
          <Link to="/e" className="navlinks">
            <CreditCardIcon className="icon" />
            My expenses
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default Sidebar;
