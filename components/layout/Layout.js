import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import NextHead from "next/head";
import Navbar from "react-bootstrap/navbar";
import Nav from "react-bootstrap/nav";
import Container from "react-bootstrap/container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    margin-top: 30px;
`;

export default function Layout(props){
    return(
        <>
            <NextHead>
                <link 
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </NextHead>
            <Navbar bg="light" variant="light" expand="lg">
                <Link href="/">
                    <Navbar.Brand>Elephants</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/">
                            <a>
                                <Nav.Link as="span">Home</Nav.Link>
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a>
                                <Nav.Link as="span">Contact</Nav.Link>
                            </a>
                        </Link>
                        <Link href="/redux">
                            <a>
                                <Nav.Link as="span">Redux</Nav.Link>
                            </a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <StyledContainer>{ props.children }</StyledContainer>
        </>
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}