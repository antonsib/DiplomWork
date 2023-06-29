import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {createProduct, fetchBrands, fetchTypes} from "../../http/productAPI";
import {observer} from "mobx-react-lite";

const CreateProduct = observer( ({show,onHide}) => {
    const {product}=useContext(Context)
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const [file,setFile]=useState(null)
    const [info,setInfo]=useState([])
    const addInfo=()=>{
        setInfo([...info,{title:'',description:'',number:Date.now()}])
    }
    const removeInfo=(number)=>{
        setInfo(info.filter(i=> i.number!==number))
    }

    const selectFile =e=>{
        setFile(e.target.files[0])
    }

    const changeInfo=(key,value,number)=>{                             //number - номер меняющейся характеристики
        setInfo(info.map(i=>i.number===number?{...i,[key]:value}:i)) //i - новый объект , в который подставляется ключ-значение
    }

    const addProduct=()=>{
        const formData=new FormData()
        formData.append('name',name)
        formData.append('price',`${price}`)
        formData.append('img',file)
        formData.append('brandId',product.selectedBrand.id)
        formData.append('typeId',product.selectedType.id)
        formData.append('info',JSON.stringify(info))
        createProduct(formData).then(data=>onHide())
    }

    useEffect(()=>{
        fetchTypes().then(data=> product.setTypes(data))
        fetchBrands().then(data=> product.setBrands(data))
    },[])


    return (
        <Modal
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle >{product.selectedType.name||"Выберите тип"}</DropdownToggle>
                        <DropdownMenu>
                            {product.types.map(type=>
                              <Dropdown.Item
                                  onClick={()=>product.setSelectedType(type)}
                                             key={type.id}>
                                  {type.name}
                              </Dropdown.Item>

                            )}

                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <DropdownToggle  >{product.selectedBrand.name||"Выберите бренд"}</DropdownToggle>
                        <DropdownMenu>
                            {product.brands.map(brand=>
                                <Dropdown.Item onClick={()=>product.setSelectedBrand(brand)}
                                               key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>

                            )}

                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        className="mt-3"
                    placeholder="Введите название"
                    />
                    <FormControl
                        value={price}
                        onChange={e=>setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите цену"
                        type="number"
                    />
                    <FormControl
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                    variant={"outline-dark"}
                    onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                      info.map(i=>
                         <Row className="mt-4" key={i.number}>
                             <Col md={4}>
                              <Form.Control
                                  value={i.title}
                                  onChange={(e)=>changeInfo('title',e.target.value,i.number)}
                                  placeholder="Введите название свойства"
                              />
                             </Col>
                             <Col md={4}>
                                 <Form.Control
                                     value={i.description}
                                     onChange={(e)=>changeInfo('description',e.target.value,i.number)}
                                     placeholder="Введите описание свойства"
                                 />
                             </Col>
                             <Col md={4}>
                                 <Button
                                     onClick={()=>removeInfo(i.number)}
                                     variant={"outline-danger"}>
                                     Удалить
                                 </Button>
                             </Col>
                         </Row>
                      )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;