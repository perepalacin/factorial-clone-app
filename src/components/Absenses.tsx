import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { getDaysOfMonth } from "../utils/dateTools";

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

const Absenses = () => {
  const today = new Date();
  const [year, setYear] = useState(Number(today.getFullYear()));
  const [month, setMonth] = useState(Number(today.getMonth()));
  const months = [
    {
      longName: "January",
      shortName: "Jan",
    },
    {
      longName: "February",
      shortName: "Feb",
    },
    {
      longName: "March",
      shortName: "Mar",
    },
    {
      longName: "April",
      shortName: "Apr",
    },
    {
      longName: "May",
      shortName: "May",
    },
    {
      longName: "June",
      shortName: "Jun",
    },
    {
      longName: "July",
      shortName: "Jul",
    },
    {
      longName: "August",
      shortName: "Aug",
    },
    {
      longName: "September",
      shortName: "Sep",
    },
    {
      longName: "October",
      shortName: "Oct",
    },
    {
      longName: "November",
      shortName: "Nov",
    },
    {
      longName: "Desember",
      shortName: "Des",
    },
  ];

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

  const days = getDaysOfMonth(year, month + 1);

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
          <ChevronLeftIcon
            className="icon"
            onClick={() => handleMonthChange(false)}
          />
          <p style={{ fontWeight: "500", width: "9rem", textAlign: "center" }}>
            {months[month].longName} {year}
          </p>
          <ChevronRightIcon
            className="icon"
            onClick={() => handleMonthChange(true)}
          />
        </div>
        <table style={{ marginTop: "2rem" }}>
          <thead>
            <tr style={{ color: "#515196", backgroundColor: "#F4F4F5" }}>
              <th
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyItems: "start",
                  gap: "1rem",
                }}
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
                  <th key={item.dayNumber}>
                    <p style={{ fontSize: "0.8rem" }}>{item.dayNumber}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => {
              return (
                <tr>
                  <td style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
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
                      }}
                    >
                      {item.name}
                    </p>
                  </td>
                  {days.map((dayItem) => {
                    return <td key={dayItem.dayNumber}>{dayItem.dayNumber}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Absenses;
