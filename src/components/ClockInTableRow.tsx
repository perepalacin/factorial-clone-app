import { PlusIcon, Trash2Icon, TrashIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Separator from "./ui/Separator";
import "../index.css"
import useComponentVisible from "../hooks/useComponentVisible";
import { Slide, ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";

interface ShiftsProps {
  startTime: string;
  endTime: string;
  working: boolean;
}

interface ClockInTableRowProps {
  day: number;
  month: number;
  monthShortName: string;
  dayName: string;
  shifts: ShiftsProps[] | null;
}

const ClockInTableRow = (props: ClockInTableRowProps) => {
  //This state is only necessary if we want to add a button to close the dialog
  //just like the cancel button in the shifts dialog.
  const [dialogVisible, setDialogVisible] = useState(false);
  const [shifts, setShifts] = useState(props.shifts || []);
  const [newShift, setNewShift] = useState<ShiftsProps>({
    startTime: "",
    endTime: "",
    working: true,
  });
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleShiftChange = (shift: boolean) => {
    const placeholderShift = {
      ...newShift,
      working: shift,
    };
    setNewShift(placeholderShift);
  };

  const notify = () => toast.error("Invalid parameters", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    transition: Slide,
  });

  const handleInputChange = (
    value: string,
    input: string,
    key: number | null
  ) => {
    if (key !== null) {
      console.log("here");
      const auxShifts = [...shifts];
      if (input === "start") {
      console.log("start");
        auxShifts[key] = { ...auxShifts[key], startTime: value };
        setShifts(auxShifts);
        return null;
      } else {
      console.log("end");
        auxShifts[key] = { ...auxShifts[key], endTime: value };
        setShifts(auxShifts);
        return null;
      }
    } else {
      if (input === "start") {
        const auxShift: ShiftsProps = {
          ...newShift,
          startTime: value,
        };
        setNewShift(auxShift);
        return null;
      } else {
        const auxShift: ShiftsProps = {
          ...newShift,
          endTime: value,
        };
        setNewShift(auxShift);
        return null;
      }
    }
  };

  const handleDeleteShift = (key: number) => {
    const auxShifts = shifts.filter((item, index) => index !== key);
    setShifts(auxShifts);
  }

  const handleShiftSubmit = () => {
    if (
      !newShift.startTime ||
      !newShift.endTime ||
      newShift.endTime < newShift.startTime
    ) {
      //TODO: Toast error: Wrong parameters;
      notify();
      return null;
    } else if (
      shifts.length !== 0 &&
      shifts[shifts.length - 1].endTime < newShift.startTime &&
      newShift.startTime < newShift.endTime
    ) {
      const emptyShift: ShiftsProps = {
        startTime: "",
        endTime: "",
        working: true,
      };
      setIsComponentVisible(false);
      setDialogVisible(false);
      setNewShift(emptyShift);
      setShifts(shifts.concat(newShift));
      return null;
    } else if (shifts.length === 0 && newShift.startTime < newShift.endTime) {
      setShifts([newShift]);
      const emptyShift: ShiftsProps = {
        startTime: "",
        endTime: "",
        working: true,
      };
      setIsComponentVisible(false);
      setDialogVisible(false);
      setNewShift(emptyShift);
      return null;
    }
    //Todo
    notify();
    return null;
  };
  return (
    <tbody>
      <ToastContainer/>
      <tr style={{ textAlign: "left", backgroundColor: props.dayName === "Saturday" || props.dayName === "Sunday" ? '#FAFAFA' : '#FFFFFF'}}>
        <th>
            <p style={{ fontWeight: 500, fontSize: "0.9rem" }}>
              {props.day} {props.monthShortName}
            </p>
            <p style={{ fontSize: "0.8rem" }}>{props.dayName}</p>
        </th>
        <th
          style={{
            padding: "1rem 0rem",
          }}
        >
          {shifts.map((item, key) => {
            return (
              <div
                key={item.startTime}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  alignItems: "center",
                  padding: "0rem 0rem 0.5rem 0rem",
                }}
              >
                {/* TODO: */}
                <input
                  placeholder="--:--"
                  value={item.startTime}
                  type="time"
                  onChange={(event) =>
                    handleInputChange(event.target.value, "start", key)
                  }
                  style={{
                    fontSize:'0.9rem',
                    fontWeight: 500,
                    fontFamily: 'Inter'
                  }}
                />
                -
                <input
                  placeholder="--:--"
                  value={item.endTime}
                  type="time"
                  onChange={(event) =>
                    handleInputChange(event.target.value, "end", key)
                  }
                  style={{
                    fontSize:'0.9rem',
                    fontWeight: 500,
                    fontFamily: 'Inter'
                  }}
                />
                <button className="muted-button small-button" style={{padding: '0rem 0.25rem'}} onClick={() => {handleDeleteShift(key)}}><TrashIcon width={16} /></button>
                  {item.working ? <></> : <p style={{fontSize: '0.8rem', fontWeight: '600', padding: '0.1rem 0.5rem', borderRadius: '0.375rem', backgroundColor: '#E2E2E5'}}>Break</p>}
              </div>
            );
          })}
          <div
            className="muted-button small-button"
            style={{ position: "relative", width: "3rem",  justifyContent: 'center'}}
            onClick={() => {
              setIsComponentVisible(true);
              setDialogVisible(true);
            }}
          >
            <PlusIcon width={14} height={14} color="#515196" />
            Add
            {isComponentVisible && dialogVisible ? (
              <div className="shifts-dialog" ref={ref}>
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "-4px",
                    rotate: "45deg",
                    backgroundColor: "#FFFFFF",
                    width: "10px",
                    height: "10px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    padding: "2rem 1rem 0rem 1rem",
                  }}
                >
                  <button
                    className="shifts-button"
                    style={{
                      backgroundColor: newShift.working ? "#E6F6F7" : "",
                      borderColor: newShift.working ? "#07a2ad" : "",
                      color: newShift.working ? "#07a2ad" : "",
                    }}
                    onClick={() => {
                      handleShiftChange(true);
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Shift</p>
                  </button>
                  <button
                    className="shifts-button"
                    onClick={() => {
                      handleShiftChange(false);
                    }}
                    style={{
                      backgroundColor: !newShift.working ? "#E6F6F7" : "",
                      borderColor: !newShift.working ? "#07a2ad" : "",
                      color: !newShift.working ? "#07a2ad" : "",
                    }}
                  >
                    Break
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    alignItems: "center",
                    padding: "0rem 1rem",
                  }}
                >
                  <input
                    placeholder="--:--"
                    type="time"
                    max="23:59"
                    min="00:00"
                    value={newShift.startTime}
                    onChange={(event) => {
                      handleInputChange(event.target.value, "start", null);
                    }}
                    style={{
                      fontSize:'0.9rem',
                      fontWeight: 500,
                      fontFamily: 'Inter'
                    }}
                  />
                  -
                  <input
                    placeholder="--:--"
                    type="time"
                    value={newShift.endTime}
                    onChange={(event) => {
                      handleInputChange(event.target.value, "end", null);
                    }}
                    style={{
                      fontSize:'0.9rem',
                      fontWeight: 500,
                      fontFamily: 'Inter'
                    }}
                  />
                </div>
                <Separator />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    justifyContent: "end",
                    padding: "0rem 1rem 1rem 0rem",
                  }}
                >
                  <button
                    className="main-button small-button"
                    onClick={() => {
                      //We create an individual function for this button because
                      //Otherwise we will have a lot of code here!
                      handleShiftSubmit();
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </th>
        <th>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{ width: "7rem", fontSize: "0.9rem", fontWeight: "500" }}
              >
                Worked:{" "}
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: "500" }}>8h</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{ width: "7rem", fontSize: "0.9rem" }}
                className="secondary-text"
              >
                Estimated:{" "}
              </p>
              <p style={{ fontSize: "0.9rem" }} className="secondary-text">
                8h
              </p>
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "500",
                padding: "0.1rem 0.5rem",
                backgroundColor: "#FBE3BC",
                borderRadius: "0.5rem",
                width: "4.75rem",
              }}
            >
              Balance -8h
            </p>
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default ClockInTableRow;
