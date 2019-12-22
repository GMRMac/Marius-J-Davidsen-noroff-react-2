import react from "react";
import PropTypes from "prop-types";
import Card from "./card";

export default function ElephantItem({elephant}){
    const {name, species, sex} = elephant;
    
    return(
        <Card species={elephant.species} sex={sex}>
            <p>{name}</p>
        </Card>
    )
}

ElephantItem.propTypes = {
    elephant: PropTypes.object.isRequired,
}