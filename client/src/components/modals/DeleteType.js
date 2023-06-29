import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {createType, deleteType} from "../../http/productAPI";

const DeleteType = ({show,onHide}) => {
    const [value,setValue]=useState('')
    const destroy = () => {
        try {
            deleteType({name: value}).then(onHide())
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
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        placeholder={"Введите название типа"}

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

export default DeleteType;