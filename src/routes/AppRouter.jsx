import {Routes, Route} from 'react-router-dom';
import Home from '../components/Home';

export const AppRouter = ()=>{
    return(
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
    )
}