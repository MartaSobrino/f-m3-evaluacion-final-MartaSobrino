import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component{
    render(){
        const {changeInput} = this.props;
        return(
            <input type="text" name="" id="" className="seacrh__input" onChange={changeInput}/>
        );
    }
}

Filter.propTypes = {
    changeInput: PropTypes.func
  };

export default Filter;
