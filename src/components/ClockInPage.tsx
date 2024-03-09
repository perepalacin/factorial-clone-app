import { ChevronLeftIcon, ChevronRightIcon, FileClockIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ClockIn from "./DashboardComponents/ClockIn";
import { useState } from "react";
import Separator from "./ui/Separator";
import ClockInTableRow from "./ClockInTableRow";

const ClockInPage = () => {
  const navigate = useNavigate();
  const today = new Date();
  const { yearId, monthId } = useParams();
  const [year, setYear] = useState(Number(yearId || today.getFullYear()));
  const [month, seMonth] = useState(Number(monthId || today.getMonth()));
  //TODO: If yearId and monthID are missing.
  //naviate to the current date.

  const months = [
    {
      longName: "January",
      shortName: "Jan"
    },
    {
      longName: "February",
      shortName: "Feb"
    },
    {
      longName: "March",
      shortName: "Mar"
    },
    {
      longName: "April",
      shortName: "Apr"
    },
    {
      longName: "May",
      shortName: "May"
    },
    {
      longName: "June",
      shortName: "Jun"
    },
    {
      longName: "July",
      shortName: "Jul"
    },
    {
      longName: "August",
      shortName: "Aug"
    },
    {
      longName: "September",
      shortName: "Sep"
    },
    {
      longName: "October",
      shortName: "Oct"
    },
    {
      longName: "November",
      shortName: "Nov"
    },
    {
      longName: "Desember",
      shortName: "Des"
    }
  ];

  function getDaysOfMonth(yearNum: number, monthNum: number) {
    const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
    const daysArray = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(yearNum, monthNum - 1, day);
      const dayNumber = date.getDate();
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  
      daysArray.push({ dayNumber, dayName });
    }
  
    return daysArray;
  }

  const days = getDaysOfMonth(year, month);


  return (
    <div className="main-div">
      <div className="card-element page-card">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon className="icon" />
          <p style={{ fontWeight: "500" }}>{months[month].longName}</p>
          <ChevronRightIcon className="icon" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "start",
            paddingTop: "2rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <FileClockIcon width={30} height={30} className="accent-color" />
            <p style={{ fontWeight: 600, fontSize: "1.5rem" }}>Clock in</p>
            <p>
              Rescord the hours you work every day. Your
              <br />
              timesheet will then be approved by your manager.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "18rem",
              width: "50%",
              border: "1px solid #e2e2e5",
              borderRadius: "0.375rem",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                padding: "0.6rem 1rem 0.45rem 1rem",
                margin: "0",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              {"Clock in"}
            </p>
            <hr
              style={{
                border: "0",
                height: "1px",
                padding: "0",
                margin: "0",
                backgroundColor: "#E2E2E5",
              }}
            />
            <ClockIn />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            width: "96%",
            border: "1px solid #e2e2e5",
            borderRadius: "0.375rem",
            padding: "1rem 1rem 1rem 1rem",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <p
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "rgba(30, 30, 49, 1)",
              }}
            >
              0h
            </p>
            <p style={{ color: "rgba(81, 81, 100, 1)" }}>Worked hours</p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <p
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "rgba(30, 30, 49, 1)",
              }}
            >
              160h
            </p>
            <p style={{ color: "rgba(81, 81, 100, 1)" }}>Estimated Hours</p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            Graph
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <p
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "rgba(30, 30, 49, 1)",
              }}
            >
              -42h
            </p>
            <p style={{ color: "rgba(81, 81, 100, 1)" }}>Accumulated hours</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            border: "1px solid #e2e2e5",
            borderRadius: "0.375rem",
          }}
        >
          <table style={{ textAlign: "left", padding: "1rem 2rem", fontWeight: 400}}>
            <tr className="tertiarybg">
              <th>Day</th>
              <th>Shift</th>
              <th>Worked hours</th>
              <th>Country</th>
            </tr>
            {days.map((item) => {
              return (
                <ClockInTableRow 
                day={item.dayNumber} 
                dayName={item.dayName} 
                month={month} 
                monthShortName={months[month].shortName} 
                shifts={[{
                  startTime: 900,
                  endTime: 1700,
                  working: true
                }]}/>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClockInPage;
