import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import "./style.scss";

import { Context } from '../../../components/AppRouter';
import { HOME_ROUTE } from '../../../util/consts';

const PictureList = () => {
    const { imgs, setQuery } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === HOME_ROUTE;

    useEffect(() => {
        if(isHome) {
            setQuery();
        }else {
            if(!imgs.length) {
                setQuery();
                navigate(HOME_ROUTE);
            }
        }
    }, [])

    return ( 
        <div className='PictureList'>
            <div className='PictureList_item'>
                <div className='Picture'>
                    {imgs && imgs.map(image => (
                        <div key={image.id} className='Picture_img'>
                            <img src={image.largeImageURL} alt=""></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default PictureList;