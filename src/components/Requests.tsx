import { InboxIcon } from 'lucide-react'
import React from 'react'

const Requests = () => {
  console.log("WE are in requests");
  return (
    <div className='card-element'>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <InboxIcon width={30} height={30} className='accent-color'/>
                <p>Requests</p>
                <p>These are the requests you are pending.</p>
            </div>
        </div>
    </div>
  )
}

export default Requests