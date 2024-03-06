import CardElement from "./CardElement"
import '../index.css'
import ClockIn from "./DashboardComponents/ClockIn"
import Inbox from "./DashboardComponents/Inbox"
import Teams from "./DashboardComponents/Teams"
import Absenses from "./DashboardComponents/Absenses"
import Holidays from "./DashboardComponents/Holidays"
import Events from "./DashboardComponents/Events"
import Feed from "./DashboardComponents/Feed"

const Home = () => {
  console.log("home");
  return (
    <div className='main-div'>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.25rem',
            width: '100%'
        }}>
            <CardElement title={"Clock in"} children={<ClockIn />}/>
            <CardElement title={"Inbox"} children={<Inbox />}/>
            <CardElement title={"Teams"} children={<Teams />}/>
            <CardElement title={"Absences in your team"} children={<Absenses />}/>
            <CardElement title={"Holidays"} children={<Holidays />}/>
            <CardElement title={"Events"} children={<Events />}/>
            {/* TODO: FEED */}
        </div>
        <Feed />
    </div>
  )
}

export default Home