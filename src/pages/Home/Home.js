import React from 'react';

import "./style.scss";

import Title from "../../components/UI/Title/Title";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import Recomendations from "../../components/Recomendations/Recomendations";
import PictureList from "../../components/UI/PictureList/PictureList";
import PictureTitle from '../../components/UI/PictureTitle/PictureTitle';

const Home = () => {
    return ( 
        <div className='Home'>
            <Title />
            <SearchButton />
            <Recomendations />
            <PictureTitle title={"Some"} mt={50}/>
            <PictureList />
        </div>
     );
}
 
export default Home;