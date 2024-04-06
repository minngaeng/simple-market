import './App.css';
import Marketplace from './components/marketplace';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Marketplace />} />
        </Routes>
    )
}

export default App;
