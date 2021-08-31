import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {


    render(){
        // console.log(this.props);
        if(this.props.show){
            return (
                <div className='focused'>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>{this.props.details.target.name}</Modal.Title>
                        </Modal.Header>
                        
                        <Card.Img variant="top" style={{ width: '14rem' }} src={this.props.details.target.src}/>
    
                        <Modal.Body>
                            <p>{this.props.details.target.nonce}</p>
                        </Modal.Body>
                        <Button variant="secondary" onClick={this.props.closing}>Close</Button>
                    </Modal.Dialog>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default SelectedBeast;