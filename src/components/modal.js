import React, { Component } from "react";
import saveData from "../store/actions/saveData";
import { toggleModal } from "../store/actions/toggleModal";
import { error } from "../store/actions/formError";
import { connect } from "react-redux";

const open = {
  display: "block",
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 20
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
  };

  handleIput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //alert(this.state.parent);
    if (
      this.state.name === "" ||
      this.state.parent === "" ||
      this.state.department === ""
    ) {
      this.props.error();
    } else {
      this.props.save(this.state);
      this.setState({ name: "", parent: "", department: "" });
      this.props.closeModal();
    }
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ name: "", parent: "", department: "" });
    this.props.closeModal();
  };

  render() {
    return (
      <div
        id="modal"
        className="modal"
        style={this.props.toggleStatus ? open : null}
      >
        <div className="modal-content">
          <h4 className="pink-text center">Add New Employee</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                onChange={this.handleIput}
                type="text"
                id="name"
                placeholder="Employee Name"
                value={this.state.name}
              />
            </div>

            <div className="input-field">
              <input
                onChange={this.handleIput}
                type="text"
                id="parent"
                placeholder="Reports to..."
                value={this.state.parent}
              />
            </div>

            <div className="input-field">
              <input
                onChange={this.handleIput}
                type="text"
                id="department"
                placeholder="Department"
                value={this.state.department}
              />
            </div>
            <div className="row">
              <div className="input-field col s4">
                <button type="submit" className="btn green white-text">
                  Add Employee
                </button>
              </div>

              <div className="input-field col s8">
                <button
                  type="button"
                  onClick={this.handleClose}
                  className="btn blue white-text"
                >
                  Close
                </button>
              </div>
            </div>
            <p className="red-text center">{this.props.errMsg}</p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleStatus: state.modal.toggle,
    errMsg: state.modal.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    save: data => dispatch(saveData(data)),
    closeModal: () => dispatch(toggleModal()),
    error: () => dispatch(error())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
