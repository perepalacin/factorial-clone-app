import { PlusIcon } from "lucide-react"
import Separator from "./ui/Separator"
import DaysOffSummary from "./DaysOffSummary"
import DaysOffHistory from "./DaysOffHistory"

const TimeOff = () => {
  return (
    <div className='main-div'>
      <div className='page-card' style={{padding: '0rem 0rem'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1rem'}}>
          <></>
          <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center'}}>
            <img src="src/assets/image-lsoyucoe.png" width={36} style={{borderRadius: '0.375rem'}}/>
            <p>Pere Palacin Pallàs</p>
          </div>
          <button className="main-button big-button" style={{display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center'}}>
            <PlusIcon className="icon" />
            <p>Request time off</p>
          </button>
        </div>
        <Separator />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', width: '40%', padding: '1rem 1rem'}}>
            <DaysOffSummary year={2024}/>
            <DaysOffHistory />
          </div>

        </div>
      </div>
    </div>
  )
}

export default TimeOff