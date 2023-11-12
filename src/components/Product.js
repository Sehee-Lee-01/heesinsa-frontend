import React from "react";
import {Col, Row} from "react-bootstrap";

export function Product(props) {
    const productId = props.id;
    const productName = props.name;
    const category = props.category;
    const price = props.price;

    const handleAddBtnClicked = e => {
        props.onAddClick(productId);
    };

    return <Row>
        <Col> <img className="img-fluid"
                   src="https://cdn.pixabay.com/photo/2013/07/12/16/55/t-shirt-151499_1280.png"
                   alt=""/>
        </Col>
        <Col xs={6}>
            <div className="row text-muted">{category}</div>
            <div className="row">{productName}</div>
        </Col>
        <Col>{price}원</Col>
        <Col>
            <button onClick={handleAddBtnClicked} className="btn btn-small btn-outline-dark">추가</button>
        </Col>
    </Row>
}