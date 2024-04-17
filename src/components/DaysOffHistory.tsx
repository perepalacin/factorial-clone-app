import { ArrowRightIcon, CalendarIcon } from "lucide-react"
import CalendarCustomIcon from "./ui/CalendarCustomIcon";
// import { shortFormatter } from "../utils/dateTools";
import { absences_data } from "../types";


// const props.offDays = [
//     {
//       name: "Pere",
//       startDate: new Date("03-12-2024"),
//       endDate: new Date("03-21-2024"),
//       type: "Maternity leave"
//     },
//     {
//       name: "Pere",
//       startDate: new Date("03-03-2024"),
//       endDate: new Date("03-18-2024"),
//       type: "Medical absence",
//     },
//     {
//       name: "Pere",
//       startDate: new Date("03-06-2024"),
//       endDate: new Date("03-10-2024"),
//       type: "Time off",
//     },
//     {
//       name: "Pere",
//       startDate: new Date("03-13-2024"),
//       endDate: new Date("03-16-2024"),
//       type: "Overtime compensation",
//     }
//   ];

  interface DaysOffHistoryProps {
    offDays: absences_data[];
}

const DaysOffHistory = (props: DaysOffHistoryProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '0rem 1rem'}}>
        <CalendarIcon size={24} className="accent-color" style={{textAlign: 'left', marginBottom: '0.5rem'}}/>
        <p style={{fontWeight: 600, textAlign: 'left', marginBottom: '0.5rem'}}>Past absences</p>
        <p style={{fontSize: '0.8rem', textAlign: 'left', marginBottom: '0.5rem'}}>This is your absences history. Past absences can't be edited. Only Time off and overtime compensations are displayed on the calendar.</p>
        {props.offDays.length !== 0 ? 
        props.offDays.map((item) => {
          const startDate = new Date(item.start);
          const endDate = new Date(item.finish);
            return (
                <div key = {startDate.getDate()} style={{display: 'flex', flexDirection: 'row', padding: '1rem 1rem', alignItems: 'center', justifyContent: 'start', gap: '1rem', border: '1px solid #E2E2E5'}}>
                    <div style={{scale: '0.8'}}>
                      {/* Fix the month display! */}
                    <CalendarCustomIcon day={startDate.getDate()} month={startDate.getMonth().toString()}/>
                    </div>
                    <ArrowRightIcon size= {18} style={{color: '#7a7a7a  '}}/>
                    <div style={{scale: '0.8'}}>
                    <CalendarCustomIcon day={endDate.getDate()} month={endDate.getMonth().toString()}/>
                    </div>
                    <div>
                    <p style={{fontSize: '0.8rem'}}>{item.type}</p>
                    <p style={{fontSize: '0.8rem'}}>({endDate.getFullYear()})</p>
                    </div>

                </div>
            )
        })
        : 
        <p style={{fontSize: '0.8rem', fontWeight: '600'}}>No past absences this year</p> }
        
        {/* Or the map through hehe */}
    </div>
  )
}

export default DaysOffHistory