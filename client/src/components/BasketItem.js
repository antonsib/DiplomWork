import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

const BasketItem = ({product}) => {
    return (
        <Col className="mt-1" >
            <Card style={{width:150,cursor:'pointer'}} border={"light"} className="mt-1">
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL+product.img}/>
                <div className="tet-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default BasketItem;