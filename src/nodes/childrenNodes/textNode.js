// textNode.js

import { useEffect, useRef, useState } from 'react';
import { Position, Handle, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from '../baseNode'
import '../../styles/node.css'

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [ variables , setVariables] = useState([])
  const textAreaRef = useRef(null)
  const updateNodeInternal = useUpdateNodeInternals();

  console.log(variables)

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };
  useEffect(() => {

      const textArea = textAreaRef.current;

    if(textArea){
        textArea.style.height = 'auto';
        textArea.style.width = 'auto'


        textArea.style.height = `${textArea.scrollHeight}px`;
        textArea.style.width = `${textArea.scrollWidth}px`;
    }


  },[currText])

  useEffect(()=>{
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [];
    let match;

    while ((match = regex.exec(currText)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }

    setVariables(matches);
    
    updateNodeInternal(id);
  },[currText, id, updateNodeInternal])
  const handleConfig = [
        {
        type: 'source',
        position: Position.Right,
        id: `${id}-output`
      }
  ]

  return (
    /* <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div> */
    <BaseNode id={id} title="Text" handles={handleConfig}>
      <div style={{width: 'auto', height: 'auto', display: 'flex', alignItems:'flex-start', flexDirection:'column'}}>
        <label>
          Text:
          </label>
          <textarea
            ref={textAreaRef}
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
      </div>
            {variables.map((variable, index) => (
        <div key={variable} style={{ position: 'relative', height: '0px' }}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{
              top: `${(index + 1) * 25}px`,
              background: '#555'
            }}
          />
          <span style={{
            position: 'absolute',
            left: '10px',
            top: `${((index + 1) * 25) - 6}px`,
            fontSize: '9px',
            color: '#888',
            whiteSpace: 'nowrap'
          }}>
               {variable}
          </span>
        </div>
      ))}
    </BaseNode>
  );
}
