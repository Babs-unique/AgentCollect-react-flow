import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './styles/node.css'
function App() {
  return (
    <div style={{
      backgroundColor: '#1C2536',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
