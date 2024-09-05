export interface Task {
    id: string;
    title: string;               // A brief description of the task
    description?: string;        // Optional detailed description of the task
    score: number;               // A numeric score associated with the task (e.g., priority or difficulty)
    urgencyLevel: 'low' | 'medium' | 'high';  // Urgency level of the task
    assignedBy: string;          // The person who assigned the task
    assignedTo: string;          // The person to whom the task is assigned
    dueDate?: string;              // Optional due date for the task
    completed: boolean;          // Whether the task is completed or not
    project: string;             // The project this task is associated with
    status: 'not started' | 'in progress' | 'completed' | 'blocked';  // Status of the task
    priority: 'low' | 'medium' | 'high';  // Priority level of the task
    tags?: string[];             // Optional tags to categorize the task
    createdAt: string;             // Date when the task was created
}