import React, { lazy, useState } from "react";

interface AbsencesColorSquareProps {
  label: string | null;
  color: string;
  opacity: string;
}
const AbsencesColorSquare = (props: AbsencesColorSquareProps) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      style={{
        minHeight: "1.5rem",
        backgroundColor: props.color,
        opacity: props.opacity,
        position: "relative",
      }}
      onMouseEnter={() => {setVisible(true)}}
      onMouseLeave={() => {setVisible(false)}}
    >
      {
        isVisible && props.label ? 

        <div
        style={{
          position: "absolute",
          top: "-1.75rem",
          left: "-1.5rem",
          fontSize: "0.8rem",
          color: "#FFFFFF",
          padding: "0.15rem 0.5rem",
          backgroundColor: 'rgba(61, 61, 61, 1)',
          whiteSpace: "nowrap",
          borderRadius: "0.3rem",
        }}
        >
        <p>{props.label}</p>
      </div>
      :
      <></>
      }
    </div>
    );
  };

export default AbsencesColorSquare;
