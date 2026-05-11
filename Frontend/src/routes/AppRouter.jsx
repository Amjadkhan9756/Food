
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChooseRegister from '../pages/auth/ChooseRegister'
import UserRegister from '../pages/auth/UserRegister'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';

function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/register' element={<ChooseRegister />} />
                    <Route path='/user/register' element={<UserRegister />} />
                    <Route path='/food-partner/register' element={<FoodPartnerRegister />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/user/login' element={<UserLogin />} />
                    <Route path='/food-partner/login' element={<FoodPartnerLogin />} />
                    <Route path='/create-food' element={<CreateFood />} />
                    <Route path='/food-partner/:id' element={<Profile />} />
                    <Route path="/saved" element={<Saved />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRoutes;