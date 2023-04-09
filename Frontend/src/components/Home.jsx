// libraries 
import { useState, useEffect } from "react";
// bootstrap 
import { Container, Card } from "react-bootstrap"
// axios 
import axiosInstance from "../axios"

// components 
import { Product } from "./Product";

export const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        let JWTToken = localStorage.getItem('access');
        // console.log('home access : ',JWTToken)
        const { data } = await axiosInstance.get(`product/`);
        console.log('==> ', data)
        setProducts(data);
        console.log('==> products', products)
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container className="row">
            {products && products.map((item) =>
                <Product 
                    key={item.id} 
                    name = {item.name}
                    desc = {item.desc}
                    price = {item.price}
                    slug = {item.id}
                />
            )}

        </Container>
    )
}
