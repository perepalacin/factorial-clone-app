import { PalmtreeIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

const RequestTimeOffDialog = () => {

    const [dialogVisible, setIsVisible] = useState(false);
  return (
    <div>
    <button onClick = {() => setIsVisible((prevState) => {return !prevState})}className="main-button big-button" style={{display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center'}}>
        <PlusIcon className="icon" />
        <p>Request time off</p>
    </button>  
    {
        dialogVisible 
        ?
        <div style={{position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: '20'}}>
            <div style={{maxWidth: '250px', minWidth: '250px', display:'flex', flexDirection: 'column', gap: '0.5rem', position:'relative', backgroundColor: '#FFFFFF', padding: '2rem 1rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}>
                <div style={{position: 'absolute', marginTop: '-60px', left: '2', padding: '0.5rem 0.67rem', backgroundColor: '#FFFFFF', color: '#FF355E', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}>
                    <PalmtreeIcon size={30}/>
                </div>
                <p>Resquest time off</p>
                <p>We will  notfiy all of those who have permission to approve your time off about this request, including the person responsible for supervising them.</p>
                <label>Type of absence</label>
                {/* <select/> */}
                <label>Description</label>
                <textarea rows={3}/>
                

            </div>
        </div>
    :
        <></>
    }
    </div>
    )
}

export default RequestTimeOffDialog