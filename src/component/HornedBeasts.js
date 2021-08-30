import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfPets : 0
        }
    }

    incrementNumberOfPets = () => {
        this.setState({
            numberOfPets : this.state.numberOfPets + 1  
        })
    }
    render() {
        return (
            <>
                {/* <h2>{this.props.title}</h2>
    <img src={this.props.imageUrl}/>
    <p>{this.props.description}</p> */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.incrementNumberOfPets}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            Number of pets 🐾: {this.state.numberOfPets}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default HornedBeasts