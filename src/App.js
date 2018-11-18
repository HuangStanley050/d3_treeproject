import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import { connect } from 'react-redux';
import Header from './components/header';
import Modal from "./components/modal";
import Chart from "./components/chart";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Modal/>
        <Chart/>
      </div>
    );
  }
}

/*const mapStateToProps = state => {
  return {
    toggleStatus: state.modal.toggle
  };
};*/

export default App;
