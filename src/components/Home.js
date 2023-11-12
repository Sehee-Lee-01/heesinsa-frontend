import {ProductList} from "./ProductList";
import {Summary} from "./Summary";
import React, {useEffect, useState} from "react";
import axios from "axios";

export function Home() {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);
    const handleAddClicked = productId => {
        const product = products.find(v => v.id === productId);
        const found = items.find(v => v.id === productId);
        const updatedItems =
            found ? items.map(v => (v.id === productId) ? {...v, count: v.count + 1} : v) : [...items, {
                ...product,
                count: 1
            }]
        setItems(updatedItems);
        console.log(items);
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(v => setProducts(v.data));
    });

    const handleOrderSubmit = (order) => {
        if (items.length === 0) {
            alert("아이템을 추가해 주세요!");
        } else {
            axios.post('http://localhost:8080/api/orders', {
                email: order.email,
                address: order.address,
                postcode: order.postcode,
                orderItems: items.map(v => ({
                    productId: v.id,
                    price: v.price,
                    quantity: v.count
                }))
            }).then(
                v => alert("주문이 정상적으로 접수되었습니다."),
                e => {
                    alert("서버 장애");
                    console.error(e);
                })
        }
    }
    return <div className="container-fluid">
        <div className="row">
            <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                <ProductList products={products} onAddClick={handleAddClicked}/>
            </div>
            <div className="col-md-4 summary p-4">
                <Summary items={items} onOrderSubmit={handleOrderSubmit}/>
            </div>
        </div>
    </div>
}

