import React, { Component } from 'react';

import PictureFrame from '../components/PictureFrame'

import '../css/categorias.css'

const PictureGrid = ({url}) => {
    return ( 
        <div className='box'>
            <PictureFrame
            ulr={url}
            />
        </div>
     );
}
 
export default PictureGrid;