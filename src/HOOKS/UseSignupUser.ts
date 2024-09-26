import axios from 'axios';
import { AuthResponse } from '../INTERFACES/Requests/AuthResponse';

export const useSignupUser = () => {

    const signupUser = async (email: string, password: string, username: string, role: string) => {
        try {
            const response = await axios.post<AuthResponse>(`http://localhost:4000/auth/signup`, { email, password, username, role });
            return response.data;
        } catch (error) {
            console.error("Error signing up", error);
            if (axios.isAxiosError(error)) {
                return error.response?.data;
            }
            return { message: "An unknown error occurred", status: 500 };

        };
    };


    return signupUser;
};