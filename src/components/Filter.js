import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component{
    render(){
        const {changeInput, changeSelect} = this.props;
        return(
            <div className="search__section">
                <div className="search__container">
                    <label className ="label__input" htmlFor="filter">Busca tu personaje favorito de la saga</label>
                    <div className="inner-addon right-addon">
                        <i className="glyphicon glyphicon-search fas fa-search"></i>
                        <input type="text" name="filter__name" id="filter" className="seacrh__input" onChange={changeInput} placeholder="intrduce aquí el nombre" />
                    </div>
                </div>
                <div className="search__select">
                    <label className="label__input" htmlFor="house__select">Elige la casa que más te guste</label>
                    <select name="" id="house__select" onChange={changeSelect} >
                        <option value="all">Todo</option>
                        <option value="Gryffindor">Gyiffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                    </select>
                </div>
                   
                
            </div>
        );
    }
}

Filter.propTypes = {
    changeInput: PropTypes.func
  };

export default Filter;
