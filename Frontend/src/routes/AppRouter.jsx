
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister'
import Home from '../pages/general/Home';



function AppRoutes(){
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                
                <Route path='/user/register' element={<UserRegister/>}/>
            </Routes>
        </Router>
        </>
    )
}


export default AppRoutes;