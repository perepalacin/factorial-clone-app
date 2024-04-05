import { useState } from "react";
import "../../index.css";
import { InfoIcon } from "lucide-react";

const ClockIn = () => {
  const [time, _setTime] = useState("0h 00m");
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: 'center',
        height: "100%",
      }}
    >
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0.25rem',
            alignItems: 'center',
        }}>
      <p
        style={{
            fontSize: "1.75rem",
            fontWeight: "500",
        }}
        >
        {time}
      </p>
      <InfoIcon width={16} height={16} onMouseEnter={() => setDisplayInfo(true)} onMouseLeave={() => {setDisplayInfo(false)}}/>
          </div>
          {/* TODO: Finish this! */}
          {/* Spoiler: use the usecomponentvisible hook! */}
          {displayInfo ? <p>Hello world</p> : <></>}
      <p
      style={{
        fontSize: "0.85rem",
        fontWeight: "500",
      }}
      className="secondary-text"    
      >Today's hours</p>
      <button style={{marginTop: '1rem'}} className="main-button big-button">Clock In</button>
    </div>
  );
};

export default ClockIn;
