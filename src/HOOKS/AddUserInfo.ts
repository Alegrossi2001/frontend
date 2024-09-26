import { useDispatch } from 'react-redux';
import { User } from '../INTERFACES/User';

// Define the hook
export function AddUserInfo() {
    const dispatch = useDispatch();

    //This will be taken from the backend after 
    const addUserInfo = () => {

        const userPayload: User = {
            username: 'johndoe',
            email: 'johndoe@example.com',
            avatarUrl: 'https://example.com/avatar.jpg',
            availableBadges: ['badge1', 'badge2'],
            equippedBadge: 'badge1',
            level: 1,
            points: 100,
            tasksCompleted: 10,
            lastLogin: "Howdy",
            bio: 'This is a short bio for the user',
            experience: 100,
            userId: '123',
        };

        const action: any = {
            type: 'userInfoAdded',
            payload: userPayload,
        };

        dispatch(action);
    };

    return { addUserInfo };
}
