import "../index.css";
import "reactflow/dist/style.css";
import "../org-chart.css";
import EmployeeNode, { EmployeeNodeProps } from "./OrgChart/EmployeeNode";
import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import { SearchIcon } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";

const nodeTypes = {
  employeeNode: EmployeeNode,
};

const OrgChart = () => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const supervisor = event.currentTarget.id;
    axios
      .get(`http://localhost:3000/api/employees/org/${supervisor}`)
      .then((response) => {
        const previousNodes = nodes;
        console.log(response.data[0]);
        const employees = response.data[0];
        for (let i = 0; i < employees.length; i++) {
          employees[i].data.button = (<button id = {employees[i].id} onClick={handleClick}>+</button>);
          previousNodes.push(employees[i]);
        }
        console.log(previousNodes);
        setNodes(previousNodes);
        setEdges(response.data[1]);
      })
      .catch((error) => {
        console.log("Error failed to fetch data:" + error);
      });
  };

    const [nodes, setNodes] =  useNodesState([]);
    const [edges, setEdges] = useEdgesState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/employees/org")
      .then((response) => {
        const employees = response.data[0];
        for (let i = 0; i < employees.length; i++) {
          employees[i].data.button = (<button id = {employees[i].id} onClick={() => {console.log(nodes); handleClick}}>+</button>);
        }
        setNodes(employees);
        setEdges(response.data[1]);
      })
      .catch((error) => {
        console.log("Error failed to fetch data:" + error);
      });
  }, []);




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
