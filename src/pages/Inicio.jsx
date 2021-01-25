import React, { Component, useState, useEffect} from 'react';
import {getArte, getArtistas} from '../mockData'

import PictureHolder from '../components/PictureHolder'
import RoundPicture from '../components/RoundPicture'

import '../css/inicio.css'

const Inicio = () => {
    let [arte, setArte] = useState([])
    let [artistas, setArtistas] = useState([])

    useEffect(() => {
        setArte(getArte())
        setArtistas(getArtistas())
    }, [])

    return ( 
        <React.Fragment>
            <div className='horizontal_slider'>
                <div className='nuevas_tendencias'>
                {arte.map((picture) => (
                    <PictureHolder
                    picture={picture}
                    />
                ))}
                </div>
            </div>
            <h3 className='fancy_heading' >Nuevas Tendencias</h3>
            <div className='horizontal_slider'>
                <div className='nuevas_tendencias'>
                {arte.map((picture) => (
                    <PictureHolder
                    picture={picture}
                    />
                ))}
                </div>
            </div>
            <h3 className='fancy_heading' >Recomendacines</h3>
            <div className='horizontal_slider'>
                <div className='nuevas_tendencias'>
                {artistas.map((photo) => (
                    <RoundPicture
                    photo={photo}
                    />
                ))}
                </div>
            </div>
            <h3 className='fancy_heading' >Artistas Trending</h3>
        </React.Fragment>
     );
}
 
export default Inicio;