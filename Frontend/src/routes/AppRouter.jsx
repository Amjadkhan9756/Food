
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister'
import Home from '../pages/general/Home';
import UserLogin from '../pages/auth/UserLogin';
import Saved from '../pages/general/Saved';



function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/register' element={<UserRegister />} />

                    <Route path='/user/register' element={<UserRegister />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/user/login' element={<UserLogin />} />
                    <Route path="/saved" element={<Saved />} />

                </Routes>
            </Router>
        </>
    )
}


export default AppRoutes;