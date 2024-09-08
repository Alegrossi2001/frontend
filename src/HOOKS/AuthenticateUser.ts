import { useDispatch } from 'react-redux';
import { Auth } from '../INTERFACES/Auth';

// Define the hook
export function useAuthenticateUser() {
    const dispatch = useDispatch();

    //This will be taken from the backend after 
    const authenticateUser = () => {
        const userPayload: Auth = {
            sessionId: '',
            isAuthenticated: true,
            token: 'hardcodedToken123',
            refreshToken: 'hardcodedRefreshToken123',
            role: 'user',
            expiresAt: Date.now() + 3600 * 1000,
            loading: false,
            userId: '123', // Replace with actual user ID
            username: 'johndoe', // Replace with actual username
            email: 'johndoe@example.com', // Replace with actual email
        };

        const action: any = {
            type: 'userAuthenticated',
            payload: userPayload,
        };

        dispatch(action);
    };

    return { authenticateUser };
}
