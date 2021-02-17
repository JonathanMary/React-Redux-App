import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getData } from '../actions';

const Coins = (props) => {
    console.log("Coins props:", props.item)

    useEffect(() => {
        props.getData();
    }, [])
    
    return(
        <div className="coin">
            <img src={props.item.large} alt="Coin Symbol"></img>
            <div>
            <h2>{props.item.name}</h2>
            <h2>{props.item.symbol}</h2>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    //console.log("mapStateToProps: ", state.item)
    return {
        item: state.item,
    }
}

export default connect(mapStateToProps, {getData})(Coins);