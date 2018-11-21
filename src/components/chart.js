import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import tree from "../helper/tree";

class Chart extends Component {
  componentDidMount() {
    tree(this.svgRef, this.props.data);
  }
  componentDidUpdate() {
    tree(this.svgRef, this.props.data);
  }
  render() {
    return (
      <div className="container">
        <div className="canvas">
          <svg
            ref={el => {
              return (this.svgRef = el);
            }}
          >
            <g id="tree" />
          </svg>
        </div>
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
