import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component{
    render(){
        const {changeInput} = this.props;
        return(
            <div className="search__section">
                <div className="search__container">
                    <input type="text" name="" id="" className="seacrh__input" onChange={changeInput}/>
                </div>
            </div>
        );
    }
}

Filter.propTypes = {
    changeInput: PropTypes.func
  };

export default Filter;
