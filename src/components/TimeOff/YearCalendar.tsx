import {  DateRange, DayPicker } from 'react-day-picker';

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

const dummyHolidays: DateRange[] = [
    {
      from: new Date("03-12-2024"),
      to: new Date("03-21-2024"),
    },
    {
      from: new Date("01-01-2024"),
      to: new Date("01-07-2024"),
    },
    {
      from: new Date("07-01-2024"),
      to: new Date("07-25-2024"),
    },
    {
      from: new Date("12-01-2024"),
      to: new Date("12-23-2024"),
    }];  

export default function YearCalendar() {
    const year = new Date().getFullYear();
    const months = Array.from(Array(12).keys());
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
                  selected: dummyHolidays.map(holiday => ({
                    from: holiday.from,
                    to: holiday.to,
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
