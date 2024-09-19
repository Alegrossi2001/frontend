import { useDispatch } from 'react-redux';
import { AuthenticationResponse } from '../INTERFACES/User';
import axios from 'axios';
export const useSigninUser = () => {
    //const dispatch = useDispatch();

    const signinUser = async (email: string, password: string) => {
        try {
            const response = await axios.post(`http://localhost:4000/auth/signin`, { email, password });
            console.log(response);
        } catch (error) {
            console.error("Error signing in", error);
        }
    };

    return signinUser;
};