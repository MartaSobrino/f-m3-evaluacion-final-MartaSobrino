import React from 'react';

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
                                {newData.alive ? <p>¡Sigue vivo! <span>😀</span></p> : <p>Muerto <span>☠️ </span></p> }
                            </li>
                        </ul>
                    </div>
                    :
                    <p>No hay datos disponibles</p>
                }
            </React.Fragment>
        );
    }
}
export default CharacterCard;