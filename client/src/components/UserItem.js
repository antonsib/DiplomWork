import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import logo from '../assets/logo.png'
const UserItem = () => {
    return (
        <Col className="mt-1" >
            <Card style={{width:150,cursor:'pointer'}} border={"light"} className="mt-1" >
                <Image width={150} height={150} src={logo}/>
                <div className="tet-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default UserItem;