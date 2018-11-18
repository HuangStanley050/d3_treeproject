import React from "react";
import { toggleModal } from "../store/actions/toggleModal";
import { connect } from 'react-redux';
import Button from "./addButton";



const Header = (props) => {
    const clicked = (e) => {
        e.preventDefault();
        //alert("you clicked it");
        props.toggle();
    };
    return (
        <div>
        <div className="section blue lighten-1">
        <h2 className="white-text center">Tekken Zaibatsu</h2>
            </div>
        <div className="grey lighten-3 section grey-text" style={{position:'relative'}}>
          <p className="flow-text center">The Best Company</p>
          <Button clicked={(e)=>clicked(e)} />
        </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggleModal())
    };
};

export default connect(null, mapDispatchToProps)(Header);
