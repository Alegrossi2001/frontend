import { AddUserInfo } from "./AddUserInfo";
import { useAuthenticateUser } from "./AuthenticateUser";

export function UseLogin() {

    const { authenticateUser } = useAuthenticateUser();
    const { addUserInfo } = AddUserInfo();

    return () => {
        authenticateUser();
        addUserInfo();
    }
}