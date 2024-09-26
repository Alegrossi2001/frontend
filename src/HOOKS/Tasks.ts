import { Task } from "../INTERFACES/Task";
import axios from "axios";
//Hook to get all tasks from the database

export const GetAllTasks = () => {

    const fetchTasks = async () => {
        const response = await axios.get<Task[]>('http://localhost:4000/task/getAll');
        return response.data;
    };

    return fetchTasks;
}

export const GetTaskById = (id: string) => {
    const fetchTaskById = async () => {
        const response = await axios.get<Task>(`http://localhost:4000/task/getById/${id}`);
        return response.data;
    };

    return fetchTaskById;
}

export const CreateTask = () => {
    const createTask = async (task: Task) => {
        const response = await axios.post<Task>('http://localhost:4000/task/create', task);
        return response.data;
    };

    return createTask;
}

export const DeleteTask = () => {
    const deleteTask = async (id: string) => {
        const response = await axios.delete(`http://localhost:4000/task/delete/${id}`);
        return response.data;
    };

    return deleteTask;
}
