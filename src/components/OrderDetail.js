import React, {useEffect} from "react";
import axios from "axios";

export function Order(props) {
    const orderId = props.id;
    const productName = props.name;
    const price = props.price;
    useEffect(() => {
        axios.get('http://localhost:8080/api/orders')
            .then(v => setOrders(v.data));
    });
    return <tr className="list-group products">
        <th key={orderId} className="list-group-item d-flex mt-3">
        </th>
    </tr>
}