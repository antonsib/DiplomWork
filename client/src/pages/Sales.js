import React, {useContext, useEffect} from 'react';
import {deleteSale, getSales, getUsers} from "../http/salesAPI";
import {Context} from "../index";
import {Button, Col, Row} from "react-bootstrap";
import BasketItem from "../components/BasketItem";
import {observer} from "mobx-react-lite";

const refresh=()=>{
    window.location.reload();
}

const removeSale=(id)=>{
    deleteSale(id).then(refresh)
}

const Sales =observer( () => {
    const{salesStore}=useContext(Context)
    useEffect(()=>{
        getSales().then(data=>salesStore.setSales(data))
    },[])
    return (
        <Row className="d-flex">
            <Row>
              <Col><b>Товар</b></Col>
                <Col><b>Название</b></Col>
                <Col><b>Цена</b></Col>
                <Col><b>Id пользователя</b></Col>
                <Col><b>Удаление</b></Col>
            </Row>
            {salesStore.sale.map(saleOne=>
                <Row>
                    <Col>
                        <BasketItem key={saleOne.id} product={saleOne} />
                    </Col>
                    <Col> {saleOne.name}</Col>
                    <Col>{saleOne.price}</Col>
                    <Col>{saleOne.idUser}</Col>
                    <Col>
                        <Button className={"mt-left"} variant={"outline-danger"} onClick={()=>removeSale(saleOne.id)}  >Удалить из заказа</Button>
                    </Col>
                </Row>


            )}

        </Row>
    );
});

export default Sales;