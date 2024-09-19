import { useDispatch } from 'react-redux';
import { AuthenticationResponse } from '../INTERFACES/User';
import axios from 'axios';

export const useSigninUser = () => {
    const dispatch = useDispatch(); // Ensure this is used within a hook or component

    const signinUser = async (email: string, password: string) => {
        try {
            const response = await axios.post(`http://localhost:4000/auth/signin`, { email, password });
            console.log(response);
            // Dispatch necessary action to save user or authentication token
            // e.g. dispatch(userAuthenticated(response.data));
        } catch (error) {
            console.error("Error signing in", error);
        }
    };

    return signinUser;
};
