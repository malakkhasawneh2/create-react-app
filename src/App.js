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
            describtion : '',
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

    updateSelectedBeastData=(title,src,describtion) => {
        this.setState({
            title: title,
            src: src,
            describtion: describtion
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
describtion={this.state.describtion}
/>
<Footer/>
</>

 )

}


}
export default App;



