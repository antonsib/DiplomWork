import React, {useContext, useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchProducts, fetchTypes, getBasketUser} from "../http/productAPI";
import Pages from "../components/Pages";
import TSlider from "../components/TSlider";

const Shop = observer(() => {
    const {product} =useContext(Context)
    const {user} =useContext(Context)
    useEffect(()=> {
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
       getBasketUser(JSON.stringify(2)).then(data => product.setCurrentBasket(data))
        user.setRole(localStorage.getItem("role"))
       // fetchProducts(null, null, 1, 3,500000).then(data => {
       //    product.setProducts(data.rows)
       //     product.setTotalCount(data.count)
      //  })

    })

    useEffect(() => {
       fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, product.limit,product.price).then(data => {
           product.setProducts(data.rows)
           product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType, product.selectedBrand,product.price])

    return (
        <Container className='mt-1'>
            <Row>
                <Col md={3}>
                 <TypeBar/>
                    <br/>
                    ЦЕНА:
                  <TSlider/>
                    <Button variant={"outline-primary"} className="mt-2" onClick={()=> window.location.reload() } >
                         Сбросить параметры
                        </Button>
                </Col>
                <Col md={9}>
                <BrandBar/>
                    <ProductList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;