import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import LandingPage from './components/landingPage/LandingPage';
import Catman from './components/catman/Catman';
import Catwomen from './components/catwoman/Catwomen';
import ProductPage from './components/productpage/ProductPage';
import CatBoysG from './components/catboyG/CatBoysG';
import Cart from './components/cart/Cart';
import CatFragrance from './components/catfrageance/CatFragrance';
import CatMakeup from './components/catmakeup/CatMakeup';
import CatSkincare from './components/catskincare/CatSkincare';
import ManFootwear from './components/manFooterwear/ManFootwear';
import WomenCategory from './components/womenCategory/WomenCategory';
import WomenFootwear from './components/womenfoot/WomenFootwear';
import Search from './components/search/Search';
import Tracking from './components/tracking/Tracking';
import Signin from './components/sigin/Signin';
import Register from './components/register/Register';
import Sale from './components/sale/Sale';
import AdminPanel from './components/admin/adminPanel';
import UserProfile from './components/profile/UserProfile';
import { fetchUserProfile } from './components/redux/slices/auth/authThunk';
import type { AppDispatch } from './components/redux/store';

function App() {
    const dispatch = useDispatch<AppDispatch>();

    // Load user profile on app init if token exists
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            dispatch(fetchUserProfile());
        }
    }, [dispatch]);

    return (
        <Routes>
            {/* Admin route without Layout */}
            <Route path="/admin" element={<AdminPanel />} />
            
            {/* Routes with Layout (Header/Footer) */}
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Main />} />
                <Route path="/men" element={<Catman />} />
                <Route path="/women" element={<Catwomen />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/kids" element={<CatBoysG />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/fragrances" element={<CatFragrance />} />
                <Route path="/makeup" element={<CatMakeup />} />
                <Route path="/skincare" element={<CatSkincare />} />
                <Route path="/men-footwear" element={<ManFootwear />} />
                <Route path="/women-category" element={<WomenCategory />} />
                <Route path="/women-footwear" element={<WomenFootwear />} />
                <Route path="/search" element={<Search />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="*" element={<Main />} /> {/* Fallback route for undefined paths */}
            </Route>
        </Routes>
    );
}

export default App;
