import React, { Component } from "react";
import { connect } from 'react-redux';

const open = {
    display: "block",
    position: "fixed",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 20,
    /*width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0)',
    backgroundColor: 'rgba(0,0,0,0.4)'*/

};

class Modal extends Component {
    state = {
        name: "",
        parent: "",
        department: ""
    }

    handleIput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        //alert(this.state.parent);
    }

    render() {
        return (
            <div id="modal" className="modal" style={this.props.toggleStatus?open:null}>
                <div className="modal-content" >
                 <h4 className="pink-text center">Add New Employee</h4>
                 <form onSubmit={this.handleSubmit} >
                    <div className="input-field">
                    <input onChange={this.handleIput} type="text" id="name" placeholder="Employee Name"/>
                    </div>
                    
                    <div className="input-field">
                    <input onChange={this.handleIput} type="text" id="parent" placeholder="Reports to..."/>
                    </div>
                    
                    <div className="input-field">
                    <input onChange={this.handleIput} type="text" id="department" placeholder="Department"/>
                    </div>
                    
                    <div className="input-field">
                     <button className="btn green white-text">Add Employee</button>
                    </div>
                 </form>
                </div>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        toggleStatus: state.modal.toggle
    };
};

export default connect(mapStateToProps)(Modal);
