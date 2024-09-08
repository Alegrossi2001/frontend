import generateGUID from "../02.Utils/GenerateGuid";
import { Message } from "../../INTERFACES/Message";

interface SentMessage {
    type: 'sentMessage';
    payload: Message;
}

interface EditedMessage {
    type: 'editedMessage';
    payload: Message;
}

interface DeletedMessage {
    type: 'deletedMessage';
    payload: Message;
}

type MessageAction = SentMessage | EditedMessage | DeletedMessage;

const initialState: Message[] = [];

const messageReducer = (state: Message[] = initialState, action: MessageAction): Message[] => {
    switch (action.type) {
        case 'sentMessage':
            action.payload.id = generateGUID();
            return [
                ...state,
                action.payload
            ];
        case 'editedMessage':
            return state.map(message => message.id === action.payload.id ? action.payload : message);
        case 'deletedMessage':
            return state.filter(message => message.id !== action.payload.id);
        default:
            return state;
    }
}

export default messageReducer;
