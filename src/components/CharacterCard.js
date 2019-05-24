import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CharacterCards.scss';

class CharacterCard extends React.Component{
    render(){
        const {characters} = this.props;
        const newId = this.props.param.match.params.id;
        // vero preguntas corchetes
        const newData = characters[newId];
        return(
            <React.Fragment>
                {newData ?
                    <div className="container__detail">
                    <h2 className="character__name">{newData.name}</h2>
                        <ul className="character__detail__container">
                            <li>
                                <img src={newData.image} alt="" className="character__image"/>
                            </li>
                            <li>
                                <p className="character__house">{newData.house}</p> 
                            </li>
                            <li>
                                <p className="character__birth">{newData.dateOfBirth}</p>   
                            </li>
                            <li>
                                <p className="character__patronus">{newData.patronus}</p>
                            </li>
                            <li>
                                {newData.alive ? <p>¡Sigue vivo! <span role="img" aria-label="emoticono sonriente estado vivo personaje">😀</span></p> : <p>Muerto <span role="img" aria-label="emoticono calavera estado muerto personaje">☠️ </span></p> }
                            </li>
                        </ul>
                    </div>
                    :
                    <p>No hay datos disponibles</p>
                }
                <Link to="/">Volver </Link>
            </React.Fragment>
        );
    }
}

CharacterCard.propTypes = {
    characters: PropTypes.array
  };

export default CharacterCard;