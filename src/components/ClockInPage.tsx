import { useNavigate, useParams } from "react-router-dom";

const ClockInPage = () => {

  const navigate = useNavigate();
  const {yearId, monthId} = useParams();
  console.log(yearId);
  //TODO: If yearId and monthID are missing.
  //naviate to the current date.

  return (
    <div className='card-element'>
        <div>
        </div>
    </div>
  )
}

export default ClockInPage