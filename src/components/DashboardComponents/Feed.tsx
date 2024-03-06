import { CalendarIcon, MapPin } from 'lucide-react';
import '../../index.css';

interface FeedDataProps {
    id: string;
    author: string;
    authorPicture: string;
    date: Date;
    category: string;
    title: string;
    location: string | null;
    image: string  | null;
    body: string;
}

const Feed = () => {
    const feedData: FeedDataProps[] = [{
        id: "1",
        author: "Jose Miguel Andorra",
        authorPicture: '/src/assets/blank-profile-picture-973460_960_720.png', 
        date: new Date(),
        category: "Company announcements",
        title: 'Team working this friday',
        location: 'Paris Coffee',
        image: 'src/assets/cafeterias-barcelona-elle-1651662668.jpg',
        body: "Hello everyone! We are going to celebrate that we hit our goals for 2020 in the Paris Cafeteria tonight at 3PM!",
    },{
        id: "2",
        author: "Jose Miguel Andorra",
        authorPicture: '/src/assets/blank-profile-picture-973460_960_720.png', 
        date: new Date(),
        category: "Company announcements",
        title: '2023 Calendar',
        location: null,
        image: null,
        body: "Hello everyone! Lorem Ipsum whatever whatever lets go!!Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!!",
    },
    {
        id: "3",
        author: "Jose Miguel Andorra",
        authorPicture: 'src/assets/427117o_1cutvnri21qkbgv6keeaudspl18.png', 
        date: new Date(),
        category: "Company announcements",
        title: '2023 Calendar',
        location: null,
        image: 'src/assets/cafeterias-barcelona-pepe-y-lepu-elle-1652119943.jpg',
        body: "Hello everyone! Lorem Ipsum whatever whatever lets go!!Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!! Hello everyone! Lorem Ipsum whatever whatever lets go!!",
    }];

  return (
    <div style={{width: '100%'}}>
        {feedData.map((item) => {
            return (
                <div key={item.id} className='card-element feed-item'>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '0.25rem', alignItems: 'center', fontSize: '0.8rem'}} className='secondary-text'>
                        <img src={item.authorPicture} alt= "Picture of the publisher" width={40} height={40} style={{borderRadius: '2rem', objectFit: 'cover', marginRight: '0.5rem'}}/>
                        <p>{item.author}</p>
                        <p>·</p>
                        <p>{item.date.toDateString()}</p>
                        <p>·</p>
                        <p>{item.category}</p>
                    </div>
                    <p style={{fontWeight: '600', fontSize: '1.5rem'}}>{item.title}</p>
                    {item.location ? 
                    <div style={{display: 'flex', flexDirection: 'row', gap: '0.25rem', alignItems: 'center', fontSize: '0.8rem'}}>
                        <CalendarIcon width={18} height={18}/>
                        <p>{item.date.toString()}</p>
                        <MapPin width={18} height={18} style={{marginLeft: '1rem'}}/>
                        <p>{item.location}</p>
                    </div>
                    :
                    <></>
                    }
                    {item.image ?
                    <div style={{width: '50%', height: '50%', objectFit: 'contain'}}>
                        <img src={item.image} alt= "Image of the event" width={650} style={{margin: '1rem 0rem 1rem 0rem', borderRadius: '1rem'}}/>
                    </div>
                    :
                    <></>}
                    <p className='feed-item-body'>{item.body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Feed