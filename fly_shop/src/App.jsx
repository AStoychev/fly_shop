import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { AllProducts } from './components/allproducts/AllProducts';
import { Wings } from './components/wings/Wings';
import { Harnesses } from './components/harnesses/Harnesses';
import { Footer } from './components/footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<AllProducts />} />
                <Route path='/wings' element={<Wings />} />
                <Route path='/harnesses' element={<Harnesses />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
