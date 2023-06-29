import React, {useContext} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import {authRoutes,publicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import {Context} from '../index'
const AppRouter = () => {
    const {user}=useContext(Context)
    return (
        <Routes> //создание маршрутов роутеров
            {user._isAuth=== true && authRoutes.map(({path,Component})=>
            <Route key={path} path={path} element={<Component/>} exact/> //exact - ключ должен четко совпадать
            )}
            {publicRoutes.map(({path,Component})=>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} /> //по дефолту
        </Routes>
    );
};

export default AppRouter;