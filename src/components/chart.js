import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import tree from "../helper/tree";

class Chart extends Component {
  render() {
    return (
      <div className="container">
        <div className="canvas" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.firestore.ordered.employees
  };
};

export default compose(
  firestoreConnect([{ collection: "employees" }]),
  connect(mapStateToProps)
)(Chart);
