export interface AuthenticationResponse {
    message: string;
    userData: User;
}

export interface User {
    availableBadges: string[];
    avatarUrl: string | null;
    bio: string | null;
    email: string;
    equippedBadge: string | null;
    experience: number;
    lastLogin: string;
    level: number;
    points: number;
    tasksCompleted: number;
    userId: string;
    username: string;
}