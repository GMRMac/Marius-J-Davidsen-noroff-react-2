import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { clickButton } from "../../redux/actions";

function CounterButton({ clickButton }){
    return <Button onClick={() => clickButton()}>Click me</Button>;
}

CounterButton.propTypes = {
    clickButton: PropTypes.func.isRequired,
}

export default connect(null, { clickButton })(CounterButton);