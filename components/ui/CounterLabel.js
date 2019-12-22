import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Badge from "react-bootstrap/Badge";

function CounterLabel({ count }){
    return(
        <Badge variant="secoundary" size="large">
            {count}
        </Badge>
    )
}

function mapStateToProps(store){
    return {
        count: store.button.clickCount,
    }
}

export default connect(mapStateToProps)(CounterLabel);