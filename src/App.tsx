import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Requests from "./components/Requests";
import ClockInPage from "./components/ClockInPage";
import Absenses from "./components/Absenses";
import OrgChart from "./components/OrgChart";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:300,400,500,600,700"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="main-root">
      <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Home />} key={1} />
          <Route path="/inbox" element={<Requests />} key={2} />
          <Route
            path="/clock-in/:yearId/:monthId"
            element={<ClockInPage />}
            key={3}
          />
          <Route path="/absences" element={<Absenses />} key={3} />
          <Route path="/org-chart" element={<OrgChart />} key = {4} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
