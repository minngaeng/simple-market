import './App.css';
// import Filter from './components/filter';
// import Footer from './components/footer';
// import Header from './components/header';
// import ProductList from './components/product-list';
import Marketplace from './components/marketplace';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Marketplace/>} />

        {/*<div*/}
        {/*    style={{*/}
        {/*        display: 'flex',*/}
        {/*        flexDirection: 'column',*/}
        {/*        gap: '30px',*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <Header />*/}
        {/*    <div*/}
        {/*        style={{*/}
        {/*            display: 'flex',*/}
        {/*            justifyContent: 'center',*/}
        {/*            alignItems: 'center',*/}
        {/*            height: '50vh',*/}
        {/*            gap: '20px',*/}
        {/*        }}*/}
        {/*    >*/}
        {/*        <Filter />*/}
        {/*        <ProductList />*/}
        {/*    </div>*/}
        {/*    <Footer />*/}
        {/*</div>*/}
        </Routes>
    );
}

export default App;
