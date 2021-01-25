import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import '../css/inicio.css'

const RoundPicture = ({photo}) => {
    let {url: url, autor: autor, _id: _id} = photo

    const history = useHistory()

    let handleArtistPage = (id) => {
        history.push(`/Perfil/${id}`)
        console.log('hello')
    }


    return ( 
        <React.Fragment>
                <img onClick={() => handleArtistPage(_id)} className='round_picture' src={url} />
                {/* <p className='frame_title'>{autor}</p> */}
        </React.Fragment>
     );
}
 
export default RoundPicture;