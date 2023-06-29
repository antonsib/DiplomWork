import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useParams} from "react-router-dom"
import {createBasketProduct,fetchOneProduct} from "../http/productAPI";
import {Context} from "../index";


const ProductPage = () => {
    const {user} =useContext(Context)
    const [product,setProduct]=useState({info:[]})
    const {id}=useParams()
    useEffect(()=>{
        fetchOneProduct(id).then(data=>setProduct(data))
        user.setRole(localStorage.getItem("role"))
    },[])

    const buyProduct=()=>{
       createBasketProduct(product.name,product.price,product.img,product.info,localStorage.getItem("id")).then()
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <img width={300} height={300} src={process.env.REACT_APP_API_URL+product.img}/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{product.name}</h2>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                          style={{width:300,height:300,fontSize:32,border:'5px solid lightgray'}}
                    >
                        <h3>{product.price} рублей</h3>
                        <Button variant={"outline-success"}
                                onClick={buyProduct}
                        >
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {product.info.map((info,index)=>
                    <Row key={info.id} style={{background:index%2==0?'lightgray':'transparent'}}>
                        {info.title}: {info.description}
                    </Row>

                )}
            </Row>

        </Container>
    );
};

export default ProductPage;