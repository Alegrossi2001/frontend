import { useDispatch } from 'react-redux';
import { AuthenticationResponse } from '../INTERFACES/User';
import axios, { AxiosError } from 'axios';

export const useSigninUser = () => {
    const dispatch = useDispatch();

    const signinUser = async (email: string, password: string) => {
        try {
            console.log(email, password);
            const response = await axios.post<AuthenticationResponse>(`http://localhost:4000/auth/signin`, { email, password });
            dispatch({ type: 'userInfoAdded', payload: response.data.userData });
            return { message: response.data.message, status: response.status };
        } catch (error) {
            if (error instanceof AxiosError) {
                return { message: error.response?.data.message, status: error.response?.status };
            }
            return { message: "An unknown error occurred", status: 500 };
        }
    };

    return signinUser;
};