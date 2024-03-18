import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getDaysOfMonth, longFormatter, shortFormatter } from "../utils/dateTools";

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

const dummyHolidays = [
  {
    name: "Adrian Romero Galeon",
    startDate: new Date("03-12-2024"),
    endDate: new Date("03-21-2024"),
    type: "Maternity Leave"
  },
  {
    name: "Sara Ubeda Lopez",
    startDate: new Date("03-03-2024"),
    endDate: new Date("03-18-2024"),
  }
];
console.log(dummyHolidays);
//TODO:Types: Maternity leave, holidays, overtime compensation, paid leave
//Create an array with a color for all the types and assign it to the style

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
  
  
  return (
    <div className="main-div">
      <div className="card-element" style={{ padding: "2rem 0rem" }}>
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
                  className="timeline-table"
                >
                  <SearchIcon className="iconz" />{" "}
                  <input
                    className="input-search"
                    style={{ width: "150px" }}
                    placeholder="Search employees"
                  />
                </th>
                {days.map((item) => {
                  return (
                    <th
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
                          padding: "0.15rem 0.35rem",
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
                      for (let i = 0; i < dummyHolidays.length; i++) {
                        if (item.name === dummyHolidays[i].name) {
                          if (dummyHolidays[i].startDate <= dayItem && dayItem <= dummyHolidays[i].endDate) {
                            color = 'rgba(12, 12, 12, 0.26)';
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
                          <div
                            style={{
                              minHeight: "1.5rem",
                              backgroundColor: color
                            }}
                          >
                            {" "}
                          </div>
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
