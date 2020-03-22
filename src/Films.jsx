import React from 'react';
import Card from './Card';

const Films = ({filmObject}) => {
    console.log(filmObject);
        return (
            <div>
                {
                    filmObject.map((film,i) => {
                        // console.log(film.title.toLowerCase())
                        return (
                            <Card 
                                key={i}
                                imageLink={String(film.title).toLowerCase().split(' ').join('_')}
                                title1='Title'
                                message1={film.title}
                                title2='Episode ID'
                                message2={film.episode_id}
                                title3='Director'
                                message3={film.director}
                                title4='Release Date'
                                message4={film.release_date}
                                title5='Opening Crawl'
                                message5={film.opening_crawl}
                            />
                        )
                    })
                }
            </div>
        )
    
}

export default Films;