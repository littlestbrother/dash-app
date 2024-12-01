import axios from 'axios';

const API_DEFAULTS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

export const request = async (url, options = { accessToken: null }) => {
    options = Object.assign(JSON.parse(JSON.stringify(API_DEFAULTS)), options);

    // combine options passed as vars
    options.url = url;

    if (options.accessToken) {
        options.headers['Authorization'] = `Bearer ${options.accessToken}`;
    }

    try {
        const { data } = await axios(options);
        return data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const { response: { data, status, headers } } = error;

            // switch (status) {
            //     case 401:
            //         logout();
            //         break;
            //     default:
            //         break;
            // }

            console.error('Failed:', options.url, { data, status, headers });
        } else {
            console.error('Failed:', options.url, error);
        }

        throw error;
    }

};

export const post = async (url, data = null, params = {}) => await request(url, { method: 'POST', data, params });

export const put = async (url, data = null, params = {}) => await request(url, { method: 'PUT', data, params });

export const get = async (url, params = {}) => await request(url, { method: 'GET', params });

export const del = async (url, params = {}) => await request(url, { method: 'DELETE', params });

export const patch = async (url, data = null) => await request(url, { method: 'PATCH', data });