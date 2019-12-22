import React from 'react';
import PropTypes from "prop-types";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "../constants/API";
import Layout from "../components/layout/Layout";
import ElephantList from "../components/elephants/list/ElephantList";

export default function Index(props){
//    console.log(props.elephants.map())
    return (
        <Layout>
            <ElephantList elephants={props.elephants} />
        </Layout>
    )
}

Index.propTypes = {
    elephants: PropTypes.arrayOf(PropTypes.object),
}

Index.getInitialProps = async function(){
    let elephants = [];
    
    const headers = {
    "X-Requested-With": "XMLHttpRequest"
    };
    try{
        const response = await axios.get(BASE_URL, {headers});
        const data = response.data;
        elephants = data;
//        console.log(elephants);
    } catch(error){ 
        console.log(error);
    }
    
    return{
        elephants: elephants,
    }
}


