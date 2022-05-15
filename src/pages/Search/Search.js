import React, { useContext, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";

import "./stye.scss";
import { RESULT_ROUTE } from "../../util/consts";
import Icon from "../../assets/img/premium-icon-search-2414255.png";
import Title from "../../components/UI/Title/Title";
import { Context } from "../../components/AppRouter";

const Search = () => {
    const navigate = useNavigate();
    const { setValue, setQuery } = useContext(Context)
    const input = useRef()

    const inputChecker = (value) => {
        let newValue = value.replace(/\s+/g, '');
        if(newValue !== '') {
            setValue(input.current.value);
            setQuery(input.current.value)
            navigate(RESULT_ROUTE)
        }
    }

    const onKeyPressHandler = (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            inputChecker(input.current.value)
        }
    }

    return (
        <div className='Search_Search'>
            <Title />
            <div className='Search_input'>
                <input
                    ref={input}
                    placeholder="Write something"
                    onKeyPress={onKeyPressHandler}
                    />
                <button 
                    className='button_search' 
                    onClick={() => inputChecker(input.current.value)}
                >
                    <img 
                        src={Icon} 
                        alt="Search"
                        onDragStart={(e) => e.preventDefault()}
                    ></img>
                </button>
            </div>
        </div>
    )
}

export default Search;