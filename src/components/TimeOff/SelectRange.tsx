import { useState } from "react";

import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { shortFormatter } from "../../utils/dateTools";

const today = new Date();

const css = `
  .rdp-day_selected { 
    position: relative;
    color: #FFFFFF;
    background-color: #FF355E;
    border-radius: 0.375rem;
  }
  .my-selected:not:last-child([disabled]) { 
    background-color: #FF0000;
  }
  .rdp-day_today:not(.rdp-day_outside)  {
    font-weight: 500;
  }
  .rdp:not([dir='rtl']) .rdp-day_range_start:not(.rdp-day_range_end) {
    border-radius: 0.375rem;
  }
  .rdp:not([dir='rtl']) .rdp-day_range_end:not(.rdp-day_range_start) {
    border-radius: 0.375rem;
  }
  .rdp-day_range_end.rdp-day_range_start {
    border-radius: 0.365rem;
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
          onSelect={setRange}
          />
          <label htmlFor='select' style={{fontWeight: '600', fontSize: '0.9rem'}} >Selected days</label>
          <p style={{fontSize: '0.8rem', padding: '0.5rem', border: 'solid 2px #E2E2E5', borderRadius: '0.5rem'}}>{range?.from?.getDate()} {shortFormatter.format(range?.from?.getMonth())} {range?.from?.getFullYear()} - {range?.to?.getDate()} {shortFormatter.format(range?.to?.getMonth())} {range?.to?.getFullYear()}</p>
          {range?.from && range.to 
          ?
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', marginTop: '1rem'}}>
            <button className="small-button main-button">
              Request days off
            </button>
          </div>
          :
          <></>  
          }
          </div>
      ) : (
        <></>
      )}
    </div>
  );
}
