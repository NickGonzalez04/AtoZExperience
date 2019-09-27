import Axios from 'axios';

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('token')).token;
    return Axios.create({
        baseURL:'https://a2zexperiences.herokuapp.com/api',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        }
    });
};