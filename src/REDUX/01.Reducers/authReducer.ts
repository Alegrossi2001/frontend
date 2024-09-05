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

// Reducer
export default function authReducer(state: Auth, action: AuthAction): Auth {
    switch (action.type) {
        case 'userAuthenticated':
            action.payload.sessionId = generateGUID();
            return action.payload;

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
