import React, {useContext, useEffect} from 'react';
import {Context} from '../index';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import{useNavigate} from "react-router-dom";

const NavBar = observer( () => {
    const {user}=useContext(Context)
    const navigate=useNavigate()

    const logOut=()=>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem("id","0")
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav.Link style={{color:"white"}} onClick={()=>navigate(SHOP_ROUTE)}> DRIVEMARKET54 </Nav.Link>
                { user._isAuth?
                    user.role==="ADMIN"?
                        <Nav className="ml-auto" style={{color:"white"}}>
                            <Button variant={"outline-light"}onClick={()=>navigate(BASKET_ROUTE)}> Корзина </Button>
                            <Button variant={"outline-light"}onClick={()=>logOut()}>Выйти</Button>
                            <Button variant={"outline-light"}onClick={()=>navigate(ADMIN_ROUTE)}> Админ-Панель</Button>

                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color:"white"}}>
                            <Button variant={"outline-light"}onClick={()=>navigate(BASKET_ROUTE)}> Корзина </Button>
                            <Button variant={"outline-light"}onClick={()=>logOut()}>Выйти</Button>
                        </Nav>
                    :
                    <Nav className="ml-auto" style={{color:"white"}}>
                        <Button variant={"outline-light"} onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;