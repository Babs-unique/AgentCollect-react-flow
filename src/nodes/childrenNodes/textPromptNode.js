import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../baseNode';

export const TextPromptNode = ({ id, data }) => {
  const [textPrompt, setTextPrompt] = useState(data?.textPrompt || '');

  const handleTextPromptChange = (e) => {
    setTextPrompt(e.target.value);
  };

  const handleConfig = [
    { type: 'target' , position: Position.Left, id: `${id}-input` },
    { type: 'source' , position: Position.Right, id: `${id}-output` },
  ]

  return (
    <BaseNode title="Text Prompt" id={id} handles={handleConfig}>
      <div>
        <label>
          Text Prompt:
          <input 
            type="text" 
            value={textPrompt} 
            onChange={handleTextPromptChange} 
          />
        </label>
      </div>
    </BaseNode>
  );
}