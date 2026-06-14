// submit.js
import './styles/submit.css'
import 
import { useStore } from './store';
export const SubmitButton = () => {
    console.log(useStore(state => state.nodes))
    console.log(useStore(state => state.edges))

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button
                    type="submit"
                    className='submit-btn'
                    >
                Analyze Pipeline
            </button>
        </div>
    );
}
