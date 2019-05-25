import React from 'react';
import './App.scss';
import {data} from './services/data';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import {Route, Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      characters: [],
      filterName: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
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

  resetFilters() {
    this.setState({
      filterName: ''
    });
  }

  render(){
      return (
        <div className="App">
          <header className="header">
            <div className="header__container">
              <div className="title__container">
                <h1 className="main_title"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bd6a.png" alt="logotipo Harry Potter"/></h1>
              </div>
              <div className="img__contain"></div>
            </div>           
          </header>
          <main className="main">
              <Switch>
              <Route exact path="/" render={() =>
                <React.Fragment>
                    <Filter 
                      changeInput={this.handleInput}
                    />
                    <CharacterList 
                        characters={this.state.characters} 
                        filterName={this.state.filterName}
                    />           
                </React.Fragment>
              }  
              />
              <Route path="/detail/:id" render={parameter => 
                <CharacterCard 
                  param={parameter}
                  characters={this.state.characters} 
                  reset={this.resetFilters} 
                />
              }  />

              </Switch>
          </main>
          <footer className="footer"><small>©2019. Marta Sobrino</small></footer>
        </div>
      );
    }
  }  

export default App;
