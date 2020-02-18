import React from 'react'
import {connect} from 'react-redux';
import {buycake} from '../Redux/index';

 

 function CakeContainer(props) {
    return (
        <div>
            <h2>
                number of the cakes {props.numberOfCake}
            </h2>
            <button onClick={props.buycake}>Buy_Cake</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numberOfCake: state.numberOfCake
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buycake: () => dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)