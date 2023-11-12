import React from "react";
import {Col, Row} from "react-bootstrap";

export function Order(props) {
    const orderId = props.id;
    const email = props.email;
    const orderItems = props.orderItems;
    const createdAt = new Date(props.createdAt);
    const address = props.address;
    const postcode = props.postcode;
    const orderStatus = props.orderStatus;

    return <>
        <Col xs={3}>{orderId}</Col>
        <Col xs={1}>{orderItems.length}개</Col>
        <Col
            xs={3}>{createdAt.getFullYear()}년 {createdAt.getMonth()}월 {createdAt.getDate()}일 {createdAt.getHours()}시 {createdAt.getMonth()}분 {createdAt.getSeconds()}초</Col>
        <Col xs={3}>
            <Row>{email} </Row>
            <Row>{address} ({postcode})</Row>
        </Col>
        <Col>{orderStatus}</Col>
    </>
}