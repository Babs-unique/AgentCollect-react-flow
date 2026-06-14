import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../baseNode';

export const FileOutputNode = ({ id, data }) => {
  const [fileOutput, setFileOutput] = useState(data?.fileOutput || '');

  const handleFileOutputClick = () => {
    // TODO: Implement file output logic
    console.log('File output clicked');
  };

  const handleConfig = [
    { type: 'source' , position: Position.Left, id: `${id}-input` },
    { type: 'target' , position: Position.Right, id: `${id}-output` },
  ]

  return (
    <BaseNode title="File Output" id={id} handles={handleConfig}>
      <div>
        <button onClick={handleFileOutputClick}>Output File</button>
      </div>
    </BaseNode>
  );
}