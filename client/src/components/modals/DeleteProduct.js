import React, {useState} from 'react';
import {deleteProduct} from "../../http/productAPI";
import {Button, Form, Modal} from "react-bootstrap";

const DeleteProduct = ({show,onHide}) => {
    const [value,setValue]=useState('')
    const destroy = () => {
        try {
            deleteProduct({name: value}).then(onHide())
        }
        catch(e){
            alert(e.response.data.message)
        }
    }
    return (
        <Modal
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        placeholder={"Введите название товара"}

                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={destroy}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteProduct;