import Separator from '../ui/Separator';
import "../../index.css";
import { ArrowRightIcon } from 'lucide-react';

const Teams = () => {
    const data = [
        {
            team: "Mechanical",
          photo: "You have shifts to fill.",
          name: "Pepito Grillo Agramonte",
        },
        {
            team: "Mechanical",
          photo: "You have shifts to fill.",
          name: "Juan Javier Lope de Vega",
        },
        {
            team: "Mechanical",
          photo: "Margot Margarita de Neptuno",
          name: "Margot Margarita de Neptuno",
        },
      ];
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            overflowY: 'auto',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0.75rem'
          }} className='tertiarybg'>
            <p style={{
              fontWeight: '500'
            }}>Mechanicals</p> 
            <ArrowRightIcon className='icon' />
          </div>
            <Separator />
          {data.map((item) => {
            return (
              <div className='ghost-button'>
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
                  <img src="/src/assets/image-lsoyucoe.png" width={40} height={40} style={{borderRadius: '0.75rem'}}/>
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