import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Confirmation from './pages/Confirmation';
import Header from './components/Header';
import Footer from './components/Footer';
import SpaceTourDetails from './components/SpaceTourDetails';
import {CartProvider} from './context/CartContext';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './pages/Checkout';
import {Provider} from 'react-redux';
import store from './store/store';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <CartProvider>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/shopping-cart" element={<ShoppingCartPage/>}/>
                            <Route path="/checkout" element={<Checkout/>}/>
                            <Route path="/confirmation" element={<Confirmation/>}/>
                            <Route path="/tour/:id" element={<SpaceTourDetails/>}/>
                            <Route path="/cart" element={<ShoppingCart/>}/>
                        </Routes>
                        <Footer/>
                    </CartProvider>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
