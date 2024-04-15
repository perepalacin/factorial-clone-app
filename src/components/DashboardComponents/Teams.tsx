import Separator from '../ui/Separator';
import "../../index.css";
import { ArrowRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';


export interface MemberDetails {
  name: string;
  picture: string;
}
interface TeamsDataProps {
  teamName: string;
  members: MemberDetails[];
}

const Teams = () => {
  const [teamsData, setTeamsData] = useState<TeamsDataProps[]>([]);
  useEffect(() => {
    //In this case, since we don't have a session, the employee id is hardcoded in the api call
    //However, we would have to substract the employee id from the session
    axios.get("http://localhost:3000/api/employees/teammates/19")
    .then((response) => {
      setTeamsData(response.data);
    })
    .catch((error) => {
      console.log("Error failed to fetch data:" + error);
    });

  }, []);
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            overflowY: 'auto',
            overflowX: 'clip',
          }}
        >
        {teamsData.map((item) => {
          return (
                <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 0,
                padding: 0,
              }}
              key={item.teamName}
            >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '0.75rem',
              backgroundColor: '#FAFAFA'
            }}>
              <p style={{
                fontWeight: '500'
              }}>{item.teamName}</p> 
              <ArrowRightIcon className='icon' />
            </div>
            <Separator />
            {item.members.map((item) => {
            return (
              <div className='ghost-button' key={item.name} >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.75rem",
                    alignItems: "center", 
                    marginLeft: "0.75rem",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem"
                  }}
                >
                  <img src={item.picture} width={40} height={40} style={{borderRadius: '0.75rem', objectFit: 'cover',}}/>
                    <p
                      style={{
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {item.name}
                    </p>
                </div>
                <Separator />
              </div>
            );
          })}

            </div>
          )
        })}
        </div>
      );
    };

export default Teams
