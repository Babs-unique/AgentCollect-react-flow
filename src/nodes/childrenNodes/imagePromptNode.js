import { useState } from 'react';
import {  Position } from 'reactflow';
import { BaseNode } from '../baseNode';

export const ImagePromptNode = ({ id, data }) => {
  const [imagePrompt, setImagePrompt] = useState(data?.imagePrompt || '');

  const handleImagePromptChange = (e) => {
    setImagePrompt(e.target.value);
  };

  const handleConfig = [
    { type: 'target' , position: Position.Left, id: `${id}-input` },
    { type: 'source' , position: Position.Right, id: `${id}-output` },
  ]

  return (
    <BaseNode title="Image Prompt" id={id} handles={handleConfig}>
      <div>
        <label>
          Image Prompt:
          <input 
            type="text" 
            value={imagePrompt} 
            onChange={handleImagePromptChange} 
          />
        </label>
      </div>
    </BaseNode>
  );
}