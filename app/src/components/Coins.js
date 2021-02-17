import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getData } from '../actions';

const Coins = (props) => {
    //console.log("Coins props:", props)

    useEffect(() => {
        props.getData();
    }, [])
    
    return(
        <>
            <h2>{props.item.name}</h2>
        </>
    )
}

const mapStateToProps = state => {
    //console.log("mapStateToProps: ", state.item)
    return {
        item: state.item,
    }
}

export default connect(mapStateToProps, {getData})(Coins);