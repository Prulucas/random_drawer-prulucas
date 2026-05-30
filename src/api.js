import axios from 'axios';

const api = axios.create({
    baseURL: 'https://random-drawer.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;