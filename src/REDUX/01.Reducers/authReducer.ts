import { Auth } from "../../INTERFACES/Auth";
import generateGUID from "../02.Utils/GenerateGuid";
interface UserAuthenticated {
    type: 'userAuthenticated';
    payload: Auth;
}

interface UserLoggedOut {
    type: 'userLoggedOut';
}

type AuthAction = UserAuthenticated | UserLoggedOut;

const initialState: Auth = {
    isAuthenticated: false,
    token: '',
    refreshToken: '',
    role: '',
    expiresAt: 0,
    loading: false,
    sessionId: '',
    userId: '',
    username: '',
    email: '',
};

// Reducer
export default function authReducer(state: Auth = initialState, action: AuthAction): Auth {
    switch (action.type) {
        case 'userAuthenticated':
            return {
                ...state,  // Maintain the existing state
                ...action.payload,  // Overwrite with new auth data
                sessionId: generateGUID(),  // Generate a new session ID
            };

        case 'userLoggedOut':
            return {
                ...state,
                isAuthenticated: false,
                token: '',
                refreshToken: '',
                role: '',
                expiresAt: 0,
                loading: false,
            };

        default:
            return state;
    }
}
