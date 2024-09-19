export interface AuthenticationResponse {
    message: string;
    user: User;
}

export interface User {
    id: string;                     // Unique identifier for the user
    username: string;               // Username of the user
    email?: string | null;          // Email address, which could be null or undefined if not provided
    avatarUrl?: string | null;      // URL of the user's avatar, can be null or undefined
    availableBadges: string[];      // List of badges the user has earned
    equippedBadge: string | null;   // Badge currently equipped by the user, nullable
    level?: number | null;          // User's level in the gamification system, nullable
    points?: number | null;         // Points earned by the user, nullable
    tasksCompleted?: number | null; // Number of tasks completed by the user, nullable
    lastLogin?: Date | null;        // Last login timestamp, nullable
    bio?: string | null;            // Short bio for the user, nullable
}