import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Home} from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OrderList} from "./components/OrderList";

export default function App() {
    return (
        <div className="container-fluid">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <h1>HEESINSA</h1>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/orders" element={<OrderList/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
