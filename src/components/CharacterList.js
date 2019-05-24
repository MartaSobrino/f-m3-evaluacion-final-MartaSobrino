import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CharacterList.scss';

class CharacterList extends React.Component{
    render(){
        const {characters, filterName} = this.props;
        return(
            <div className="main__container">
                <ul className="cards__container">
                    {characters
                    .filter(item => item.name.toUpperCase().includes(filterName.toUpperCase()))
                    .map(item => 
                    <li className="character__card" key={item.id}>
                        <h2 className="character__name">{item.name}</h2>
                        <img src={item.image} alt={`imagen ${item.name}`} className="character__image"/>
                        <p className="character__house">{item.house}</p> 
                    <Link to={`/detail/${item.id}`}>Ver detalles sobre {item.name}</Link>  
                    </li>
                    )}
                </ul>
            </div>
        );
    }
}

CharacterList.propTypes = {
    characters: PropTypes.array,
    filterName: PropTypes.string,
  };

export default CharacterList;