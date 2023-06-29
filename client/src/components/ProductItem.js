import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";
const ProductItem = ({product}) => {
    const navigate=useNavigate()
    return (
         <Col className="mt-1" onClick={()=>navigate(PRODUCT_ROUTE+ '/'+product.id)}>
         <Card style={{width:300,height:300,cursor:'pointer'}} border={"light"} className="mt-1">
           <Image width={150} height={150} src={process.env.REACT_APP_API_URL+product.img}/>
             <div className="tet-black-50 mt-1 d-flex justify-content-between align-items-center">
             <div className="d-flex align-items-center">
             </div>
             </div>
             <div>
                  {product.name}
                 <div className="mt-2" style={{fontSize:21}}>
                  <b>  {product.price} рублей </b>
                 </div>
             </div>
         </Card>
        </Col>
    );
};

export default ProductItem;