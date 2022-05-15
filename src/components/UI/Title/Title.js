import React from 'react';
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from '../../../util/consts';

import "./style.scss";

const Title = () => {
    const navigate = useNavigate();

    return (
        <div className='title'>
            <div 
                className='title_item'
                onClick={() => navigate(HOME_ROUTE)}
            >
                <p>
                    Snap Shot
                </p>
            </div>
        </div>
    )
}

export default Title;