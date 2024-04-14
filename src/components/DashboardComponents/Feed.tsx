import { CalendarIcon, MapPin } from 'lucide-react';
import '../../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { events_feed } from '../../types';

const Feed = () => {
    const [eventsFeed, setEventsFeed] = useState<events_feed[]>([]);
    useEffect(() => {
      axios.get("http://localhost:3000/api/events")
      .then((response) => {
        console.log("promise fulfilled");
        console.log(response.data);
        setEventsFeed(response.data);
      })
      .catch((error) => {
        console.log("Error failed to fetch data:" + error);
      });
  
    }, []);

  return (
    <div style={{width: '100%'}}>
        {eventsFeed.map((item) => {
            const date = new Date(item.created_at);
            return (
                <div key={item.id} className='card-element feed-item'>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '0.25rem', alignItems: 'center', fontSize: '0.8rem'}} className='secondary-text'>
                        <img src={item.image} alt= "Picture of the publisher" width={40} height={40} style={{borderRadius: '2rem', objectFit: 'cover', marginRight: '0.5rem'}}/>
                        <p>{item.name}</p>
                        <p>·</p>
                        <p>{date.toDateString()}</p>
                        <p>·</p>
                        <p>{item.category}</p>
                    </div>
                    <p style={{fontWeight: '600', fontSize: '1.5rem'}}>{item.title}</p>
                    {item.location ? 
                    <div style={{display: 'flex', flexDirection: 'row', gap: '0.25rem', alignItems: 'center', fontSize: '0.8rem'}}>
                        <CalendarIcon width={18} height={18}/>
                        <p>{date.toDateString()}</p>
                        <MapPin width={18} height={18} style={{marginLeft: '1rem'}}/>
                        <p>{item.location}</p>
                    </div>
                    :
                    <></>
                    }
                    {item.picture ?
                    <div style={{width: '50%', height: '50%', objectFit: 'contain'}}>
                        <img src={item.picture} alt= "Image of the event" width={650} style={{margin: '1rem 0rem 1rem 0rem', borderRadius: '1rem'}}/>
                    </div>
                    :
                    <></>}
                    <p className='feed-item-body'>{item.description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Feed