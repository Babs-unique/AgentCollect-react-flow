import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../baseNode';

export const FileInputNode = ({ id, data }) => {
  const [fileInput, setFileInput] = useState(data?.fileInput || '');

  const handleFileInputChange = (e) => {
    setFileInput(e.target.files[0]);
  };

  const handleConfig = [
    { type: 'target' , position: Position.Left, id: `${id}-input` },
    { type: 'source' , position: Position.Right, id: `${id}-output` },
  ]

  return (
    <BaseNode title="File Input" id={id} handles={handleConfig}>
      <div>
        <label>
          File Input:
          <input 
            type="file" 
            onChange={handleFileInputChange} 
          />
        </label>
      </div>
    </BaseNode>
  );
};