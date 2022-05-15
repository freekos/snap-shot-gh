import React from 'react';

import "./style.scss";

const PictureTitle = ({ title, mt }) => {
    return ( 
        <div 
            className='PictureTitle'
            style={{marginTop: mt}}
        >
            <p>{title} Picture</p>
        </div>
     );
}
 
export default PictureTitle;