
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister'
import Home from '../pages/general/Home';
import UserLogin from '../pages/auth/UserLogin';



function AppRoutes(){
    return (
        <>
        <Router>
            <Routes>
                
                <Route path='/user/register' element={<UserRegister/>}/>
                                <Route path='/' element={<Home/>}/>
                <Route path='/user/login' element={<UserLogin/>}/>

            </Routes>
        </Router>
        </>
    )
}


export default AppRoutes;