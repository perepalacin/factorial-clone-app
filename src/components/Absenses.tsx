import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getDaysOfMonth, longFormatter, shortFormatter } from "../utils/dateTools";
import HoverDialog from "./ui/AbsencesColorSquare";
import AbsencesColorSquare from "./ui/AbsencesColorSquare";

const dummyData = [
  {
    name: "Adrian Romero Galeon",
    photo: "/fegerere",
  },
  {
    name: "Alex Bamonte Lopez",
    photo: "/rjbregherkjbe",
  },
  {
    name: "Lucia Lucas Mango",
    photo: "/jggjrhgerjkge",
  },
  {
    name: "Sara Ubeda Lopez",
    photo: "/rvhkghejkehwjkgre",
  },
];

const colorCode = [{
  color: "rgb(7, 162, 173)",
  type: "Time off"
},
{
  color: "rgb(0, 140, 55)",
  type: "Overtime compensation"
},
{
  color: "rgb(135, 127, 237)",
  type: "Maternity leave", //this should be an enum!
},
{
  color: 'rgb(71, 167, 255)',
  type: "Medical absence",
}
];

const dummyHolidays = [
  {
    name: "Adrian Romero Galeon",
    startDate: new Date("03-12-2024"),
    endDate: new Date("03-21-2024"),
    type: "Maternity leave"
  },
  {
    name: "Sara Ubeda Lopez",
    startDate: new Date("03-03-2024"),
    endDate: new Date("03-18-2024"),
    type: "Medical absence",
  },
  {
    name: "Alex Bamonte Lopez",
    startDate: new Date("03-06-2024"),
    endDate: new Date("03-10-2024"),
    type: "Time off (PTO or NPTO)",
  },
  {
    name: "Alex Bamonte Lopez",
    startDate: new Date("03-012-2024"),
    endDate: new Date("03-16-2024"),
    type: "Overtime compensation",
  }
];

const Absenses = () => {
  const today = new Date();
  const [year, setYear] = useState(Number(today.getFullYear()));
  const [month, setMonth] = useState(Number(today.getMonth()));
  const days = getDaysOfMonth(year, month);

  //We create a function to handle the navigation between months
  const handleMonthChange = (forward: boolean) => {
    if (forward === true) {
      if (month === 11) {
        setMonth(0);
        setYear((prevYear) => prevYear + 1);
      } else {
        setMonth((prevMonth) => prevMonth + 1);
      }
    } else {
      if (month === 0) {
        setMonth(11);
        setYear((prevYear) => prevYear - 1);
      } else {
        setMonth((prevMonth) => prevMonth - 1);
      }
    }
  };
  
  console.log("Rerun!");
  
  return (
    <div className="main-div" style={{ overflowX: 'hidden' }}>
      <div className="card-element" style={{ padding: "2rem 0rem"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon
            className="icon"
            onClick={() => handleMonthChange(false)}
          />
          <p style={{ fontWeight: "500", width: "9rem", textAlign: "center" }}>
            {longFormatter.format(days[0])} {year}
          </p>
          <ChevronRightIcon
            className="icon"
            onClick={() => handleMonthChange(true)}
          />
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ marginTop: "2rem", width: "100%" }}>
            <thead>
              <tr style={{ color: "#515196", backgroundColor: "#F4F4F5" }}>
                <th
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyItems: "start",
                    gap: "1rem",
                    padding: "0.5rem 0.5rem",
                    position: "sticky",
                    left: "0",
                    zIndex: "10",
                    backgroundColor: '#F4F4F5'
                  }}
                  className="timeline-table table-row"
                >
                  <SearchIcon className="icon" style={{color: "#7a7a7a"}} />{" "}
                  <input
                    className="input-search"
                    style={{ width: "150px" }}
                    placeholder="Search employees"
                  />
                </th>
                {days.map((item) => {
                  return (
                    <th
                    className="table-row"
                      style={{
                        padding: "0.5rem 0.5rem",
                        backgroundColor:
                          item.getDate() === today.getDate() &&
                          month === today.getMonth() &&
                          year === today.getFullYear()
                            ? "rgba(201, 241, 245, 1)"
                            : "#F4F4F5",
                      }}
                      key={item.getDate()}
                    >
                      <p
                        style={{
                          fontSize: "0.8rem",
                          padding: "0.35rem 0.35rem",
                          height: '1rem',
                          width: '1rem',
                          borderRadius: "2rem",
                          backgroundColor:
                            item.getDate() === today.getDate() &&
                            month === today.getMonth() &&
                            year === today.getFullYear()
                              ? "rgba(7, 162, 173, 1)"
                              : "#F4F4F5",
                          color:
                            item.getDate() === today.getDate() &&
                            month === today.getMonth() &&
                            year === today.getFullYear()
                              ? "#FFFFFF"
                              : "#000000",
                        }}
                      >
                        {item.getDate()}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => {
                return (
                  <tr>
                    <td
                      style={{
                        padding: "0.5rem 2rem 0.5rem 0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        position: "sticky",
                        left: "0",
                        zIndex: "10",
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <img
                        src="/src/assets/image-lsoyucoe.png"
                        width={32}
                        height={32}
                        style={{ borderRadius: "0.75rem" }}
                      />
                      <p
                        style={{
                          whiteSpace: "nowrap",
                          fontWeight: "600",
                          fontSize: "0.9rem",
                          color: "#1e1e31",
                        }}
                      >
                        {item.name}
                      </p>
                    </td>
                    {days.map((dayItem) => {
                      var color = 'rgba(0, 0, 0, 0)';
                      var bgOpacity = '1';
                      var holidayLabel = "";
                      for (let i = 0; i < dummyHolidays.length; i++) {
                        if (item.name === dummyHolidays[i].name) {
                          if (dummyHolidays[i].startDate <= dayItem && dayItem <= dummyHolidays[i].endDate) {
                            holidayLabel = dummyHolidays[i].type;
                            color = colorCode.find(item => item.type === dummyHolidays[i].type)?.color || 'rgba(0, 0, 0, 0)';
                            if (dayItem.toLocaleDateString('en', {weekday: 'long'}) === "Saturday" || dayItem.toLocaleDateString('en', {weekday: 'long'}) === "Sunday") {
                              bgOpacity = '0.4';
                            }
                          }
                        }
                      }
                      return (
                        <td
                          key={dayItem.getDate()}
                          style={{
                            backgroundColor:
                              dayItem.getDate() === today.getDate() &&
                              month === today.getMonth() &&
                              year === today.getFullYear()
                                ? "rgba(201, 241, 245, 1)"
                                : dayItem.toLocaleDateString('en', {weekday: 'long'}) === "Saturday" ||
                                  dayItem.toLocaleDateString('en', {weekday: 'long'}) === "Sunday"
                                ? "#F4F4F5"
                                : "#FFFFFF",
                          }}
                        >
                          <AbsencesColorSquare label={holidayLabel} color={color} opacity={bgOpacity} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Absenses;
