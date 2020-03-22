import React, { Component } from 'react';
import Buttons from './Buttons';

import CardList from './CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      fetchedObject: ''
    }
  }
  
  onButtonClick = (event) => {
    this.setState({searchQuery: event.target.value});
  
    fetch(`https://swapi.co/api/${this.state.searchQuery}/`)
      .then(response => response.json())
      .then(details => this.setState({fetchedObject: details.results}))
  }

    render() {
     return (
        <div className='tc'>
          <h1 className='f1'>Swapi Fetch</h1>
          <p>Here you get information about the characters, planets and starships used in the Star Wars movie.</p>
          <i>Click any of the categories below to get information</i>
          <Buttons buttonClick={this.onButtonClick}/>
          <CardList fetchedObject={this.state.fetchedObject} stats={this.state.searchQuery} />
        </div>
      )
    }
  }

export default App;


//  let a = {name: "Alderaan", population: "2000000000", diameter: "12500", climate: "temperate", terrain: "grasslands, mountains"};
//  let b = {name: "Alderaan", population: "2000000000", diameter: "12500", climate: "temperate", terrain: "grasslands, mountains"};
//  let c = {name: "Yavin IV", population: "1000", diameter: "10200", climate: "temperate, tropical", terrain: "jungle, rainforests"};
//   // {name: "Hoth", population: "unknown", diameter: "7200", climate: "frozen", terrain: "tundra, ice caves, mountain ranges"},
//   // {name: "Dagobah", population: "unknown", diameter: "8900", climate: "murky", terrain: "swamp, jungles"},
//   // {name: "Bespin", population: "6000000", diameter: "118000", climate: "temperate", terrain: "gas giant"},
//   // {name: "Endor", population: "30000000", diameter: "4900", climate: "temperate", terrain: "forests, mountains, lakes"},
//   // {name: "Naboo", population: "4500000000", diameter: "12120", climate: "temperate", terrain: "grassy hills, swamps, forests, mountains"},
//   // {name: "Coruscant", population: "1000000000000", diameter: "12240", climate: "temperate", terrain: "cityscape, mountains"},
//   // {name: "Kamino", population: "1000000000", diameter: "19720", climate: "temperate", terrain: "ocean"},
//   // {name: "Geonosis", population: "100000000000", diameter: "11370", climate: "temperate, arid", terrain: "rock, desert, mountain, barren"}
// let arr = [];
// arr.push(a);
// arr.push(b);
// arr.push(c)
// console.log(arr[0])

// let obj = {
//   first: 'here',
//   test: [
//         {name: "Coruscant", population: "1000000000000", diameter: "12240", climate: "temperate", terrain: "cityscape, mountains"},
//         {name: "Kamino", population: "1000000000", diameter: "19720", climate: "temperate", terrain: "ocean"},
//         {name: "Geonosis", population: "100000000000", diameter: "11370", climate: "temperate, arid", terrain: "rock, desert, mountain, barren"}
//         ]
// }
// console.log(obj.test.length);