import React from 'react';
import { useNavigate } from "react-router-dom";

import "./style.scss";
import Icon from "../../../assets/img/premium-icon-search-2414255.png";
import { SEARCH_ROUTE } from "../../../util/consts";

const SearchButton = () => {
    const navigate = useNavigate();
    
    return (
        <div className='Search'>
            <div className='Search_Item' onClick={() => navigate(SEARCH_ROUTE)}>
                <div className='Search_Lines'>
                    <div className='Search_Line'>
                        <p>Click for Search</p>
                    </div>
                </div>

                <div className='Search_Icon'>
                    <img src={Icon} alt="Search"/>
                </div>
            </div>
        </div>
    )
}

export default SearchButton;