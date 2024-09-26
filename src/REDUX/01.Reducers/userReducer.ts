import { User } from "../../INTERFACES/User";
interface UserInfoAdded {
    type: 'userInfoAdded';
    payload: User;
}

interface UserInfoUpdated {
    type: 'userInfoUpdated';
    payload: Partial<User>;
}

type UserAction = UserInfoAdded | UserInfoUpdated;

const initialState: User = {
    username: '',
    email: '',
    avatarUrl: '',
    availableBadges: [],
    equippedBadge: '',
    level: 0,
    points: 0,
    tasksCompleted: 0,
    lastLogin: "Today",
    bio: '',
    experience: 0,
    userId: ''  // or some default value
};

// Reducer
export default function userReducer(state: User = initialState, action: UserAction): User {
    switch (action.type) {
        case 'userInfoAdded':
            return action.payload;

        case 'userInfoUpdated':
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}
