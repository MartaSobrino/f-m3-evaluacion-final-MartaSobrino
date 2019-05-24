import React from 'react';
import './App.scss';
import {data} from './services/data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      characters: [],
      filterName: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }
  
  fetchNewReasons() {
    data()
      .then(data => {
        const newCharacters = data.map((character, index) => {
          return{...character, id: index};
        })
        this.setState({
          characters: newCharacters
        })
      });
  }

  componentDidMount(){
    this.fetchNewReasons();
  }

  handleInput(event){
    const trigger = event.currentTarget.value;
    this.setState({
      filterName: trigger
    });
  }

  render(){
      return (
        <div className="App">
        <h1 className="main_title">Harry Potter</h1>
        <input type="text" name="" id="" className="seacrh__input" onChange={this.handleInput}/>
        <h2 className="subtitle">Main Characters</h2>
          <ul className="cads__container">
              {this.state.characters
              .filter(item => item.name.toUpperCase().includes(this.state.filterName.toUpperCase()))
              .map(item => 
              <li className="character__card" key={item.id}>
                <h2 className="character__name">{item.name}</h2>
                <img src={item.image} alt="" className="character__image"/>
                <p className="character__house">{item.house}</p>
              </li>)}
          </ul>
        </div>
      );
    }
  }  

export default App;
