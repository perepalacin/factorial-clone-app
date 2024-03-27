import "../index.css";
import "reactflow/dist/style.css";
import "../org-chart.css";
import EmployeeNode from "./OrgChart/EmployeeNode";
import ReactFlow from "reactflow";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

const OrgChart = () => {
  //TODO: Fetch the employees data
  //Loop through the data to create the nodes elements
  //Loop through the nodes to create the edges
  const nodes = [
    {
      id: "1",
      data: { name: "Pere Palacín" },
      position: { x: 0, y: 0 },
      type: "employeeNode",
    },
    {
      id: "2",
      data: { name: "Pere Palacín" },
      position: { x: -100, y: 250 },
      type: "employeeNode",
    },
    {
      id: "3",
      data: { name: "Pere Palacín" },
      position: { x: 100, y: 250 },
      type: "employeeNode",
    },
    {
      id: "4",
      data: { name: "Pere Palacín" },
      position: { x: 100, y: 500 },
      type: "employeeNode",
    },
  ];

  const edges = [
    {
      type: "smoothstep",
      source: "1",
      target: "2",
      id: "1",
      sourceHandle: "out",
    },
    {
      type: "smoothstep",
      source: "1",
      target: "3",
      id: "2",
      sourceHandle: "out",
    },
    {
      type: "smoothstep",
      source: "3",
      target: "4",
      id: "3",
      sourceHandle: "out",
    },
  ];

  const nodeTypes = {
    employeeNode: EmployeeNode,
  };

  return (
    <div className="main-div">
      <div className="card-element page-card" style={{ padding: "2rem 0rem" }}>
        <p
          style={{ textAlign: "center", fontWeight: "600", fontSize: "1.2rem" }}
        >
          Organization Chart
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            padding: "1rem 1.5rem",
            marginTop: "1rem",
            backgroundColor: "rgb(244, 244, 245)",
            border: "1px solid rgb(226, 226, 229)",
          }}
        >
          <div className="custom-select" style={{ width: "100px" }}>
            <select className="">
              <option value="fruit">Workplace</option>
              <option value="vegetable">Legal entity</option>
              <option value="meat">Hired</option>
            </select>
          </div>
          <div style={{ position: "relative", display: 'flex', width: '100%' }}>
            <SearchIcon style={{ position: "absolute", top: "6", left: "8", color: '#7a7a7a' }} size={20} />
            <input
              placeholder={"Search"}
              style={{
                borderRadius: "2rem",
                padding: "0.5rem 2rem",
                width: '100%'
              }}
            />
          </div>
          <button className="muted-button small-button">Find me</button>
        </div>
        <div style={{ width: "100%", display: 'flex', flexDirection: 'column', height: '70vh' }}>
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            fitView
          />
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
