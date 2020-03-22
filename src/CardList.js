import React from 'react';
import Planets from './Planets';
import Films from './Films';
import Starships from './Starships';

const CardList = ({ fetchedObject, stats }) => {
    if (!fetchedObject) {
        return (
            <div>
                <h1>Select a category to fetch</h1>
            </div>
        )
    }
    else if (stats === 'films') {
        return (
            <div>
                <Films filmObject={fetchedObject} />
            </div>
        )
    }
    else if (stats === 'planets') {
        return (
            <div>
                <Planets planetObject={fetchedObject} />
            </div>
        )
    }
    else if (stats === 'starships') {
        return (
            <div>
                <Starships starshipObject={fetchedObject} />
            </div>
        )
    }
}

export default CardList;

// let arr = [
//     {name: "Alderaan", population: "2000000000", diameter: "12500", climate: "temperate", terrain: "grasslands, mountains"},
//     {name: "Yavin IV", population: "1000", diameter: "10200", climate: "temperate, tropical", terrain: "jungle, rainforests"},
//     {name: "Hoth", population: "unknown", diameter: "7200", climate: "frozen", terrain: "tundra, ice caves, mountain ranges"},
//     {name: "Dagobah", population: "unknown", diameter: "8900", climate: "murky", terrain: "swamp, jungles"},
//     {name: "Bespin", population: "6000000", diameter: "118000", climate: "temperate", terrain: "gas giant"},
//     {name: "Endor", population: "30000000", diameter: "4900", climate: "temperate", terrain: "forests, mountains, lakes"},
//     {name: "Naboo", population: "4500000000", diameter: "12120", climate: "temperate", terrain: "grassy hills, swamps, forests, mountains"},
//     {name: "Coruscant", population: "1000000000000", diameter: "12240", climate: "temperate", terrain: "cityscape, mountains"},
//     {name: "Kamino", population: "1000000000", diameter: "19720", climate: "temperate", terrain: "ocean"},
//     {name: "Geonosis", population: "100000000000", diameter: "11370", climate: "temperate, arid", terrain: "rock, desert, mountain, barren"}
// ]

// for (let ar of arr) {
//     console.log(ar)
// }

// let a = 'd';
// if (!a){
//     console.log("yea");
// }