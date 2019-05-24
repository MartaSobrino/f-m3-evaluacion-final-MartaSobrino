import React from 'react';
import {Link} from 'react-router-dom';

class CharacterList extends React.Component{
    render(){
        const {characters, filterName} = this.props;
        return(
            <ul className="cads__container">
                {characters
                .filter(item => item.name.toUpperCase().includes(filterName.toUpperCase()))
                .map(item => 
                <li className="character__card" key={item.id}>
                    <h2 className="character__name">{item.name}</h2>
                    <img src={item.image} alt="" className="character__image"/>
                    <p className="character__house">{item.house}</p> 
                <Link to={`/detail/${item.id}`}>Ver detalles sobre {item.name}</Link>  
                </li>
                )}
            </ul>
        );
    }
}
export default CharacterList;