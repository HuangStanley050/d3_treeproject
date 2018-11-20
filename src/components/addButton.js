import React from "react";

const Button = props => {
  return (
    <a href="#" className="btn-floating btn-large halfway-fab pink">
      <i onClick={props.clicked} className="material-icons">
        add
      </i>
    </a>
  );
};

export default Button;
