import React from 'react';

class Filter extends React.Component{
    render(){
        const {changeInput} = this.props;
        return(
            <input type="text" name="" id="" className="seacrh__input" onChange={changeInput}/>
        );
    }
}

export default Filter;
