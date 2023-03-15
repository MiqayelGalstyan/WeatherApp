import axios from 'axios';
import { Dispatch } from 'redux';

interface IStore {
    dispatch: Dispatch<any>;
    getState: any;
}

export const api = axios.create({
    responseType: 'json',
});

const axiosMiddleware =
    (store: IStore) => (next: Dispatch) => (action: any) => {
        setInterceptors(store);
        return next(action);
    };

const setInterceptors = (store: IStore) => {
    api.interceptors.request.use(
        async (config: any) => {
            config.headers = {
                'Content-Type': 'application/json',
            };
            return config;
        },
        (error: any) => Promise.reject(error),
    );

    api.interceptors.response.use(
        async (response: any) => {
            return response;
        },
        (err: any) => {
            return new Promise(async (_, reject) => {
                return reject(err);
            });
        },
    );
};

export default axiosMiddleware;
