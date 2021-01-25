import React, { Component, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

import {getArtista, getArteDeArtista, getArtistas} from '../mockData'

import PictureFrame from '../components/PictureFrame'
import PerfilUsuario from '../components/PerfilUsuario'

import '../css/perfil.css'

const Perfil = () => {
    const {_id} = useParams()

    let [arte, setArte] = useState([])
    let [artista, setArtista] = useState({})

    useEffect(() => {
        setArtista(getArtista(_id))
        console.log(artista, 'useEffect')
        setArte(getArteDeArtista(_id))
    }, [])
    console.log(artista, 'update')
    return ( 
        <React.Fragment>
            <div className='perfil_flex'>
                <div className='perfil_flex_item container_perfil'>
                    {arte.map((picture) => (
                    <PictureFrame
                    picture={picture}
                    />
                    ))}
                </div>
                <div className='perfil_flex_item'>
                    <PerfilUsuario
                    artista={artista}
                    />
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Perfil;