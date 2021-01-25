import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import '../css/inicio.css'

const PictureFrame = ({picture}) => {
    
    const history = useHistory()

    let handleArtistPage = (id) => {
        history.push(`/Perfil/${id}`)
        console.log('hello')
    }

    let {url: url, titulo: titulo, autor: autor, autorID: autorID} = picture
    return ( 
            <div className='frame_flex'>
                <div className='frame'>
                    <div className='border'>
                        <img className='picture_frame' id='Drawing' src={url} alt='Drawing'/>
                    </div>
                </div>
                <p className='frame_title'>{titulo}</p>
                <p onClick={() => handleArtistPage(autorID)} className='frame_author'>{autor}</p>
            </div>
    );
}
 
export default PictureFrame;