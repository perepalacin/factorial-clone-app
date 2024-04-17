import { InfoIcon } from "lucide-react";
import Separator from "./ui/Separator";
import { absences_data } from "../types";
import { useEffect, useState } from "react";

interface DaysOffSummaryProps {
    year: number;
    offDays: absences_data[];
}

const DaysOffSummary = (props: DaysOffSummaryProps) => {
    //variable that conttrols the days off that the user took
    const [takenDays, setTakenDays] = useState(0);
    //Variable that controlls the number of days the user has obtained
    //Through working overtime
    const [obtainedDays, setObtainedDays] = useState(0);
    useEffect(() => {
        console.log("use efect");
        //Variable that counts the holidays;
        let holidaysCount = 0;
        //Varible that counts the overtime obtained
        let compensationCount = 0;
        for (let i = 0; i < props.offDays.length; i++) {
            if (props.offDays[i].type === "Time off" || props.offDays[i].type === "Overtime compensation") {
                let counter = 0;
                const start = new Date(props.offDays[i].start);
                const end = new Date(props.offDays[i].finish);
                while (start <= end) {
                    //We discard weekend days
                    //TODO: Discard bank holidays too!
                    if (start.getDay() !== 0 && start.getDay() !== 6) {
                        counter++;
                    };
                    start.setDate(start.getDate() + 1);
                };
                if (props.offDays[i].type === "Time off") {
                    holidaysCount = holidaysCount + counter;
                } else {
                    compensationCount = compensationCount + counter;
                }
            }
        };
        setTakenDays(holidaysCount);
        setObtainedDays(compensationCount);
    }, [props.offDays]);
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
                <p>{23 + obtainedDays}</p>
                <p style={{fontSize: '0.7rem', marginTop: '0.1rem'}}>Accrued</p>
            </div>
            <div style={{textAlign: 'center', fontWeight: '600'}}>
                <p>{23 -takenDays}</p>
                <p style={{fontSize: '0.7rem', marginTop: '0.1rem'}}>Available</p>
            </div>
            <div style={{textAlign: 'center', fontWeight: '600'}}>
                <p>{takenDays + obtainedDays}</p>
                <p style={{fontSize: '0.7rem', marginTop: '0.1rem'}}>Taken</p>
            </div>
        </div>

    </div>
  )
}

export default DaysOffSummary