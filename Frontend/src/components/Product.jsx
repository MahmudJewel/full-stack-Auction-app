// bootstrap 
import { Card, Button } from "react-bootstrap"

export const Product = ({ name, desc, price }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Subtitle className="mb-2 ">Price:<b>{price}</b></Card.Subtitle>
                 
                <Button >Read More</Button>
            </Card.Body>
        </Card>
    )
}