import React from 'react';

const Buttons = ({ buttonClick }) => {
    return (
        <div>
            <button className='f6 link dim br2 ph3 pv2 mb2 dib white bg-purple' onClick={buttonClick} value='films'>Films</button>
            <button className='f6 link dim br2 ph3 pv2 mb2 dib white bg-purple' onClick={buttonClick} value='planets'>Planets</button>
            <button className='f6 link dim br2 ph3 pv2 mb2 dib white bg-purple' onClick={buttonClick} value='starships'>Starships</button>
          </div>
    )
}

export default Buttons;