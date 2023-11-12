import React, {useEffect, useState} from "react";
import axios from "axios";
import {Order} from "./Order";
import {Col, Container, Row} from "react-bootstrap";

export function OrderList() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/orders')
            .then(v => setOrders(v.data));
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <h5 className=" flex-grow-0"><b>주문 현황</b></h5>
                <Container className="list-group products">
                    <Row className="text-center">
                        <Col xs={3} >주문 ID</Col>
                        <Col xs={1}>상품 개수</Col>
                        <Col xs={3}>주문 날짜</Col>
                        <Col xs={3}>주문자 정보</Col>
                        <Col xs={1}>주문 상태</Col>
                    </Row>
                    {orders.map(v =>
                        <Row key={v.id} className="list-group-item d-flex mt-3 ">
                            <Order {...v}/>
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    )
}