import { ArrowRightIcon, CalendarIcon } from "lucide-react"
import CalendarCustomIcon from "./ui/CalendarCustomIcon";
import { shortFormatter } from "../utils/dateTools";


const dummyHolidays = [
    {
      name: "Pere",
      startDate: new Date("03-12-2024"),
      endDate: new Date("03-21-2024"),
      type: "Maternity leave"
    },
    {
      name: "Pere",
      startDate: new Date("03-03-2024"),
      endDate: new Date("03-18-2024"),
      type: "Medical absence",
    },
    {
      name: "Pere",
      startDate: new Date("03-06-2024"),
      endDate: new Date("03-10-2024"),
      type: "Time off",
    },
    {
      name: "Pere",
      startDate: new Date("03-13-2024"),
      endDate: new Date("03-16-2024"),
      type: "Overtime compensation",
    }
  ];

  console.log(shortFormatter.format(dummyHolidays[0].endDate.getMonth()))

const DaysOffHistory = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0rem 1rem', border: '1px solid #E2E2E5'}}>
        <CalendarIcon size={24} className="accent-color" style={{textAlign: 'left'}}/>
        <p style={{fontWeight: 600}}>Past time off</p>
        <p style={{fontSize: '0.8rem'}}>This is your time off history. Past absences can't be edited.</p>
        {dummyHolidays.length !== 0 ? 
        dummyHolidays.map((item) => {
            return (
                <div key = {item.startDate.getDate()} style={{display: 'flex', flexDirection: 'row', padding: '1rem 1rem', alignItems: 'center', justifyContent: 'start', gap: '2rem'}}>
                    <CalendarCustomIcon day={item.startDate.getDate()} month={shortFormatter.format(item.startDate.getMonth()).toUpperCase()}/>
                    <ArrowRightIcon />
                    <CalendarCustomIcon day={item.endDate.getDate()} month={shortFormatter.format(item.endDate.getMonth()).toUpperCase()}/>
                    <div>
                    <p style={{fontSize: '0.8rem'}}>{item.type}</p>
                    <p style={{fontSize: '0.8rem'}}>({item.endDate.getFullYear()})</p>
                    </div>

                </div>
            )
        })
        : 
        <p style={{fontSize: '0.8rem'}}>No past absences this year</p> }
        
        {/* Or the map through hehe */}
    </div>
  )
}

export default DaysOffHistory