import { InfoIcon } from "lucide-react";
import Separator from "./ui/Separator";

interface DaysOffSummaryProps {
    year: number;
}

const DaysOffSummary = (props: DaysOffSummaryProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #e2e2e5', borderRadius: '0.375rem', padding: '1rem 1rem', backgroundColor: '#F4F4F5'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
            <InfoIcon size={14}/>
            <div style={{textAlign: 'center'}}>
            <p style={{fontSize: '0.9rem', fontWeight: '600'}}>Days off autorization</p>
            <p style={{fontSize: '0.7rem'}} className="secondary-text">From 1st of Jan to 31 Dec {props.year}</p>
            </div>
            <p style={{fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#E2E2E5', padding: '0.1rem 0.4rem', borderRadius: '0.375rem'}}>Days</p>
        </div>
        <Separator />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '2rem', padding: '0.5rem 0rem'}}>
            <div style={{textAlign: 'center', fontWeight: '600'}}>
                <p>23</p>
                <p style={{fontSize: '0.7rem', marginTop: '0.1rem'}}>Accrued</p>
            </div>
            <div style={{textAlign: 'center', fontWeight: '600'}}>
                <p>23</p>
                <p style={{fontSize: '0.7rem', marginTop: '0.1rem'}}>Available</p>
            </div>
            <div style={{textAlign: 'center', fontWeight: '600'}}>
                <p>0</p>
                <p style={{fontSize: '0.7rem', marginTop: '0.1rem'}}>Taken</p>
            </div>
        </div>

    </div>
  )
}

export default DaysOffSummary