import React, { Component } from 'react';

import '../css/perfil.css'

const PerfilUsuario = ({artista}) => {

    let {nombre: nombre, biografia: biografia, edad: edad, ubicacion: ubicacion, url: url} = artista
    
 
    
    return (  
        <React.Fragment>
            <img className='round_picture_big' src={url} />
            <p>{nombre}</p>
            <p>{`${edad} años, ${ubicacion}`}</p>
            <p>{biografia}</p>
        </React.Fragment>
    );
}
 
export default PerfilUsuario;