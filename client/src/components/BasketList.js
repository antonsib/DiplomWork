import {Button, Col, Row} from "react-bootstrap";
import ProductItem from "./ProductItem";
import React, {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {deleteFromBasket, getBasketUser,} from "../http/productAPI";
import BasketItem from "./BasketItem";

const BasketList =observer( () => {
    const {product}=useContext(Context)
    const idUser=localStorage.getItem("id")
    useEffect(()=>{ getBasketUser(idUser).then(data => product.setCurrentBasket(data))},[])
    let Sum=0;
    for(let i=0;i<product.currentBasket.length;i++)
        Sum=Sum+product.currentBasket[i].price

    const deleteElement=async(id)=>{
        deleteFromBasket(id).then(refresh)
    }

    const refresh=()=>{
        window.location.reload();
    }

    return (
        <Row className="d-flex" >
            <div className="mt-2" style={{fontSize:28}}>
           <b> <p align={"center"}> Корзина</p></b></div>
            {product.currentBasket.map(final=>

                <Row>
                    <Col>
                        <BasketItem key={final.id} product={final} />
                    </Col>
                    <Col>{final.name}</Col>
                    <Col>
                    </Col>
                    <Col>{final.price}</Col>
                    <Col>
                        <Button className={"mt-left"} variant={"outline-danger"} onClick={()=> deleteElement(final.id) }>Удалить из корзины</Button>
                    </Col>
                </Row>
            )}
           <div className="mt-2" style={{fontSize:25}}>
                 <b> <p align={"center"}> Итоговая цена заказа: {Sum}  </p></b>
           </div>
        </Row>

    );

});

export default BasketList;