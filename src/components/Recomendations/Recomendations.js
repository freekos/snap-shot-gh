import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import "./style.scss";

import { Context } from '../AppRouter';
import { info } from "./Recomendation-data";
import { RESULT_ROUTE } from '../../util/consts';

const Recomendations = () => {
    const { setQuery } = useContext(Context);
    const navigate = useNavigate();
    
    const onClickHandle = (title) => {
        setQuery(title);
        navigate(RESULT_ROUTE);
    }

    return ( 
        <div className='Recomendation'>
            <div className='Recomendation_item'>
                {info && info.map(recomended => (
                    <div key={recomended.id} className="Recomended" onClick={() => onClickHandle(recomended.title)}>
                        <p>{recomended.title}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Recomendations;