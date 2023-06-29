import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateProduct from "../components/modals/CreateProduct";
import DeleteType from "../components/modals/DeleteType";
import DeleteBrand from "../components/modals/DeleteBrand";
import {ADMIN_ROUTE, SALES_ROUTE, USERS_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import DeleteProduct from "../components/modals/DeleteProduct";
import {getSales, getUsers} from "../http/salesAPI";
import {Context} from "../index";

const Admin = () => {
    const navigate=useNavigate()
    const [brandVisible,setBrandVisible]=useState(false)
    const [typeVisible,setTypeVisible]=useState(false)
    const [productVisible,setProductVisible]=useState(false)
    const [deleteTypeVisible,setDeleteTypeVisible]=useState(false)
    const [deleteBrandVisible,setDeleteBrandVisible]=useState(false)
    const [deleteProductVisible,setDeleteProductVisible]=useState(false)
    const{salesStore}=useContext(Context)
    useEffect(()=>{
        getSales().then(data=>salesStore.setSales(data))
        getUsers().then(data=>salesStore.setUsers(data))
    },[])

    const refresh=()=>{
        window.location.reload();
    }
    return (
        <Container className='d-flex flex-column'>
            <Button variant={"outline-success"} className="mt-2" onClick={()=> setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button variant={"outline-success"} className="mt-2" onClick={()=> setBrandVisible(true)}>
                Добавить бренд
            </Button>
            <Button variant={"outline-success"} className="mt-2" onClick={()=> setProductVisible(true)}>
                Добавить товар
            </Button>
            <Button variant={"outline-danger"} className="mt-2" onClick={()=> setDeleteTypeVisible(true)} >
                Удалить тип
            </Button>
            <Button variant={"outline-danger"} className="mt-2" onClick={()=> setDeleteBrandVisible(true)} >
                Удалить бренд
            </Button>
            <Button variant={"outline-danger"}  className="mt-2" onClick={()=> setDeleteProductVisible(true)}  >
                Удалить товар
            </Button>
            <Button variant={"outline-primary"}  className="mt-2"  onClick={()=>navigate(SALES_ROUTE)} >
                Просмотр заказов
            </Button>
            <Button variant={"outline-primary"}  className="mt-2"  onClick={()=>navigate(USERS_ROUTE)} >
                Просмотр пользователей
            </Button>
            <CreateBrand show={brandVisible} onHide={()=>{setBrandVisible(false);refresh()}}/>
            <CreateType show={typeVisible} onHide={()=>{setTypeVisible(false);refresh()}}/>
            <CreateProduct show={productVisible} onHide={()=>{setProductVisible(false);refresh()}}/>
            <DeleteType show={deleteTypeVisible} onHide={()=>{setDeleteTypeVisible(false);refresh()}}/>
            <DeleteBrand show={deleteBrandVisible} onHide={()=>{setDeleteBrandVisible(false);refresh()}}/>
            <DeleteProduct show={deleteProductVisible} onHide={()=>{setDeleteProductVisible(false);refresh()}}/>
        </Container>
    );
};

export default Admin;