import { DateRange } from "react-day-picker";
import { absences_data } from "../types";

export function getDaysOfMonth(yearNum: number, monthNum: number) {
  console.log(monthNum);
    const daysInMonth = new Date(yearNum, monthNum + 1, 0).getDate();
    console.log(daysInMonth);
    const daysArray = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(yearNum, monthNum, day);
      daysArray.push(date);
    }
  
    return daysArray;
  }

  export function getHolidayCount(offDays: absences_data[]) {
            //Variable that counts the holidays;
            let holidaysCount = 0;
            //Varible that counts the overtime obtained
            let compensationCount = 0;
            for (let i = 0; i < offDays.length; i++) {
                if (offDays[i].type === "Time off" || offDays[i].type === "Overtime compensation") {
                    let counter = 0;
                    const start = new Date(offDays[i].start);
                    const end = new Date(offDays[i].finish);
                    while (start <= end) {
                        //We discard weekend days
                        //TODO: Discard bank holidays too!
                        if (start.getDay() !== 0 && start.getDay() !== 6) {
                            counter++;
                        };
                        start.setDate(start.getDate() + 1);
                    };
                    if (offDays[i].type === "Time off") {
                        holidaysCount = holidaysCount + counter;
                    } else {
                        compensationCount = compensationCount + counter;
                    }
                }
            };
            return [holidaysCount, compensationCount];
  }


  export function getWorkingDaysFromRange(range: DateRange) {
    let counter = 0;
    const start = range.from;
    const end = range.to;
      if (start && end) {
        while (start <= end) {
          //We discard weekend days
          //TODO: Discard bank holidays too!
          if (start.getDay() !== 0 && start.getDay() !== 6) {
            counter++;
          };
          start.setDate(start.getDate() + 1);
        };
      };
    return counter;
}


  export const shortFormatter = new Intl.DateTimeFormat('en', { month: 'short' });
  export const longFormatter = new Intl.DateTimeFormat('en', { month: 'long' });

