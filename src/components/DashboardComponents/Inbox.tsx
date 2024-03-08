import { ClockIcon, LineChart, TrendingUp } from "lucide-react";
import React from "react";
import "../../index.css";

const Inbox = () => {
  const data = [
    {
      //TODO: Add another category to select the icon to display!
      icon: ClockIcon,
      title: "You have shifts to fill.",
      subtitle: "You have worked 0 days in March",
    },
    {
      //TODO: Add another category to select the icon to display!
      icon: LineChart,
      title: "You have a pending review to complete for Pere Palacín Pallàs",
      subtitle: "As part of our ongoing commitment to individual and team development in our Self-Assessment Survey. This is an opportunity for you to reflect on your own goals and performance.",
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
            <item.icon
              className="icon"
              style={{
                padding: "0.5rem",
                backgroundColor: "rgba(201, 241, 245)",
                borderRadius: "0.75rem",
                color: "#06838C",
                minWidth: '7%'
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: '100%'
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: 'nowrap', 
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: 'nowrap', 
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
