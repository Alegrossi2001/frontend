
import { Task } from '../../INTERFACES/Task';
import generateGUID from '../02.Utils/GenerateGuid';

interface TaskAddedAction {
    type: 'taskAdded';
    payload: Task;
}

interface TaskRemovedAction {
    type: 'taskRemoved';
    payload: {
        id: string;
    };
}

type TaskAction = TaskAddedAction | TaskRemovedAction;
const initialState: Task[] = [];

// Reducer
export default function taskReducer(state: Task[] = initialState, action: TaskAction): Task[] {
    switch (action.type) {
        case 'taskAdded':
            action.payload.id = generateGUID();
            return [
                ...state,
                {
                    ...action.payload,
                    id: generateGUID()
                }
            ];

        case 'taskRemoved':
            return state.filter(task => task.id !== action.payload.id);

        default:
            return state;
    }
}
