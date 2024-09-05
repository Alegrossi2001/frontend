export interface Project {
    id: string;                     // Unique identifier for the project
    name: string;                   // Name of the project
    description?: string | null;    // Description of the project, nullable
    clientName?: string | null;     // Name of the client associated with the project, nullable
    startDate?: Date | null;        // Start date of the project, nullable
    endDate?: Date | null;          // End date or deadline of the project, nullable
    status: 'not started' | 'in progress' | 'completed' | 'on hold';  // Current status of the project
    budget?: number | null;         // Budget for the project, nullable
    teamMembers?: string[] | null;  // List of user IDs associated with the project, nullable
    tasks?: string[] | null;        // List of task IDs associated with the project, nullable
    priority?: 'low' | 'medium' | 'high' | null; // Priority level of the project, nullable
    tags?: string[] | null;         // Tags or labels for the project, nullable
    lastUpdated?: Date | null;      // Timestamp of the last update to the project, nullable
}