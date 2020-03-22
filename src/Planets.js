import React from 'react';
import Card from './Card';

const Planets = ({planetObject}) => {
    return (
        <div>
            {
                planetObject.map((planet,i) => {
                    return (
                        <Card 
                            key={i}
                            imageLink={String(planet.name).toLowerCase().split(' ').join('_')}
                            title1='Name'
                            message1={planet.name}
                            title2='Population'
                            message2={planet.population}
                            title3='Diameter'
                            message3={planet.diameter}
                            title4='Climate'
                            message4={planet.climate}
                            title5='Terrain'
                            message5={planet.terrain}
                        />
                    )
                })
            }
        </div>
    )
}

export default Planets;