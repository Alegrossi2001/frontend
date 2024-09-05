export interface Auth {
    sessionId: string;      // Unique identifier for the session
    userId: string;         // Unique identifier for the user
    username: string;       // Username of the authenticated user
    email: string;          // User's email address
    isAuthenticated: boolean; // Status of the user's authentication
    token: string;          // JWT or session token
    refreshToken?: string;  // Optional refresh token for re-authentication
    role: string;           // Role or permissions assigned to the user
    expiresAt: number;      // Token expiration time (Unix timestamp)
    loading: boolean;       // Indicates if an authentication action is in progress
    error?: string;         // Optional field for error messages related to authentication
}