import { Handle, NodeProps, Position } from 'reactflow';
import '../../nodes.css';
 
// export type EmployeeNodeProps = {
//   name: string;
// };
 
interface EmployeeNodeProps {
  name: string;
  role: string;
}

export default function EmployeeNode(props: NodeProps<EmployeeNodeProps>) {
 
  return (
    <div className="employee-node">
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#0000FF',  minWidth: '8px', minHeight: '8px' }}
        isConnectable={true}
      />
      <img src="src/assets/image-lsoyucoe.png" width={80} style={{borderRadius: '1rem'}}/>
      <p style={{fontWeight: '600', fontSize: '1.2rem'}}>{props.data.name}</p>
      <p style={{fontSize: '0.9rem', fontWeight: 200, lineHeight: '1rem'}} className='secondary-text'>Role</p>
      <div style={{display: 'flex', flexDirection: 'row', gap: '0.25rem'}}>
        <p style={{padding: '0.15rem 0.55rem', fontSize: '0.9rem', backgroundColor: 'rgb(226, 226, 229)', borderRadius: '0.375rem', fontWeight: '200'}}>4</p>
      <p style={{padding: '0.15rem 0.5rem', fontSize: '0.9rem', backgroundColor: '#FF00FF', borderRadius: '0.375rem', fontWeight: '200'}}>Location</p>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ background: '#00FF00',  width: '8px', height: '8px' }}
        isConnectable={true}
      />
    </div>
  );
}