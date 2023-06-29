import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {getSales, getUsers} from "../http/salesAPI";
import {Context} from "../index";
import {Button, Col, Row} from "react-bootstrap";
import BasketItem from "../components/BasketItem";
import UserItem from "../components/UserItem";

const Users = observer(() => {
    const{salesStore}=useContext(Context)
    useEffect(()=>{
        getUsers().then(data=>salesStore.setUsers(data))
    },[])
    return (
        <Row className="d-flex">
            <Row>
                <Col><b>Logo</b></Col>
                <Col><b>Email</b></Col>
                <Col><b>Id</b></Col>
                <Col><b>Роль</b></Col>
            </Row>
            {salesStore.users.map(userOne=>
                <Row>
                    <Col>
                     <UserItem/>
                    </Col>
                    <Col>{userOne.email}</Col>
                    <Col>{userOne.id}</Col>
                    <Col>{userOne.role}</Col>
                </Row>


            )}

        </Row>
    );
});

export default Users;