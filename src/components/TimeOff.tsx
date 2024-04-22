import Separator from "./ui/Separator";
import DaysOffHistory from "./DaysOffHistory";
import YearCalendar from "./TimeOff/YearCalendar";
import RequestTimeOffDialog from "./TimeOff/RequestTimeOffDialog";
import { useEffect, useState } from "react";
import axios from "axios";
import { absences_data } from "../types";
import { getHolidayCount } from "../utils/dateTools";
import { InfoIcon } from "lucide-react";

const TimeOff = () => {
  const today = new Date();
  const [offDays, setOffDays] = useState<absences_data[]>([]);
  const [holidays, setHolidays] = useState(0);
  const [compensation, setCompensation] = useState(0);
  var holidaysCount = 0;
  var compensationCount = 0;
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/holidays/19")
      .then((response) => {
        setOffDays(response.data);
        [holidaysCount, compensationCount] = getHolidayCount(response.data);
        setHolidays(holidaysCount);
        setCompensation(compensationCount);
      })
      .catch((error) => {
        console.log("Error failed to fetch data:" + error);
      });
  }, []);

  //The user is hardcoded in this example, but we should get the user id to fetch it's data
  return (
    <div className="main-div">
      <div className="page-card" style={{ padding: "0rem 0rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 1rem",
          }}
        >
          <></>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <img
              src="src/assets/image-lsoyucoe.png"
              width={36}
              style={{ borderRadius: "0.375rem" }}
            />
            <p style={{ fontWeight: "600" }}>Pere Palacín Pallàs</p>
          </div>
          <RequestTimeOffDialog offDays={offDays} daysLeft={23 - holidays}/>
        </div>
        <Separator />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
              width: "40%",
              padding: "1rem 1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #e2e2e5",
                borderRadius: "0.375rem",
                padding: "1rem 1rem",
                backgroundColor: "#F4F4F5",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <InfoIcon size={14} />
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                    Days off autorization
                  </p>
                  <p style={{ fontSize: "0.7rem" }} className="secondary-text">
                    From 1st of Jan to 31 Dec {String(today.getFullYear())}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    backgroundColor: "#E2E2E5",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "0.375rem",
                  }}
                >
                  Days
                </p>
              </div>
              <Separator />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "2rem",
                  padding: "0.5rem 0rem",
                }}
              >
                <div style={{ textAlign: "center", fontWeight: "600" }}>
                  <p>{23 + compensation}</p>
                  <p style={{ fontSize: "0.7rem", marginTop: "0.1rem" }}>
                    Accrued
                  </p>
                </div>
                <div style={{ textAlign: "center", fontWeight: "600" }}>
                  <p>{23 - holidays}</p>
                  <p style={{ fontSize: "0.7rem", marginTop: "0.1rem" }}>
                    Available
                  </p>
                </div>
                <div style={{ textAlign: "center", fontWeight: "600" }}>
                  <p>{compensation + holidays}</p>
                  <p style={{ fontSize: "0.7rem", marginTop: "0.1rem" }}>
                    Taken
                  </p>
                </div>
              </div>
            </div>
            <DaysOffHistory offDays={offDays} />
          </div>
          <div style={{ width: "100%", minHeight: "60%", maxHeight: "60%" }}>
            <YearCalendar offDays={offDays} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeOff;
