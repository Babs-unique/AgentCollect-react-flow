import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../baseNode';

export const ImageOutputNode = ({ id, data }) => {
  const [imageOutput, setImageOutput] = useState(data?.imageOutput || '');

  const handleImageOutputChange = (e) => {
    setImageOutput(e.target.value);
  };

  const handleConfig = [
    { type: 'source' , position: Position.Left, id: `${id}-input` },
    { type: 'target' , position: Position.Right, id: `${id}-output` },
  ]

  return (
    <BaseNode title="Image Output" id={id} handles={handleConfig}>
      <div>
        <label>
          Image Output:
          <input 
            type="text" 
            value={imageOutput} 
            onChange={handleImageOutputChange} 
          />
        </label>
      </div>
    </BaseNode>
  );
}