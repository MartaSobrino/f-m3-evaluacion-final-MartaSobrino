import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component{
    render(){
        const {changeInput} = this.props;
        return(
            <div className="search__section">
                <div className="search__container">
                    <label htmlFor="filter">Busca tu personaje favorito de la saga</label>
                    <div className="inner-addon right-addon">
                        <i className="glyphicon glyphicon-search fas fa-search"></i>
                        <input type="text" name="filter__name" id="filter" className="seacrh__input" onChange={changeInput} placeholder="intrduce aquí el nombre" />
                    </div>
                </div>
            </div>
        );
    }
}

Filter.propTypes = {
    changeInput: PropTypes.func
  };

export default Filter;
