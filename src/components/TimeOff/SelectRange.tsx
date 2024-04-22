import { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";
import { absences_data } from "../../types";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";

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


const goodRequest = (prompt: string) => toast.success(prompt, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  transition: Slide,
});


const badRequest = (prompt: string) => toast.error(prompt, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  transition: Slide,
});

async function handleClick (range: DateRange, type: string) {
  if (range.from && range.to ) {
    if (range.from <= range.to) {
      const datesRequested: absences_data  = {
        id: undefined,
        name: "Pere Palacín",
        employee_id: 19,
        type: type,
        start: range.from,
        finish: range.to,
      }
      axios
      .post('http://localhost:3000/api/holidays/submit', datesRequested)
      .then(response => {
        window.location.reload();
        goodRequest(response.data.message);
        return null;
      })
      .catch(error => {
        badRequest(error.response.data.error);
        return null;
      });
    } else {
      badRequest("Invalid range, check the dates selected");
      return null;
    }
  } else {
    badRequest("Missing days selection.");
    return null;
  }
}

//I've decided to do two layers of prop drilling instead of creating a context
//Because I tried both and this method caused the least amount of rerenders
interface SelectedRangeProps {
  offDays: absences_data[];
  daysLeft: number;
  type: string;
}

export default function SelectDateRange(props: SelectedRangeProps) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [dialogVisible, _isDialogVisible] = useState(true);
  return (
    <div>
      <ToastContainer/>
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
          <p style={{fontSize: '0.8rem', padding: '0.5rem', border: 'solid 2px #E2E2E5', borderRadius: '0.5rem'}}>{range?.from?.getDate()}/{range?.from?.getMonth()}/{range?.from?.getFullYear()} - {range?.to?.getDate()}/{range?.to?.getMonth()}/{range?.to?.getFullYear()}</p>
          {range?.from && range.to 
          ?
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', marginTop: '1rem'}}>
            <button className="small-button main-button" onClick={() => handleClick(range, props.type)}>
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
