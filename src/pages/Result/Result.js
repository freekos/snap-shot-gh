import React, { useContext } from "react";

import Title from "../../components/UI/Title/Title";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import PictureTitle from "../../components/UI/PictureTitle/PictureTitle";
import PictureList from "../../components/UI/PictureList/PictureList";
import { Context } from "../../components/AppRouter";

const Result = () => {
    const { value } = useContext(Context);

    return (
        <div>
            <Title />
            <SearchButton />
            <PictureTitle title={value} mt={100}/>
            <PictureList />
        </div>
    )
}

export default Result;