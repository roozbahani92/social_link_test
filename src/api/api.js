import Axios from 'axios'

export const getAxiosInstanceApi = () => {

    return Axios.create({
        baseURL: "http://localhost:3030/",
        headers: {
            //API_KEY: "hggkjdffjkllhfdswdfhjlliutewsdfhllhy"
        }
    });
};

