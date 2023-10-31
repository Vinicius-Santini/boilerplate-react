import { createRoot } from 'react-dom/client';

function App() {
    return <h1>Test</h1>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);