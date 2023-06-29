import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, FormControl} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {getId, login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";



const Auth = observer(() => {
    const {user}=useContext(Context)
    const location=useLocation()
    const navigate=useNavigate()
    const isLogin=location.pathname===LOGIN_ROUTE
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const click = async ()=>{
        try{
        let data;
       if (isLogin){
           data  = await login(email,password);
       }
       else {
           data = await registration(email,password);
       }
       user.setUser(data)
        user.setIsAuth(true)
            user.setRole(data.role)
            console.log(user.role)
            user.setId(data.id)
            localStorage.setItem("id",user.getId())
            localStorage.setItem("role",user.role)
            localStorage.setItem("isAuth","true")
            navigate(SHOP_ROUTE)
    } catch (e) {
        alert(e.response.data.message)
    }
    }

    useEffect(()=>{
        user.setId(user.id)
    },[])

    return (
       <Container
       className="d-flex justify-content-center align-items-center"
       style={{height:window.innerHeight-54}}
       >
           <Card style={{width:600}} className={"p-5"}>
               <h2 className="m-auto">{isLogin? 'Авторизация' : 'Регистрация' }</h2>
       <Form className="d-flex flex-column">
       <Form.Control
           className="mt-3"
           placeholder="Введите ваш email"
           value={email}
           onChange={e=>setEmail(e.target.value)}
           />
           <Form.Control
               className="mt-3"
               placeholder="Введите ваш пароль"
               value={password}
               onChange={e=>setPassword(e.target.value)}
               type="password"
           />
           <Form className="d-flex justify-content-lg-between mt-3 pr-3">
               {isLogin?

            <div>
              Нет Аккаунта? <NavLink to={REGISTRATION_ROUTE}> Регистрация  </NavLink>

            </div>
                   :
                   <div>
                       Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войти  </NavLink>
                   </div>
               }
           </Form>
           <Button className="mt-3"
                   variant={"outline-success"}
            onClick={click}
           >
               {isLogin?  'Войти' : 'Регистрация'}
           </Button>

       </Form>
       </Card>
       </Container>
    );
});

export default Auth;