// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent:'space-evenly'}}>
                <DraggableNode type='customInput' label='Input' style={{ width: '80px', height: '200px' }}/>
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='imageOutput' label='imageOutput'/>
                <DraggableNode type='imagePrompt' label='imagePrompt'/>
                <DraggableNode type='textPrompt' label='textPrompt'/>
                <DraggableNode type='fileInput' label='fileInput'/>
                <DraggableNode type='fileOutput' label='fileOutput'/>  
            </div>
        </div>
    );
};
