import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getData } from '../actions';

const Coins = (props) => {
    console.log("Coins props:", props.item.length)

    useEffect(() => {
        props.getData();
    }, [])
    
    return(
        <>
        {props.item.length > 1 && props.item.map(res => {
            console.log("ITEM: ", res.item)
            return(
                <div className="coin">
                    <img src={res.item.large} alt="Coin Symbol" style={{height:"4vw", width:"4vw"}}></img>
                    <div>
                    <h2>{res.item.name}</h2>
                    <h2>{res.item.symbol}</h2>
                    </div>
                </div>
            )
        })}
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