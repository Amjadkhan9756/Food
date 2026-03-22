
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister'
import Home from '../pages/general/Home';



function AppRoutes(){
    return (
        <>
        <Router>
            <Routes>
                
                <Route path='/user/register' element={<UserRegister/>}/>
                                <Route path='/' element={<Home/>}/>

            </Routes>
        </Router>
        </>
    )
}


export default AppRoutes;