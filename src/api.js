import axios from 'axios';

const api = axios.create({
    baseURL: 'https://prulucas.pythonanywhere.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;