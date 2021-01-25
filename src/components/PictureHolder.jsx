import React, { Component } from 'react';

import PictureFrame from './PictureFrame'

const PictureHolder = ({picture}) => {
    return ( 
        <div className='display_holders'>
            <div className='flex_center'>
                <PictureFrame
                picture={picture}
                />
            </div>
        </div>
     );
}
 
export default PictureHolder;