import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CheckSale = ({show,onHide}) => {

    return (
        <Modal
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Заказ Сформирован
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CheckSale;