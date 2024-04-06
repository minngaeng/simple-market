import './App.css';
import Marketplace from './pages/marketplace.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Marketplace />} />
        </Routes>
    );
}

export default App;
