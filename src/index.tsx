import { createRoot } from 'react-dom/client';

import './i18n';
import { useTranslation } from "react-i18next"
import i18n from './i18n';

function App() {

    const { t, i18n } = useTranslation();

    return (
       <>
            <div>
                <div>Test</div>
            </div>
        </> 
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);