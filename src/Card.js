import React from 'react';

const Card = ({imageLink, title1, message1, title2, message2, title3, message3, title4, message4, title5, message5}) => {
    console.log(imageLink);
    let figure = message1.toLowerCase();

    try {
        require(`../src/images/${message1.toLowerCase()}.jpg`)
    }
    catch (err) {
        figure = 'default';
    }
    
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-25-ns ph2'>
            <img alt='Figure' src={require(`../src/images/${figure}.jpg`)} />
    
            <div>
                <p>{title1}: {message1}</p>
                <p>{title2}: {message2}</p>
                <p>{title3}: {message3}</p>
                <p>{title4}: {message4}</p>
                <p>{title5}: {message5}</p>
            </div>
        </div>
    )
}

export default Card;