import {getAxiosInstanceApi} from "./api";

export const addSocial = (data, callback) => {
    getAxiosInstanceApi().post("socials", data)
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}


export const getSocialList = (callback) => {
    getAxiosInstanceApi().get("socials")
        .then(response => {
            const data = response.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        });
}


export const getSocial = (tweetId,callback) => {
    getAxiosInstanceApi().get(`likeTweet/${tweetId}`)
        .then(response => {
            const data = response.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        });
}


export const deleteSocial = (id,callback) => {
    getAxiosInstanceApi().delete(`socials/${id}`)
        .then(response => {
            const data = response.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        });
}


export const editSocial = (id, data,callback) => {
    getAxiosInstanceApi().put(`socials/${id}`, data)
        .then(response => {
            const data = response.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        });
}