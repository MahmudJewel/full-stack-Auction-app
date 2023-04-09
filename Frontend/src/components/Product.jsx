// Libraries 
import { useNavigate } from "react-router-dom";
// bootstrap 
import { Card, Button } from "react-bootstrap"
// components 
import { ProductWithDetails } from "./ProductWithDetails";

export const Product = ({ name, desc, price, slug }) => {
    const navigate = useNavigate()
    const redirect = () => {
        navigate('product/' + slug)
    }
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Subtitle className="mb-2 ">Price:<b>{price}</b></Card.Subtitle>

                <Button onClick={redirect}>Read More</Button>
            </Card.Body>
        </Card>
    )
}