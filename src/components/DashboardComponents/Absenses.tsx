import { TowerControlIcon } from 'lucide-react';
import React from 'react'

const Absenses = () => {
    const data = [{

    }];
    
    if (data) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TowerControlIcon className='icon'/>
                <p>No absences in your teams</p>
            </div>
        )
    }
  return (
    <div>

    </div>
  )
}

export default Absenses