import axios from "axios";
const API_TOKEN = "27410307-3269cb665e654a868396155a9";

export const responsePhoto = async(value="*") => {
    const url = `https://pixabay.com/api/?key=${API_TOKEN}&q=${value}&image_type=photo`;
    let response = await axios(url);
    let data = await response.data;
    return data;
}