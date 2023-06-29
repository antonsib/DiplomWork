import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Row} from "react-bootstrap";
import BasketList from "../components/BasketList";
import {createSales, deleteBasketProduct, getBasketUser} from "../http/productAPI";
import {Context} from "../index";
import CreateType from "../components/modals/CreateType";
import DeleteProduct from "../components/modals/DeleteProduct";
import CheckSale from "../components/modals/CheckSale";

const Basket =observer( () => {
    const {product}=useContext(Context)
    const {user} =useContext(Context)
    const idUser=localStorage.getItem("id")
    const[check,setCheck]=useState(false)
    useEffect(()=>{
        getBasketUser(idUser).then(data => product.setCurrentBasket(data))
        user.setRole(localStorage.getItem("role"))
    },[])

    const AddSales=()=>{
        let name,price,img,idUser;
        idUser=localStorage.getItem("id")
        for(let i=0;i<product.currentBasket.length;i++){
            name=product.currentBasket[i].name
            price=product.currentBasket[i].price
            img=product.currentBasket[i].img
            createSales(name,price,img,idUser).then()
        }
        deleteBasketProduct(idUser).then()
    }

    const refresh=()=>{
        window.location.reload();
    }


    return (
        <Container className='d-flex flex-column'>
            <BasketList/>
           <Button variant={"outline-success"} className="mt-2" onClick={()=>{
               AddSales()
               setCheck(true)
           }

           } >
               Оформить заказ
           </Button>
            <CheckSale show={check} onHide={()=>{setCheck(false); refresh()}}/>
        </Container>
    );
});

export default Basket;