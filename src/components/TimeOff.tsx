import Separator from "./ui/Separator"
import DaysOffSummary from "./DaysOffSummary"
import DaysOffHistory from "./DaysOffHistory"
import YearCalendar from "./TimeOff/YearCalendar"
import RequestTimeOffDialog from "./TimeOff/RequestTimeOffDialog"
import { useEffect, useState } from "react"
import axios from "axios"
import { absences_data } from "../types"

const TimeOff = () => {
  const today = new Date();
  const [offDays, setOffDays] = useState<absences_data[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/holidays/19")
    .then((response) => {
      setOffDays(response.data);
    })
    .catch((error) => {
      console.log("Error failed to fetch data:" + error);
    });
  }, []);

  //The user is hardcoded in this example, but we should get the user id to fetch it's data
  return (
    <div className='main-div'>
      <div className='page-card' style={{padding: '0rem 0rem'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1rem'}}>
          <></>
          <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center'}}>
            <img src="src/assets/image-lsoyucoe.png" width={36} style={{borderRadius: '0.375rem'}}/>
            <p style={{fontWeight: '600'}}>Pere Palacin Pallàs</p>
          </div>
          <RequestTimeOffDialog />
        </div>
        <Separator />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', width: '40%', padding: '1rem 1rem'}}>
            <DaysOffSummary offDays = {offDays} year={today.getFullYear()}/>
            <DaysOffHistory offDays = {offDays}/>
          </div>
          <div style={{width: '100%', minHeight: '60%', maxHeight: '60%'}}>
            <YearCalendar offDays = {offDays} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeOff