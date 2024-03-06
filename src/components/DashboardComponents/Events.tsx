import { CalendarRangeIcon } from "lucide-react"
import '../../index.css'
const Events = () => {
    const data = [];

    if (data.length === 0) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: '1rem',
            }}>
                <CalendarRangeIcon className="secondary-text" width={26} height={26}/>
                <p className="secondary-text" style={{fontWeight: 500, fontSize: '0.85rem'}}>No events coming up.</p>
            </div>
        )
    }
  return (
    <div>Events</div>
  )
}

export default Events