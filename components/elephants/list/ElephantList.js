import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ElephantItem from "./ElephantItem";

export default function ElephantList({ elephants }){
    return (
        <Row>
            {elephants.map(elephant =>{
                if(elephant.name){
                    return(
                        <Col sm={6} md={3} key={elephant.id}>
                            <ElephantItem elephant={elephant}/>
                        </Col>
                    )  
                }
            })}
        </Row>
    )
}

ElephantList.propTypes = {
    elephants: PropTypes.arrayOf(PropTypes.object).isRequired,
}