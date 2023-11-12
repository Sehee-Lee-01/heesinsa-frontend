import {SummaryItem} from "./SummaryItem";
import React, {useState} from "react";

export function Summary({items = [], onOrderSubmit}) {
    const totalPrice = items.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
    const [order, setOrder] = useState({
        email: "", address: "", postcode: ""
    });
    const handleEmailInputChanged = (e) => setOrder({...order, email: e.target.value})
    const handleAddressInputChanged = (e) => setOrder({...order, address: e.target.value})
    const handlePostcodeInputChanged = (e) => setOrder({...order, postcode: e.target.value})
    const handleSubmit = (e) => {
        if (order.address === "" || order.email === "" || order.postcode === "") {
            alert("입력값을 확인해주세요!")
        } else {
            onOrderSubmit(order);
        }
    }
    return (
        <>
            <div>
                <h5 className="m-0 p-0"><b>장바구니</b></h5>
            </div>
            <hr/>
            <div>
                {items.length > 0 ?
                    items.map(v => <SummaryItem key={v.id} count={v.count} productName={v.name}/>) :
                    "장바구니에 담긴 상품이 없습니다."
                }
            </div>
            <p></p>
            <div>
                <h5 className="m-0 p-0"><b>주문 고객 정보</b></h5>
            </div>
            <hr/>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control mb-1" value={order.email}
                           onChange={handleEmailInputChanged}
                           id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">주소</label>
                    <input type="text" className="form-control mb-1" value={order.address}
                           onChange={handleAddressInputChanged}
                           id="address"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postcode" className="form-label">우편번호</label>
                    <input type="text" className="form-control" value={order.postcode}
                           onChange={handlePostcodeInputChanged}
                           id="postcode"/>
                </div>
            </form>
            <div className="row pt-2 pb-2 border-top">
                <span className="col">최종 결제 금액</span>
                <span className="col text-end">{totalPrice}원</span>
            </div>
            <button className="btn btn-dark col-12" onClick={handleSubmit}>주문하기</button>
        </>
    )
}