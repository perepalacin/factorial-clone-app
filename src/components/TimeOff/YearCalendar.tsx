import {  DateRange, DayPicker } from 'react-day-picker';
import { absences_data } from '../../types';
import { useEffect, useState } from 'react';

const css = `
  .my-selected:not([disabled]) { 
    position: relative;
    color: #FFFFFF;
    background-color: #FF355E;
  }
  .my-selected:not:last-child([disabled]) { 
    background-color: #FF0000;
  }
  .my-today {
    border: 2px solid #0BA3AE; 
  }
`;

    
interface YearCalendarProps {
    offDays: absences_data[];
}


export default function YearCalendar(props: YearCalendarProps) {
    const year = new Date().getFullYear();
    const months = Array.from(Array(12).keys());
    const [selectedDays, setSelectedDays] = useState<DateRange[]>([]);
    useEffect(() => {
      for (let i = 0; i < props.offDays.length; i++) {
        if (props.offDays[i].type === "Time off" || props.offDays[i].type === "Overtime compensation") {
          const from = new Date(props.offDays[i].start);
          const to = new Date(props.offDays[i].finish);
          const newArray: DateRange[] = selectedDays;
          newArray.push({
            from: from,
            to: to,
          });
          setSelectedDays(newArray);
        }
      }
    }, [props.offDays]);
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'}}>
        <style>{css}</style>
        {months.map((item) => {
            return (
                <DayPicker
                key={item}
                mode='range'
                disableNavigation
                defaultMonth={new Date(year, item)}
                ISOWeek
                modifiers={{
                  selected: selectedDays.map(item => ({
                    from: item.from,
                    to: item.to,
                  })),
                }}
                modifiersClassNames={{
                    selected: 'my-selected',
                    today: 'my-today'
                  }}
                  modifiersStyles={{
                    disabled: { fontSize: '75%' }
                  }}
                />
            )
        })}
    </div>
  );
}
