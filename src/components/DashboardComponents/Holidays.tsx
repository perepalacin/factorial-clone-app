import React from 'react'
import Separator from '../ui/Separator'
import CalendarCustomIcon from '../ui/CalendarCustomIcon'

const Holidays = () => {
    const data = [{
        day: 29,
        month: "MAR",
        name: "Good Friday",
        //This one will be calculated automatically.
        timeLeft: "In 25 days",
    },{
        day: 1,
        month: "APR",
        name: "Eastern Monday",
        //This one will be calculated automatically.
        timeLeft: "In 28 days",
    },{
        day: 1,
        month: "MAY",
        name: "Labor Day",
        //This one will be calculated automatically.
        timeLeft: "In 58 days",
    },
]
  return (
    <div style={{overflowY: 'auto', overflowX: 'clip'}}>
        {data.map((item) => {
            return (
                <div key = {item.name}>
                    <div className='ghost-button' style={{display: 'flex', flexDirection: 'row', gap:'1rem', padding: '0.25rem 1rem', alignItems: 'center'}}>
                        <CalendarCustomIcon day={item.day}  month={item.month}/>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                            <p style={{fontWeight: '500'}}>{item.name}</p>
                            <p className='secondar-text'>{item.timeLeft}</p>
                        </div>
                    </div>
                    <Separator />
                </div>
            )
        })}
    </div>
  )
}

export default Holidays