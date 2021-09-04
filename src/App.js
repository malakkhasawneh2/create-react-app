import React  from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            title : '',
            imgUrl : '',
            description : '',
            data : Data,

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



render(){
return( 
<>
<Header/>
<Main
Data={this.state.data}
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


