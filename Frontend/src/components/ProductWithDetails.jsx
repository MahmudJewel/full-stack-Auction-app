// libraries 
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
// css 
import { Container, Row, Form, Button, Card } from "react-bootstrap";

// Component 
import axiosInstance from "../axios";

export const ProductWithDetails = () => {
    const initial_values = { bid_price: "" };
    const [formValues, setFormValues] = useState(initial_values);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [userid, setUserid] = useState(null);

    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [price, setPrice] = useState(null)

    const { slug } = useParams();
    const p_id = parseInt(slug)
    // const token = localStorage.getItem('access_token');
    // if (token) {
    //     const decodedToken = jwtDecode(token);
    //     console.log('Decoded token=>', decodedToken)
    //     const  user  = decodedToken.user_id;
    //     // console.log('user_id=>', typeof(user_id))
    //     setUserid(user)
    // }

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    };

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(`product/${p_id}`);
            const data = res.data
            setTitle(data.name)
            setDesc(data.desc)
            setPrice(data.price)
            // console.log("p info =>", data.name);
        } catch (err) {
            console.log('Errors => ', err)
        }
    };

    const submitBid = async () => {
        const config = {
            headers: {
                Authorization: localStorage.getItem('access_token')
                    ? 'Bearer ' + localStorage.getItem('access_token')
                    : null,
                "Content-Type": "application/json",
            },
        };
        const token = localStorage.getItem('access_token');
        const decodedToken = jwtDecode(token);
        console.log('Decoded token=>', decodedToken)
        const  id  = decodedToken.user_id;

        const bidder = id
        const product = p_id
        const amount = formValues.bid_price

        const body = JSON.stringify({ bidder, product, amount });
        console.log(body)
        try {
            const res = await axiosInstance.post(`auction/`, body, config);
            // const data = res.data
            // console.log(body)
        } catch (err) {
            console.log('Errors => ', err)
        }
    }

    useEffect(() => {
        if (slug && slug !== "") {
            fetchData();
        }
    }, [slug]);

    return (
        <Container>
            <br /><br /><br />
            <Card style={{ width: '50rem', marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Body>
                    <Card.Title>Product Name: {title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Bidding Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Price"
                                name="bid_price"
                                value={formValues.bid_price}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={submitBid}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}