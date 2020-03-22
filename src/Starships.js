import React from 'react';
import Card from './Card';

const Starships = (starshipObject) => {
    return (
        <div>
            {
                starshipObject.map((starship,i) => {
                    return (
                        <Card
                            key={i}
                            imageLink={String(starship.title).toLowerCase().split(' ').join('_')}
                            title1='Name'
                            message1={starship.name}
                            title2='Starship Class'
                            message2={starship.starship_class}
                            title3='Manufacturer'
                            message3={starship.manufactuter}
                            title4='Consumables'
                            message4={starship.consumables}
                            title5='Cargo Capacity'
                            message5={starship.cargo_capacity}
                        />
                    )
                })
            }
        </div>
    )
}

export default Starships;