import { ClockIcon, InboxIcon, LineChartIcon } from "lucide-react";
import "../index.css";
import Separator from "./ui/Separator";

const Requests = () => {
  const data = [
    {
      //TODO: Add another category to select the icon to display!
      icon: ClockIcon,
      title: "You have shifts to fill.",
      subtitle: "You have worked 0 days in March",
    },
    {
      //TODO: Add another category to select the icon to display!
      icon: LineChartIcon,
      title: "You have a pending review to complete for Pere Palacín Pallàs",
      subtitle:
        "As part of our ongoing commitment to individual and team development in our Self-Assessment Survey. This is an opportunity for you to reflect on your own goals and performance.",
    },
  ];
  //TODO: use the icon category to determine where it is going to take,
  //Because each div is a link to the actual request!

  return (
    <div className="main-div">
      <div className="page-card">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <InboxIcon width={30} height={30} className="accent-color" />
            <p style={{ fontWeight: 600, fontSize: "1.5rem" }}>Requests</p>
            <p>These are the requests you are pending.</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              border: "1px solid #e2e2e5",
              borderRadius: "0.375rem",
              padding: "1rem 2rem 1rem 2rem",
            }}
          >
            <p style={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Active requests
            </p>
            <p style={{ fontWeight: 600, fontSize: "1.1rem" }}>2</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.75rem",
            border: "1px solid #e2e2e5",
            borderRadius: "0.375rem",
          }}
        >
          {data.map((item, key) => {
            return (
              <div style={{ maxWidth: "100%" }}>
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                  className="ghost-button rounded-list-items"
                >
                  <item.icon
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
                      minWidth: "90%",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "1rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "80%",
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
                      }}
                      className="secondary-text"
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                {key === data.length - 1 ? <></> : <Separator />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Requests;
