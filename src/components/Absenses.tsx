import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getDaysOfMonth, longFormatter } from "../utils/dateTools";
import AbsencesColorSquare from "./ui/AbsencesColorSquare";
import { MemberDetails } from "./DashboardComponents/Teams";
import axios from "axios";
import { absences_data } from "../types";

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

const Absenses = () => {
  const [employeesData, setEmployeesData] = useState<MemberDetails[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState<MemberDetails[]>([]);
  const [absencesData, setAbsencesData] = useState<absences_data[]>([]);
  
  //Function that manages the filtering of all the employees list
  const handleInputChange = (input: string) => {
    const searchTerm = input;
    setSearchInput(searchTerm);

    //We use the input value to search instead of the search input state
    //in order to compensate for the state change asyncronous nature,
    const filteredItems = employeesData.filter((user) => user.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    setFilteredList(filteredItems);
  }
  useEffect(() => {
    axios.get("http://localhost:3000/api/employees")
    .then((response) => {
      setEmployeesData(response.data);
      setFilteredList(response.data);
    })
    .catch((error) => {
      console.log("Error failed to fetch data:" + error);
    });

    axios.get("http://localhost:3000/api/holidays/all")
    .then((response) => {
      setAbsencesData(response.data);
      console.log("Absences:");
      console.log(absencesData);
    })
    .catch((error) => {
      console.log("Error failed to fetch absences data:" + error);
    });
  }, []);

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
                    onChange={(event) => {handleInputChange(event.target.value)}}
                    value={searchInput}
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
              {filteredList.map((item) => {
                return (
                  <tr key={item.name}>
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
                        src={item.picture}
                        width={32}
                        height={32}
                        style={{ borderRadius: "0.75rem", objectFit: 'cover' }}
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
                      for (let i = 0; i < absencesData.length; i++) {
                        if (item.name === absencesData[i].name) {
                          const startDate = new Date (absencesData[i].start);
                          const endDate = new Date(absencesData[i].finish);
                          if (startDate <= dayItem && dayItem <= endDate) {
                            holidayLabel = absencesData[i].type;
                            color = colorCode.find(item => item.type === absencesData[i].type)?.color || 'rgba(0, 0, 0, 0)';
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
