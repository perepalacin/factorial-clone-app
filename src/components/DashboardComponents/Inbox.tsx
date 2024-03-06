import { ClockIcon } from "lucide-react";
import React from "react";
import "../../index.css";

const Inbox = () => {
  const data = [
    {
      //TODO: Add another category to select the icon to display!
      title: "You have shifts to fill.",
      subtitle: "You have worked 0 days in March",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        marginTop: '0.75rem',
      }}
    >
      {data.map((item) => {
        return (
          <div
            key={item.title}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <ClockIcon
              className="icon"
              style={{
                padding: "0.5rem",
                backgroundColor: "rgba(201, 241, 245)",
                borderRadius: "0.75rem",
                color: "#06838C",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                }}
                className="secondary-text"
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Inbox;
