import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeast extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      numberOfLikes : 0,
      
    }
  }

like = ()=>{
  this.setState({
    numberOfLikes : this.state.numberOfLikes + 1
  });
}

displayBeast = (e)=>{
    this.props.viewBeast(e);
    this.setState({numberOfLikes : this.state.numberOfLikes + 1})
    // console.log(e);
}

  render() {
    // console.log(this.props);
    return (
      <div className='beast'>
        <Card style={{ width: '16rem' }}>
          <Card.Img onClick={this.displayBeast} variant="top" 
                    src={this.props.url} 
                    name={this.props.name}
                    nonce={this.props.description} 
        />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text> {this.props.description} </Card.Text>
            <Button onClick = {this.like} variant="primary">Like !</Button>
            <div>💗 {this.state.numberOfLikes}</div> 
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;