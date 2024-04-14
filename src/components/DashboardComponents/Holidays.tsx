import Separator from "../ui/Separator";
import CalendarCustomIcon from "../ui/CalendarCustomIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import { bank_holidays } from "../../types";
import { shortFormatter } from "../../utils/dateTools";

const Holidays = () => {
  const today = new Date();
  const [bankHolidays, setBankHolidays] = useState<bank_holidays[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/holidays")
    .then((response) => {
      console.log("promise fulfilled");
      console.log(response.data);
      setBankHolidays(response.data);
    })
    .catch((error) => {
      console.log("Error failed to fetch data:" + error);
    });

  }, []);
  return (
    <div style={{ overflowY: "auto", overflowX: "clip" }}>
      {bankHolidays.length >= 1 ?
      <>
      {bankHolidays.map((item) => {
        const date = new Date(item.date);
        console.log(date);
        console.log(date.getMonth());
        const differenceInMs = date.getTime() - today.getTime();
        const daysLeft = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
        console.log(shortFormatter.format(date.getMonth()).toUpperCase());  
        return (
          <div key={item.id}>
            <div
              className="ghost-button"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                padding: "0.25rem 1rem",
                alignItems: "center",
              }}
            >
              <CalendarCustomIcon day={date.getDate()} month={date.getMonth().toString()} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <p style={{ fontWeight: "500", textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</p>
                <p className="secondar-text">{daysLeft} days left</p>
              </div>
            </div>
            <Separator />
          </div>
        );
      })}
      </>
    :
    <></>}
    </div>
  );
};

export default Holidays;
