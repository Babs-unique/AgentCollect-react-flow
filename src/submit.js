// submit.js
import './styles/submit.css'
import { useStore } from './store';
export const SubmitButton = () => {
    const nodes = useStore(state => state.nodes)
    const edges = useStore(state => state.edges)

    const handleSubmit = async () =>{
        const response = await fetch('http://localhost:8000/pipeline', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nodes, edges }),
        });
        try {
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button
                    type="submit"
                    className='submit-btn'
                    onClick={handleSubmit}
                    >
                Analyze Pipeline
            </button>
        </div>
    );
}
