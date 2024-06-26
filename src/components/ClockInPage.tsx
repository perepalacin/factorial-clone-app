import { ChevronLeftIcon, ChevronRightIcon, FileClockIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ClockIn from "./DashboardComponents/ClockIn";
import { useEffect, useState } from "react";
import '../index.css';
import ClockInTableRow, { ShiftsProps } from "./ClockInTableRow";
import { getDaysOfMonth, longFormatter, shortFormatter } from "../utils/dateTools";
import axios from "axios";



const ClockInPage = () => {

  const [shiftsData, setShiftsData] = useState<ShiftsProps[]>([
    {
      day: "",
      start: "",
      finish: "",
      working: true,
    }
  ]);

  const navigate = useNavigate();
  //We get the actual date
  const today = new Date();
  //We get the parameters from the url
  const { yearId, monthId } = useParams();
  //if the parameters are missing, we hardcode the actual month.
  const [year, setYear] = useState(Number(yearId || today.getFullYear()));
  const [month, setMonth] = useState(Number(monthId || today.getMonth()));
  const [workedHours, setWorkedHours] = useState(0);
  //TODO: If yearId and monthID are missing.
  //naviate to the current date.


  //We create a function to handle the navigation between months
  const handleMonthChange = (forward: boolean) => {
    if (forward === true) {
      if (month === 11) {
        setMonth(0);
        setYear(prevYear => prevYear + 1);
      } else {
        setMonth(prevMonth => prevMonth + 1);
      }
    } else {
      if (month === 0) {
        setMonth(11);
        setYear(prevYear => prevYear - 1);
      } else {
        setMonth(prevMonth => prevMonth - 1);
      }
    }
  }

  //We use a useEffect to handle with the asyncronous nature of state change;
  useEffect(() => {
    navigate(`/clock-in/${year.toString()}/${month.toString()}`);
    axios.get(`http://localhost:3000/api/shifts/19/${month}/${year}`)
    .then((response) => {
      setShiftsData(response.data);
    })
    .catch((error) => {
      console.log("Error failed to fetch data:" + error);
    });
  }, [month, year]);

  const days = getDaysOfMonth(year, month);

  useEffect(() => {
    let workedTime = 0;
    for (let i = 0; i < shiftsData.length; i++) {
      if (shiftsData[i].working === true) {
        const start = new Date(shiftsData[i].day.split('T') + 'T' + shiftsData[i].start + '0Z').getTime();
        const end = new Date(shiftsData[i].day.split('T') + 'T' + shiftsData[i].finish + '0Z').getTime();
        let difference = (end - start)/60000; //We calculate the difference between shifts in miliseconds;
        let hours = Math.floor(difference/6);
        let minutes = difference - (hours*60);


      }
    }
  }, [shiftsData])
  


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
          <ChevronLeftIcon className="icon" onClick={() => handleMonthChange(false)} />
          <p style={{ fontWeight: "500", width: '6rem', textAlign: 'center'}}>{longFormatter.format(days[0])}</p>
          <ChevronRightIcon className="icon" onClick={() => handleMonthChange(true)}/>
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
              Record the hours you work every day. Your
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
          <table style={{ textAlign: "left", fontWeight: 400}}>
            <thead>
            <tr className="tertiarybg">
              <th className="table-row" style={{padding: '0.5rem', width: '20%', fontWeight: '500', fontSize: '0.9rem'}}>Day</th>
              <th className="table-row" style={{width: '40%', fontWeight: '500', fontSize: '0.9rem'}}>Shift</th>
              <th className="table-row" style={{fontWeight: '500', fontSize: '0.9rem'}}>Worked hours</th>
            </tr>
            </thead>
            {days.map((item) => {
              const transferShifts: ShiftsProps[] | null = [];
              for (let i = 0; i < shiftsData.length; i++) {
                const rowDate = (new Date(shiftsData[i].day)).getDate();
                if (item.getDate() === rowDate) {
                  transferShifts.push(shiftsData[i]);
                } else {
                  break;
                }
            }
              return (
                <ClockInTableRow 
                key = {item.getDate()}
                day={item.getDate()} 
                dayName={item.toLocaleDateString('en', {weekday: 'long'})} 
                month={month} 
                monthShortName={shortFormatter.format(today.getMonth())} 
                shifts={transferShifts}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClockInPage;
