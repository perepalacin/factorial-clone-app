import { PlusIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import Separator from './ui/Separator';
import useComponentVisible from '../hooks/useComponentVisible';

interface ClockInTableRowProps {
    day: number;
    month: number;
    monthShortName: string;
    dayName: string;
    shifts: {
        startTime: number;
        endTime: number;
        working: boolean;
    }[]
}

const ClockInTableRow = (props: ClockInTableRowProps) => {
    const [shifts, setShifts] = useState(props.shifts);
    
    const [isVisible, setIsVisible] = useState(false);

    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(isVisible);

    useEffect (() => {
      setIsVisible(isComponentVisible);
    }, [isComponentVisible]);
    
    return (
    <tr style={{ textAlign: "left" }}>
                  <th>
                    <div>
                      <p style={{fontWeight: 500, fontSize: '0.9rem'}}>{props.day} {props.monthShortName}</p>
                      <p style={{fontSize: '0.8rem'}}>{props.dayName}</p>
                    </div>
                  </th>
                  <th>
                    <button className='muted-button small-button' style={{position: 'relative'}} onClick={() => {setIsComponentVisible(true)}}>
                        <PlusIcon width={14} height={14} color='#515196'/>
                        Add
                        {isComponentVisible ? 
                        <div className='shifts-dialog' ref={ref}>
                            <div style={{position: 'absolute', top: '16px', left: '-4px', rotate: '45deg', backgroundColor: '#FFFFFF', width: '10px', height: '10px'}}/>
                            <div style={{display: 'flex', flexDirection: 'row', gap: '0.5rem', padding: '2rem 1rem 0rem 1rem'}}>
                                <button className='shifts-button'>
                                    <p style={{textAlign: 'center'}}>Shift</p>
                                </button>
                                <button className='shifts-button'>
                                    Break
                                </button>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center', padding: '0rem 1rem'}}>
                                <input placeholder='--:--'/>
                                -
                                <input placeholder='--:--'/>
                            </div>
                            <Separator />
                            <div style={{display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'end', padding: '0rem 1rem 1rem 0rem'}}>
                              <button className='muted-button small-button'>
                                Cancel
                              </button>
                              <button className='main-button small-button'>
                                Apply
                              </button>
                            </div>
                        </div>
                        :
                        <></>
                        }
                    </button>
                  </th>
                  <th>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p style={{width: '7rem', fontSize: '0.9rem', fontWeight: '500'}}>Worked: </p>
                            <p style={{fontSize: '0.9rem', fontWeight: '500'}}>8h</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p style={{width: '7rem', fontSize: '0.9rem'}} className='secondary-text'>Estimated: </p>
                            <p style={{fontSize: '0.9rem'}} className='secondary-text'>8h</p>
                        </div>
                        <p style={{fontSize: '0.8rem', fontWeight: '500', padding: '0.3rem 0.5rem', backgroundColor: '#FBE3BC', borderRadius: '0.375rem', width: '4.75rem'}}>Balance -8h</p>
                    </div>
                  </th>
                  <th></th>
    </tr>
  )
}

export default ClockInTableRow