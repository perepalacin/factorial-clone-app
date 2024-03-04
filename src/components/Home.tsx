import CardElement from "./CardElement"
import '../index.css'
import ClockIn from "./DashboardComponents/ClockIn"
import Inbox from "./DashboardComponents/Inbox"
import Teams from "./DashboardComponents/Teams"
import Absenses from "./DashboardComponents/Absenses"

const Home = () => {
  return (
    <div className='main-div'>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.25rem'
        }}>
            <CardElement title={"Clock in"} children={<ClockIn />}/>
            <CardElement title={"Inbox"} children={<Inbox />}/>
            <CardElement title={"Teams"} children={<Teams />}/>
            <CardElement title={"Absences in your team"} children={<Absenses />}/>
            <CardElement title={"Holidays"} children={<ClockIn />}/>
            <CardElement title={"Events"} children={<ClockIn />}/>
            {/* TODO: FEED */}
        </div>
    </div>
  )
}

export default Home