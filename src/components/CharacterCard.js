import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CharacterCards.scss';

class CharacterCard extends React.Component{

    houseLogo(house) {
        if(house === 'Gryffindor'){
            return 'https://newvitruvian.com/images250_/gryffindor-transparent-hogwarts-4.png';
        } else if(house === 'Slytherin' ){ 
            return 'https://newvitruvian.com/images1280_/slytherin-vector-hogwarts-houses-5.png';
        } else if(house === 'Hufflepuff'){
            return 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest?cb=20161020182518';
        } else if (house === 'Ravenclaw') {
            return 'https://i.pinimg.com/originals/55/02/b8/5502b8a40b5eac56a8a95efebe94c508.png';
        } else {
            return 'https://i.pinimg.com/originals/d7/2d/a9/d72da962ce4bb9b7e7370fd0c7834fdd.png';
        }
    }

    changeColor(house){
        if(house === 'Gryffindor'){
            return 'gryffindor';
        } else if(house === 'Slytherin') {
            return 'slytherin';
        } else if(house === 'Hufflepuff') {
            return 'hufflepuff';
        } else if (house === 'Ravenclaw') {
            return 'ravenclaw';
        } else {
            return '';
        }
    }

    componentWillMount(){
        this.props.reset();
    }

    render(){
        const {characters} = this.props;
        const newId = this.props.param.match.params.id;
        // vero preguntas corchetes
        const newData = characters[newId];
        return(
            <React.Fragment>
                <div className="search__section">
                    <div className="search__container">
                        <Link className="back__to" to="/"><i className="fas fa-chevron-left"></i> Volver al buscador </Link>
                    </div>
                </div>
                
                {newData ?
                    <div className="container__detail">
                        <div className={`main__photo ${this.changeColor(newData.house)}`}>
                            <img src={newData.image} alt="foto personaje" className="character__image"/>
                        </div>     
                        <div className="main__info">
                            <ul className="character__detail__container">
                                <li className="name__house__container">
                                    <h2 className="character__name">{newData.name}</h2>
                                    <img className="house__logo"src={this.houseLogo(newData.house)} alt="escudo-griffindor"/>
                                </li>
                                <li>
                                    <p className="character__house">{`Casa: ${newData.house}`}</p> 
                                </li>
                                <li>
                                    <p className="character__birth">{`Año de nacimiento: ${newData.dateOfBirth}`}</p>   
                                </li>
                                <li>
                                    <p className="character__patronus">{`Patronus: ${newData.patronus}`}</p>
                                </li>
                                <li>
                                    {newData.alive ? 
                                        <p>¡Sigue vivo! <span role="img" aria-label="emoticono sonriente estado vivo personaje">😀</span></p> 
                                        :
                                        <p>Muerto <span role="img" aria-label="emoticono calavera estado muerto personaje">☠️ </span></p> }
                                </li>
                            </ul>
                        </div>                   
                    </div>
                    :
                    <p>No hay datos disponibles</p>
                }
            </React.Fragment>
        );
    }
}

CharacterCard.propTypes = {
    characters: PropTypes.array
  };

export default CharacterCard;