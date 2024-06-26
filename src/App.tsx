import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Requests from "./components/Requests";
import ClockInPage from "./components/ClockInPage";
import Absenses from "./components/Absenses";
import OrgChart from "./components/OrgChart";
import TimeOff from "./components/TimeOff";
import "react-day-picker/dist/style.css";
import Review from "./components/Review";
import Sidebar from "./components/Sidebar";
// import './day-picker.css';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:300,400,500,600,700"],
      },
    });
  }, []);

  return (
      <div className="main-root">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Home />} key={1} />
          <Route path="/inbox" element={<Requests />} key={2} />
          <Route path="/clock-in/:yearId/:monthId" element={<ClockInPage />} key={3} />
          <Route path="/absences" element={<Absenses />} key={4} />
          <Route path="/org-chart" element={<OrgChart />} key={5} />
          <Route path="/user-details" element={<Review />} key={6} />
          <Route path="/time-off" element={<TimeOff />} key={7} />
        </Routes>
      </div>
  );
}

export default App;
