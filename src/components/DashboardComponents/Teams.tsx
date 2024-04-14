import Separator from '../ui/Separator';
import "../../index.css";
import { ArrowRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface TeamsDataProps {
  name: string;
  picture: string;
  team_name: string;
}

const Teams = () => {
  const [teamsData, setTeamsData] = useState<TeamsDataProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/employees/teammates/5")
    .then((response) => {
      console.log("promise fulfilled");
      console.log(response.data);
      setTeamsData(response.data);
      //TODO: Split the data in different teams and such
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
          {teamsData.length >= 1 ?
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0.75rem',
            backgroundColor: '#FAFAFA'
          }}>
            <p style={{
              fontWeight: '500'
            }}>{teamsData[0].team_name}</p> 
            <ArrowRightIcon className='icon' />
          </div>
            :
            <></>
            }
            <Separator />
          {teamsData.map((item, index) => {
            return (
              <div className='ghost-button' key={index} >
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
      );
    };

export default Teams