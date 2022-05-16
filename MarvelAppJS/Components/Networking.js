import axios from 'axios';
import md5 from 'md5';

const publicKey = 'a7c5d39315d2fb3020f7d408575800e2';
const privateKey = '32c6fee7d636d004f2501d4f9ff6c73b01164454';

const ts = Date.now();

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
        ts,
        apiKey: publicKey,
        hash,
    },
});

export default api;