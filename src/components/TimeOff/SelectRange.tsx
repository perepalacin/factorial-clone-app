import { useState } from "react";

import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

const today = new Date();

const css = `
  .my-selected:not([disabled]) { 
    position: relative;
    color: #000000;
    background-color: #FF355E;
  }
  .my-selected:not:last-child([disabled]) { 
    background-color: #FF0000;
  }
  .my-today {
    border: 2px solid #0BA3AE; 
  }
`;

export default function SelectDateRange() {
  const defaultSelected: DateRange = {
    from: today,
    to: addDays(today, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const [dialogVisible, isDialogVisible] = useState(true);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <div>
      {dialogVisible ? (
        <div>
            <style>
                {css}
            </style>
        <DayPicker
          id="test"
          mode="range"
          defaultMonth={today}
          selected={range}
          footer={footer}
          onSelect={setRange}
          />
          </div>
      ) : (
        <></>
      )}
    </div>
  );
}
