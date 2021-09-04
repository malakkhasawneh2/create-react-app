import React  from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            title : '',
            imgUrl : '',
            description : '',
            data : Data,
            filterData: Data,

        }
    }

    showModal= () => {
        this.setState({
            show: true
        })

    }

    handleClose= () => {
        this.setState({
            show : false
        })
    }

    updateSelectedBeastData=(title,src,description) => {
        this.setState({
            title: title,
            src: src,
            description: description
        })
    }

    select = (event) =>{
        let newArray;
        if(event.target.value === 'all')
        {
             newArray = Data;
        }
        else
        {
             newArray = Data.filter(
                (n) => n.horns === parseInt(event.target.value)

            );
            
        }
        this.setState({
            filterData: newArray 
        });



    };

    selectAll = () => {
        this.setState({
            filterData: Data
        })
}



render(){
return( 
<>
<Header/>
<Form onChange={this.select}>
            <Form.Group controlId="horns">
              <Form.Select aria-label="Select beast horns number:">
                <option>Select beast horns number:</option>
                <option value="all">All</option>
                <option value="1">One horn</option>
                <option value="2">Two horns</option>
                <option value="3">Three horns</option>
                <option value="100">Wow</option>
              </Form.Select>
            </Form.Group>
          </Form>
<Main
Data={this.state. filterData}
// Data={this.state.data}
showModal={this.showModal}
updateSelectedBeastData={this.updateSelectedBeastData}
/>
<SelectedBeast
show={this.state.show}
handleClose={this.handleClose}
title={this.state.title}
src={this.state.src}
description={this.state.description}
/>
<Footer/>
</>

 )

}


}
export default App;


