import React, {useEffect, useState} from "react";
import axios from "axios";
import {Order} from "./Order";

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
                <table className="table">
                    <thead className="table-light">
                    <tr>
                        <th scope="col">주문 일자</th>
                        <th scope="col">주문 번호(ID)</th>
                        <th scope="col">주문 금액(수량)</th>
                        <th scope="col">주문 상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map(v => <Order {...v}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}