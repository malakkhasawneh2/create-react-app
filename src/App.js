import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import jsonData from '../src/components/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      data : jsonData,
      show : false,
      details: undefined
    }
  }
  
  viewBeast = (e)=>{
    this.setState({
      show : true,
      details : e
    });
    // console.log(this.state.details);
  }
  closing = ()=>{
    this.setState({
      show: false,
      details: undefined
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <SelectedBeast show={this.state.show} details={this.state.details} closing={this.closing}/>
        <Main Data={this.state.data} viewBeast={this.viewBeast}/>
        <Footer/>
      </div>
    );
  }
}

export default App;