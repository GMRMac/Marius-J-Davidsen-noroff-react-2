import styled from "styled-components";

const Card = styled.div`
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: ${props => (props.species === "Asian" ? props.theme.shadows.boxShadow : 0)};
    background: ${props => (props.sex === "Female" ? props.theme.colors.red : props.theme.colors.green)};
    color: ${props => (props.sex === "Female" ? "white" : "black")};
    border-radius: ${props => props.theme.shapes.cardCorners}
`;

export default Card